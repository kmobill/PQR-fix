<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $profileid = $_POST['profileid'];
    $userid = $_POST['userid'];
    $name = $_POST['name'];
    $usertype = $_POST['usertype'];
    $remoteip = isset($_SERVER['HTTP_CLIENT_IP'])?$_SERVER['HTTP_CLIENT_IP']:isset($_SERVER['HTTP_X_FORWARDED_FOR'])?$_SERVER['HTTP_X_FORWARDED_FOR']:$_SERVER['REMOTE_ADDR'];

    $query0 = mysqli_query($conn, 
        "insert into login(profileid, userid, name, usertype, tmstmp, remoteip)
        values ('" .$profileid. "', '" .$userid. "', '" .$name. "', '" .$usertype. "', now(), '" .$remoteip. "')
    ");
    mysqli_close($conn);
?>
