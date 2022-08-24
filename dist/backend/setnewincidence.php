<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $id = $_POST['id'];
    $producto = $_POST['producto'];
    $tipoincidencia = $_POST['tipoincidencia'];
    $stincidencia = $_POST['stincidencia'];
    $area = $_POST['area'];
    $tiemporespuesta = $_POST['tiemporespuesta'];
    $tipotiempo = $_POST['tipotiempo'];
    $casignacion = $_POST['casignacion'];
    $pasignado = $_POST['pasignado'];
    $newincidenciasIdGst = $_POST['newincidenciasIdGst'];

    if ($newincidenciasIdGst == 'Nuevo'){
	    $query1 = "
        	select
	            id
        	from catalogoincidencias
	        where producto = '" .$producto. "'
        	    and incidencia = '" .$tipoincidencia. "'
	            and stincidencia = '" .$stincidencia. "'
        	    and area = '" .$area. "'
	            and pasignado = '" .$pasignado. "'
	    ";
	    $registros = mysqli_query($conn, $query1);
	    if (mysqli_num_rows($registros)){
        	$arrayresult['Result'] = "YA_EXISTE";
	        echo json_encode($arrayresult);
	    }
	    else {
        	$query0 = mysqli_query($conn, 
	            "insert into catalogoincidencias(id, producto, incidencia, stincidencia, area, casignacion, pasignado, tiemporespuesta, tipotiempo, isActive)
        	    values ('" .$id. "', '" .$producto. "', '" .$tipoincidencia. "', '" .$stincidencia. "', '" .$area. "', '" .$casignacion. "', '" .$pasignado. "', '" .$tiemporespuesta. "', '" .$tipotiempo. "',1)
	        ");
        	if ($query0 == true){
	            $arrayresult['Result'] = "OK";
        	    echo json_encode($arrayresult);
	        }
        	else {
	            $arrayresult['Result'] = "ERROR";
        	    echo json_encode($arrayresult);
        	}
    	}
    }
    else {
    	$query0 = mysqli_query($conn,
        	"update catalogoincidencias
				set producto = '" .$producto. "',
					incidencia = '" .$tipoincidencia. "',
					stincidencia = '" .$stincidencia. "',
					area = '" .$area. "',
					casignacion = '" .$casignacion. "',
					pasignado = '" .$pasignado. "',
					tiemporespuesta = '" .$tiemporespuesta. "',
					tipotiempo = '" .$tipotiempo. "'
				where id = '" .$newincidenciasIdGst. "'
        ");
        if ($query0 == true){
                $arrayresult['Result'] = "OK";
                echo json_encode($arrayresult);
        }
        else {
                $arrayresult['Result'] = "ERROR";
                echo json_encode($arrayresult);
        }
    }
    mysqli_close($conn);
?>
