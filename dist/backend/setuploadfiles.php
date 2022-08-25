<?php
	date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

	$id = $_POST["id"];
    $ticketid = $_POST["ticketid"];
	$imgname = $_POST["imgname"];
	$imgextension = $_POST["imgextension"];
	$imgurl = $_POST["imgurl"];
    $uploadby = $_POST["uploadby"];
	
	$query0 = mysqli_query($conn, 
        "insert into uploadfiles(id, ticketid, nombre, extension, url, createdate, uploadby)
        values('" .$id. "', '" .$ticketid. "', '" .$imgname. "', '" .$imgextension. "', '" .$imgurl. "', now(), '" .$uploadby. "')
    ") or die(mysqli_error($conn));
    mysqli_close($conn);
 ?>
