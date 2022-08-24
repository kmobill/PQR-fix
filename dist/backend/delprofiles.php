<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    $profileid = $_POST['profileid'];

    $query0 = mysqli_query($conn, "
        delete from profiles where id = '" .$profileid. "'
    ") or die(mysqli_error($conn));
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
