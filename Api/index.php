<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
require(__DIR__."/core.php");

$url = "https://api.spacexdata.com/v3/capsules";
$data = file_get_contents($url);
$launch = json_decode($data, true);

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'GET') {
  echo json_encode($launch);
}

?>
