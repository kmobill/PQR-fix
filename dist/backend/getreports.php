<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $rangoinicio = $_POST['rangoinicio'];
    $rangofin = $_POST['rangofin'];
    $tiporeporte = $_POST['tiporeporte'];
    $asesorreporte = $_POST['asesorreporte'];
    $estadoreporte = $_POST['estadoreporte'];
    $ticketreporte = $_POST['ticketreporte'];
    $identifreporte = $_POST['identifreporte'];

    if ($tiporeporte == "ultimagestion"){
        $query0 = "
            select
                cedula,
                nombres,
                mail,
                phone,
                ticketid,
                producto,
                tipoincidencia,
                stincidencia,
                area,
                tiemporespuesta + ' ' + tipotiempo as tiemporespuesta,
                createby,
                createdate,
                statet,
                asesor
            from gestiontickets
            where createdate >= '" .$rangoinicio. "' and createdate < '" .$rangofin. "'
            and asesor like case when '" .$asesorreporte. "' = 'NO' then '%' else '" .$asesorreporte. "' end
            and statet like case when '" .$estadoreporte. "' = 'NO' then '%' else '" .$estadoreporte. "' end
            and cedula like case when '" .$identifreporte. "' = 'NO' then '%' else '" .$identifreporte. "' end
            and numeroticket like case when '" .$ticketreporte. "' = 'NO' then '%' else '" .$ticketreporte. "' end
            order by createdate desc
        ";
    }
    else {
        $query0 = "
            select
                cedula,
                nombres,
                mail,
                phone,
                ticketid,
                producto,
                tipoincidencia,
                stincidencia,
                area,
                tiemporespuesta + ' ' + tipotiempo as tiemporespuesta,
                createby,
                createdate,
                statet,
                asesor
            from gestionticketshistorico
            where createdate >= '" .$rangoinicio. "' and createdate < '" .$rangofin. "'
            and asesor like case when '" .$asesorreporte. "' = 'NO' then '%' else '" .$asesorreporte. "' end
            and statet like case when '" .$estadoreporte. "' = 'NO' then '%' else '" .$estadoreporte. "' end
            and cedula like case when '" .$identifreporte. "' = 'NO' then '%' else '" .$identifreporte. "' end
            and numeroticket like case when '" .$ticketreporte. "' = 'NO' then '%' else '" .$ticketreporte. "' end
            order by createdate desc
        ";
    }
    

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
                $resulttikets[$num][] = $registro['cedula'];
                $resulttikets[$num][] = $registro['nombres'];
                $resulttikets[$num][] = $registro['mail'];
                $resulttikets[$num][] = $registro['phone'];
                $resulttikets[$num][] = $registro['ticketid'];
                $resulttikets[$num][] = $registro['producto'];
                $resulttikets[$num][] = $registro['tipoincidencia'];
                $resulttikets[$num][] = $registro['stincidencia'];
                $resulttikets[$num][] = $registro['area'];
                $resulttikets[$num][] = $registro['tiemporespuesta'];
                $resulttikets[$num][] = $registro['createby'];
                $resulttikets[$num][] = $registro['createdate'];
                $resulttikets[$num][] = $registro['statet'];
                $resulttikets[$num][] = ($registro['asesor'] == "")?"Sin agente asignado":$registro['asesor'];
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
        $records["data"][] = $resulttikets[0];
        echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
    mysqli_close($conn);
?>
