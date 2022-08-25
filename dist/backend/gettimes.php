<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $ticketid = $_POST['ticketid'];

    function ensure2Digit($number) {
        if($number < 10) {
            $number = '0' . $number;
        }
        return $number;
    }

    function secondsToTime($ss) {
        $s = ensure2Digit($ss%60);
        $m = ensure2Digit(floor(($ss%3600)/60));
        $h = ensure2Digit(floor(($ss%86400)/3600));
        $d = ensure2Digit(floor(($ss%2592000)/86400));
    
        return "$d:$h:$m:$s";
    }

    $query0 = "
        select
            tiempogestion,
            tiempoexcedido,
            agent,
            tmstmp
        from tiempostickets
        where ticketid = '" .$ticketid. "'
        order by tmstmp desc
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
                $resulttikets[$num][] = $registro['tmstmp'];
                $resulttikets[$num][] = secondsToTime($registro['tiempogestion']);
                $resulttikets[$num][] = secondsToTime($registro['tiempoexcedido']);
                $resulttikets[$num][] = $registro['agent'];
                $records["data"][] = $resulttikets[$num];
                $num++;
            }
        }
        echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
    else {
        $resulttikets[0][] = "Sin registro";
        $resulttikets[0][] = "Sin registro";
        $resulttikets[0][] = "Sin registro";
        $resulttikets[0][] = "Sin registro";
        $records["data"][] = $resulttikets[0];
        echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
    mysqli_close($conn);
?>
