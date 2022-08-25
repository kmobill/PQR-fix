<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");


    $query0 = mysqli_query($conn, "select code from codes order by rand() limit 1");
    $count0 = mysqli_num_rows($query0);
    $result0 = mysqli_fetch_array($query0);
    $arrayglogin['Codigo'] = $result0['code'];
    echo json_encode($arrayglogin);
    mysqli_close($conn);
?>
