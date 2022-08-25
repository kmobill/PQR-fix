<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $incidenceid = $_POST['incidenceid'];
    $incidencename = $_POST["incidencename"];

    $query0 = mysqli_query($conn, "
        delete from catalogotiposincidencia where id = '" .$incidenceid. "'
    ");
    if ($query0 == true){
        $query1 = ("delete from catalogoincidencias where incidencia = '" .$incidencename. "'");

        $arrayresult['Result'] = "OK";
        echo json_encode($arrayresult);
    }
    else {
        $arrayresult['Result'] = "ERROR";
        echo json_encode($arrayresult);
    }
    mysqli_close($conn);
?>
