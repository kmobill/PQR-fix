<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    switch ($_GET["action"]){
        case "orquestador":
            $query0 = "select id from users where usertype = 'orquestador' limit 1";
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
                        $resulttikets[$num][] = $registro['Existe'];
                        $records["data"][] = $resulttikets[$num];
                        $num++;
                    } 
                }
                echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
            }
            else {
                $resulttikets[0][] = "NoExiste";
                $records["data"][] = $resulttikets[0];
                echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
            }
        break;
    }
    mysqli_close($conn);
?>
