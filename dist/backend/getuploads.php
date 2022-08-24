<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    $ticketidg = $_POST['ticketidg'];

    $query0 = "
        select
            url,
            createdate,
            nombre,
            uploadby
        from uploadfiles
        where ticketid = '" .$ticketidg. "'
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
                $resulttikets[$num][] = $registro['createdate'];
                $resulttikets[$num][] = $registro['url'];
                $resulttikets[$num][] = $registro['nombre'];
                $resulttikets[$num][] = $registro['uploadby'];
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
        $records["data"][] = $resulttikets[0];
        echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
    mysqli_close($conn);
?>
