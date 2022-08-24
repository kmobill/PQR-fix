<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    $id = $_POST["id"];

    $query0 = mysqli_query($conn, "select nticket from generatetickets where id = '" .$id. "'");
    $count0 = mysqli_num_rows($query0);
    $result0 = mysqli_fetch_array($query0);
    $arrayglogin['NTicket'] = $result0['nticket'];
    echo json_encode($arrayglogin);
    mysqli_close($conn);
?>
