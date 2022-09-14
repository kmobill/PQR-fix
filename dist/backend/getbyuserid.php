<?php

date_default_timezone_set('America/Guayaquil');
require_once "globalconnection.php";
$conn = conectar();
$conn->set_charset("utf8");


$userId = $_POST['userId'];

$query0 = mysqli_query($conn, "select mail, id, userid, name from users where state = 1 and userid = '" . $userId . "'");
$count0 = mysqli_num_rows($query0);

if ($count0 > 0) {
    $result0 = mysqli_fetch_array($query0);
    $arrayglogin['Correo'] = $result0['mail'];
    $arrayglogin['Id'] = $result0['id'];
    $arrayglogin['UserId'] = $result0['userid'];
    $arrayglogin['Name'] = $result0['name'];
    echo json_encode($arrayglogin);
} else {
    $arrayglogin['Correo'] = "NoExiste";
    echo json_encode($arrayglogin);
}
mysqli_close($conn);

?>