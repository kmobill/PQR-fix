var pname

window.onload = function(){
    pname = localStorage.getItem("ProfileName")
    var ppicture = localStorage.getItem("ProfilePicture")
    var pmail = localStorage.getItem("ProfileMail")
    var pusertype = localStorage.getItem("ProfileUserType")
    if (pusertype != "ingresador"){
        $("#check-asignarme").attr("hidden","hidden")
        $("#check-asignarme-label").attr("hidden","hidden")
    }
    $("#picture-profile").attr("src", ppicture)
    $("#picture-profile-mini").attr("src", ppicture)
    $("#name-profile").text(pname)
    $("#mail-profile").text(pmail)
    $("#usertype-profile").text(pusertype)

    $("#perfil-usuario").load("backend/getprofiles.php")

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
}

"use strict";
var KTNewUsers = function(){
    var e, t, r, o, s=function(){
        return 100 === o.getScore()
    }
    return {
        init:function(){
            e = document.querySelector("#kt_new_user_form"),
            t = document.querySelector("#kt_new_user_submit"),
            o = KTPasswordMeter.getInstance(e.querySelector('[data-kt-password-meter="true"]')),
            r = FormValidation.formValidation(e,{
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
                    }
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
                            Swal.fire({
                                text: "Se ha creado el nuevo usuario",
                                icon: "success",
                                buttonsStyling: !1,
                                confirmButtonText: "OK",
                                customClass: {
                                    confirmButton: "btn btn-primary"
                                }
                            }).then((function(t){
                                $.post('backend/setnewuser.php',{
                                    id: NewGuid(),
                                    userid: $("#nusuario-user").val(),
                                    userpassword: e.querySelector('[name="password"]').value,
                                    username: $("#nombrea-usuario").val(),
                                    usermail: $("#correo-usuario").val(),
                                    userpic: "account/pictureprofile/" + fileNameimg,
                                    usertype: $("#perfil-usuario").val()
                                }).done(function(data, status){
                                    console.log(data)
                                    $.ajax({
                                        type: "POST",
                                        url: "backend/uploadprofileimg.php",
                                        data: {
                                            base64img: base64img,
                                            fileNameimg: fileNameimg
                                        }
                                    })
                                })
                                t.isConfirmed&&(e.querySelector('[name="password"]').value = "",
                                e.querySelector('[name="confirm-password"]').value = "",
                                o.reset())
                                $("#kt_new_user_form_global").attr("hidden","hidden")
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
            })),
            e.querySelector('input[name="password"]').addEventListener("input",(function(){
                this.value.length > 0&&r.updateFieldStatus("password","NotValidated")
            }))
        }
    }
}()

KTUtil.onDOMContentLoaded((function(){
    KTNewUsers.init()
}))

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