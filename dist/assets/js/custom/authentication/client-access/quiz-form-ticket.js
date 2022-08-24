var ticketid
var cedula
var nombres
var mail
var phone
var numeroticket
var ticketData

window.onload = function(){
    var searchParams = new URLSearchParams(window.location.search)
    ticketid = searchParams.get("TicketId")
    console.log(ticketid)
    $.post('backend/getquizticket.php',{
        ticketid: ticketid
    }).done(function(data, status){
        ticketData = JSON.parse(data)
        var vExiste = ticketData.data[0][0]
        if (vExiste == "SI"){
            $.post('backend/getquiz.php',{
                ticketid: ticketid
            }).done(function(data, status){
                var parseData = JSON.parse(data)
                parseData = parseData.Existe
                if (parseData == "SI"){
                    Swal.fire({
                        text: "Ya existe una encuesta registrada para el ticket",
                        icon: "error",
                        buttonsStyling: !1,
                        confirmButtonText: "OK",
                        customClass: {
                            confirmButton: "btn btn-primary"
                        }
                    }).then((result) => {
                        $("#quizform").attr("hidden")
                        window.close()
                    })
                }
                else {
                    $("#quizform").removeAttr("hidden")
                    cedula = ticketData.data[0][1]
                    nombres = ticketData.data[0][2]
                    mail = ticketData.data[0][3]
                    phone = ticketData.data[0][4]
                    numeroticket =ticketData.data[0][5]
                    console.log(cedula, nombres, mail, phone, numeroticket)
                }
            })
        }
        else {
            Swal.fire({
                text: "El ticket obtenido no existe",
                icon: "error",
                buttonsStyling: !1,
                confirmButtonText: "OK",
                customClass: {
                    confirmButton: "btn btn-primary"
                }
            }).then((result) => {
                $("#quizform").attr("hidden")
                window.close()
            })
        }
    })
}

"use strict";
var KTQuizForm = function(){
    var t, e, i
    return{
        init:function(){
            t = document.querySelector("#kt_quiz_form_form"),
            e = document.querySelector("#kt_quiz_form_submit"),
            i = FormValidation.formValidation(t,{
                fields:{
                    respuestaencuesta:{
                        validators:{
                            notEmpty:{
                                message:"La respuesta es requerida"
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
                    "Valid" == i?(
                        e.setAttribute("data-kt-indicator","on"),
                        e.disabled = !0,
                        setTimeout((function(){
                            e.removeAttribute("data-kt-indicator"),
                            e.disabled = !1,
                            $.post('backend/setnewquiz.php',{
                                id: NewGuid(),
                                ticketid: ticketid,
                                cedula: cedula,
                                nombres: nombres,
                                mail: mail,
                                phone: phone,
                                numeroticket: numeroticket,
                                respuestap: $("#respuestaencuesta").val(),
                                respuestacasono: $("#respuestano").val(),
                                nps: ($("#npsencuesta").val() == "" || $("#npsencuesta").val() == null)?"-1":$("#npsencuesta").val(),
                                comentariosnps: $("#respuestanps").val()
                            }).done(function(data, status){
                                console.log(data)
                                var parseData = JSON.parse(data)
                                parseData = parseData.Result
                                if (parseData == "OK"){
                                    Swal.fire({
                                        text: "Se ha enviado su respuesta, gracias",
                                        icon: "success",
                                        buttonsStyling: !1,
                                        confirmButtonText: "OK",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    }).then((result) => {
                                        $("#quizform").attr("hidden")
                                        window.close()
                                    })
                                }
                                else {
                                    Swal.fire({
                                        text: "Se ha presentado un error al enviar sus respuestas, intentelo nuevamente",
                                        icon: "warning",
                                        buttonsStyling: !1,
                                        confirmButtonText: "OK",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    })
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

$("#respuestaencuesta").change(function(){
    var rsp = $("#respuestaencuesta").val()
    if (rsp == "SI"){
        $("#npsform").removeAttr("hidden")
        $("#respuestano").val("")
        $("#respuestanolabel").attr("hidden","hidden")
        $("#respuestano").attr("hidden","hidden")
        $("#kt_quiz_form_submit").attr("disabled","disabled")
    }
    else {
        $("#npsform").attr("hidden","hidden")
        $("#npsencuesta").val(null).trigger('change');
        $("#respuestanolabel").removeAttr("hidden")
        $("#respuestano").removeAttr("hidden")
        $("#kt_quiz_form_submit").removeAttr("disabled")
        $("#npscomment").attr("hidden","hidden")
    }
})

$("#npsencuesta").change(function(){
    $("#npscomment").removeAttr("hidden")
    $("#kt_quiz_form_submit").removeAttr("disabled")
})

KTUtil.onDOMContentLoaded((function(){
    KTQuizForm.init()
}))

window.onbeforeunload = function(){
    localStorage.removeItem("tokenglobal")
}

window.onunload = function(){
    localStorage.removeItem("tokenglobal")
}

function NewGuid(){
    return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
    function(c){
        var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    }).toUpperCase();
}
