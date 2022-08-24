<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    $idincidencia = $_POST['idincidencia'];
    $tiemporespuesta = $_POST['tiemporespuesta'];
    $tipotiemporsp = $_POST['tipotiemporsp'];

    $query0 = mysqli_query($conn, "
        update catalogoincidencias set tiemporespuesta = '" .$tiemporespuesta. "', tipotiempo = '" .$tipotiemporsp. "' where id = '" .$idincidencia. "'
    ");
    if ($query0 == true){
        $arrayresult['Result'] = "OK";
        echo json_encode($arrayresult);
    }
    else {
        $arrayresult['Result'] = "ERROR";
        echo json_encode($arrayresult);
    }
    mysqli_close($conn);
?>
