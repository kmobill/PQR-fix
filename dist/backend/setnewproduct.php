<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $id = $_POST['id'];
    $producto = $_POST['producto'];
    $productIdGst = $_POST['productIdGst'];

    if ($productIdGst == 'Nuevo'){
        $query0 = mysqli_query($conn, 
            "insert into catalogoproductos(id, producto, isActive) 
            values ('" .$id. "', '" .$producto. "', 1)
        ");
    }
    else {
        $query0 = mysqli_query($conn, 
            "update catalogoproductos 
                set producto =  '" .$producto. "' 
                where id = '" .$productIdGst. "'
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
