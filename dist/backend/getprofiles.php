<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    /*$query = mysqli_query($conn, "select * from users where usertype = 'administrador'");
    $count0 = mysqli_num_rows($query);
    if ($count0 > 0){
        $query0 = mysqli_query($conn, "select usertype from profiles where usertype <> 'administrador' order by level asc");
        $rows = array();
    }
    else {*/
        $query0 = mysqli_query($conn, "select usertype from profiles order by level asc");
        $rows = array();
    //}
    mysqli_close($conn);
?>

<select disabled class="form-control form-control-lg form-select" name="perfil-usuario" id="perfil-usuario" autocomplete="off">
    <option selected disabled></option>
    <?php $num = 0; ?>
    <?php while($myRow = mysqli_fetch_array($query0)){;?>
    <?php $rows[] = $myRow;?>
    <?php } ?>
    <?php if (is_array($rows) || is_object($rows)){;?>
    <?php foreach ($rows as $registros) {$num++;?>
        <option value="<?php echo $registros['usertype']; ?>"><?php echo $registros['usertype']; ?></option>
    <?php }}?>
</select>
