<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $id = $_POST['id'];
    $query0 = mysqli_query($conn,
        "delete from generatetickets
        where id = '" .$id. "';
    ");
    mysqli_close($conn);
?>
