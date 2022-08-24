<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    $query0 = mysqli_query($conn, "select maxuploadfiles from settings");
    $count0 = mysqli_num_rows($query0);

    $result0 = mysqli_fetch_array($query0);
    $arrayglogin['MaxUploadFiles'] = $result0['maxuploadfiles'];
    echo json_encode($arrayglogin);
    mysqli_close($conn);
?>
