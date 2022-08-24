<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $producto = $_POST['producto'];
    $tincidencia = $_POST['tincidencia'];

    $query0 = mysqli_query($conn, "select stincidencia from catalogoincidencias where producto = '" .$producto. "' and incidencia = '" .$tincidencia. "'");
    $result0 = mysqli_fetch_array($query0);
    $count0 = mysqli_num_rows($query0);

    if ($count0 >= 1){
        $arrayglogin['Existe'] = 'Si';
        echo json_encode($arrayglogin, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
    else {
        $arrayglogin['Existe'] = 'No';
        echo json_encode($arrayglogin, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
    mysqli_close($conn);
?>
