<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $ticketid = $_POST['ticketid'];

        $query0 = "
            select
                cedula,
                nombres,
                mail,
                phone,
                ticketid
            from gestiontickets
            where id = '" .$ticketid. "'
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
                $resulttikets[$num][] = "SI";
                $resulttikets[$num][] = $registro['cedula'];
                $resulttikets[$num][] = utf8_encode($registro['nombres']);
                $resulttikets[$num][] = $registro['mail'];
                $resulttikets[$num][] = $registro['phone'];
                $resulttikets[$num][] = $registro['ticketid'];
                $records["data"][] = $resulttikets[$num];
                $num++;
            }
        }
        echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
    else {
        $resulttikets[0][] = 'NO';
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
