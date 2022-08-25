<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    $ticketidg = $_POST['ticketidg'];
    $estadog = $_POST['estadog'];
    $agente = $_POST['agente'];
    $idcoment = $_POST['idcoment'];
    $numeroticket = $_POST['numeroticket'];
    $comentarios = $_POST['comentarios'];

    $numeroticket = explode(":",$numeroticket);
    $numeroticket = $numeroticket[1];
    $numeroticket = (int)$numeroticket;

    $query0 = mysqli_query($conn, "
        update gestiontickets set createdate = now(), statet = '" .$estadog. "' where id = '" .$ticketidg. "'
    ");
    if ($query0 == true){
        /*Insert comentarios*/
        $query1 = mysqli_query($conn, 
            "insert into comentariostickets(id, ticketid, numberticket, comentario, tmstmp, agent)
            values ('" .$idcoment. "', '" .$ticketidg. "', '" .$numeroticket. "', '" .utf8_decode($comentarios). "', now(), '" .utf8_decode($agente). "')
        ");

        $arrayglogin['Result'] = "OK";
        echo json_encode($arrayglogin);
    }
    else {
        $arrayglogin['Result'] = "ERROR";
        echo json_encode($arrayglogin);
    }
    mysqli_close($conn);
?>
