<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $query0 = mysqli_query($conn, "select area from catalogoareas");
    $rows = array();
    mysqli_close($conn);
?>

<select disabled class="form-control form-control-lg form-select" name="area-usuario" id="area-usuario" autocomplete="off">
    <option selected disabled></option>
    <?php $num = 0; ?>
    <?php while($myRow = mysqli_fetch_array($query0)){;?>
    <?php $rows[] = $myRow;?>
    <?php } ?>
    <?php if (is_array($rows) || is_object($rows)){;?>
    <?php foreach ($rows as $registros) {$num++;?>
        <option value="<?php echo $registros['area']; ?>"><?php echo $registros['area']; ?></option>
    <?php }}?>
</select>
