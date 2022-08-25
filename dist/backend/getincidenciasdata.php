<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $tipoproducto = $_POST['tipoproducto'];
    $tipoincidencia = $_POST['tipoincidencia'];
    $subtipoincidencia = $_POST['subtipoincidencia'];

    $query0 = mysqli_query($conn, "select id, area, casignacion, pasignado, tiemporespuesta, tipotiempo from catalogoincidencias where producto = '" .$tipoproducto. "' and incidencia = '" .$tipoincidencia. "' and stincidencia = '" .$subtipoincidencia. "' and isActive = 1");
    $result0 = mysqli_fetch_array($query0);
    $count0 = mysqli_num_rows($query0);
    $arrayglogin['Id'] = $result0['id'];
    $arrayglogin['Area'] = $result0['area'];
    $arrayglogin['CorreoAsignacion'] = $result0['casignacion'];
    $arrayglogin['PersonalAsignado'] = $result0['pasignado'];
    $arrayglogin['TiempoRespuesta'] = $result0['tiemporespuesta'];
    $arrayglogin['TipoTiempo'] = $result0['tipotiempo'];
    echo json_encode($arrayglogin);
    mysqli_close($conn);
?>
