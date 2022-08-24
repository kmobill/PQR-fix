<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $query0 = mysqli_query($conn, "select agencia from catalogoagencias");
    $rows = array();
    mysqli_close($conn);
?>

<select class="form-control form-control-lg form-select" name="agencia-usuario" id="agencia-usuario" autocomplete="off">
    <option selected disabled></option>
    <?php $num = 0; ?>
    <?php while($myRow = mysqli_fetch_array($query0)){;?>
    <?php $rows[] = $myRow;?>
    <?php } ?>
    <?php if (is_array($rows) || is_object($rows)){;?>
    <?php foreach ($rows as $registros) {$num++;?>
        <option value="<?php echo $registros['agencia']; ?>"><?php echo $registros['agencia']; ?></option>
    <?php }}?>
</select>
