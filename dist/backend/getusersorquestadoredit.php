<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $pasignado = $_POST['pasignado'];

    $query0 = "select name, mail from users where usertype = 'orquestador' and name in ($pasignado)";

    $registros = mysqli_query($conn, $query0);
    $rows = array();

    if (mysqli_num_rows($registros)){
        $num = 0;
        $records = array();
        while($myRow = mysqli_fetch_array($registros)){
            $rows[] = $myRow;
        }
        if (is_array($rows) || is_object($rows)){
            foreach ($rows as $registro){
                $resulttikets[$num][] = $registro['name'];
                $resulttikets[$num][] = $registro['mail'];
                $records["data"][] = $resulttikets[$num];
                $num++;
            }
        }
        echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
    else {
        $resulttikets[0][] = "Sin archivo";
        $resulttikets[0][] = "Sin archivo";
	$records["data"][] = $resulttikets[0];
	echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }

    mysqli_close($conn);
?>
