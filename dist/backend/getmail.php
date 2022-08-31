<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");


    $usermail = $_POST['usermail'];

    $query0 = mysqli_query($conn, "select mail from users where state = 1 and mail = '" .$usermail. "'");
    $count0 = mysqli_num_rows($query0);

    if ($count0 > 0){
        $result0 = mysqli_fetch_array($query0);
        $arrayglogin['Correo'] = $result0['mail'];
        echo json_encode($arrayglogin);
    }
    else {
        $arrayglogin['Correo'] = "NoExiste";
        echo json_encode($arrayglogin);
    }
    mysqli_close($conn);
