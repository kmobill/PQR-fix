var pname
var dtajaxuser

window.onload = function(){
    pname = localStorage.getItem("ProfileName")
    var ppicture = localStorage.getItem("ProfilePicture")
    if (ppicture == "account/pictureprofile/undefined" || ppicture == null || ppicture == undefined){
        ppicture = "account/pictureprofile/ico-usuario.png"
    }
    var pmail = localStorage.getItem("ProfileMail")
    var pusertype = localStorage.getItem("ProfileUserType")
    
    /*************************************************Notificaciones*/
    if (pusertype == "ingresador"){
        get_notifications("backend/getnotifications.php?action=ingresador", pname)
    }
    else {
        get_notifications("backend/getnotifications.php?action=noingresador", pname)
    }

    /*****************************************Valido tipo de usuario*/
    permissions_apps(pusertype)

    /*****************************************Cargo datos de usuario de usuario*/
    user_data(ppicture, pname, pmail, pusertype)

    $("#perfil-usuario").load("backend/getprofiles.php")
    $("#area-usuario").load("backend/getuserarea.php")
    $("#agencia-usuario").load("backend/getcatalogoagencias.php")

    dtajaxuser = $("#datatable-ajax-list-users").DataTable({
        processing: true,
        destroy: true,
        paging: true,
        searching: true,
        responsive: true,
        pageLength: 5,
          scrollX: true,
          info: false,
        dom: "Bfrtip",
        language: {
            url: 'assets/vendor/bootstrap/Spanish.json'
        },
        lengthMenu: [
            [5,10,25,50],
            ['5','10', '25', '50']
        ],
        ajax:{
            type: "POST",
            dataType: "json",
            url: "backend/getusers.php",
            data: {}
        },
        columnDefs: [
            {
                title: "Editar",
                targets: 0,
                data: null,
                defaultContent: '<button type="button" class="btn btn-primary btn-sm btn-activate-deactivate-user" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar usuario" name="btn-activate-deactivate-user"><i class="fa fa-users"></i></button>',
            },
            {
                title: "Eliminar",
                targets: 1,
                data: null,
                defaultContent: '<button type="button" class="btn btn-danger btn-sm btn-delete-user" data-bs-toggle="tooltip" data-bs-placement="top" title="Eliminar usuario" name="btn-delete-user"><i class="fa fa-times"></i></button>'
            },
            {title: "Nombres", targets: 2},
            {title: "Correo", targets: 3},
            {title: "Tipo Usuario", targets: 4},
            {title: "Estado", targets: 5},
            {title: "Fecha creación", targets: 6},
            {title: "Id", targets: 7, visible: false},
            {title: "UserId", targets: 8, visible: true},
        ],
        order: [[ 6, "desc" ]],
        initComplete: function(settings,json){
            if (json == null || json == ""){
                alert("Error")
            }
        }
    })
}

$("#profile-logout").click(function(){
    localStorage.removeItem("ProfileName")
    localStorage.removeItem("ProfilePicture")
    localStorage.removeItem("ProfileMail")
    localStorage.removeItem("ProfileUserType")
    Swal.fire({
        text: "Nos vemos luego!",
        icon: "success",
        buttonsStyling: !1,
        confirmButtonText: "OK",
        customClass: {
            confirmButton:"btn btn-primary"
        }
    })
})

$("#perfil-usuario").change(function(){
    $("#kt_new_user_submit").removeAttr("disabled")
})

$("#kt_create_user_submit").click(function(){
    $("#nusuario-user").removeAttr("disabled")
    $("#perfil-usuario").val("")
    $("#staticBackdropLabel").text("Nuevo usuario")
    $("#kt_new_user_submit").text("Continuar")
    vEditUser = "creado"
    vEditId = ""
})

var vEditUser = "creado"
var vEditId = ""

