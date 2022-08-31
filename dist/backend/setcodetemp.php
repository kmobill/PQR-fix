<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();

    $id = $_POST['id'];
    $mail = $_POST['mail'];
    $code = $_POST['code'];
    $userid = $_POST['uid'];

    $query0 = mysqli_query($conn, 
        "insert into tempcode(id, userid, mail, code, createdate)
        values ('" .$id. "', '" .$userid. "', '" .$mail. "', '" .$code. "', now())
    ");
    mysqli_close($conn);
