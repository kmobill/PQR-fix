<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    $profileid = $_POST['profileid'];
    $newpassword = $_POST['newpassword'];

    $plaintext_password = $newpassword;
    $hash = password_hash($plaintext_password, PASSWORD_DEFAULT);

    $query0 = mysqli_query($conn, "update users set password = '" .$hash. "', isdefaultpasswd = 0 where id = '" .$profileid. "'");

    if ($query0 == true){
        $arrayglogin['Result'] = "OK";
        echo json_encode($arrayglogin);
    }
    else {
        $arrayglogin['Result'] = "ERROR";
        echo json_encode($arrayglogin);
    }
    mysqli_close($conn);
?>
