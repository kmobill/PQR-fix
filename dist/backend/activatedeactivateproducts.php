<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $productid = $_POST['productid'];
    $productname = $_POST['productname'];
    $productstate = $_POST['productstate'];

    $query0 = mysqli_query($conn, "
        update catalogoproductos 
        set isActive = '" .$productstate. "'
        where id = '" .$productid. "'
    ");
    if ($query0 == true){
        $query1 = mysqli_query($conn, "
		update catalogoincidencias
		set isActive = '" .$productstate. "' 
		where producto = '" .$productname. "'
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
