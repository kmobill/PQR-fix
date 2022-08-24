<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $id = $_POST['id'];
    $tipoincidencia = $_POST['tipoincidencia'];
    $tincidenciasIdGst = $_POST['tincidenciasIdGst'];

    if ($tincidenciasIdGst == 'Nuevo'){
        $query0 = mysqli_query($conn, 
            "insert into catalogotiposincidencia(id, tipoincidencia, isActive) 
            values ('" .$id. "', '" .$tipoincidencia. "', 1)
        ");
    }
    else {
        $query0 = mysqli_query($conn, 
            "update catalogotiposincidencia
                set tipoincidencia = '" .$tipoincidencia. "'
                where id = '" .$tincidenciasIdGst. "'
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
