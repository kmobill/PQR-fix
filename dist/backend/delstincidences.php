<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    $stincidenceid = $_POST['stincidenceid'];
    $stcidencename = $_POST["stcidencename"];

    $query0 = mysqli_query($conn, "
        delete from catalogosubtiposincidencia where id = '" .$stincidenceid. "'
    ");
    if ($query0 == true){
        $query1 = ("delete from catalogoincidencias where stincidencia = '" .$stcidencename. "'");

        $arrayresult['Result'] = "OK";
        echo json_encode($arrayresult);
    }
    else {
        $arrayresult['Result'] = "ERROR";
        echo json_encode($arrayresult);
    }
    mysqli_close($conn);
?>
