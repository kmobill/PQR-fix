<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $id = $_POST['id'];
    $userid = $_POST['userid'];
    $userpassword = $_POST['userpassword'];
    $hash = password_hash($userpassword, PASSWORD_DEFAULT);
    $username = $_POST['username'];
    $usermail = $_POST['usermail'];
    $userarea = $_POST['userarea'];
    $userpic = $_POST['userpic'];
    $usertype = $_POST['usertype'];
    $useragencia = $_POST['useragencia'];
    $usercargo = $_POST['usercargo'];
    $agencia_callcenter = $_POST['agencia_callcenter'];
    $vEditUser = $_POST['vEditUser'];
    /*$usertipoproducto = $_POST['usertipoproducto'];
    $usertipoincidencia = $_POST['usertipoincidencia'];
    $userstincidencia = $_POST['userstincidencia'];*/

    if ($vEditUser == "editado"){
        $query0 = mysqli_query($conn, 
            "update users 
                set password = '" .$hash. "', 
                    isdefaultpasswd = 1, 
                    name = '" .$username. "', 
                    mail = '" .$usermail. "', 
                    area = '" .$userarea. "', 
                    cargo = '" .$usercargo. "', 
                    agencia = '" .$useragencia. "', 
                    userpic = '" .$userpic. "', 
                    usertype = '" .$usertype. "',
                    userid = '" .$userid. "',
                    agencia_callcenter = '" .$agencia_callcenter. "'
                where id = '" .$id. "'
            ");
    }
    else {
        $query0 = mysqli_query($conn, 
            "insert into users(id, userid, password, isdefaultpasswd, agencia_callcenter, name, mail, area, cargo, agencia, userpic, createdate, usertype, state) 
            values ('" .$id. "', '" .$userid. "', '" .$hash. "' , 1, '". $agencia_callcenter . "', '" .$username. "' ,'" .$usermail. "' , '" .$userarea. "', '" .$usercargo. "', '" .$useragencia. "', '" .$userpic. "', now(), '" .$usertype. "', 1)
        ");
    }

    if ($query0 == true){
        $arrayresult['Result'] = "OK";
        echo json_encode($arrayresult);
    }
    else {
        $arrayresult['Result'] = "ERROR";
        echo json_encode($arrayresult);
    }
    mysqli_close($conn);
?>
