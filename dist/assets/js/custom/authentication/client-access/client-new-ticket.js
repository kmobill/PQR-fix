var pname

window.onload = function(){
    pname = localStorage.getItem("tempname")
    var ppicture = "assets/media/illustrations/sketchy-1/32.png"
    var pmail = localStorage.getItem("tempmail")
    var pusertype = "Cliente"
    localStorage.setItem("TipoCliente", pusertype)
    
    $("#picture-profile").attr("src", ppicture)
    $("#picture-profile-mini").attr("src", ppicture)
    $("#name-profile").text(pname)
    $("#mail-profile").text(pmail)
    $("#usertype-profile").text(pusertype)

    create_new_ticket()
    setTimeout(get_ticket, 1000)
}

"use strict";
var KTNuevoTicketCliente = function(){
    var t, e, i
    return{
        init:function(){
            t = document.querySelector("#kt_new_ticket_form"),
            e = document.querySelector("#kt_new_ticket_submit"),
            i = FormValidation.formValidation(t,{
                fields:{
                    tipoincidencia:{
                        validators:{
                            notEmpty:{
                                message:"Tipo incidencia es requerido"
                            }
                        }
                    },
                    tipoproducto:{
                        validators:{
                            notEmpty:{
                                message:"Producto es requerido"
                            }
                        }
                    },
                    subtipoincidencia:{
                        validators:{
                            notEmpty:{
                                message:"Sub-tipo de incidencia es requerido"
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
                    var tipoincidencia = t.querySelector('[name="tipoincidencia"]').value
                    var tipoproducto = t.querySelector('[name="tipoproducto"]').value
                    var subtipoincidencia = t.querySelector('[name="subtipoincidencia"]').value
                    var observaciones = $("#observacionesincidencia").val()
                    if (observaciones == ""){
                        observaciones = obtenerFecha() + " " + obtenerHora() + ": Sin observaciones"
                        var obj = {Observacion: observaciones}
                        obj = JSON.stringify(obj)
                    }
                    else {
                        observaciones = obtenerFecha() + " " + obtenerHora() + ": " + observaciones
                        var obj = {Observacion: observaciones}
                        obj = JSON.stringify(obj)
                    }
                    "Valid" == i?(
                        e.setAttribute("data-kt-indicator","on"),
                        e.disabled = !0,
                        setTimeout((function(){
                            e.removeAttribute("data-kt-indicator"),
                            e.disabled = !1,
                            $.post('backend/newticket.php',{
                                id: NewGuid(),
                                cedula: localStorage.getItem("tempcedula"),
                                nombres: localStorage.getItem("tempname"),
                                mail: localStorage.getItem("tempmail"),
                                phone: localStorage.getItem("tempphone"),
                                numeroticket: ticketnumber,
                                ticketid: $("#ticket-number").text(),
                                producto: $("#tipoproducto option:selected").text(),
                                tipoincidencia: $("#tipoincidencia option:selected").text(),
                                stincidencia: $("#subtipoincidencia option:selected").text(),
                                area: incarea,
                                pasignado: incpasi,
                                observaciones: obj,
                                tiemporespuesta: inctres,
                                createby: pname

                            }).done(function(data, status){
                                console.log(data)
                                Swal.fire({
                                    text: "Información guardada con éxito, desea registrar un nuevo ticket?",
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
                                        location.reload()
                                    }
                                    else {
                                        $("#kt_new_ticket_1").attr("hidden","hidden")
                                    }
                                })
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
    KTNuevoTicketCliente.init()
}))

$("#client-new-ticket").click(function(){
    window.location = "client-new-ticket"
})

$("#search-ticket").click(function(){
    window.location = "search-ticket"
})

$("#tipoproducto").change(function(){
    $("#tipoincidencia").removeAttr("disabled")
})

$("#tipoincidencia").change(function(){
    var tipoinciden = $("#tipoincidencia option:selected").text()
    var tipoproducto =$("#tipoproducto option:selected").text()
    $("#subtipoincidencia").load("backend/getincidenciasubtipo.php",{
        tipoproducto: tipoproducto,
        tipoinciden: tipoinciden
    }, function(response, status){
        $("#subtipoincidencia").removeAttr("disabled")
    })
})

var incarea
var inctres
var incpasi

$("#subtipoincidencia").change(function(){
    var tipoincidencia = $("#tipoincidencia option:selected").text()
    var tipoproducto = $("#tipoproducto option:selected").text()
    var subtipoincidencia = $("#subtipoincidencia option:selected").text()
    $.post('backend/getincidenciasdata.php',{
        tipoproducto: tipoproducto,
        tipoincidencia: tipoincidencia,
        subtipoincidencia: subtipoincidencia
    }).done(function(data, status){
        console.log(data)
        var parseData = JSON.parse(data)
        incarea = parseData.Area
        var inccasi = parseData.CorreoAsignacion
        incpasi = parseData.PersonalAsignado
        inctres = parseData.TiempoRespuesta
        $("#tipoarea").val(incarea)
        $("#personalasignado").val(incpasi)
    })
})

$("#kt_cancel_ticket").click(function(){
    $("#kt_new_ticket_1").attr("hidden","hidden")
})

$("#profile-logout").click(function(){
    localStorage.removeItem("tempcode")
    localStorage.removeItem("tempmail")
    localStorage.removeItem("tempcedula")
    localStorage.removeItem("tempname")
    localStorage.removeItem("tempphone")
    localStorage.removeItem("TipoCliente")
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

var tokenglobal = NewGuid()
localStorage.setItem("tokenglobal", tokenglobal)

function create_new_ticket(){
    $.post('backend/generatetickets.php',{
        id: tokenglobal
    }).done(function(data, status){
        console.log(data)
    })
}

var ticketnumber

function get_ticket(){
    $.post('backend/gettickets.php',{
        id: localStorage.getItem("tokenglobal")
    }).done(function(data, status){
        console.log(data)
        var parseData = JSON.parse(data)
        var nTicket = parseData.NTicket
        ticketnumber = nTicket
        var nTicketLarge = nTicket.length
        if (nTicketLarge == 1) nTicket = "00000" + nTicket
        if (nTicketLarge == 2) nTicket = "0000" + nTicket
        if (nTicketLarge == 3) nTicket = "000" + nTicket
        if (nTicketLarge == 4) nTicket = "00" + nTicket
        if (nTicketLarge == 5) nTicket = "0" + nTicket

        $("#ticket-number").removeAttr("hidden")
        $("#ticket-number").text("# Ticket: " + nTicket)
    })
}

function NewGuid(){
    return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
    function(c){
        var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    }).toUpperCase();
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