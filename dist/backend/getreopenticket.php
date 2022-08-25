<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $ticketid = $_POST['ticketid'];

        $query0 = "
            select
                id,
                cedula,
                nombres,
                mail,
                phone,
                ticketid,
                producto,
                tipoincidencia,
                stincidencia,
                area,
                tiemporespuesta,
                tipotiempo,
                createby,
                createdate,
                statet,
                asesor,
                '' Plus
            from gestiontickets
            where id = '" .$ticketid. "'
            and statet = 'POR REAPERTURA'
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
                $resulttikets[$num][] = $registro['Plus'];
                $resulttikets[$num][] = $registro['cedula'];
                $resulttikets[$num][] = utf8_encode($registro['nombres']);
                $resulttikets[$num][] = $registro['mail'];
                $resulttikets[$num][] = $registro['phone'];
                $resulttikets[$num][] = $registro['ticketid'];
                $resulttikets[$num][] = utf8_encode($registro['producto']);
                $resulttikets[$num][] = utf8_encode($registro['tipoincidencia']);
                $resulttikets[$num][] = utf8_encode($registro['stincidencia']);
                $resulttikets[$num][] = $registro['area'];
                $resulttikets[$num][] = $registro['tiemporespuesta'];
                $resulttikets[$num][] = $registro['createby'];
                $resulttikets[$num][] = $registro['statet'];
                $resulttikets[$num][] = ($registro['asesor'] == "")?"Sin agente asignado":$registro['asesor'];
                $resulttikets[$num][] = $registro['id'];
                $resulttikets[$num][] = $registro['createdate'];
                $resulttikets[$num][] = $registro['tipotiempo'];
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
        $resulttikets[0][] = 'Sin Registro';
        $resulttikets[0][] = 'Sin Registro';
        $resulttikets[0][] = 'Sin Registro';
        $resulttikets[0][] = 'Sin Registro';
        $resulttikets[0][] = 'Sin Registro';
        $resulttikets[0][] = 'Sin Registro';
        $resulttikets[0][] = 'Sin Registro';
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
