<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    $base64img = $_POST["base64img"];
    $fileNameimg = $_POST["fileNameimg"];

    $base64imgex = explode(",", $base64img);
    
    $img = str_replace($base64imgex[0], '', $base64imgex[1]);
	$img = str_replace(' ', '+', $img);
	$data = base64_decode($img);
	$file = "../account/pictureprofile/" .$fileNameimg. "";
	$success = file_put_contents($file, $data);
	print $success ? $file : 'Unable to save the file.';
    mysqli_close($conn);
?>
