"use strict";

var KTSigninTwoSteps = function(){
    var t, n
    return {
        init:function(){
            t = document.querySelector("#kt_sing_in_two_steps_form"),
            (n = document.querySelector("#kt_sing_in_two_steps_submit")).addEventListener("click",(function(e){
                e.preventDefault()
                var i = !0,
                o = [].slice.call(t.querySelectorAll('input[maxlength="1"]'))
                o.map((function(t){
                    "" !== t.value&&0 !== t.value.length || (i=!1)
                })),
                !0 === i?(n.setAttribute("data-kt-indicator","on"),
                n.disabled = !0,
                setTimeout((function(){
                    var mail = localStorage.getItem("tempmail")
                    var code = localStorage.getItem("tempcode")
                    n.removeAttribute("data-kt-indicator"),
                    n.disabled = !1,
                    $.post('backend/getcodetemp.php',{
                        mail: mail,
                        code: code
                    }).done(function(data, status){
                        //console.log(data)
                        var parseData = JSON.parse(data)
                        var codigo = parseData.TempCodigo
                        var ingcode = $("#code01").val() + $("#code02").val() + $("#code03").val() + $("#code04").val() + $("#code05").val() + $("#code06").val()
                        if (ingcode == codigo){
                            Swal.fire({
                                text: "Código verificado con éxito, puede continuar",
                                icon: "success",
                                buttonsStyling: !1,
                                confirmButtonText: "OK",
                                customClass: {
                                    confirmButton:"btn btn-primary"
                                }
                            }).then((function(t){
                                t.isConfirmed&&o.map((function(t){t.value = ""}))
                                $("#kt_sing_in_two_steps_form").attr("hidden","hidden")
                                $("#kt_new_password_form").removeAttr("hidden")
                                clearInterval(countInterval)
                            }))
                        }
                        else {
                            Swal.fire({
                                text: "El código ingresado es incorrecto",
                                icon: "warning",
                                buttonsStyling: !1,
                                confirmButtonText: "OK",
                                customClass: {
                                    confirmButton:"btn btn-primary"
                                }
                            })
                        }
                    })
                }),1e3)):swal.fire({
                    text: "Ingrese el código de seguridad",
                    icon: "warning",
                    buttonsStyling: !1,
                    confirmButtonText: "OK",
                    customClass: {
                        confirmButton:"btn fw-bold btn-light-primary"
                    }
                }).then((function(){
                    KTUtil.scrollTop()
                }))
            }))
        }
    }
}()