$('#datatable-ajax-list-users tbody').on('click', '.btn-activate-deactivate-user', function(){
    $("#kt_new_user_submit").removeAttr("disabled")
    var data = dtajaxuser.row($(this).parents('tr')).data()
    console.log(data)
    console.log(typeof dtajaxuser.row($(this).parents('tbody')))
    console.log(dtajaxuser.row($(this).parents('tbody')))
    
    $("#kt_create_user_submit").click()
    //$("#tipo-de-usuario").attr("disabled","disabled")
    $("#tipo-de-usuario").val(data[11])
    //$("#nusuario-user").attr("disabled","disabled")
    $("#nusuario-user").val(data[8])
    $("#nombrea-usuario").val(data[2])
    $("#correo-usuario").val(data[3])
    $("#perfil-usuario").val(data[4])
    //$("#area-usuario").val(data[9])
    $("#agencia-usuario").val(data[10])
    vEditId = data[7]
    $("#staticBackdropLabel").text("Editar usuario")
    $("#kt_new_user_submit").text("Editar")
    vEditUser = "editado"
    if (data[11] == "agencia"){
        if (data[4] == "orquestador"){
            $("#areaglb").removeAttr("hidden")
            $("#agenciaglb").removeAttr("hidden")
            setTimeout(getUserAreaEdit, 1000, data[9])
            $("#agencia-usuario").val(data[10])
	        $("#perfil-usuario").load("backend/getprofiles.php")
        }
        else {
            $("#area-usuario").val('')
            $("#agencia-usuario").val('')
            $("#areaglb").attr("hidden","hidden")
            $("#agenciaglb").attr("hidden","hidden")
            $("#perfil-usuario").load("backend/getprofiles.php")
        }
    }
    else {
        var selectList = "<select class='form-control form-control-lg form-select' name='personalasignado' id='personalasignado' autocomplete='off'>"
        selectList += "<option selected disabled></option>"
        selectList += "<option value='ingresador'>ingresador</option>"
        selectList += "</select>";
        $("#perfil-usuario").html(selectList)
    }
    setTimeout(getUserProfileEdit, 1000, data[4])
})

function getUserProfileEdit(data){
    $("#perfil-usuario").val(data)
}

function getUserAreaEdit(data){
    $("#area-usuario").val(data)
}

$('#datatable-ajax-list-users tbody').on('click', '.btn-delete-user', function(){
    var data = dtajaxuser.row($(this).parents('tr')).data()
    console.log(data)
    var useridgui = data[7]
    var usernameui = data[2]
    Swal.fire({
        text: "Esta seguro que desea eliminar el usuario " + usernameui + "?",
        icon: "success",
        buttonsStyling: !1,
        closeOnClickOutside: false,
        closeOnEsc: false,
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: "No, cancelar",
        customClass:{
            confirmButton: "btn btn-primary",
            cancelButton: "btn btn-danger"
        }
    }).then((result) => {
        if (result['isConfirmed']){
            $.post('backend/delusers.php',{
                useridgui: useridgui
            }).done(function(data, status){
                var parseData = JSON.parse(data)
                parseData = parseData.Result
                if (parseData == "OK"){
                    Swal.fire({
                        title: "", 
                        text: "Usuario eliminado con éxito", 
                        icon: "success",
                        buttonsStyling: !1,
                        confirmButtonText: "OK",
                        customClass: {
                            confirmButton: "btn btn-primary"
                        }
                    }).then((function(t){
                        dtajaxuser.ajax.reload()
                    }))
                }
                else {
                    Swal.fire({
                        title: "", 
                        text: "Ocurrio un error al eliminar el usuario, intentelo nuevamente", 
                        icon: "error",
                        button: {visible: false},
                        timer: 2000
                    }).then((function(t){
                        dtajaxuser.ajax.reload()
                    }))
                }
            })
        }
    })
})

window.onerror = function(message, source, lineno, colno, error) {
    if (message == "Uncaught TypeError: Cannot read property 'length' of undefined"){
        Swal.fire({
            title: "", 
            text: "No se encontraron datos, compruebe los filtros", 
            icon: "error",
            button: {visible: false},
            timer: 3000
        })
        $("#panelcomentarios").attr("hidden", "hidden")
    }
}

/*Fecha Actual*/
function obtenerFecha(){
	var today = new Date();
    	var dd = today.getDate();
    	var mm = today.getMonth()+1; 
    	var yyyy = today.getFullYear();
    	if(dd < 10){dd = '0' + dd} 
	if(mm < 10){mm = '0' + mm} 
        today = yyyy + '-' + mm + '-' + dd;
	return today;
}

/*Hora Actual*/
function addZero(j){
	if (j<10){j = "0" + j}
	return j;
}

function obtenerHora(){
	var d = new Date();
	var h = addZero(d.getHours());
	var m = addZero(d.getMinutes());
	var s = addZero(d.getSeconds());
	var horaString = h + ":" + m + ":" + s;
	horaString = horaString.toString();
	horaString = horaString.substr(0,8)
	return horaString + ".000";
}

window.onbeforeunload = function(){
    localStorage.removeItem("tokenglobal")
}

window.onunload = function(){
    localStorage.removeItem("tokenglobal")
}

