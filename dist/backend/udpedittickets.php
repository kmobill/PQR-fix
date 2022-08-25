<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    $ticketidg = $_POST['ticketidg'];
    $producto = $_POST['producto'];
    $tipoincidencia = $_POST['tipoincidencia'];
    $stincidencia = $_POST['stincidencia'];
    $area = $_POST['area'];
    $tiemporespuesta = $_POST['tiemporespuesta'];
    $tipotiempo = $_POST['tipotiempo'];
    $numeroticket = $_POST['numeroticket'];

    $numeroticket = explode(":",$numeroticket);
    $numeroticket = $numeroticket[1];
    $numeroticket = (int)$numeroticket;
    $idcoment = $_POST['idcoment'];
    $agente = $_POST['agente'];
    $comentarios = $_POST['comentarios'];

    $query0 = mysqli_query($conn, "
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
    ");
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
?>