var KTPasswordResetNewPassword = function(){
    var e, t, r, o, s=function(){
        return 100 === o.getScore()
    }
    return {
        init:function(){
            e = document.querySelector("#kt_new_password_form"),
            t = document.querySelector("#kt_new_password_submit"),
            o = KTPasswordMeter.getInstance(e.querySelector('[data-kt-password-meter="true"]')),
            r = FormValidation.formValidation(e,{
                fields: {
                    password: {
                        validators: {
                            notEmpty: {
                                message: "Se requiere de una contraseña"
                            },
                            callback: {
                                message: "Ingrese una contraseña válida",
                                callback: function(e){
                                    if (e.value.length > 0) return s()
                                }
                            }
                        }
                    },
                    "confirm-password": {
                        validators: {
                            notEmpty: {
                                message:"La confirmación de la contraseña es requerida"
                            },
                            identical: {
                                compare: function(){
                                    return e.querySelector('[name="password"]').value
                                },
                                message: "La confirmación de contraseña no es igual a la ingresada anteriormente"
                            }
                        }
                    },
                    /*toc: {
                        validators: {
                            notEmpty: {
                                message:"Debe marcar la casilla de que la información ingresada es correcta"
                            }
                        }
                    }*/
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger({
                        event: {
                            password: !1
                        }
                    }),
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: ".fv-row",
                        eleInvalidClass: "",
                        eleValidClass: ""
                    })
                }
            }),
            t.addEventListener("click",(function(s){
                s.preventDefault(),
                r.revalidateField("password"),
                r.validate().then((function(r){

                    
                    "Valid" == r?(
                        t.setAttribute("data-kt-indicator","on"),
                        t.disabled = !0,
                        setTimeout((function(){
                            t.removeAttribute("data-kt-indicator"),
                            t.disabled =! 1,
                            $.post('backend/udpnewpassword.php',{
                                profileid: localStorage.getItem("tempprofileid"),
                                newpassword: e.querySelector('[name="password"]').value
                            }).done(function(data, status){
                                var parseData = JSON.parse(data)
                                parseData = parseData.Result
                                
                                //console.log(parseData)
                                //console.log(data)
                                if (parseData == "OK"){
                                    Swal.fire({
                                        text: "Se ha modificado correctamente la contraseña",
                                        icon: "success",
                                        buttonsStyling: !1,
                                        confirmButtonText: "OK",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    }).then((function(t){
                                        localStorage.removeItem("tempcode")
                                        localStorage.removeItem("tempmail")
                                        localStorage.removeItem("tempusername")
                                        localStorage.removeItem("tempprofileid")
                                        localStorage.removeItem("tempisdefaultpw")
                                        localStorage.removeItem("tempusertype")
                                        t.isConfirmed&&(e.querySelector('[name="password"]').value = "",
                                        e.querySelector('[name="confirm-password"]').value = "",
                                        o.reset())
                                        window.location = 'authentication/flows/aside/sign-in'
                                    }))
                                }
                                else {
                                    Swal.fire({
                                        text: "Existió un problema al trata de modificar la contraseña, intentelo mas tarde",
                                        icon: "warning",
                                        buttonsStyling: !1,
                                        confirmButtonText: "OK",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    })
                                } 
                            })
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
            })),
            e.querySelector('input[name="password"]').addEventListener("input",(function(){
                this.value.length > 0&&r.updateFieldStatus("password","NotValidated")
            }))
        }
    }
}()

KTUtil.onDOMContentLoaded((function(){
    KTSigninTwoSteps.init()
    KTPasswordResetNewPassword.init()
}))

var element

function paddedFormat(num) {
    return num < 10 ? "0" + num:num
}

var countInterval = null
let secondsRemaining

function temporizador_codigo(duration, element) {
    secondsRemaining = duration
    let min = 0
    let sec = 0
    countInterval = setInterval(function(){
        min = parseInt(secondsRemaining / 60)
        sec = parseInt(secondsRemaining % 60)
        element.textContent = `El código expira en ${paddedFormat(min)}:${paddedFormat(sec)}`
        secondsRemaining = secondsRemaining - 1
        if (secondsRemaining < 0){
            clearInterval(countInterval)
            Swal.fire({
                text: "El código ha expirado, vuelva a intentarlo",
                icon: "warning",
                buttonsStyling: !1,
                confirmButtonText: "OK",
                customClass: {
                    confirmButton:"btn btn-primary"
                }
            }).then((result) => {
                localStorage.removeItem("tempcode")
                window.location = 'authentication/flows/aside/sign-in'
            })
        }
    }, 1000)
}

window.onload = function(){
    var isdefaultpasswd = localStorage.getItem("tempisdefaultpw")
    var uname = localStorage.getItem("tempusername")
    if (isdefaultpasswd == "1"){
        $("#kt_sing_in_two_steps_form").attr("hidden","hidden")
        $("#kt_new_password_form").removeAttr("hidden")
        $("#newpasswdenunc").text(
            "Estimado " + uname + ", debe modificar su contraseña de acuerdo a lo solicitado."
        )
    }
    else {
        $("#kt_sing_in_two_steps_form").removeAttr("hidden")
        $("#kt_new_password_form").attr("hidden","hidden")
        $("#newpasswdenunc").text("Por favor, ingrese los datos a continuación para establecer su nueva contraseña")
        let time_minutes = "5"
        time_minutes = parseInt(time_minutes)
        let time_seconds = "00"
        time_seconds = parseInt(time_seconds)
        let duration = time_minutes * 60 + time_seconds
        element = document.querySelector('#kt_single_remaining_time')
        element.textContent = `El código expira en ${paddedFormat(time_minutes)}:${paddedFormat(time_seconds)}`
        temporizador_codigo(--duration, element)
    }
}

function NewGuid(){
    return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
    function(c){
        var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    }).toUpperCase();
}
