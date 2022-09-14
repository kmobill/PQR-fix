<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $profileid = $_POST['profileid'];
    $userid = $_POST['userid'];
    $name = $_POST['name'];
    $usertype = $_POST['usertype'];

    if (isset($_SERVER['HTTP_CLIENT_IP']))
        $remoteip = $_SERVER['HTTP_CLIENT_IP'];
    elseif (isset($_SERVER['HTTP_X_FORWARDED_FOR']))
        $remoteip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else 
        $remoteip = $_SERVER['REMOTE_ADDR'];
    //$remoteip = $_POST['remoteip'];

    $query0 = mysqli_query($conn, 
        "insert into login(profileid, userid, name, usertype, tmstmp, remoteip)
        values ('" .$profileid. "', '" .$userid. "', '" .$name. "', '" .$usertype. "', now(), '" .$remoteip. "')
    ");
    mysqli_close($conn);
?>
