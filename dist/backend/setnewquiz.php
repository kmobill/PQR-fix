<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    $id = $_POST['id'];
    $ticketid = $_POST['ticketid'];
    $cedula = $_POST['cedula'];
    $nombres = $_POST['nombres'];
    $mail = $_POST['mail'];
    $phone = $_POST['phone'];
    $numeroticket = $_POST['numeroticket'];
    $respuestap = $_POST['respuestap'];
    $respuestacasono = $_POST['respuestacasono'];
    $nps = $_POST['nps'];
    $comentariosnps = $_POST['comentariosnps'];

    $pregunta = '¿Su requerimiento ha sido solventado?';
    
    /*Insert gestion tickets*/
    $query0 = mysqli_query($conn, 
        "insert into encuestas(id, ticketid, cedula, nombres, correo, telefono, nticket, pregunta, respuesta, respuestacasono, nps, comentariosnps, createdate)
        values ('" .$id. "', '" .$ticketid. "', '" .$cedula. "', '" .utf8_decode($nombres). "', '" .$mail. "', '" .$phone. "', '" .$numeroticket. "', '" .utf8_decode($pregunta). "', '" .utf8_decode($respuestap). "', '" .utf8_decode($respuestacasono). "', '" .$nps. "', '" .utf8_decode($comentariosnps). "', now())
    ") or die(mysqli_error($conn));
    if ($query0 == true){
        $arrayresult['Result'] = "OK";
        echo json_encode($arrayresult);
    }
    else {
        $arrayresult['Result'] = "ERROR";
        echo json_encode($arrayresult);
    }
    mysqli_close($conn);
?>
