<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    $catalogoincid = $_POST['catalogoincid'];

    $query0 = mysqli_query($conn, "
        delete from catalogoincidencias where id = '" .$catalogoincid. "'
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
