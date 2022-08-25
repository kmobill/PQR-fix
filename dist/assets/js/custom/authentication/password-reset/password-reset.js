window.onload = function(){
    localStorage.removeItem("tempcode")
}

"use strict";
var KTPasswordResetGeneral = function(){
    var t, e, i
    return {
        init:function(){
            t = document.querySelector("#kt_password_reset_form"),
            e = document.querySelector("#kt_password_reset_submit"),
            i = FormValidation.formValidation(t,{
                fields:{
                    email:{
                        validators:{
                            notEmpty:{
                                message:"Dirección de correo es requerida"
                            },
                            emailAddress:{
                                message:"El correo ingresado no es válido"
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
                        var usermail = t.querySelector('[name="email"]').value
                        "Valid" == i?(
                            e.setAttribute("data-kt-indicator","on"),
                            e.disabled = !0,
                            setTimeout((function(){
                                e.removeAttribute("data-kt-indicator"),
                                e.disabled = !1,
                                $.post('backend/getmail.php',{
                                    usermail: usermail
                                }).done(function(data, status){
                                    console.log(data)
                                    var parseData = JSON.parse(data)
                                    var correo = parseData.Correo
                                    if (correo == "NoExiste"){
                                        Swal.fire({
                                            text: "El correo ingresado no existe en la base de datos",
                                            icon: "warning",
                                            buttonsStyling: !1,
                                            confirmButtonText: "OK",
                                            customClass:{
                                                confirmButton: "btn btn-primary"
                                            }
                                        })
                                    }
                                    else {
                                        $.post('backend/getcode.php',{}).done(function(data, status){
                                            var parseData1 = JSON.parse(data)
                                            var code = parseData1.Codigo
                                            localStorage.setItem("tempcode", code)
                                            localStorage.setItem("tempmail", correo)
                                            /**********************************************************************************************************Envió de mail*/
                                            var subject = "Código para reseteo de clave"
                                            var body = "<html>Estimado/a<br></br><br></br>"
                                                body += "Se ha generado un código para recuperación de contraseña para uso de la aplicación<br></br><br></br>"
                                                body += "A continuación se detalla el mismo:<br></br><br></br>"
                                                body += "<strong><h2>" + code +"</h2></strong><br></br><br></br><br></br>"
                                                body += "Saludos,<br></br>"
                                                body += "Administrador del sistema</html>"
                                            SendMailGlobal(correo, subject, body)
                                            /***********************************************************************************************************************/

                                            Swal.fire({
                                                text: "Se envió el código de recuperación al correo indicado!",
                                                icon: "success",
                                                buttonsStyling: !1,
                                                confirmButtonText: "OK",
                                                customClass:{
                                                    confirmButton:"btn btn-primary"
                                                }
                                            }).then((function(e){
                                                e.isConfirmed&&(t.querySelector('[name="email"]').value="")
                                                window.location = 'authentication/flows/aside/new-password'
                                                $.post('backend/setcodetemp.php',{
                                                    id: NewGuid(),
                                                    mail: correo,
                                                    code: code
                                                }).done(function(data, status){
                                                    console.log(data)
                                                })
                                            }))
                                        })
                                    }
                                })
                            }),1500)
                        ):Swal.fire({
                            text: "Debe ingresar información en el campo de correo",
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
    KTPasswordResetGeneral.init()
}))

function NewGuid(){
    return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
    function(c){
        var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    }).toUpperCase();
}