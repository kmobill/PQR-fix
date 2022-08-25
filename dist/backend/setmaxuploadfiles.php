<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    $maxuploadfiles = $_POST['maxuploadfiles'];

    $query0 = mysqli_query($conn, "update settings set maxuploadfiles = '". $maxuploadfiles ."'");
    mysqli_close($conn);
?>
