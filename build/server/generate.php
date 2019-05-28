<?php

list($script, $min, $max, $count, $file) = $argv;

$delta = $max - $min;
$randMax = mt_getrandmax();
$sum = 0;
$sqSum = 0;

for ($i = 0; $i < $count; $i++) {
    $n = $min + mt_rand() / $randMax * $delta;
    $sum += $n;
    $sqSum += $n ** 2;
}

file_put_contents($file, json_encode(compact('sum', 'sqSum', 'intervals')));