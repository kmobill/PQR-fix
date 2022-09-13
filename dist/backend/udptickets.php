<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $ticketidg = $_POST['ticketidg'];
    $estadog = $_POST['estadog'];
    $agente = $_POST['agente'];
    $profileid = $_POST['profileid'];
    $idcoment = $_POST['idcoment'];
    $numeroticket = $_POST['numeroticket'];
    $comentarios = $_POST['comentarios'];

    if(str_contains(":", $numeroticket)){
        $numeroticket = explode(":",$numeroticket)[1];
        $numeroticket = (int)$numeroticket;
    }
    else {
        $numeroticket = explode("#",$numeroticket)[1];
        $numeroticket = (int)$numeroticket;
    }

    /*$numeroticket = explode(":",$numeroticket);
    $numeroticket = $numeroticket;
    $numeroticket = (int)$numeroticket;*/

    $idtime = $_POST["idtime"];
    $maxtime = $_POST["maxtime"];
    $gestime = $_POST["gestime"];
    $exctime = $_POST["exctime"];

    $query0 = mysqli_query($conn, "
        update gestiontickets set statet = '" .$estadog. "', asesor = '" .$agente. "', asesorid = '" .$profileid. "' where id = '" .$ticketidg. "'
    ");
    if ($query0 == true){
        /*Insert comentarios*/
        $query1 = mysqli_query($conn, 
            "insert into comentariostickets(id, ticketid, numberticket, comentario, tmstmp, agent)
            values ('" .$idcoment. "', '" .$ticketidg. "', '" .$numeroticket. "', '" .$comentarios. "', now(), '" .$agente. "')
        ");
        /*Insert time*/
        $query2 = mysqli_query($conn, 
            "insert into tiempostickets(id, ticketid, tiempomaximo, tiempogestion, tiempoexcedido, agent, tmstmp)
            values ('" .$idtime. "', '" .$ticketidg. "', '" .$maxtime. "', '" .$gestime. "', '" .$exctime. "', '" .$agente. "', now())
        ");

        $arrayglogin['Result'] = "OK";
        echo json_encode($arrayglogin);
    }
    else {
        $arrayglogin['Result'] = "ERROR";
        echo json_encode($arrayglogin);
    }
    mysqli_close($conn);
