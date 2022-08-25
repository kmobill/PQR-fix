<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $rangoinicio = $_POST['rangoinicio'];
    $rangofin = $_POST['rangofin'];
    $profileid = $_POST['profileid'];
    $areaid = $_POST['areaid'];
    $statet = $_POST['statet'];
    $tipousuario = $_POST['tipousuario'];

    if ($tipousuario == "administrador"){
        $query0 = "
            select
                count(*) as Cantidad
            from gestiontickets
            where createdate >= '" .$rangoinicio. "' and createdate < '" .$rangofin. "'
                and statet = ('" .$statet. "')
            order by createdate desc
        ";
    }
    else {
        $query0 = "
            select
                count(*) as Cantidad
            from gestiontickets
            where createdate >= '" .$rangoinicio. "' and createdate < '" .$rangofin. "'
                and asesorid in ('" .$profileid. "', 'TODOS')
                and area = '" .$areaid. "'
                and statet = ('" .$statet. "')
            order by createdate desc
        ";
    }

    $registros = mysqli_query($conn, $query0);
    $result0 = mysqli_fetch_array($registros);
    $arrayglogin['Cantidad'] = $result0['Cantidad'];
    echo json_encode($arrayglogin);
    mysqli_close($conn);
?>
