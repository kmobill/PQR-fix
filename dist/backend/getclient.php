<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $usercedula = $_POST['usercedula'];

    $query0 = mysqli_query($conn, "select cedula, name, mail, phone from clients where cedula = '" .$usercedula. "'");
    $result0 = mysqli_fetch_array($query0);
    $count0 = mysqli_num_rows($query0);

    if ($count0 == 1){
        $arrayglogin['Existe'] = 'Si';
        $arrayglogin['Cedula'] = $result0['cedula'];
        $arrayglogin['Name'] = utf8_encode($result0['name']);
        $arrayglogin['Mail'] = $result0['mail'];
        $arrayglogin['Phone'] = $result0['phone'];
	echo json_encode($arrayglogin, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
    else {
        $arrayglogin['Existe'] = 'No';
	echo json_encode($arrayglogin, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
    mysqli_close($conn);
?>
