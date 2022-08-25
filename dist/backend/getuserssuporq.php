<?php
    date_default_timezone_set('America/Guayaquil');
    require_once "globalconnection.php";
    $conn = conectar();
    $conn->set_charset("utf8");

    $profileid = $_POST['profileid'];

    $query0 = mysqli_query($conn, "select name, mail, area, agencia, id from users where usertype in ('supervisor','orquestador','administrador') and id <> '". $profileid ."' and agencia_callcenter <> 'callcenter' order by name asc");
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
        <option value="<?php echo $registros['name'] . " - " . $registros['mail'] . " - " . $registros['id']; ?>"><?php echo $registros['name']?></option>
    <?php }}?>
</select>
