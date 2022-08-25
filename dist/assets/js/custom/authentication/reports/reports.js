var pname

window.onload = function(){
    pname = localStorage.getItem("ProfileName")
    var ppicture = localStorage.getItem("ProfilePicture")
    if (ppicture == "account/pictureprofile/undefined" || ppicture == null || ppicture == undefined){
        ppicture = "account/pictureprofile/ico-usuario.png"
    }
    var pmail = localStorage.getItem("ProfileMail")
    var pusertype = localStorage.getItem("ProfileUserType")
    tipousuario = localStorage.getItem("ProfileUserType")
    if (tipousuario == "su"){
        usuario = ""
    }
    else if (tipousuario == "Cliente") {
        usuario = localStorage.getItem("tempname")
    }
    else {
        usuario = localStorage.getItem("ProfileName")
    }

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
}

var dtajaxreport

"use strict";
var KTreports = function(){
    var t, e, i
    return{
        init:function(){
            t = document.querySelector("#kt_reports_form"),
            e = document.querySelector("#kt_reports_submit"),
            i = FormValidation.formValidation(t,{
                fields:{
                    tiporeporte:{
                        validators:{
                            notEmpty:{
                                message:"Tipo de reporte es requerido"
                            }
                        }
                    },
                    fechainicioticket:{
                        validators:{
                            notEmpty:{
                                message:"Fecha de inicio es requerida"
                            }
                        }
                    },
                    fechafinticket:{
                        validators:{
                            notEmpty:{
                                message:"Fecha de fin es requerida"
                            }
                        }
                    }
                },
                plugins:{
                    trigger:new FormValidation.plugins.Trigger,
                    bootstrap:new FormValidation.plugins.Bootstrap5({
                        rowSelector:".fv-row"
                    })
                }
            }),
            e.addEventListener("click",(function(n){
                n.preventDefault(),
                i.validate().then((function(i){
                    var StartDateTime = $("#fechainicioticket").val()
                    var EndDateTime = $("#fechafinticket").val()
                    var tipousuario = localStorage.getItem("ProfileUserType")
                    if (tipousuario == "su"){
                        var usuario = ""
                    }
                    else if (tipousuario == "Cliente") {
                        var usuario = localStorage.getItem("tempname")
                    }
                    else {
                        var usuario = localStorage.getItem("ProfileName")
                    }
                    "Valid" == i?(
                        e.setAttribute("data-kt-indicator","on"),
                        e.disabled = !0,
                        setTimeout((function(){
                            e.removeAttribute("data-kt-indicator"),
                            e.disabled = !1,
                            dtajaxreport = $("#datatable-ajax-report").DataTable({
                                processing: true,
                                destroy: true,
                                paging: true,
                                searching: true,
                                responsive: true,
                                pageLength: 20,
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
                                buttons: [
                                    {
                                        extend: 'csv', 
                                        text: 'CSV', 
                                        title: 'Tickets CSV', 
                                        className: 'btn btn-sm login-btnblue'
                                    },
                                    {
                                        extend: 'excel', 
                                        text: 'Excel', 
                                        title: 'Tickets EXCEL',
                                        className: 'btn btn-sm login-btnblue'
                                    },
                                    {
                                        extend: 'pdf', 
                                        text: 'Pdf', 
                                        title: 'Tickets PDF',
                                        className: 'btn btn-sm login-btnblue'
                                    },
                                    {
                                      extend: 'copy',
                                      text: 'Copiar',
                                      className: 'btn btn-sm login-btnblue'
                                    }
                                ],
                                fixedColumns: true,
                                ajax:{
                                    type: "POST",
                                    dataType: "json",
                                    url: "backend/getreports.php",
                                    data: {
                                        rangoinicio: StartDateTime + " 00:00:00",
                                        rangofin: EndDateTime + " 23:59:59",
                                        tiporeporte: $("#tiporeporte").val(),
                                        asesorreporte: ($("#reporteagente").val() == "")?"NO":$("#reporteagente").val(),
                                        estadoreporte: ($("#reporteestado").val() == "" || $("#reporteestado").val() == null)?"NO":$("#reporteestado").val(),
                                        ticketreporte: ($("#reporteticket").val() == "")?"NO":$("#reporteticket").val(),
                                        identifreporte: ($("#reporteidentificacion").val() == "")?"NO":$("#reporteidentificacion").val()
                                    }
                                },
                                columnDefs: [
                                    {title: "Cédula", targets: 0, visible: true},
                                    {title: "Nombres", targets: 1},
                                    {title: "Mail", targets: 2, visible: false},
                                    {title: "Teléfono", targets: 3, visible: false},
                                    {title: "Ticket", targets: 4},
                                    {title: "Producto", targets: 5, visible: false},
                                    {title: "Tipo incidencia", targets: 6, visible: false},
                                    {title: "Sub-tipo incidencia", targets: 7, visible: false},
                                    {title: "Área", targets: 8, visible: false},
                                    {title: "Tiempo respuesta", targets: 9, visible: false},
                                    {title: "Creado por", targets: 10, visible: false},
                                    {title: "Fecha creación", targets: 11},
                                    {title: "Estado", targets: 12},
                                    {title: "Agente asignado", targets: 13},                                    
                                ],
                                order: [[ 11, "desc" ]],
                                initComplete: function(settings,json){
                                    if (json == null || json == ""){
                                        alert("Error")
                                    }
                                }
                            })
                        }),
                    2e3)):Swal.fire({
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
    KTreports.init()
}))

$("#kt_clean_ticket").click(function(){
    location.reload()
})

$("#profile-logout").click(function(){
    localStorage.removeItem("ProfileName")
    localStorage.removeItem("ProfilePicture")
    localStorage.removeItem("ProfileMail")
    localStorage.removeItem("ProfileUserType")
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
    if (pusertype == "ingresador" || pusertype == "orquestador"){
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
