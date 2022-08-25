<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $area = $_POST['area'];

    $query0 = mysqli_query($conn, "select name, mail from users where usertype = 'orquestador' and area = '" .$area. "'");
    $rows = array();
    mysqli_close($conn);
?>

<select id="slimsorquestador" autocomplete="off">
    <?php $num = 0; ?>
    <?php while($myRow = mysqli_fetch_array($query0)){;?>
    <?php $rows[] = $myRow;?>
    <?php } ?>
    <?php if (is_array($rows) || is_object($rows)){;?>
    <?php foreach ($rows as $registros) {$num++;?>
        <option value="<?php echo $registros['name'] . " - " . $registros['mail']; ?>"><?php echo $registros['name'] . " - " . $registros['mail']; ?></option>
    <?php }}?>
</select>
