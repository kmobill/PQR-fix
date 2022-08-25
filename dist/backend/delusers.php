<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    $useridgui = $_POST['useridgui'];

    $query0 = mysqli_query($conn, "
        delete from users where id = '" .$useridgui. "'
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
