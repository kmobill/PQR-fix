<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    $profileid = $_POST['profileid'];

    $query0 = mysqli_query($conn, "
        delete from login where profileid = '" .$profileid. "'
    ");
    mysqli_close($conn);
?>
