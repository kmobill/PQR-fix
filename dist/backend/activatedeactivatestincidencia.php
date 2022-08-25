<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $stincidenceid = $_POST['stincidenceid'];
    $stcidencename = $_POST['stcidencename'];
    $stincidenciastate = $_POST['stincidenciastate'];

    $query0 = mysqli_query($conn, "
        update catalogosubtiposincidencia
        set isActive = '" .$stincidenciastate. "'
        where id = '" .$stincidenceid. "'
    ");
    if ($query0 == true){
	$query1 = mysqli_query($conn, "
                update catalogoincidencias
                set isActive = '" .$stincidenciastate. "'
                where stincidencia = '" .$stcidencename. "'
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
