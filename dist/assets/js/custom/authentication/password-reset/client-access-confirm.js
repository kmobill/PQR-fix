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
                        console.log(data)
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
                                clearInterval(countInterval)
                                localStorage.removeItem("tempcode")
                                window.location = 'client-new-ticket'
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

KTUtil.onDOMContentLoaded((function(){
    KTSigninTwoSteps.init()
}))

var element

function paddedFormat(num) {
    return num < 10 ? "0" + num:num
}

var countInterval = null

function temporizador_codigo(duration, element) {
    let secondsRemaining = duration
    let min = 0
    let sec = 0
    countInterval = setInterval(function(){
        min = parseInt(secondsRemaining / 60)
        sec = parseInt(secondsRemaining % 60)
        element.textContent = `El código expira en ${paddedFormat(min)}:${paddedFormat(sec)}`
        secondsRemaining = secondsRemaining - 1
        if (secondsRemaining < 0){
            Swal.fire({
                text: "El código ha expirado",
                icon: "warning",
                buttonsStyling: !1,
                confirmButtonText: "OK",
                customClass: {
                    confirmButton:"btn btn-primary"
                }
            })
            clearInterval(countInterval)
            window.location = 'authentication/flows/aside/sign-in'
        }
    }, 1000)
}

window.onload = function(){
    let time_minutes = "5"
    time_minutes = parseInt(time_minutes)
    let time_seconds = "00"
    time_seconds = parseInt(time_seconds)
    let duration = time_minutes * 60 + time_seconds
    element = document.querySelector('#kt_single_remaining_time')
    element.textContent = `El código expira en ${paddedFormat(time_minutes)}:${paddedFormat(time_seconds)}`
    temporizador_codigo(--duration, element)
}

function NewGuid(){
    return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
    function(c){
        var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    }).toUpperCase();
}