<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    $id = $_POST['id'];
    $cedula = $_POST['cedula'];
    $nombresc = $_POST['nombresc'];
    $correoc = $_POST['correoc'];
    $telefonoc = $_POST['telefonoc'];
    $comentariosc = $_POST['comentariosc'];
    $sendto = $_POST['sendto'];
    
    /*Insert gestion tickets*/
    $query0 = mysqli_query($conn, 
        "insert into contactform(id, cedula, nombresc, correoc, telefonoc, comentariosc, seenvioa, createdate)
        values ('" .$id. "', '" .$cedula. "', '" .utf8_decode($nombresc). "', '" .$correoc. "', '" .$telefonoc. "', '" .$comentariosc. "', '" .$sendto. "', now())
    ");

    /*Insert clientes*/
    $query2 = mysqli_query($conn, "select cedula from clients where cedula = '" .$cedula. "' limit 1");
    $count0 = mysqli_num_rows($query2);
    if ($count0 == 0){
        $query3 = mysqli_query($conn, 
            "insert into clients(id, cedula, name, mail, phone, createdate)
            values ('" .$id. "', '" .$cedula. "', '" .utf8_decode($nombresc). "', '" .$correoc. "', '" .$telefonoc. "', now())
        ");
    }
    mysqli_close($conn);
?>
