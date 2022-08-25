<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $usuario = $_POST['usuario'];

    switch ($_GET["action"]){
        case "noingresador":
            $query0 = "
                select 
                    ticketid,
                    createby, 
                    statet,
                    asesor
                from gestiontickets 
                    where createdate >= date_add(now(), interval -3 DAY) 
                    and createdate < now() 
                order by createdate desc
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
                        $resulttikets[$num][] = $registro['ticketid'];
                        $resulttikets[$num][] = $registro['createby'];
                        $resulttikets[$num][] = $registro['statet'];
                        $resulttikets[$num][] = $registro['asesor'];
                        $records["data"][] = $resulttikets[$num];
                        $num++;
                    }
                }
                echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
            }
            else {
                $resulttikets[0][] = 'Sin Registro';
                $resulttikets[0][] = '';
                $resulttikets[0][] = '';
                $resulttikets[0][] = '';
                $records["data"][] = $resulttikets[0];
                echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
            }
        break;

        case "ingresador":
            $query0 = "
                select 
                    ticketid,
                    createby, 
                    statet,
                    asesor
                from gestiontickets 
                    where createdate >= date_add(now(), interval -3 DAY) 
                    and createdate < now() 
                    and asesor = ('" .$usuario. "')
                order by createdate desc
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
                        $resulttikets[$num][] = $registro['ticketid'];
                        $resulttikets[$num][] = $registro['createby'];
                        $resulttikets[$num][] = $registro['statet'];
                        $resulttikets[$num][] = $registro['asesor'];
                        $records["data"][] = $resulttikets[$num];
                        $num++;
                    }
                }
                echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
            }
            else {
                $resulttikets[0][] = 'Sin Registro';
                $resulttikets[0][] = '';
                $resulttikets[0][] = '';
                $resulttikets[0][] = '';
                $records["data"][] = $resulttikets[0];
                echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
            }
        break;
    }
    mysqli_close($conn);
?>
