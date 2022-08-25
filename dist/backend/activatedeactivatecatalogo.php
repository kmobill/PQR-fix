<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $catalogoincid = $_POST['catalogoincid'];
    $catalogoproducto = $_POST['catalogoproducto'];
    $ctalogoincstate = $_POST['ctalogoincstate'];
    $catalogotincidencia = $_POST['catalogotincidencia'];
    $catalogostincidencia = $_POST['catalogostincidencia'];

    $query0 = mysqli_query($conn, "select isActive from catalogoproductos where producto = '" .$catalogoproducto. "'");
    $result0 = mysqli_fetch_array($query0);
    if ($result0['isActive'] == 0){
	$arrayresult['Result'] = "PRODUCTO INACTIVO";
        echo json_encode($arrayresult);
    }
    else {
	$query1 = mysqli_query($conn, "select isActive from catalogotiposincidencia where tipoincidencia = '" .$catalogotincidencia. "'");
    	$result1 = mysqli_fetch_array($query1);
	if ($result1['isActive'] == 0){
        	$arrayresult['Result'] = "TIPO INCIDENCIA INACTIVO";
        	echo json_encode($arrayresult);
    	}
	else {
        	$query2 = mysqli_query($conn, "select isActive from catalogosubtiposincidencia where stincidencia = '" .$catalogostincidencia. "'");
	        $result2 = mysqli_fetch_array($query2);
        	if ($result2['isActive'] == 0){
	                $arrayresult['Result'] = "SUB TIPO INCIDENCIA INACTIVO";
                	echo json_encode($arrayresult);
        	}
		else {
			$query3 = mysqli_query($conn, "
        			update catalogoincidencias
			        set isActive = '" .$ctalogoincstate. "'
			        where id = '" .$catalogoincid. "'
			");
    			if ($query3 == true){
        			$arrayresult['Result'] = "OK";
        			echo json_encode($arrayresult);
    			}
    			else {
        			$arrayresult['Result'] = "ERROR";
        			echo json_encode($arrayresult);
    			}
		}
    	}
    }
    mysqli_close($conn);
?>
