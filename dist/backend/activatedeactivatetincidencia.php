<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $incidenceid = $_POST['incidenceid'];
    $tincidencianame = $_POST['tincidencianame'];
    $tincidenciastate = $_POST['tincidenciastate'];

    $query0 = mysqli_query($conn, "
        update catalogotiposincidencia
        set isActive = '" .$tincidenciastate. "'
        where id = '" .$incidenceid. "'
    ");
    if ($query0 == true){
	$query1 = mysqli_query($conn, "
                update catalogoincidencias
                set isActive = '" .$tincidenciastate. "'
                where incidencia = '" .$tincidencianame. "'
        ");

        $arrayresult['Result'] = "OK";
        echo json_encode($arrayresult);
    }
    else {
        $arrayresult['Result'] = "ERROR";
        echo json_encode($arrayresult);
    }
    mysqli_close($conn);
?>
