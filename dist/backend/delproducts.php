<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    $productid = $_POST['productid'];
    $productname = $_POST["productname"];

    $query0 = mysqli_query($conn, "
        delete from catalogoproductos where id = '" .$productid. "'
    ");
    if ($query0 == true){
        $query1 = ("delete from catalogoincidencias where producto = '" .$productname. "'");

        $arrayresult['Result'] = "OK";
        echo json_encode($arrayresult);
    }
    else {
        $arrayresult['Result'] = "ERROR";
        echo json_encode($arrayresult);
    }
    mysqli_close($conn);
?>
