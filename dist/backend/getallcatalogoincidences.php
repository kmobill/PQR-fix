<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $query0 = "
        select 
            id,
            producto,
            incidencia,
            stincidencia,
            area,
            tiemporespuesta,
            tipotiempo,
            '' as deletex,
	    '' as editex,
	    pasignado,
	    case when isActive = 1 then 'Activa' else 'Inactiva' end as isActive
        from catalogoincidencias 
    ";

    $registros = mysqli_query($conn, $query0);
    $rows = array();

    if (mysqli_num_rows($registros)){
        $num = 0;
        $records = array();
        while($myRow = mysqli_fetch_array($registros)){
            $rows[] = $myRow;
        }
        if (is_array($rows) || is_object($rows)){
            foreach ($rows as $registro){
		$resulttikets[$num][] = $registro['editex'];
                $resulttikets[$num][] = $registro['deletex'];
                $resulttikets[$num][] = $registro['id'];
                $resulttikets[$num][] = $registro['producto'];
                $resulttikets[$num][] = $registro['incidencia'];
                $resulttikets[$num][] = $registro['stincidencia'];
                $resulttikets[$num][] = $registro['area'];
                $resulttikets[$num][] = $registro['tiemporespuesta'];
                $resulttikets[$num][] = $registro['tipotiempo'];
		$resulttikets[$num][] = $registro['isActive'];
		$resulttikets[$num][] = $registro['pasignado'];
                $records["data"][] = $resulttikets[$num];
                $num++;
            } 
        }
        echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
    else {
	$resulttikets[0][] = "Sin archivo";
        $resulttikets[0][] = "Sin archivo";
        $resulttikets[0][] = "Sin archivo";
        $resulttikets[0][] = "Sin archivo";
        $resulttikets[0][] = "Sin archivo";
        $resulttikets[0][] = "Sin archivo";
        $resulttikets[0][] = "Sin archivo";
        $resulttikets[0][] = "Sin archivo";
	$resulttikets[0][] = "Sin archivo";
        $resulttikets[0][] = "Sin archivo";
	$resulttikets[0][] = "Sin archivo";
        $records["data"][] = $resulttikets[0];
        echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
    mysqli_close($conn);
?>
