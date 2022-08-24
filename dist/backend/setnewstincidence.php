<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $id = $_POST['id'];
    $stipoincidencia = $_POST['stipoincidencia'];
    $stincidenciasIdGst = $_POST['stincidenciasIdGst'];

    if ($stincidenciasIdGst == 'Nuevo'){
        $query0 = mysqli_query($conn, 
            "insert into catalogosubtiposincidencia(id, stincidencia, isActive) 
            values ('" .$id. "', '" .$stipoincidencia. "', 1)
        ");
    }
    else {
        $query0 = mysqli_query($conn, 
            "update catalogosubtiposincidencia
                set stincidencia = '" .$stipoincidencia. "'
                where id = '" .$stincidenciasIdGst. "'
        ");
    }

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
