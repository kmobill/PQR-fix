<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $query0 = mysqli_query($conn, "select name, mail, area, agencia from users where usertype = 'supervisor' and agencia_callcenter <> 'callcenter'");
    $rows = array();
    mysqli_close($conn);
?>

<select disabled class="form-control form-control-lg form-select" name="supervisor-area" id="supervisor-area" autocomplete="off">
    <option selected disabled></option>
    <?php $num = 0; ?>
    <?php while($myRow = mysqli_fetch_array($query0)){;?>
    <?php $rows[] = $myRow;?>
    <?php } ?>
    <?php if (is_array($rows) || is_object($rows)){;?>
    <?php foreach ($rows as $registros) {$num++;?>
        <option value="<?php echo $registros['name'] . " - " . $registros['mail']; ?>"><?php echo $registros['name']?></option>
    <?php }}?>
</select>
