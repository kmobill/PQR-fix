<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $fechainicio = $_POST["fechainicio"];
    $fechafin = $_POST["fechafin"];
    $producto = $_POST["producto"];
    $incidencia = $_POST["incidencia"];

    switch ($_GET["action"]){
        case 'inicio': 
            $query0 = "
                    select
                        count(*) as cantidad,
                        convert(createdate, date) as fecha
                    from gestiontickets 
                    where convert(createdate, date) >= '" .$fechainicio."'
                    and convert(createdate, date) <= '" .$fechafin. "'
                    group by convert(createdate, date)
                ";

                $registros = mysqli_query($conn, $query0);

            if (mysqli_num_rows($registros)){
                while ($row = mysqli_fetch_array($registros)) {
                    $response[] = array('name' => $row['fecha'], 'y' => intval($row['cantidad']));
                }
                echo json_encode($response);
            }
            else {
                $response[] = array('name' => 'Sin Datos', 'y' => intval(0), 'drilldown' => 'Sin Datos');
                echo json_encode($response);
            }
        break;
        case 'fechas': 
            $query0 = "
                    select
                        count(*) as cantidad,
                        convert(createdate, date) as fecha
                    from gestiontickets 
                    where convert(createdate, date) >= '" .$fechainicio."'
                    and convert(createdate, date) <= '" .$fechafin. "'
                    group by convert(createdate, date)
                ";

                $registros = mysqli_query($conn, $query0);

            if (mysqli_num_rows($registros)){
                while ($row = mysqli_fetch_array($registros)) {
                    $response[] = array('name' => $row['fecha'], 'y' => intval($row['cantidad']));
                }
                echo json_encode($response);
            }
            else {
                $response[] = array('name' => 'Sin Datos', 'y' => intval(0), 'drilldown' => 'Sin Datos');
                echo json_encode($response);
            }
        break;
        case 'productos':
            if ($producto == "TODOS"){
                $query0 = "
                    select
                        count(*) as cantidad,
                        convert(createdate, date) as fecha,
                        producto
                    from gestiontickets 
                    where convert(createdate, date) >= '" .$fechainicio."'
                    and convert(createdate, date) <= '" .$fechafin. "'
                    group by convert(createdate, date), producto
                ";

                $registros = mysqli_query($conn, $query0);

                if (mysqli_num_rows($registros)){
                    while ($row = mysqli_fetch_array($registros)) {
                        $response[] = array('name' => $row['fecha'] . ' ' . $row['producto'], 'y' => intval($row['cantidad']));
                    }
                    echo json_encode($response);
                }
                else {
                    $response[] = array('name' => 'Sin Datos', 'y' => intval(0), 'drilldown' => 'Sin Datos');
                    echo json_encode($response);
                }
            }
            else {
                $query0 = "
                    select
                        count(*) as cantidad,
                        convert(createdate, date) as fecha,
                        producto
                    from gestiontickets 
                    where convert(createdate, date) >= '" .$fechainicio."'
                    and convert(createdate, date) <= '" .$fechafin. "'
                    and producto like '%" .$producto."%'
                    group by convert(createdate, date), producto
                ";

                $registros = mysqli_query($conn, $query0);

                if (mysqli_num_rows($registros)){
                    while ($row = mysqli_fetch_array($registros)) {
                        $response[] = array('name' => $row['fecha'] . ' ' . $row['producto'], 'y' => intval($row['cantidad']));
                    }
                    echo json_encode($response);
                }
                else {
                    $response[] = array('name' => 'Sin Datos', 'y' => intval(0), 'drilldown' => 'Sin Datos');
                    echo json_encode($response);
                }
            }
        break;
        case 'incidencias':
            if ($incidencia == "TODOS"){
                $query0 = "
                    select
                        count(*) as cantidad,
                        convert(createdate, date) as fecha,
                        tipoincidencia
                    from gestiontickets 
                    where convert(createdate, date) >= '" .$fechainicio."'
                    and convert(createdate, date) <= '" .$fechafin. "'
                    group by convert(createdate, date), tipoincidencia
                ";

                $registros = mysqli_query($conn, $query0);

                if (mysqli_num_rows($registros)){
                    while ($row = mysqli_fetch_array($registros)) {
                        $response[] = array('name' => $row['fecha'] . ' ' . $row['tipoincidencia'], 'y' => intval($row['cantidad']));
                    }
                    echo json_encode($response);
                }
                else {
                    $response[] = array('name' => 'Sin Datos', 'y' => intval(0), 'drilldown' => 'Sin Datos');
                    echo json_encode($response);
                }
            }
            else {
                $query0 = "
                    select
                        count(*) as cantidad,
                        convert(createdate, date) as fecha,
                        tipoincidencia
                    from gestiontickets 
                    where convert(createdate, date) >= '" .$fechainicio."'
                    and convert(createdate, date) <= '" .$fechafin. "'
                    and tipoincidencia like '%" .$incidencia."%'
                    group by convert(createdate, date), tipoincidencia
                ";

                $registros = mysqli_query($conn, $query0);

                if (mysqli_num_rows($registros)){
                    while ($row = mysqli_fetch_array($registros)) {
                        $response[] = array('name' => $row['fecha'] . ' ' . $row['tipoincidencia'], 'y' => intval($row['cantidad']));
                    }
                    echo json_encode($response);
                }
                else {
                    $response[] = array('name' => 'Sin Datos', 'y' => intval(0), 'drilldown' => 'Sin Datos');
                    echo json_encode($response);
                }
            }
        break;
        case 'analiticainicio':
            $query0 = "
                select
                    count(*) as cantidad,
                    convert(createdate, date) as fecha,
                    tipoincidencia
                from gestiontickets 
                where convert(createdate, date) >= '" .$fechainicio."'
                and convert(createdate, date) <= '" .$fechafin. "'
                group by convert(createdate, date), tipoincidencia
            ";

            $registros = mysqli_query($conn, $query0);

            if (mysqli_num_rows($registros)){
                while ($row = mysqli_fetch_array($registros)) {
                    $response[] = array('name' => $row['fecha'] . ' ' . $row['tipoincidencia'], 'y' => intval($row['cantidad']));
                }
                echo json_encode($response);
            }
            else {
                $response[] = array('name' => 'Sin Datos', 'y' => intval(0));
                echo json_encode($response);
            }
        break;
    }
    mysqli_close($conn);
?>
