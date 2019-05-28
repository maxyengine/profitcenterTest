<?php

function getRequest(): array
{
    return json_decode(file_get_contents('php://input'), true);
}

/**
 * Send a response
 *
 * @param array $response
 */
function sendResponse(array $data, int $status = 200, string $message = 'OK')
{
    header("HTTP/1.1 {$status} {$message}");
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function execInBackground(string $cmd)
{
    if (substr(php_uname(), 0, 7) == "Windows") {
        pclose(popen("start /B ".$cmd, "r"));
    } else {
        exec($cmd." > /dev/null &");
    }
}

function microtimeFloat()
{
    list($usec, $sec) = explode(" ", microtime());

    return ((float)$usec + (float)$sec);
}

function fetchStatData(float $min, float $max, int $count)
{
    $streamCount = 10;
    $chunk = floor($count / $streamCount);
    $i = 0;
    while ($streamCount > $i++) {
        $file = "cache/file{$i}.json";
        execInBackground("php -f generate.php {$min} {$max} {$chunk} {$file} &");
    }

    $rest = $count % $chunk;
    if ($rest > 0) {
        $file = "cache/file{$i}.json";
        execInBackground("php -f generate.php {$min} {$max} {$rest} {$file} &");
    } else {
        $i--;
    }

    $sum = 0;
    $sqSum = 0;

    while ($i) {
        $file = "cache/file{$i}.json";
        if (file_exists($file)) {
            $data = json_decode(file_get_contents($file), true);
            unlink($file);

            $sum += $data['sum'];
            $sqSum += $data['sqSum'];
            $i--;
        }
    }

    // Average
    $average = $sum / $count;

    // Standard deviation
    $numerator = $sqSum - 2 * $average * $sum + $count * ($average ** 2);
    $standardDeviation = sqrt($numerator / ($count - 1));
    $avgDeviation = sqrt($numerator) / $count;

    // Mode
    $mode = $average + $standardDeviation;

    // Median
    $avgCount = $max / $avgDeviation;
    $halfCount = $avgCount / 2;
    if ($avgCount % 2) {
        $median = $min + $avgDeviation * ceil($halfCount);
    } else {
        $median = $min + ($avgDeviation * ($avgCount + 1)) / 2;
    }

    return compact('standardDeviation', 'average', 'median', 'mode');
}