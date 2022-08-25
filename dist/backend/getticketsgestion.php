<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $rangoinicio = $_POST['rangoinicio'];
    $rangofin = $_POST['rangofin'];
    $tipousuario = $_POST['tipousuario'];
    $profileid = $_POST['profileid'];
    $areaid = $_POST['areaid'];
    $statet = $_POST['statet'];
    $searchtype = $_POST['searchtype'];
    $ticketid = $_POST['ticketid'];
    $cedulaid = $_POST['cedulaid'];

    if ($tipousuario == "su" || $tipousuario == "ingresador" || $tipousuario == "supervisor"){
        if ($searchtype == "ticket"){
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
                    '' Plus,
                    canal,
                    redsocial,
                    agencia,
                    comentarioinicial
                from gestiontickets
                where ticketid like '%" .$ticketid. "%'
                order by createdate desc
            ";
        }
        if ($searchtype == "cedula"){
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
                    '' Plus,
                    canal,
                    redsocial,
                    agencia,
                    comentarioinicial
                from gestiontickets
                where cedula like '%" .$cedulaid. "%'
                order by createdate desc
            ";
        }
        if ($searchtype == "fechas"){
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
                    '' Plus,
                    canal,
                    redsocial,
                    agencia,
                    comentarioinicial
                from gestiontickets
                where createdate >= '" .$rangoinicio. "' and createdate < '" .$rangofin. "'
                order by createdate desc
            ";
        }
    }
    else if ($tipousuario == "orquestador"){
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
                '' Plus,
                canal,
                redsocial,
                agencia,
                comentarioinicial
            from gestiontickets
            where createdate >= '" .$rangoinicio. "' and createdate < '" .$rangofin. "'
                and asesorid in ('" .$profileid. "', 'TODOS')
                and area in ('" .$areaid. "', 'TODOS')
                and statet = ('" .$statet. "')
            order by createdate desc
        ";
    }
    else if ($tipousuario == "administrador"){
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
                '' Plus,
                canal,
                redsocial,
                agencia,
                comentarioinicial
            from gestiontickets
            where createdate >= '" .$rangoinicio. "' and createdate < '" .$rangofin. "'
                and statet = ('" .$statet. "')
            order by createdate desc
        ";
    }
    else if ($tipousuario == "cliente"){
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
                '' Plus,
                canal,
                redsocial,
                agencia,
                comentarioinicial
            from gestiontickets
            where createdate >= '" .$rangoinicio. "' and createdate < '" .$rangofin. "'
                and createby = ('" .$usuario. "')
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
                $resulttikets[$num][] = $registro['Plus'];
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
                $resulttikets[$num][] = $registro['statet'];
                $resulttikets[$num][] = ($registro['asesor'] == "")?"Sin agente asignado":$registro['asesor'];
                $resulttikets[$num][] = $registro['id'];
                $resulttikets[$num][] = $registro['createdate'];
                $resulttikets[$num][] = $registro['tipotiempo'];
                $resulttikets[$num][] = $registro['canal'];
                $resulttikets[$num][] = $registro['redsocial'];
                $resulttikets[$num][] = $registro['agencia'];
                $resulttikets[$num][] = $registro['comentarioinicial'];
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
        $resulttikets[0][] = 'Sin Registro';
        $resulttikets[0][] = 'Sin Registro';
        $resulttikets[0][] = 'Sin Registro';
        $resulttikets[0][] = 'Sin Registro';
        $records["data"][] = $resulttikets[0];
        echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
    mysqli_close($conn);
?>
