<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");


    $ticketid = $_POST["ticketid"];

    $query0 = mysqli_query($conn, "
        select 
            case when tiempogestion is null then 0 else sum(tiempogestion) end as tiempogestion
        from tiempostickets 
        where ticketid = '" .$ticketid. "'
    ");
    $count0 = mysqli_num_rows($query0);
    $result0 = mysqli_fetch_array($query0);
    $arrayglogin['tiempogestion'] = $result0['tiempogestion'];
    echo json_encode($arrayglogin);
    mysqli_close($conn);
?>
