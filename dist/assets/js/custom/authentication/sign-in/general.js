window.onload = function(){
    localStorage.removeItem("tempcode")
    localStorage.removeItem("responseMail")
}

"use strict";
var KTSigninGeneral = function(){
    var t, e, i
    return{
        init:function(){
            t = document.querySelector("#kt_sign_in_form"),
            e = document.querySelector("#kt_sign_in_submit"),
            i = FormValidation.formValidation(t,{
                fields:{
                    username:{
                        validators:{
                            notEmpty:{
                                message:"Usuario es requerido"
                            }
                        }
                    },
                    password:{
                        validators:{
                            notEmpty:{
                                message:"Contraseña es requerida"
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
                    var username = t.querySelector('[name="username"]').value
                    var password = t.querySelector('[name="password"]').value
                    "Valid" == i?(
                        e.setAttribute("data-kt-indicator","on"),
                        e.disabled = !0,
                        setTimeout((function(){
                            e.removeAttribute("data-kt-indicator"),
                            e.disabled = !1,
                            $.post('backend/getlogin.php',{
                                username: username, 
                                password: password
                            }).done(function(data, status){
                                console.log(data)
                                var parseData = JSON.parse(data)
                                var code = parseData.Code
                                if (code == "Incorrecto"){
                                    Swal.fire({
                                        text: "Usuario o contraseña incorrectos",
                                        icon: "warning",
                                        buttonsStyling: !1,
                                        confirmButtonText: "OK",
                                        customClass:{
                                            confirmButton: "btn btn-primary"
                                        }
                                    })
                                }
                                else if (code == "Correcto"){
                                    var isdefaultpw = parseData.isdefaultpasswd
                                    var id = parseData.id
                                    var userid = parseData.userid
                                    var area = parseData.area
                                    var name = parseData.Name
                                    var picture = parseData.Picture
                                    var mail = parseData.Mail
                                    var usertype = parseData.UserType
                                    var userca = parseData.agencia_callcenter
                                    if (isdefaultpw == 1){
                                        Swal.fire({
                                            text: "Esta es la primera vez que inicia sesión, debe modificar su contraseña para continuar!!!",
                                            icon: "warning",
                                            buttonsStyling: !1,
                                            confirmButtonText: "OK",
                                            customClass:{
                                                confirmButton: "btn btn-primary"
                                            }
                                        }).then((result)=> {
                                            localStorage.setItem("tempisdefaultpw", isdefaultpw)
                                            localStorage.setItem("tempmail", mail)
                                            localStorage.setItem("tempusername", name)
                                            localStorage.setItem("tempusertype", usertype)
                                            localStorage.setItem("tempprofileid", id)
                                            window.location = "authentication/flows/aside/new-password"
                                        })
                                    }
                                    else {
                                        $.post('backend/validatelogin.php',{
                                            profileid: id
                                        }).done(function(data, status){
                                            console.log(data)
                                            var parseD = JSON.parse(data)
                                            var isLogin = parseD.IsLogin
                                            if (isLogin == "Si"){
                                                var mensaje = "El usuario " + parseD.name + ", ya se encuentra logueado en la IP " + parseD.remoteip + ", conectese con otro usuario"
                                                Swal.fire({
                                                    text: mensaje,
                                                    icon: "warning",
                                                    buttonsStyling: !1,
                                                    confirmButtonText: "OK",
                                                    customClass: {
                                                        confirmButton: "btn btn-primary"
                                                    }
                                                })
                                            }
                                            else {
                                                $.post('backend/setlogin.php',{
                                                    profileid: id, 
                                                    userid: userid,
                                                    name: name,
                                                    usertype: usertype,
                                                }).done(function(data, status){
                                                    console.log(status)
                                                })
                                                localStorage.setItem("ProfileId", id)
                                                localStorage.setItem("ProfileUserId", userid)
                                                localStorage.setItem("ProfileName", name)
                                                localStorage.setItem("ProfilePicture", picture)
                                                localStorage.setItem("ProfileMail", mail)
                                                localStorage.setItem("ProfileUserType", usertype)
                                                localStorage.setItem("ProfileCallAgencia", userca)
                                                localStorage.setItem("ProfileUserArea", area)
                                                e.isConfirmed&&(t.querySelector('[name="username"]').value = "",
                                                t.querySelector('[name="password"]').value = "")
                                                var profilesTypes = ["su","ingresador","orquestador","supervisor","administrador de usuarios","administrador"]
                                                if (profilesTypes.indexOf(usertype) === -1){
                                                    alert("El tipo de usuario no dispone de permisos para el uso de la aplicación, comuniquese con el administrador general para que asigne los mismos")
                                                    onlogout()
                                                }
                                                else {
                                                    window.location = ''
                                                }
                                            }
                                        })
                                    }
                                }
                            })
                        }),
                    2e3)):Swal.fire({
                        text: "Debe ingresar información en los campos de usuario y contraseña",
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
    KTSigninGeneral.init()
}))
