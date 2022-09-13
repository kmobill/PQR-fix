<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $ticketidg = $_POST['ticketidg'];
    $producto = $_POST['producto'];
    $tipoincidencia = $_POST['tipoincidencia'];
    $stincidencia = $_POST['stincidencia'];
    $area = $_POST['area'];
    $tiemporespuesta = $_POST['tiemporespuesta'];
    $tipotiempo = $_POST['tipotiempo'];
    $numeroticket = $_POST['numeroticket'];

    //echo gettype($numeroticket);

    if(str_contains(":", $numeroticket)){
        $numeroticket = explode(":",$numeroticket)[1];
        $numeroticket = (int)$numeroticket;
    }
    else {
        $numeroticket = explode("#",$numeroticket)[1];
        $numeroticket = (int)$numeroticket;
    }

    //echo gettype($numeroticket);
    
    

    /*$numeroticket = explode(":",$numeroticket);
    $numeroticket = $numeroticket;
    $numeroticket = (int)$numeroticket;*/

    $idcoment = $_POST['idcoment'];
    $agente = $_POST['agente'];
    $comentarios = $_POST['comentarios'];

    /*echo $numeroticket."\n";
    echo $ticketidg."\n";
    echo $producto."\n";
    echo $tipoincidencia."\n";
    echo $stincidencia."\n";
    echo $area."\n";
    echo $tiemporespuesta."\n";
    echo $tipotiempo."\n";*/


    $query0 = mysqli_query($conn, "
        update gestiontickets 
            set createdate = now(), 
            producto = 'ATM', 
            tipoincidencia = 'Requerimientos',
            stincidencia = 'Solicitud de cámaras de seguridad',
            area = 'Operaciones',
            tiemporespuesta = '2',
            tipotiempo = 'dias',
            asesor = 'TODOS'
        where id = 'F2FC905A-9676-ECFB-BFB4-E333AE57A25C'
    ");

    

    /*$query0 = mysqli_query($conn, "
        update gestiontickets 
            set createdate = now(), 
            producto = '" .utf8_decode($producto). "', 
            tipoincidencia = '" .utf8_decode($tipoincidencia). "',
            stincidencia = '" .utf8_decode($stincidencia). "',
            area = '" .$area. "',
            tiemporespuesta = '" .$tiemporespuesta. "',
            tipotiempo = '" .$tipotiempo. "',
            asesor = 'TODOS'
        where id = '" .$ticketidg. "'
    ");*/

    /*echo "test";*/

    /*$query0 = mysqli_query($conn, "
        update gestiontickets 
            set createdate = now(), 
            producto = '".$producto."', 
            tipoincidencia = '".$tipoincidencia."',
            stincidencia = '".$stincidencia."',
            area = '".$area."',
            tiemporespuesta = '".$tiemporespuesta."',
            tipotiempo = '".$tipotiempo."',
            asesor = 'TODOS'
        where id = '".$ticketidg."'
    ");*/

    /*$query0 = mysqli_query($conn, "Select * from gestiontickets");*/

    /*echo "test".$query0;*/
    //echo json_encode($query0);

    if ($query0 == true){
        /*Insert comentarios*/
        $query1 = mysqli_query($conn, 
            "insert into comentariostickets(id, ticketid, numberticket, comentario, tmstmp, agent)
            values ('" .$idcoment. "', '" .$ticketidg. "', '" .$numeroticket. "', '" .utf8_decode($comentarios). "', now(), '" .utf8_decode($agente). "')
        ");

        $arrayresult['Result'] = "OK";
        echo json_encode($arrayresult);
    }
    else {
        $arrayresult['Result'] = "ERROR";
        echo json_encode($arrayresult);
    }
    mysqli_close($conn);
