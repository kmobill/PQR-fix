<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    $query0 = "
        select
            id,
            name,
            mail,
            usertype,
            case when state = 1 then 'Activo' else 'Inactivo' end as state,
            createdate, 
            '' as plus,
            '' as deletex,
            userid,
            area,
            agencia,
            agencia_callcenter as agcall
        from users
        where usertype <> 'su'
        order by createdate desc
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
                $resulttikets[$num][] = $registro['plus'];
                $resulttikets[$num][] = $registro['deletex'];
                $resulttikets[$num][] = $registro['name'];
                $resulttikets[$num][] = $registro['mail'];
                $resulttikets[$num][] = $registro['usertype'];
                $resulttikets[$num][] = $registro['state'];
                $resulttikets[$num][] = $registro['createdate'];
                $resulttikets[$num][] = $registro['id'];
                $resulttikets[$num][] = $registro['userid'];
                $resulttikets[$num][] = $registro['area'];
                $resulttikets[$num][] = $registro['agencia'];
                $resulttikets[$num][] = $registro['agcall'];
                $records["data"][] = $resulttikets[$num];
                $num++;
            } 
        }
        echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
    else {
        $resulttikets[0][] = "Sin archivo";
        $resulttikets[0][] = "Sin archivo";
        $resulttikets[0][] = "Sin archivo";
        $resulttikets[0][] = "Sin archivo";
        $resulttikets[0][] = "Sin archivo";
        $resulttikets[0][] = "Sin archivo";
        $resulttikets[0][] = "Sin archivo";
        $resulttikets[0][] = "Sin archivo";
        $resulttikets[0][] = "Sin archivo";
        $resulttikets[0][] = "Sin archivo";
        $resulttikets[0][] = "Sin archivo";
        $resulttikets[0][] = "Sin archivo";
        $records["data"][] = $resulttikets[0];
        echo json_encode($records, JSON_PARTIAL_OUTPUT_ON_ERROR | JSON_UNESCAPED_UNICODE);
    }
    mysqli_close($conn);
?>
