"use strict";
var KTClientAccessGeneral = function(){
    var t, e, i
    return {
        init:function(){
            t = document.querySelector("#kt_client_access_form"),
            e = document.querySelector("#kt_client_access_submit"),
            i = FormValidation.formValidation(t,{
                fields:{
                    cedula:{
                        validators:{
                            notEmpty:{
                                message:"Número de cédula es requerido"
                            }
                        }
                    }
                },
                plugins:{
                    trigger:new FormValidation.plugins.Trigger,
                    bootstrap:new FormValidation.plugins.Bootstrap5({
                        rowSelector:".fv-row",
                        eleInvalidClass:"",
                        eleValidClass:""
                    })
                }
            }),
            e.addEventListener("click",(function(o){
                o.preventDefault(),
                i.validate().then(
                    (function(i){
                        var usercedula = t.querySelector('[name="cedula"]').value
                        "Valid" == i?(
                            e.setAttribute("data-kt-indicator","on"),
                            e.disabled = !0,
                            setTimeout((function(){
                                e.removeAttribute("data-kt-indicator"),
                                e.disabled = !1,
                                $.post('backend/getclient.php',{
                                    usercedula: usercedula
                                }).done(function(data, status){
                                    console.log(data)
                                    var parseData = JSON.parse(data)
                                    var existe = parseData.Existe
                                    if (existe == "No"){
                                        Swal.fire({
                                            text: "El cliente ingresado no existe en la base de datos",
                                            icon: "warning",
                                            buttonsStyling: !1,
                                            confirmButtonText: "OK",
                                            customClass:{
                                                confirmButton: "btn btn-primary"
                                            }
                                        })
                                    }
                                    else {
                                        var cedulan = parseData.Cedula
                                        var correo = parseData.Mail
                                        var name = parseData.Name
                                        var phone = parseData.Phone
                                        $.post('backend/getcode.php',{}).done(function(data, status){
                                            var parseData1 = JSON.parse(data)
                                            var code = parseData1.Codigo
                                            Email.send({
                                                SecureToken: "561ef8ca-b19e-4ccf-a0e2-7545b89a2975",
                                                To: correo,
                                                From: "soporte@kimobill.com",
                                                Subject: "Código de confirmación",
                                                Body: "Hola, se ha generado un código para el ingreso al sistema, el cual es: " + code
                                            }).then(
                                                Swal.fire({
                                                    text: "Estimado/a " + name +" ,se envió el código de confirmación al correo registrado!",
                                                    icon: "success",
                                                    buttonsStyling: !1,
                                                    confirmButtonText: "OK",
                                                    customClass:{
                                                        confirmButton:"btn btn-primary"
                                                    }
                                                }).then((function(e){
                                                    e.isConfirmed&&(t.querySelector('[name="cedula"]').value="")
                                                    window.location = 'authentication/flows/aside/client-access-confirm'
                                                    $.post('backend/setcodetemp.php',{
                                                        id: NewGuid(),
                                                        mail: correo,
                                                        code: code
                                                    }).done(function(data, status){
                                                        console.log(data)
                                                        localStorage.setItem("tempcedula", cedulan)
                                                        localStorage.setItem("tempname", name)
                                                        localStorage.setItem("tempcode", code)
                                                        localStorage.setItem("tempmail", correo)
                                                        localStorage.setItem("tempphone", phone)
                                                    })
                                                }))
                                            )
                                        })
                                    }
                                })
                            }),1500)
                        ):Swal.fire({
                            text: "Debe ingresar información en el campo de cédula",
                            icon: "error",
                            buttonsStyling: !1,
                            confirmButtonText: "OK",
                            customClass:{
                            confirmButton: "btn btn-primary"
                            }
                        })
                    })
                )
            }))
        }
    }
}()

KTUtil.onDOMContentLoaded((function(){
    KTClientAccessGeneral.init()
}))

function NewGuid(){
    return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
    function(c){
        var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    }).toUpperCase();
}