/*****************************************************************Nuevo usuario */
/*Dialogo nuevo usuario*/
alertify.newuser || alertify.dialog('newuser',function(){
    return {
        main:function(content){
            this.setContent(content)
        },
        setup:function(){
            return {
                options:{
                    basic: false,
                    maximizable: false,
                    resizable: false,
                    padding: false,
                    title: "Nuevo usuario",
                    closable: true,
					movable: false
                }
            }
        },
        settings:{
            selector:undefined
        }
    }
})

"use strict";
const form = document.getElementById("kt_new_user_form")

var validatorOnlyUser = FormValidation.formValidation(
    form, {
        fields: {
            "nusuario-user":{
                validators:{
                    notEmpty:{
                        message:"Nombre de usuario es requerido"
                    }
                }
            },
            "nombrea-usuario":{
                validators:{
                    notEmpty:{
                        message:"Nombre y apellido es requerido"
                    }
                }
            },
            "correo-usuario":{
                validators:{
                    notEmpty:{
                        message:"Correo es requerido"
                    },
                    emailAddress:{
                        message:"El correo ingresado no es válido"
                    }
                }
            },
            "perfil-usuario":{
                validators:{
                    notEmpty:{
                        message:"Perfil es requerido"
                    }
                }
            }
        },
        plugins: {
            trigger: new FormValidation.plugins.Trigger({
                event: {
                }
            }),
            bootstrap: new FormValidation.plugins.Bootstrap5({
                rowSelector: ".fv-row",
                eleInvalidClass: "",
                eleValidClass: ""
            })
        }
    }
)

var validatorAgenciaUser = FormValidation.formValidation(
    form, {
        fields: {
            "nusuario-user":{
                validators:{
                    notEmpty:{
                        message:"Nombre de usuario es requerido"
                    }
                }
            },
            "nombrea-usuario":{
                validators:{
                    notEmpty:{
                        message:"Nombre y apellido es requerido"
                    }
                }
            },
            "correo-usuario":{
                validators:{
                    notEmpty:{
                        message:"Correo es requerido"
                    },
                    emailAddress:{
                        message:"El correo ingresado no es válido"
                    }
                }
            },
            "perfil-usuario":{
                validators:{
                    notEmpty:{
                        message:"Perfil es requerido"
                    }
                }
            },
            "area-usuario":{
                validators:{
                    notEmpty:{
                        message:"Área es requerido"
                    }
                }
            },
            "agencia-usuario":{
                validators:{
                    notEmpty:{
                        message:"Agencia es requerido"
                    }
                }
            }
        },
        plugins: {
            trigger: new FormValidation.plugins.Trigger({
                event: {
                }
            }),
            bootstrap: new FormValidation.plugins.Bootstrap5({
                rowSelector: ".fv-row",
                eleInvalidClass: "",
                eleValidClass: ""
            })
        }
    }
)

