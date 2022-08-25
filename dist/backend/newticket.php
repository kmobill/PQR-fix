<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $id = $_POST['id'];
    $cedula = $_POST['cedula'];
    $nombres = $_POST['nombres'];
    $mail = $_POST['mail'];
    $phone = $_POST['phone'];
    $numeroticket = $_POST['numeroticket'];
    $ticketid = $_POST['ticketid'];
    $producto = $_POST['producto'];
    $tipoincidencia = $_POST['tipoincidencia'];
    $stincidencia = $_POST['stincidencia'];
    $area = $_POST['area'];
    $canal = $_POST['canal'];
    $redsocial = $_POST['redsocial'];
    $agencia = $_POST['agencia'];
    $asesor = $_POST['asesor'];
    $asesorid = $_POST['asesorid'];
    $comentarios = $_POST['comentarios'];
    $tiemporespuesta = $_POST['tiemporespuesta'];   
    $tipotiempo = $_POST['tipotiempo'];
    $createby = $_POST["createby"];
    $idcoment = $_POST["idcoment"];
    $idcliente = $_POST["idcliente"];
    
    /*Insert gestion tickets*/
    $query0 = mysqli_query($conn, 
        "insert into gestiontickets(id, cedula, nombres, mail, phone, numeroticket, ticketid, producto, tipoincidencia, stincidencia, canal, redsocial, agencia, comentarioinicial, area, tiemporespuesta, tipotiempo, createdate, createby, statet, asesor, asesorid)
        values ('" .$id. "', '" .$cedula. "', '" .$nombres. "', '" .$mail. "', '" .$phone. "', '" .$numeroticket. "', '" .$ticketid. "', '" .$producto. "', '" .$tipoincidencia. "', '" .$stincidencia. "', '" .$canal. "', '" .$redsocial. "', '" .$agencia. "', '" .$comentarios. "', '" .$area. "', '" .$tiemporespuesta. "', '" .$tipotiempo. "', now(), '" .$createby. "', 'ABIERTO', '" .$asesor. "', '" .$asesorid. "')
    ");
    if ($query0 == true){
        /*Insert comentarios*/
        $query1 = mysqli_query($conn, 
            "insert into comentariostickets(id, ticketid, numberticket, comentario, tmstmp, agent)
            values ('" .$idcoment. "', '" .$id. "', '" .$numeroticket. "', '" .$comentarios. "', now(), '" .$asesor. "')
        ");

        /*Insert clientes*/
        $query2 = mysqli_query($conn, "select cedula from clients where cedula = '" .$cedula. "' limit 1");
        $count2 = mysqli_num_rows($query2);
        if ($count2 == 0){
            $query3 = mysqli_query($conn, 
                "insert into clients(id, cedula, name, mail, phone, createdate)
                values ('" .$idcliente. "', '" .$cedula. "', '" .$nombres. "', '" .$mail. "', '" .$phone. "', now())
            ");
        }

        $arrayresult['Result'] = "OK";
        echo json_encode($arrayresult);
    }
    else {
        $arrayresult['Result'] = "ERROR";
        echo json_encode($arrayresult);
    }
    mysqli_close($conn);
?>
