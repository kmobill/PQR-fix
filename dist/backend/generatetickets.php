<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    $id = $_POST['id'];
       
    /*$query0 = mysqli_query($conn, 
        "insert into generatetickets(id, createdate)
        values ('" .$id. "', now())
    ");*/

    $consulta = mysqli_query($conn, "select max(numeroticket) as Codigo from gestiontickets limit 1");
    $consulta = mysqli_fetch_array($consulta, MYSQLI_ASSOC);

    $codigo = (empty($consulta['Codigo'])?1:$consulta['Codigo'] += 1);
    //echo 'El codigo actual es: '.$codigo;
    
    //$consulta = mysqli_query($conn, "insert into generatetickets (id, nticket, createdate) VALUES ('" .$id. "', '" .$codigo. "', now())");
    //if(!$consulta){
    //    die('Error');
    //}
    //else {
    //    $query0 = mysqli_query($conn, "select nticket from generatetickets where id = '" .$id. "'");
    //    $count0 = mysqli_num_rows($query0);
    //    $result0 = mysqli_fetch_array($query0);
        $arrayglogin['NTicket'] = $codigo;
        echo json_encode($arrayglogin);
    //}
    mysqli_close($conn);
?>