const submitButton = document.getElementById("kt_new_user_submit")
submitButton.addEventListener('click', function(e){
    e.preventDefault()
    if (tUs == 0){
        if (validatorOnlyUser){
            validatorOnlyUser.validate().then(function (status) {
                console.log(status)
                if (status == 'Valid') {
                    submitButton.setAttribute('data-kt-indicator', 'on');
                    submitButton.disabled = true;
                    setTimeout(function (){
                        submitButton.removeAttribute('data-kt-indicator');
                        submitButton.disabled = false;
                        $.post('backend/setnewuser.php',{
                            id: (vEditId == "")?NewGuid():vEditId,
                            userid: $("#nusuario-user").val(),
                            userpassword: "password",
                            username: $("#nombrea-usuario").val(),
                            usermail: $("#correo-usuario").val(),
                            userarea: userarea,
                            userpic: "account/pictureprofile/" + fileNameimg,
                            usertype: $("#perfil-usuario").val(),
                            useragencia: $("#agencia-usuario").val(),
                            usercargo: $("#cargo-usuario").val(),
                            agencia_callcenter: $("#tipo-de-usuario").val(),
                            vEditUser: vEditUser
                        }).done(function(data, status){
                            var parseData = JSON.parse(data)
                            parseData = parseData.Result
                            if (parseData == "OK"){
                                $.post('backend/uploadprofileimg.php',{
                                        base64img: base64img,
                                        fileNameimg: fileNameimg
                                }).done(function(data, status){
                                    Swal.fire({
                                        text: "Se ha " + vEditUser + " el usuario",
                                        icon: "success",
                                        buttonsStyling: !1,
                                        confirmButtonText: "OK",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    }).then((function(t){
                                        $("#kt_cancel_new_user").click()
                                        dtajaxuser.ajax.reload()
                                    }))
                                })
                            }
                            else {
                                Swal.fire({
                                    text: "Existió un error al " + vEditUser + " el usuario",
                                    icon: "warning",
                                    buttonsStyling: !1,
                                    confirmButtonText: "OK",
                                    customClass: {
                                        confirmButton: "btn btn-primary"
                                    }
                                })
                            }
                        })
                    },1500)                         
                }
                else {
                    Swal.fire({
                        text: "Debe ingresar información en los campos requeridos",
                        icon: "error",
                        buttonsStyling: !1,
                        confirmButtonText: "OK",
                        customClass: {
                            confirmButton: "btn btn-primary"
                        }
                    })
                }
            })
        }
    }
    else {
        if (validatorAgenciaUser){
            validatorAgenciaUser.validate().then(function (status) {
                console.log(status)
                if (status == 'Valid') {
                    submitButton.setAttribute('data-kt-indicator', 'on');
                    submitButton.disabled = true;
                    setTimeout(function (){
                        submitButton.removeAttribute('data-kt-indicator');
                        submitButton.disabled = false;
                        $.post('backend/setnewuser.php',{
                            id: (vEditId == "")?NewGuid():vEditId,
                            userid: $("#nusuario-user").val(),
                            userpassword: "password",
                            username: $("#nombrea-usuario").val(),
                            usermail: $("#correo-usuario").val(),
                            userarea: userarea,
                            userpic: "account/pictureprofile/" + fileNameimg,
                            usertype: $("#perfil-usuario").val(),
                            useragencia: $("#agencia-usuario").val(),
                            usercargo: $("#cargo-usuario").val(),
                            agencia_callcenter: $("#tipo-de-usuario").val(),
                            vEditUser: vEditUser
                        }).done(function(data, status){
                            var parseData = JSON.parse(data)
                            parseData = parseData.Result
                            if (parseData == "OK"){
                                $.post('backend/uploadprofileimg.php',{
                                        base64img: base64img,
                                        fileNameimg: fileNameimg
                                }).done(function(data, status){
                                    Swal.fire({
                                        text: "Se ha " + vEditUser + " el usuario",
                                        icon: "success",
                                        buttonsStyling: !1,
                                        confirmButtonText: "OK",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    }).then((function(t){
                                        $("#kt_cancel_new_user").click()
                                        dtajaxuser.ajax.reload()
                                    }))
                                })
                            }
                            else {
                                Swal.fire({
                                    text: "Existió un error al " + vEditUser + " el usuario",
                                    icon: "warning",
                                    buttonsStyling: !1,
                                    confirmButtonText: "OK",
                                    customClass: {
                                        confirmButton: "btn btn-primary"
                                    }
                                })
                            }
                        })
                    },1500)                         
                }
                else {
                    Swal.fire({
                        text: "Debe ingresar información en los campos requeridos",
                        icon: "error",
                        buttonsStyling: !1,
                        confirmButtonText: "OK",
                        customClass: {
                            confirmButton: "btn btn-primary"
                        }
                    })
                }
            })
        }
    }
})

var userarea
var tUs = 0

$("#tipo-de-usuario").change(function(){
    $("#agenciaglb").attr("hidden","hidden")
    $("#areaglb").attr("hidden","hidden")
    $("#cargoglb").attr("hidden","hidden")
    if ($("#tipo-de-usuario").val() == "callcenter"){
        var selectList = "<select class='form-control form-control-lg form-select' name='personalasignado' id='personalasignado' autocomplete='off'>"
        selectList += "<option selected disabled></option>"
        selectList += "<option value='ingresador'>ingresador</option>"
        selectList += "</select>";
        $("#perfil-usuario").html(selectList)
    }
    else {
        $("#perfil-usuario").load("backend/getprofiles.php")
    }
})

$("#perfil-usuario").change(function(){
    $("#cargoglb").attr("hidden","hidden")
    if ($("#perfil-usuario").val() == "orquestador"){
        if ($("#tipo-de-usuario").val() == "callcenter"){
            $("#agenciaglb").attr("hidden","hidden")
            $("#areaglb").attr("hidden","hidden")
            tUs = 0
        }
        else {
            $("#areaglb").removeAttr("hidden")
            $("#agenciaglb").removeAttr("hidden")
            $("#area-usuario").load("backend/getuserarea.php")
            $("#agencia-usuario").load("backend/getcatalogoagencias.php")
            tUs = 1
        }
    }
    else {
	    $("#agenciaglb").attr("hidden","hidden")
        $("#areaglb").attr("hidden","hidden")
        $("#canalglb").attr("hidden","hidden")
        $("#cargoglb").attr("hidden","hidden")
        userarea = "NO"
        tUs = 0
    }
})

