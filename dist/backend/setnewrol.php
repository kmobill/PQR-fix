<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $id = $_POST['id'];
    $profileid = $_POST['profileid'];
    $levelid = $_POST['levelid'];

    $query0 = mysqli_query($conn, 
        "insert into profiles(id, usertype, level) 
        values ('" .$id. "', '" .$profileid. "', '" .$levelid. "')
    ") or die(mysqli_error($conn));;
    mysqli_close($conn);
?>
