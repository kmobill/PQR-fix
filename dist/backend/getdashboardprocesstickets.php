<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $query0 = "
        select
            convert(createdate, date) as fecha, 
            statet as estado, 
            count(statet) as cantidad 
        from gestiontickets 
        where convert(createdate, date) between convert(convert(now(), date) - 7, date) and convert(now(), date) 
        and statet = 'EN PROCESO'
        group by CONVERT(createdate, date), statet
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
                $resulttikets[$num][] = $registro['fecha'];
                $resulttikets[$num][] = $registro['estado'];
                $resulttikets[$num][] = $registro['cantidad'];
                $records["data"][] = $resulttikets[$num];
                $num++;
            } 
        }
        echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
    else {
        $resulttikets[0][] = "Sin datos";
        $resulttikets[0][] = "Sin datos";
        $resulttikets[0][] = "Sin datos";
        $records["data"][] = $resulttikets[0];
        echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
    mysqli_close($conn);
?>