$("#area-usuario").change(function(){
    if ($("#perfil-usuario").val() == "orquestador" || $("#perfil-usuario").val() == "ingresador"){
        userarea = $("#area-usuario").val()
        console.log(userarea)
    }
    else {
        userarea = "NO"
        console.log(userarea)
    }

    if ($("#area-usuario").val() == "Cobranzas" || $("#area-usuario").val() == "Riesgos" || $("#area-usuario").val() == "Operaciones" || $("#area-usuario").val() == "Marketing y Negocios" || $("#area-usuario").val() == "Negocios" || $("#area-usuario").val() == "Atención al Cliente"){
        $("#cargoglb").removeAttr("hidden")
        $("#cargo-usuario").load("backend/getcatalogocargos.php",{area: $("#area-usuario").val()})
    }
    else {
        $("#cargoglb").attr("hidden","hidden")
    }
})

$("#tipoproducto").change(function(){
    $("#tipoincidencia").load("backend/getcatalogotiposincidencia.php")
    $("#tipoincidencia").removeAttr("disabled")
})

$("#tipoincidencia").change(function(){
    var tipoinciden = $("#tipoincidencia").val()
    var tipoproducto = $("#tipoproducto").val()
    $("#subtipoincidencia").load("backend/getincidenciasubtipo.php",{
        tipoproducto: tipoproducto,
        tipoinciden: tipoinciden
    }, function(response, status){
        $("#subtipoincidencia").removeAttr("disabled")
    })
})

$('#staticBackdrop').on('hidden.bs.modal', function(){
    $(".fv-plugins-message-container").text('')
    $("#kt_new_user_submit").attr("disabled","disabled")
    $(this).find('form').trigger('reset');
})

/*****************************************************************Imagen de perfil */
var element
var base64img
var fileNameimg

/*Convierto a base64*/
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e){
            $('#imageResult').attr('src', e.target.result)
            base64img = e.target.result
        };
        reader.readAsDataURL(input.files[0]);
    }
}

$(function () {
    $('#upload-pic-usuario').on('change', function(){
        readURL(input)
    });
});

/*Previsulizo imagen*/
var input = document.getElementById( 'upload-pic-usuario' );
var infoArea = document.getElementById( 'upload-pic-usuario-label' )

input.addEventListener('change', showFileName)
function showFileName(event) {
    var input = event.srcElement
    var fileName = input.files[0].name
    fileNameimg = fileName
    //infoArea.textContent = 'Imagen de perfil: ' + fileName
}

$("#kt_cancel_new_user").click(function(){
    $('#kt_new_user_form input[type="input"]').val('')
    $('#kt_new_user_form input[type="password"]').val('')
    $('#kt_new_user_form input[type="file"]').val('')
    $("#imageResult").attr("src","")
    $("#staticBackdrop").modal('hide')
    $("#areaglb").attr("hidden","hidden")
    $("#cargoglb").attr("hidden","hidden")
    $("#agenciaglb").attr("hidden","hidden")
})

function NewGuid(){
    return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
    function(c){
        var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    }).toUpperCase()
}

/*******************************************************Menus */
/*Menú dashboard*/
$("#dashboard-integral").click(function(){
    window.location = "dashboard-integral"
})

$("#dashboard-tipo-incidencias").click(function(){
    window.location = "dashboard-tipo-incidencias"
})

$("#dashboard-kpi-gestion").click(function(){
    window.location = "dashboard-kpi-gestion"
})

$("#dashboard-kpi-experiencia-cliente").click(function(){
    window.location = "dashboard-kpi-experiencia-cliente"
})

/*Menú tickets*/
$("#user-new-ticket").click(function(){
    window.location = "user-new-ticket"
})

/*$("#search-ticket").click(function(){
    var pusertype = localStorage.getItem("ProfileUserType")
    if (pusertype == "orquestador"){
        window.location = "user-assigned-ticket"
    }
    else {
        window.location = "search-ticket"
    }
})*/

/*Menú administración*/
$("#users-administration").click(function(){
    window.location = "list-user"
})

$("#settings-administration").click(function(){
    window.location = "settings-administration"
})

$("#rols-administration").click(function(){
    window.location = "list-profile"
})

$("#menu-reportes").click(function(){
    window.location = "reports"
})
/****************************************************Fin menus*/
