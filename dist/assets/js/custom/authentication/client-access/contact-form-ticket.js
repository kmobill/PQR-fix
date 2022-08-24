var sendto = "mesa.ayuda@coac-sanfra.com"
var correoc

"use strict";
var KTContactForm = function(){
    var t, e, i
    return{
        init:function(){
            t = document.querySelector("#kt_contact_form_form"),
            e = document.querySelector("#kt_contact_form_submit"),
            i = FormValidation.formValidation(t,{
                fields:{
                    cedulacliente:{
                        validators:{
                            notEmpty:{
                                message:"Número de cédula es requerido"
                            },
                            validarcedula:{
                                message:"Número de cédula ingresado no es válida"
                            }
                        }
                    },
                    nombrecliente:{
                        validators:{
                            notEmpty:{
                                message:"Nombres completos es requerido"
                            }
                        }
                    },
                    correocliente:{
                        validators:{
                            notEmpty:{
                                message:"Correo es requerido"
                            },
                            emailAddress:{
                                message:"El correo ingresado no es válido"
                            }
                        }
                    },
                    contactocliente:{
                        validators:{
                            notEmpty:{
                                message:"Teléfono de contacto es requerido"
                            }
                        }
                    },
                    comentarioscliente:{
                        validators:{
                            notEmpty:{
                                message:"Comentarios es requerido"
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
                            $.post('backend/setcontactform.php',{
                                id: NewGuid(),
                                cedula: $("#cedulacliente").val(),
                                nombresc: $("#nombrecliente").val(),
                                correoc: $("#correocliente").val(),
                                telefonoc: $("#contactocliente").val(),
                                comentariosc: $("#comentarioscliente").val(),
                                sendto: sendto
                            }).done(function(data, status){
                                console.log(data)
                                correoc = $("#correocliente").val()
                                var bodymail = "<html><h2><strong>Se a creado una solicitud a través de un formulario de contacto con lo siguiente</strong></h2>"
                                    bodymail += "<p><strong>Cédula: </strong>" + $("#cedulacliente").val() + "<br>"
                                    bodymail += "<strong>Nombres: </strong>" + $("#nombrecliente").val() + "<br>"
                                    bodymail += "<strong>Correo: </strong>" + $("#correocliente").val() + "<br>"
                                    bodymail += "<strong>Teléfono Contacto: </strong>" + $("#contactocliente").val() + "<br>"
                                    bodymail += "<strong>Comentarios: </strong>" + $("#comentarioscliente").val() + "<br></p>"
                                    bodymail += "<p><strong>* Nota: se debe crear un ticket con la información mostrada en este correo</strong></p>"
                                var subject = "Solicitud entrante por formulario de contacto"
                                SendMailGlobal(sendto, subject, bodymail)
                                
                                    Swal.fire({
                                        text: "Su solicitud a sido enviada con éxito",
                                        icon: "success",
                                        buttonsStyling: !1,
                                        closeOnClickOutside: false,
                                        closeOnEsc: false,
                                        confirmButtonText: 'OK',
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    })

                                $("#kt_contact_form_form").attr("hidden","hidden")
                                $("#kt_label_form_header").text("En breve un agente se comunicará con usted, gracias por contactarnos")
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
    KTContactForm.init()
}))

$("#kt_cancel_contact_form").click(function(){
    window.close()
})

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

/*Validación de celular*/
function validatePhoneCelular(phone){
	var re = /^(\0)?[ -]*(09)[ -]*([0-9][ -]*){8}$/;
	return re.test(phone)
}

/*Validación de cédula*/
function validarcedula(cedula){
	var i;
 	var acumulado;
 	var instancia;
 	acumulado = 0;

	/* Verifico que el campo no contenga letras */                  
    var ok = 1
    for (i=0;i<cedula.length && ok==1;i++){
      	var n = parseInt(cedula.charAt(i))
       	if (isNaN(n)) ok=0
    }

    if (ok == 0){
       	return false
    }
                 
    if (cedula.length < 10 ){              
      	return false
    }

 	for (i = 1;i <= 9;i++){
  		if (i%2 != 0){
   			instancia=cedula.substring(i-1,i)*2;
   		if (instancia > 9) instancia-=9;
  		}
  		else instancia = cedula.substring(i-1,i);
  		acumulado+=parseInt(instancia);
 	}
 	while (acumulado > 0)
  	acumulado-=10;	
 	if (cedula.substring(9,10) != (acumulado*-1)){
		return false
 	}
	else{
		return true
	}
	console.log("Cedula: " + cedula)
	console.log("Digito Verificador: " + acumulado*-1)
	console.log("--------------------------------------------------")
}


window.onbeforeunload = function(){
    localStorage.removeItem("tokenglobal")
}

window.onunload = function(){
    localStorage.removeItem("tokenglobal")
}