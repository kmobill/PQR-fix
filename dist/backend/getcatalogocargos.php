<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $area = $_POST["area"];

    $query0 = mysqli_query($conn, "select cargo from catalogocargos where area = '" .$area. "'");
    $rows = array();
    mysqli_close($conn);
?>

<select disabled class="form-control form-control-lg form-select" name="cargo-usuario" id="cargo-usuario" autocomplete="off">
    <option selected disabled></option>
    <?php $num = 0; ?>
    <?php while($myRow = mysqli_fetch_array($query0)){;?>
    <?php $rows[] = $myRow;?>
    <?php } ?>
    <?php if (is_array($rows) || is_object($rows)){;?>
    <?php foreach ($rows as $registros) {$num++;?>
        <option value="<?php echo $registros['cargo']; ?>"><?php echo $registros['cargo']; ?></option>
    <?php }}?>
</select>
