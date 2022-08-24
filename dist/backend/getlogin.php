<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $username = $_POST['username'];
    $plaintext_password = $_POST['password'];

    $query0 = mysqli_query($conn, "select password from users where state = 1 and userid = '" .$username. "'");
    $result0 = mysqli_fetch_array($query0);
    $hash = $result0['password'];

    $password = password_verify($plaintext_password, $hash);
    if ($password){
        $query1 = mysqli_query($conn, "select name, mail, userpic, usertype, isdefaultpasswd, agencia_callcenter, id, userid, area from users where state = 1 and userid = '" .$username. "' and password = '" .$hash. "'");
        $result1 = mysqli_fetch_array($query1);
        $arrayglogin['Code'] = "Correcto";
        $arrayglogin['Name'] = $result1['name'];
        $arrayglogin['Mail'] = $result1['mail'];
        $arrayglogin['Picture'] = $result1['userpic'];
        $arrayglogin['UserType'] = $result1['usertype']; 
        $arrayglogin['isdefaultpasswd'] = $result1['isdefaultpasswd']; 
        $arrayglogin['agencia_callcenter'] = $result1['agencia_callcenter']; 
        $arrayglogin['id'] = $result1['id'];
        $arrayglogin['userid'] = $result1['userid'];
        $arrayglogin['area'] = $result1['area'];
        echo json_encode($arrayglogin);
    }
    else {
        $arrayglogin['Code'] = "Incorrecto";
        echo json_encode($arrayglogin);
    }
    mysqli_close($conn);
?>
