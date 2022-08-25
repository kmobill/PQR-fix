<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    $area = $_POST['area'];
    $name = $_POST['name'];

    $query0 = "select name from users where usertype = 'orquestador' and area = '" .$area. "' and name = '" .$name. "'";

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
                $resulttikets[$num][] = "Existe";
                $resulttikets[$num][] = $registro['name'];
                $records["data"][] = $resulttikets[$num];
                $num++;
            } 
        }
        echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
    else {
        $resulttikets[0][] = "No existe";
        $resulttikets[0][] = "Sin archivo";
        $records["data"][] = $resulttikets[0];
        echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
    mysqli_close($conn);
?>
