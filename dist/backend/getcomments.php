<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $ticketidg = $_POST['ticketidg'];

    $query0 = "
        /*select
            comentario,
            tmstmp,
            agent
        from comentariostickets
        where ticketid = '" .$ticketidg. "'
        order by tmstmp desc*/
 	select
		comentario,
    		tmstmp,
		agent
	from comentariostickets
	where ticketid = '" .$ticketidg. "'
		union
	select
		case
		    	when respuesta = 'NO' then CONCAT('Comentario Encuesta NO:', respuestacasono) 
			        else CONCAT('Comentario Encuesta NPS: ', comentariosnps)
		end,
    		createdate,
    		'CLIENTE'
	from `encuestas`
	WHERE respuesta in ('SI','NO')
	and ticketid = '" .$ticketidg. "'
    ";

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
                $resulttikets[$num][] = $registro['tmstmp'];
                $resulttikets[$num][] = $registro['comentario'];
                $resulttikets[$num][] = $registro['agent'];
                $records["data"][] = $resulttikets[$num];
                $num++;
            }
        }
        echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
    else {
        $resulttikets[0][] = "Sin registro";
        $resulttikets[0][] = "Sin registro";
        $resulttikets[0][] = "Sin registro";
        $records["data"][] = $resulttikets[0];
        echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
    mysqli_close($conn);
?>
