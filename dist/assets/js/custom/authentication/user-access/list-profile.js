var pname
var dtajaxrol

window.onload = function(){
    pname = localStorage.getItem("ProfileName")
    var ppicture = localStorage.getItem("ProfilePicture")
    var pmail = localStorage.getItem("ProfileMail")
    var pusertype = localStorage.getItem("ProfileUserType")
    if (pusertype == "su"){
        pusertype = "Super User"
    }
    $("#picture-profile").attr("src", ppicture)
    $("#picture-profile-mini").attr("src", ppicture)
    $("#name-profile").text(pname)
    $("#mail-profile").text(pmail)
    $("#usertype-profile").text(pusertype)

    /*****************Notificaciones*/
    if (pusertype == "ingresador"){
        get_notifications("backend/getnotifications.php?action=ingresador", pname)
    }
    else {
        get_notifications("backend/getnotifications.php?action=noingresador", pname)
    }
    /********************************/

    /*Valido tip ode usuario*/
    if (pusertype == "ingresador"){
        $("#menu-dashboard").attr("hidden","hidden")
        $("#menu-administration").attr("hidden","hidden")
        $("#menu-reportes").attr("hidden","hidden")
        $("#menu-tickets").removeAttr("hidden")
    }
    if (pusertype == "orquestador"){
        $("#menu-administration").attr("hidden","hidden")
        $("#menu-dashboard").removeAttr("hidden")
        $("#menu-reportes").removeAttr("hidden")
        $("#menu-tickets").removeAttr("hidden")
    }
    /***********************/

    dtajaxrol = $("#datatable-ajax-list-profiles").DataTable({
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
            url: "backend/getprofiledetail.php",
            data: {}
        },
        columnDefs: [
            {
                title: "Eliminar",
                targets: 0,
                data: null,
                defaultContent: '<button type="button" class="btn btn-danger btn-sm btn-delete-user" data-bs-toggle="tooltip" data-bs-placement="top" title="Eliminar usuario" name="btn-delete-user"><i class="fa fa-times"></i></button>'
            },
            {title: "Tipo de usuario", targets: 1},
            {title: "Nivel", targets: 2},
            {title: "Id", targets: 3, visible: false}
        ],
        order: [[ 2, "asc" ]],
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

/*$('#kt_create_user_submit').click(function(){
    alertify.newuser ($("#kt_new_user_form_global")[0])
    alertify.newuser()	
    .set('overflow',false)
    $("#kt_new_user_form_global").removeAttr("hidden")
})*/

$('#datatable-ajax-list-profiles tbody').on('click', '.btn-activate-deactivate-user', function(){
    var data = dtajaxrol.row($(this).parents('tr')).data()
    alert ("Data " + data[7])
    return false
})

$('#datatable-ajax-list-profiles tbody').on('click', '.btn-delete-user', function(){
    var data = dtajaxrol.row($(this).parents('tr')).data()
    console.log(data)
    var profilename = data[1]
    var profileid = data[3]
    Swal.fire({
        text: "Esta seguro que desea eliminar el rol  " + profilename + "?",
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
            $.post('backend/delprofiles.php',{
                profileid: profileid
            }).done(function(data, status){
                var parseData = JSON.parse(data)
                parseData = parseData.Result
                if (parseData == "OK"){
                    Swal.fire({
                        title: "", 
                        text: "Usuario eliminado con éxito", 
                        icon: "success",
                        button: {visible: false},
                        timer: 2000
                    })
                }
                else {
                    Swal.fire({
                        title: "", 
                        text: "Ocurrio un error al eliminar el rol, intentelo nuevamente", 
                        icon: "error",
                        button: {visible: false},
                        timer: 2000
                    })
                }
            })
        }
        dtajaxrol.ajax.reload()
    })
})

window.onerror = function(message, source, lineno, colno, error) {
    if (message == "Uncaught TypeError: Cannot read property 'length' of undefined"){
        swal({
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
"use strict";
var KTNewRols = function(){
    var t, e, r
    return {
        init:function(){
            e = document.querySelector("#kt_new_rol_form_global"),
            t = document.querySelector("#kt_new_rol_submit"),
            r = FormValidation.formValidation(e,{
                fields: {
                    "new-type-profile":{
                        validators:{
                            notEmpty:{
                                message:"Nombre de rol es requerido"
                            }
                        }
                    },
                    "new-level-profile":{
                        validators:{
                            notEmpty:{
                                message:"Nivel es requerido"
                            }
                        }
                    }
                },
                plugins: {
                    trigger:new FormValidation.plugins.Trigger,
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: ".fv-row"
                    })
                }
            }),
            t.addEventListener("click",(function(s){
                s.preventDefault(),
                r.validate().then((function(r){
                    "Valid" == r?(
                        t.setAttribute("data-kt-indicator","on"),
                        t.disabled = !0,
                        setTimeout((function(){
                            t.removeAttribute("data-kt-indicator"),
                            t.disabled =! 1,
                            Swal.fire({
                                text: "Se ha creado el nuevo rol",
                                icon: "success",
                                buttonsStyling: !1,
                                confirmButtonText: "OK",
                                customClass: {
                                    confirmButton: "btn btn-primary"
                                }
                            }).then((function(t){
                                $.post('backend/setnewrol.php',{
                                    id: NewGuid(),
                                    profileid: $("#new-type-profile").val(),
                                    levelid: $("#new-level-profile").val(),
                                }).done(function(data, status){
                                    console.log(data)
                                    dtajaxrol.ajax.reload()
                                })
                                $("#kt_cancel_new_rol").click()
                            }))
                        }),1500)
                    ):Swal.fire({
                        text: "Debe ingresar información en los campos requeridos",
                        icon: "error",
                        buttonsStyling: !1,
                        confirmButtonText: "OK",
                        customClass: {
                            confirmButton: "btn btn-primary"
                        }
                    })
                }))
            }))
        }
    }
}()

KTUtil.onDOMContentLoaded((function(){
    KTNewRols.init()
}))

var element
var base64img
var fileNameimg

$("#kt_cancel_new_rol").click(function(){
    $('#kt_new_rol_form_global input[type="input"]').val('')
    $('#kt_new_rol_form_global input[type="password"]').val('')
    $('#kt_new_rol_form_global input[type="file"]').val('')
    $("#staticBackdrop").modal('hide')
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

$("#search-ticket").click(function(){
    var pusertype = localStorage.getItem("ProfileUserType")
    if (pusertype == "ingresador" || pusertype == "orquestador"){
        window.location = "user-assigned-ticket"
    }
    else {
        window.location = "search-ticket"
    }
})

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