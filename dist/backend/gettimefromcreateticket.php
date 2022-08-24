<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    $ticketid = $_POST["ticketid"];

    //$query = mysqli_query($conn, "select tiempogestion from tiempostickets where ticketid = '" .$ticketid. "'");
    //$count = mysqli_num_rows($query);
    
    //if ($count == 0){
        $query0 = mysqli_query($conn, "
            select TIMESTAMPDIFF(SECOND, createdate, now()) as tiempogestion from gestiontickets where id = '" .$ticketid. "' limit 1
        ");
        $result0 = mysqli_fetch_array($query0);
        $arrayglogin['tiempogestion'] = $result0['tiempogestion'];
        echo json_encode($arrayglogin);
    /*}
    else {
        $query0 = mysqli_query($conn, "
            select 
                case when tiempogestion is null then 0 else sum(tiempogestion) end as tiempogestion
            from tiempostickets 
            where ticketid = '" .$ticketid. "'
        ");
        $result0 = mysqli_fetch_array($query0);
        $arrayglogin['tiempogestion'] = $result0['tiempogestion'];
        echo json_encode($arrayglogin);
    }*/
    mysqli_close($conn);
?>
