<?php

set_time_limit(0);

require __DIR__.'/allow-cors.php';
require __DIR__.'/functions.php';

$request = getRequest();
$response = fetchStatData($request['min'], $request['max'], $request['count']);
sendResponse($response);
