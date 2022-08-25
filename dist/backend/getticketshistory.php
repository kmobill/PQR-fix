<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    $ticketid = $_POST['ticketid'];

    $query0 = "
        select
            nombres,
            ticketid,
            createdate,
            statet,
            asesor
        from gestionticketshistorico
        where id = '" .$ticketid. "'
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
                $resulttikets[$num][] = $registro['nombres'];
                $resulttikets[$num][] = $registro['ticketid'];
                $resulttikets[$num][] = $registro['statet'];
                $resulttikets[$num][] = $registro['asesor'];
                $resulttikets[$num][] = $registro['createdate'];
                $records["data"][] = $resulttikets[$num];
                $num++;
            }
        }
        echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
    else {
        $resulttikets[0][] = 'Sin Registro';
        $resulttikets[0][] = 'Sin Registro';
        $resulttikets[0][] = 'Sin Registro';
        $resulttikets[0][] = 'Sin Registro';
        $resulttikets[0][] = 'Sin Registro';
        $records["data"][] = $resulttikets[0];
        echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
    mysqli_close($conn);
?>
