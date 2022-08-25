<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    $ticketid = $_POST['ticketid'];

    $query0 = mysqli_query($conn, "select * from encuestas where ticketid = '" .$ticketid. "'");
    $result0 = mysqli_fetch_array($query0);
    $count0 = mysqli_num_rows($query0);

    if ($count0 > 0){
        $arrayglogin['Existe'] = 'SI';
        echo json_encode($arrayglogin);
    }
    else {
        $arrayglogin['Existe'] = 'NO';
        echo json_encode($arrayglogin);
    }
    mysqli_close($conn);
?>
