<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $producto = $_POST["producto"];

    switch ($_GET["action"]){
        case 'ratiotodos': 
            $query0 = "
                select 
                    round(sum(case when statet = 'EN PROCESO' then 1 else 0 end)/count(*)*100, 2) as ratio
                from gestiontickets
            ";
            
            $registros = mysqli_query($conn, $query0);

            if (mysqli_num_rows($registros)){
                while ($row = mysqli_fetch_array($registros)) {
                    $response[] = array('name' => intval(100), 'y' => floatval($row['ratio']), 'z' => intval(100));
                }
                echo json_encode($response);
            }
            else {
                $response[] = array('name' => 'Sin Datos', 'y' => floatval(0));
                echo json_encode($response);
            }
        break;   
        
        case 'ratioproducto': 
            $query0 = "
                select 
                    round(sum(case when statet = 'EN PROCESO' then 1 else 0 end)/count(*)*100, 2) as ratio
                from gestiontickets
                where producto = '" .$producto. "'
            ";

            $registros = mysqli_query($conn, $query0);

            if (mysqli_num_rows($registros)){
                while ($row = mysqli_fetch_array($registros)) {
                    $response[] = array('name' => intval(100), 'y' => floatval($row['ratio']), 'z' => intval(100));
                }
                echo json_encode($response);
            }
            else {
                $response[] = array('name' => 'Sin Datos', 'y' => floatval(0));
                echo json_encode($response);
            }
        break; 
        
        case 'eficienciatodos': 
            $query0 = "
                select 
                    round(sum(case when statet = 'FINALIZADO' then 1 else 0 end)/count(*)*100, 2) as ratio
                from gestiontickets
            ";

            $registros = mysqli_query($conn, $query0);

            if (mysqli_num_rows($registros)){
                while ($row = mysqli_fetch_array($registros)) {
                    $response[] = array('name' => intval(100), 'y' => floatval($row['ratio']), 'z' => intval(100));
                }
                echo json_encode($response);
            }
            else {
                $response[] = array('name' => 'Sin Datos', 'y' => floatval(0));
                echo json_encode($response);
            }
        break;  
        
        case 'eficienciaproducto': 
            $query0 = "
                select 
                    round(sum(case when statet = 'FINALIZADO' then 1 else 0 end)/count(*)*100, 2) as ratio
                from gestiontickets
                where producto = '" .$producto. "'
            ";

            $registros = mysqli_query($conn, $query0);

            if (mysqli_num_rows($registros)){
                while ($row = mysqli_fetch_array($registros)) {
                    $response[] = array('name' => intval(100), 'y' => floatval($row['ratio']), 'z' => intval(100));
                }
                echo json_encode($response);
            }
            else {
                $response[] = array('name' => 'Sin Datos', 'y' => floatval(0));
                echo json_encode($response);
            }
        break;

        case 'escalamientotodos': 
            $query0 = "
                select 
                    round(sum(case when statet = 'ESCALADO' then 1 else 0 end)/count(*)*100, 2) as ratio
                from gestiontickets
            ";

            $registros = mysqli_query($conn, $query0);

            if (mysqli_num_rows($registros)){
                while ($row = mysqli_fetch_array($registros)) {
                    $response[] = array('name' => intval(100), 'y' => floatval($row['ratio']), 'z' => intval(100));
                }
                echo json_encode($response);
            }
            else {
                $response[] = array('name' => 'Sin Datos', 'y' => floatval(0));
                echo json_encode($response);
            }
        break;

        case 'escalamientoproducto': 
            $query0 = "
                select 
                    round(sum(case when statet = 'ESCALADO' then 1 else 0 end)/count(*)*100, 2) as ratio
                from gestiontickets
                where producto = '" .$producto. "'
            ";

            $registros = mysqli_query($conn, $query0);

            if (mysqli_num_rows($registros)){
                while ($row = mysqli_fetch_array($registros)) {
                    $response[] = array('name' => intval(100), 'y' => floatval($row['ratio']), 'z' => intval(100));
                }
                echo json_encode($response);
            }
            else {
                $response[] = array('name' => 'Sin Datos', 'y' => floatval(0));
                echo json_encode($response);
            }
        break;

        case 'tmotodos': 
            $query0 = "
                select 
                    round(
                        (select 
                            sum(cast(tiempogestion as decimal) + cast(tiempoexcedido as decimal))
                        from tiempostickets
                        join gestiontickets on gestiontickets.id = tiempostickets.ticketid
                        where gestiontickets.statet = 'FINALIZADO') / count(*)
                    ,0) as TMO
                from gestiontickets
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
                        $resulttikets[$num][] = $registro['TMO'];
                        $records["data"][] = $resulttikets[$num];
                        $num++;
                    } 
                }
                echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
            }
            else {
                $resulttikets[0][] = "Sin Datos";
                $records["data"][] = $resulttikets[0];
                echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
            }
        break;

        case 'tmoproductos': 
            $query0 = "
                select 
                    round(
                        (select 
                            sum(cast(tiempogestion as decimal) + cast(tiempoexcedido as decimal))
                        from tiempostickets
                        join gestiontickets on gestiontickets.id = tiempostickets.ticketid
                        where gestiontickets.statet = 'FINALIZADO' 
                        and producto = '" .$producto. "') / count(*)
                    ,0) as TMO
                from gestiontickets
                where producto = '" .$producto. "'
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
                        $resulttikets[$num][] = $registro['TMO'];
                        $records["data"][] = $resulttikets[$num];
                        $num++;
                    } 
                }
                echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
            }
            else {
                $resulttikets[0][] = "Sin Datos";
                $records["data"][] = $resulttikets[0];
                echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
            }
        break;
    }
    mysqli_close($conn);
?>
