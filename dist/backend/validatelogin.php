<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $profileid = $_POST['profileid'];

    $query0 = mysqli_query($conn, "select name, remoteip from login where profileid = '" .$profileid. "'");
    $result0 = mysqli_fetch_array($query0);
    $count0 = mysqli_num_rows($query0);

    if ($count0 >= 1){
        $arrayglogin['IsLogin'] = 'No';
        $arrayglogin['name'] = $result0['name'];
        $arrayglogin['remoteip'] = $result0['remoteip'];
        echo json_encode($arrayglogin, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
    else {
        $arrayglogin['IsLogin'] = 'No';
        echo json_encode($arrayglogin, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
    mysqli_close($conn);
?>
