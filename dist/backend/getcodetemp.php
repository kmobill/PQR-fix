<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    $code = $_POST['code'];
    $mail = $_POST['mail'];

    $query0 = mysqli_query($conn, "select code from tempcode where mail = '" .$mail. "' and code = '" .$code. "' order by createdate desc limit 1");
    $count0 = mysqli_num_rows($query0);
    $result0 = mysqli_fetch_array($query0);
    $arrayglogin['TempCodigo'] = $result0['code'];
    echo json_encode($arrayglogin);
    mysqli_close($conn);
?>
