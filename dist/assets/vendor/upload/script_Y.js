$('#tablaDeRegistros').load('tabla.php');


$('#btnAgregar').click(function() {
   if ($("#txtNombre").val().length == 0 || $("#txtApellido").val().length == 0 || $("#txtCedula").val().length == 0 || $("#txtDireccion").val().length == 0  ) {
        $(".validar").fadeTo(3000, 500).slideUp(500, function(){
            $(".validar").slideUp(500);
        });
    } else {
        var registros=$('#frmSave').serialize();
        $.ajax({
            type: "POST",
            url: "insertar.php",
            data: registros,
            success:function(r) {
                if (r==1) {
                    $('#tablaDeRegistros').load('tabla.php');
                    $("#txtNombre").val("");
                    $("#txtApellido").val("");
                    $("#txtCedula").val("");
                    $("#txtCorreo").val("");
                    $(".inserto").fadeTo(3000, 500).slideUp(500, function(){
                        $(".inserto").slideUp(500);
                    });
                } else {
                    $(".error").fadeTo(3000, 500).slideUp(500, function(){
                        $(".error").slideUp(500);
                    });
                }
            }
        });
        return false;   
    }
});

$("#btnEditar").click(function() {
        console.log("Entro aqui");
    $.ajax({
        type: "POST",
        url: "edicion.php",
        data: $(this).attr("id"),
        success:function(r) {
            $("#txtNombre").val(r.nombre);
            $("#txtApellido").val(r.apellido);
            $("#txtCedula").val(r.cedula);
            $("#txtCorreo").val(r.correo);
            document.getElementById("#btnActualizar").style.display = "inline";
            document.getElementById("#btnAgregar").style.display = "none";
        }
    });
});

$("#btnActualizar").click(function() {
   if ($("#txtNombre").val().length == 0 || $("#txtApellido").val().length == 0 || $("#txtCedula").val().length == 0 || $("#txtDireccion").val().length == 0  ) {
        $(".validar").fadeTo(3000, 500).slideUp(500, function(){
            $(".validar").slideUp(500);
        });
    } else {
        var registros=$('#frmSave').serialize();
        $.ajax({
            type: "POST",
            url: "actualizar.php",
            data: registros,
            success:function(r) {
                if (r==1) {
                    $('#tablaDeRegistros').load('tabla.php');
                    $("#txtNombre").val("");
                    $("#txtApellido").val("");
                    $("#txtCedula").val("");
                    $("#txtCorreo").val("");
                    $(".inserto").fadeTo(3000, 500).slideUp(500, function(){
                        $(".inserto").slideUp(500);
                    });
                } else {
                    $(".error").fadeTo(3000, 500).slideUp(500, function(){
                        $(".error").slideUp(500);
                    });
                }
            }
        });
        return false;   
    }
});

/*------Llamar--------*/
$("#tablaDeRegistros").on("click", ".llamar", function(){
    var id = $(this).attr("id");
    console.log(id);
        $.ajax ({
            type: "POST",
            url: 'Llamada.php',
            data: {id:id},
            success:function(data){
                    console.log("Si");
            }   
        });
});
