<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $fechainicio = $_POST["fechainicio"];
    $fechafin = $_POST["fechafin"];

    switch ($_GET["action"]){
/************************************************************************************************************************************************FCR */
        case 'fcrtodos': 
            $query0 = "
                select 
                    count(respuesta) as cantidad,
                    respuesta
                from encuestas
                group by respuesta
                order by respuesta desc
            ";
            
            $registros = mysqli_query($conn, $query0);

            if (mysqli_num_rows($registros)){
                while ($row = mysqli_fetch_array($registros)) {
                    $response[] = array('name' => $row['respuesta'], 'y' => intval($row['cantidad']));
                }
                echo json_encode($response);
            }
            else {
                $response[] = array('name' => 'Sin Datos', 'y' => intval(0));
                echo json_encode($response);
            }
        break;   

        case 'fcrfechas': 
            $query0 = "
                select 
                    count(respuesta) as cantidad,
                    respuesta
                from encuestas
                where convert(createdate, date) >= '" .$fechainicio."'
                    and convert(createdate, date) <= '" .$fechafin. "'
                group by respuesta
                order by respuesta desc
            ";
            
            $registros = mysqli_query($conn, $query0);

            if (mysqli_num_rows($registros)){
                while ($row = mysqli_fetch_array($registros)) {
                    $response[] = array('name' => $row['respuesta'], 'y' => intval($row['cantidad']));
                }
                echo json_encode($response);
            }
            else {
                $response[] = array('name' => 'Sin Datos', 'y' => intval(0));
                echo json_encode($response);
            }
        break;
        
        case "fcrdetailtodos":
            $query0 = "
                select 
                   respuestacasono
                from encuestas 
                    where respuestacasono <> '' 
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
                        $resulttikets[$num][] = $registro['respuestacasono'];
                        $records["data"][] = $resulttikets[$num];
                        $num++;
                    }
                }
                echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
            }
            else {
                $resulttikets[0][] = 'Sin Registro';
                $records["data"][] = $resulttikets[0];
                echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
            }
        break;
        
        case "fcrdetailfechas":
            $query0 = "
                select 
                   respuestacasono
                from encuestas 
                    where respuestacasono <> '' 
                    and convert(createdate, date) >= '" .$fechainicio."'
                    and convert(createdate, date) <= '" .$fechafin. "'
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
                        $resulttikets[$num][] = $registro['respuestacasono'];
                        $records["data"][] = $resulttikets[$num];
                        $num++;
                    }
                }
                echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
            }
            else {
                $resulttikets[0][] = 'Sin Registro';
                $records["data"][] = $resulttikets[0];
                echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
            }
        break;
/************************************************************************************************************************************************NPS */
        case 'npstodos': 
            $query0 = "
                select 
                    round(((select count(nps) FROM encuestas where nps in (8,9,10))/count(*) - (select count(nps) FROM encuestas where nps in (0,1,2,3,4))/count(*)) * 100, 2) as NPS 
                from encuestas 
                where nps not in ('', -1)
                and respuesta = 'SI'
            ";
            
            $registros = mysqli_query($conn, $query0);

            if (mysqli_num_rows($registros)){
                while ($row = mysqli_fetch_array($registros)) {
                    $response[] = array('name' => intval(1), 'y' => floatval($row['NPS']));
                }
                echo json_encode($response);
            }
            else {
                $response[] = array('name' => intval(1), 'y' => intval(0));
                echo json_encode($response);
            }
        break;  

        case 'npsfechas': 
            $query0 = "
                select 
                    round((
                        (select 
                            count(nps) 
                        FROM encuestas 
                        where nps in (8,9,10)
                            and respuesta = 'SI'
                            and convert(createdate, date) >= '" .$fechainicio."'
                            and convert(createdate, date) <= '" .$fechafin. "'
                        )/count(*) - 
                        (select 
                            count(nps) 
                        FROM encuestas 
                        where nps in (0,1,2,3,4)
                        and respuesta = 'SI'
                            and convert(createdate, date) >= '" .$fechainicio."'
                            and convert(createdate, date) <= '" .$fechafin. "'
                        )/count(*)) * 100, 2) as NPS 
                from encuestas 
                where nps not in ('', -1)
                and respuesta = 'SI'
                and convert(createdate, date) >= '" .$fechainicio."'
                    and convert(createdate, date) <= '" .$fechafin. "'
            ";
            
            $registros = mysqli_query($conn, $query0);

            if (mysqli_num_rows($registros)){
                while ($row = mysqli_fetch_array($registros)) {
                    $response[] = array('name' => intval(1), 'y' => floatval($row['NPS']));
                }
                echo json_encode($response);
            }
            else {
                $response[] = array('name' => intval(1), 'y' => intval(0));
                echo json_encode($response);
            }
        break;  

        case "npstodosdetail":
            $query0 = "
                select 
                    comentariosnps
                from encuestas 
                    where comentariosnps <> '' 
                    and respuesta = 'SI'
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
                        $resulttikets[$num][] = $registro['comentariosnps'];
                        $records["data"][] = $resulttikets[$num];
                        $num++;
                    }
                }
                echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
            }
            else {
                $resulttikets[0][] = 'Sin Registro';
                $records["data"][] = $resulttikets[0];
                echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
            }
        break;

        case "npsfechasdetail":
            $query0 = "
                select 
                comentariosnps
                from encuestas 
                where comentariosnps <> '' 
                    and respuesta = 'SI'
                    and convert(createdate, date) >= '" .$fechainicio."'
                    and convert(createdate, date) <= '" .$fechafin. "'
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
                        $resulttikets[$num][] = $registro['comentariosnps'];
                        $records["data"][] = $resulttikets[$num];
                        $num++;
                    }
                }
                echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
            }
            else {
                $resulttikets[0][] = 'Sin Registro';
                $records["data"][] = $resulttikets[0];
                echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
            }
        break;
    }
    mysqli_close($conn);
?>
