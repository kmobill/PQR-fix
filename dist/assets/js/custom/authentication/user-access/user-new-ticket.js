var pname;
var maxuploadfile;
get_max_upload_file();

window.onload = function () {
  pname = localStorage.getItem("ProfileName");
  var ppicture = localStorage.getItem("ProfilePicture");
  if (
    ppicture == "account/pictureprofile/undefined" ||
    ppicture == null ||
    ppicture == undefined
  ) {
    ppicture = "account/pictureprofile/ico-usuario.png";
  }
  var pmail = localStorage.getItem("ProfileMail");
  var pusertype = localStorage.getItem("ProfileUserType");
  tipousuario = localStorage.getItem("ProfileUserType");
  if (tipousuario == "su") {
    usuario = "";
  } else if (tipousuario == "Cliente") {
    usuario = localStorage.getItem("tempname");
  } else {
    usuario = localStorage.getItem("ProfileName");
  }

  /*************************************************Notificaciones*/
  if (pusertype == "ingresador") {
    get_notifications("backend/getnotifications.php?action=ingresador", pname);
  } else {
    get_notifications(
      "backend/getnotifications.php?action=noingresador",
      pname
    );
  }

  /*****************************************Valido tipo de usuario*/
  permissions_apps(pusertype);

  /*****************************************Cargo datos de usuario de usuario*/
  user_data(ppicture, pname, pmail, pusertype);

  create_new_ticket();
  //setTimeout(get_ticket, 1000)

  $("#maxuploadcant").text(
    "Cargar archivos o captura de pantalla (Max. " +
      maxuploadfile +
      " archivos / Max. 1.5Mb por archivo / Max. 4Mb en general )"
  );

  upload_files();

  /*var tca = localStorage.getItem("ProfileCallAgencia")
    if (tca == "callcenter"){
        $("#canalglb").removeAttr("hidden")
    }
    else {
        $("#canalglb").attr("hidden","hidden")
    }*/
};

("use strict");
var KTClientAccessGeneral = (function () {
  var t, e, i;
  return {
    init: function () {
      (t = document.querySelector("#kt_client_access_form")),
        (e = document.querySelector("#kt_client_access_submit")),
        (i = FormValidation.formValidation(t, {
          fields: {
            cedulacliente: {
              validators: {
                notEmpty: {
                  message: "Número de cédula es requerido",
                },
              },
            },
          },
          plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            bootstrap: new FormValidation.plugins.Bootstrap5({
              rowSelector: ".fv-row",
              eleInvalidClass: "",
              eleValidClass: "",
            }),
          },
        })),
        e.addEventListener("click", function (o) {
          var cedcliente = $("#cedulacliente").val();
          if (!validarcedula(cedcliente)) {
            Swal.fire({
              text: "Cédula ingresada no mantiene un formato correcto",
              icon: "warning",
              buttonsStyling: !1,
              confirmButtonText: "OK",
              customClass: {
                confirmButton: "btn btn-primary",
              },
            });
            $("#cedulacliente").focus();
          } else {
            o.preventDefault(),
              i.validate().then(function (i) {
                var usercedula = t.querySelector(
                  '[name="cedulacliente"]'
                ).value;
                "Valid" == i
                  ? (e.setAttribute("data-kt-indicator", "on"),
                    (e.disabled = !0),
                    setTimeout(function () {
                      e.removeAttribute("data-kt-indicator"),
                        (e.disabled = !1),
                        $.post("backend/getclient.php", {
                          usercedula: usercedula,
                        }).done(function (data, status) {
                          console.log(data);
                          var parseData = JSON.parse(data);
                          var existe = parseData.Existe;
                          if (existe == "No") {
                            Swal.fire({
                              text: "La cédula ingresada no existe en la base de registros, ingresa al nuevo cliente",
                              icon: "warning",
                              buttonsStyling: !1,
                              confirmButtonText: "OK",
                              customClass: {
                                confirmButton: "btn btn-primary",
                              },
                            });
                            $("#nombrecliente").removeAttr("disabled");
                            $("#correocliente").removeAttr("disabled");
                            $("#celularcliente").removeAttr("disabled");
                            $("#tipoproducto").removeAttr("disabled");
                            $("#nombrecliente").attr(
                              "placeholder",
                              "Ingrese el nombre del cliente"
                            );
                            $("#correocliente").attr(
                              "placeholder",
                              "Ingrese el correo del cliente"
                            );
                            $("#celularcliente").attr(
                              "placeholder",
                              "Ingrese el celular del cliente"
                            );
                            $("#nombrecliente").focus();
                            $("#tipoproducto").load(
                              "backend/getcatalogoproductos.php"
                            );
                          } else {
                            clientcedula = parseData.Cedula;
                            clientname = parseData.Name;
                            clientmail = parseData.Mail;
                            clientphone = parseData.Phone;
                            $("#nombrecliente").val(clientname);
                            $("#correocliente").val(clientmail);
                            $("#celularcliente").val(clientphone);
                            $("#nombrecliente").removeAttr("disabled");
                            $("#correocliente").removeAttr("disabled");
                            $("#celularcliente").removeAttr("disabled");
                            $("#tipoproducto").removeAttr("disabled");
                            $("#tipoproducto").focus();
                            $("#tipoproducto").load(
                              "backend/getcatalogoproductos.php"
                            );
                          }
                          $("#cedulacliente").attr("disabled", "disabled");
                          $("#kt_client_access_submit").attr(
                            "disabled",
                            "disabled"
                          );
                        });
                    }, 1500))
                  : Swal.fire({
                      text: "Debe ingresar información en el campo de cédula",
                      icon: "error",
                      buttonsStyling: !1,
                      confirmButtonText: "OK",
                      customClass: {
                        confirmButton: "btn btn-primary",
                      },
                    });
              });
          }
        });
    },
  };
})();

var clientcedula;
var clientname;
var clientmail;
var clientphone;
var correoasesor;

var KTNuevoTicketCliente = (function () {
  var t, e, i;
  return {
    init: function () {
      (t = document.querySelector("#kt_new_ticket_form")),
        (e = document.querySelector("#kt_new_ticket_submit")),
        (i = FormValidation.formValidation(t, {
          fields: {
            nombrecliente: {
              validators: {
                notEmpty: {
                  message: "Nombre del cliente es requerido",
                },
              },
            },
            correocliente: {
              validators: {
                notEmpty: {
                  message: "Correo de cliente es requerido",
                },
                emailAddress: {
                  message: "El correo ingresado no es válido",
                },
              },
            },
            celularcliente: {
              validators: {
                notEmpty: {
                  message: "Celular del cliente es requerido",
                },
              },
            },
            tipoincidencia: {
              validators: {
                notEmpty: {
                  message: "Tipo incidencia es requerido",
                },
              },
            },
            tipoproducto: {
              validators: {
                notEmpty: {
                  message: "Producto es requerido",
                },
              },
            },
            subtipoincidencia: {
              validators: {
                notEmpty: {
                  message: "Sub-tipo de incidencia es requerido",
                },
              },
            },
            "canal-usuario": {
              validators: {
                notEmpty: {
                  message: "Canal es requerido",
                },
              },
            },
          },
          plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            bootstrap: new FormValidation.plugins.Bootstrap5({
              rowSelector: ".fv-row",
            }),
          },
        })),
        e.addEventListener("click", function (n) {
          clientcedula = $("#cedulacliente").val();
          clientname = $("#nombrecliente").val();
          clientmail = $("#correocliente").val();
          clientphone = $("#celularcliente").val();
          n.preventDefault(),
            i.validate().then(function (i) {
              var tipoincidencia = t.querySelector(
                '[name="tipoincidencia"]'
              ).value;
              var tipoproducto = t.querySelector('[name="tipoproducto"]').value;
              var subtipoincidencia = t.querySelector(
                '[name="subtipoincidencia"]'
              ).value;
              var observaciones = $("#observacionesincidencia").val();
              if (observaciones == "") {
                observaciones = "Sin comentarios";
              } else {
                observaciones = observaciones;
              }
              create_new_ticket(),
                "Valid" == i
                  ? (e.setAttribute("data-kt-indicator", "on"),
                    (e.disabled = !0),
                    setTimeout(function () {
                      e.removeAttribute("data-kt-indicator"),
                        (e.disabled = !1),
                        $.post("backend/newticket.php", {
                          id: tokenglobal,
                          cedula: clientcedula,
                          nombres: clientname,
                          mail: clientmail,
                          phone: clientphone,
                          numeroticket: ticketnumber,
                          ticketid: ticketidn,
                          producto: $("#tipoproducto option:selected").text(),
                          tipoincidencia: $(
                            "#tipoincidencia option:selected"
                          ).text(),
                          stincidencia: $(
                            "#subtipoincidencia option:selected"
                          ).text(),
                          area: incarea,
                          canal: $("#canal-usuario").val(),
                          redsocial: $("#redessociales-usuario").val(),
                          agencia: $("#agencia-usuario").val(),
                          asesor: get_asesor_ticket(),
                          asesorid: get_asesorid_ticket(),
                          comentarios: observaciones,
                          tiemporespuesta: inctres,
                          tipotiempo: incttie,
                          createby: pname,
                          idcoment: NewGuid(),
                          idcliente: NewGuid(),
                        }).done(function (data, status) {
                          console.log(data);
                          var parseData = JSON.parse(data);
                          parseData = parseData.Result;
                          if (parseData == "OK") {
                            /**********************************************************************************************************Envió de mail*/
                            var subject =
                              "Cooperativa San Francisco - Nuevo ticket creado: " +
                              ticketidn;

                            var body2 = ` 
                                    <html>
                                        <style>
                                        body {
                                            margin: 0;
                                            padding: 0;
                                        }
                                        .flex-container {
                                            min-height: 100vh;
                                            background-color: #000000;
                                            display: flex;
                                            justify-content: center;
                                            align-items: center;
                                        }
                                        .image {
                                            display: flex;
                                            align-items: center;
                                            flex-direction: column;
                                            background-image: url("https://drive.google.com/file/d/1jOJsuy9DqAa060zYdUse7EjeFM27lmsD/view?usp=sharing");
                                            background-repeat: no-repeat;
                                            background-size: contain;
                                            height: 620px;
                                            aspect-ratio: 1.7728531856/1;
                                        }
                                        .container {
                                            font-family: Poppins, Helvetica, sans-serif;
                                            width: min(80%, 800px);
                                            text-align: left !important;
                                            background-size: contain;
                                            border: none;
                                            border-radius: 10px;
                                            box-shadow: 6px 6px 30px -5px #939393;
                                        }
                                        .title-container {
                                            padding: 2px 15px;
                                            color: #dddddd;
                                            font-size: 14px;
                                            font-weight: 500 !important;
                                            background-image: linear-gradient(to right, #15317e, #0a003d);
                                            text-align: left;
                                            border-top-left-radius: 5px;
                                            border-top-right-radius: 5px;
                                        }
                                        .body-container {
                                            background-color: #dddddd;
                                            border-bottom-left-radius: 5px;
                                            border-bottom-right-radius: 5px;
                                            padding: 2px 15px;
                                            color: #193463;
                                            font-size: 10px;
                                        }
                                        .items-container h1 > strong {
                                            color: #00235e;
                                        }
                                        .icon-sf {
                                            width: 400px;
                                            aspect-ratio: 1.74111675127/1;
                                        }
                                        </style>
                                    
                                        <body>
                                        <div class="flex-container">
                                            <div class="image">
                                            <img
                                                class="icon-sf"
                                                alt="SF icon"
                                                src="https://drive.google.com/file/d/1AEc-CAzNFxqbQXLNh2adY1nxl39bnoj9/view?usp=sharing"
                                            /><img />
                                            <div class="container">
                                                <section class="title-container">
                                                <h3>Estimado/a Supervisor/a,</h3>
                                                <h3>
                                                Se ha creado el ticket ${ticketidn}, con el siguiente detalle:
                                                </h3>
                                                </section>
                                                <section class="body-container">
                                                <div class="items-container">
                                                    <h1><strong>Producto: </strong> ${$(
                                                      "#tipoproducto"
                                                    ).val()}</h1>
                                                    <h1><strong>Tipo incidencia: </strong> ${$(
                                                      "#tipoincidencia"
                                                    ).val()}</h1>
                                                    <h1><strong>Sub-tipo incidencia: </strong> ${$(
                                                      "#subtipoincidencia"
                                                    ).val()}</h1>
                                                    <h1><strong>Comentario: </strong> ${$(
                                                      "#observacionesincidencia"
                                                    ).val()}</h1>

                                                </div>                                    
                                                <div class="items-container">
                                                    <h1><strong> Saludos, </strong></h1>
                                                    <h1><strong> Administrador del sistema. </strong></h1>
                                                </div>
                                                </section>
                                            </div>
                                            </div>
                                        </div>
                                        </body>
                                    </html>
                                  `;

                            var body = "<html>Estimado/a,<br></br><br></br>";
                            body +=
                              "Se ha creado el ticket " +
                              ticketidn +
                              ", con el siguiente detalle:<br></br><br></br>";
                            body +=
                              "<strong>Producto: </strong>" +
                              $("#tipoproducto").val() +
                              "<br></br>";
                            body +=
                              "<strong>Tipo incidencia: </strong>" +
                              $("#tipoincidencia").val() +
                              "<br></br>";
                            body +=
                              "<strong>Sub-tipo incidencia: </strong>" +
                              $("#subtipoincidencia").val() +
                              "<br></br><br></br><br></br>";
                            body +=
                              "<strong>Comentario: </strong>" +
                              "<br></br><br></br><br></br>";
                            body += "Saludos,<br></br>";
                            body += "Administrador del sistema</html>";
                            var mails = correoasesor.split(", ");
                            var msize = mails.length;
                            for (i = 0; i < msize; i++) {
                              console.log(mails[i]);
                              SendMailGlobal(mails[i], subject, body2);
                            }
                            //SendMailGlobal(correoasesor, subject, body)
                            /***********************************************************************************************************************/

                            /**********************************************************************************************************Envió de mail*/
                            var To1 = $("#correocliente").val();
                            var Subject1 =
                              "Cooperativa San Francisco - Nuevo ticket creado: " +
                              ticketidn;
                            /*var Body1 = "<html>Se ha generado un ticket de acuerdo a su requerimiento, el mismo sera atendido a la brevedad posible<br></br><br></br><br></br>"
                                        Body1 += "Saludos,<br></br>"
                                        Body1 += "Administrador del sistema</html>"*/
                            //var Body1 = "<img src='https://i.ibb.co/b1jhD9J/generado-ticket.png' width='740' height='701'>"
                            //var Body1 = "<img src='https://i.ibb.co/kBLrj23/generado-ticket.jpg' alt='generado-ticket' border='0'>"
                            var Body1 =
                              "<img src='https://drive.google.com/uc?export=view&id=1NrznwHX3fHC_GdO7ph-hmxzM6KdFMRnM' alt='generado-ticket' border='0'>";
                            SendMailGlobal(To1, Subject1, Body1);
                            /***********************************************************************************************************************/
                            Swal.fire({
                              text:
                                "Se ha generado el ticket " +
                                ticketidn +
                                "\nInformación guardada con éxito, desea registrar un nuevo ticket?",
                              icon: "success",
                              buttonsStyling: !1,
                              closeOnClickOutside: false,
                              closeOnEsc: false,
                              showCancelButton: true,
                              confirmButtonText: "Si",
                              cancelButtonText: "No, cancelar",
                              customClass: {
                                confirmButton: "btn btn-primary",
                                cancelButton: "btn btn-danger",
                              },
                            }).then((result) => {
                              if (result["isConfirmed"]) {
                                location.reload();
                              } else {
                                $("#kt_new_ticket_1").attr("hidden", "hidden");
                              }
                            });
                          } else {
                            Swal.fire({
                              text: "Existió un error al guardar la información, vuelva a intentarlo",
                              icon: "warning",
                              buttonsStyling: !1,
                              confirmButtonText: "OK",
                              customClass: {
                                confirmButton: "btn btn-primary",
                              },
                            });
                            delete_ticket_no_used(tokenglobal);
                          }
                        });
                    }, 2e3))
                  : Swal.fire({
                      text: "Debe ingresar información en los campos requeridos",
                      icon: "error",
                      buttonsStyling: !1,
                      confirmButtonText: "OK",
                      customClass: {
                        confirmButton: "btn btn-primary",
                      },
                    });
            });
        });
    },
  };
})();

KTUtil.onDOMContentLoaded(function () {
  KTClientAccessGeneral.init();
});

KTUtil.onDOMContentLoaded(function () {
  KTNuevoTicketCliente.init();
});

$("#celularcliente").change(function () {
  var ccliente = $("#celularcliente").val();
  if (!validatePhoneCelular(ccliente)) {
    Swal.fire({
      text: "Celular ingresado no mantiene un formato correcto",
      icon: "warning",
      buttonsStyling: !1,
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "btn btn-primary",
      },
    });
    $("#celularcliente").val("");
  }
});

$("#tipoproducto").change(function () {
  $.post("backend/validateiftincidencia.php", {
    producto: $("#tipoproducto").val(),
  }).done(function (data, status) {
    console.log(data);
    var ifExist = JSON.parse(data);
    ifExist = ifExist.Existe;
    if (ifExist == "Si") {
      $("#tipoincidencia").load("backend/getcatalogotiposincidencia.php");
      $("#tipoincidencia").removeAttr("disabled");
    } else {
      Swal.fire({
        text: "No existe un catalogo de incidencias registradas para el producto seleccionado, seleccione otro producto",
        icon: "warning",
        buttonsStyling: !1,
        confirmButtonText: "OK",
        customClass: {
          confirmButton: "btn btn-primary",
        },
      }).then(function (isConfirm) {
        $("#tipoincidencia").attr("disabled", "disabled");
        //$("#kt_cancel_ticket").click()
      });
    }
  });
});

var incarea = "";
var inctres = "";
var incttie = "";
var incpasi = "";
var incasesor = "";
var inccorreos = "";

$("#tipoincidencia").change(function () {
  var tipoinciden = $("#tipoincidencia").val();
  var tipoproducto = $("#tipoproducto").val();
  console.log(tipoinciden);
  if (tipoinciden === "Sugerencias") {
    //si es sugerencia se oculta los demas campos
    //console.log($("#subtipoincidencia").parent().parent());
    //console.log($("#subtipoincidencia"));
    $("#check-asignarme").parent().hide();
    $("#subtipoincidencia").parent().parent().hide();
    $("#tipoarea").parent().parent().hide();
    $("#canal-usuario").removeAttr("disabled");

    $("#subtipoincidencia").attr("disabled", "disabled");
    $("#subtipoincidencia").val('');

    $("#subtipoincidencia option:selected").text("none");
    $("#tipoarea").val("");

    //console.log($("#subtipoincidencia option:selected").text());

    $.post("backend/getuseradmin.php").done(function (data, status) {
      //console.log(data);
      var parseData = JSON.parse(data);
      var mail = parseData.data;
      //console.log(mail);
      var correoString = "";
      for (i = 0; i < mail.length; i++) {
        //console.log(mail[i][2]);
        correoString += mail[i][2] + ",";
      }
      correoasesor = correoString;

      //console.log($("#tipoarea").val());
    });
  } else {
    $("#canal-usuario").attr("disabled", "disabled");
    $("#subtipoincidencia").parent().parent().show();
    $("#tipoarea").parent().parent().show();
    $("#check-asignarme").parent().hide().show();
    $.post("backend/validateifstincidencia.php", {
      producto: tipoproducto,
      tincidencia: tipoinciden,
    }).done(function (data, status) {
      console.log(data);
      var ifExist = JSON.parse(data);
      ifExist = ifExist.Existe;
      if (ifExist == "Si") {
        $("#subtipoincidencia").load(
          "backend/getincidenciasubtipo.php",
          {
            tipoproducto: tipoproducto,
            tipoinciden: tipoinciden,
          },
          function (response, status) {
            $("#subtipoincidencia").removeAttr("disabled");
          }
        );
      } else {
        Swal.fire({
          text: "No existe un catalogo de incidencias registradas para el tipo de incidencia seleccionado, seleccione otro tipo de incidencia",
          icon: "warning",
          buttonsStyling: !1,
          confirmButtonText: "OK",
          customClass: {
            confirmButton: "btn btn-primary",
          },
        }).then(function (isConfirm) {
          $("#subtipoincidencia").attr("disabled", "disabled");
          //$("#kt_cancel_ticket").click()
        });
      }
    });
  }
});

$("#subtipoincidencia").change(function () {
  var cedulatk = $("#cedulacliente").val();
  var tipoincidencia = $("#tipoincidencia").val();
  var tipoproducto = $("#tipoproducto").val();
  var subtipoincidencia = $("#subtipoincidencia").val();
  $.post("backend/validateifduplicateticket.php", {
    cedulatk: cedulatk,
    productotk: tipoproducto,
    tincidenciatk: tipoincidencia,
    stincidenciatk: subtipoincidencia,
  }).done(function (data, status) {
    console.log(data);
    var parseData = JSON.parse(data);
    var vCedulaTK = parseData.data[0][0];
    if (vCedulaTK != "Sin archivo") {
      $("#kt_new_ticket_submit").attr("disabled", "disabled");
      var vNombresTK = parseData.data[0][1];
      var vTicketIdTK = parseData.data[0][2];
      var vStateTK = parseData.data[0][3];
      var mensaje =
        "Ya existe un ticket con los mismos datos para el cliente " +
        vCedulaTK +
        " " +
        vNombresTK +
        ", con identificador " +
        vTicketIdTK +
        ", en estado " +
        vStateTK +
        "... debe seleccionar otros datos para continuar";
      Swal.fire({
        text: mensaje,
        icon: "warning",
        buttonsStyling: !1,
        confirmButtonText: "OK",
        customClass: {
          confirmButton: "btn btn-primary",
        },
      });
    } else {
      $.post("backend/getincidenciasdata.php", {
        tipoproducto: tipoproducto,
        tipoincidencia: tipoincidencia,
        subtipoincidencia: subtipoincidencia,
      }).done(function (data, status) {
        console.log(data);
        var parseData = JSON.parse(data);
        incarea = parseData.Area;
        correoasesor = parseData.CorreoAsignacion;
        incpasi = parseData.PersonalAsignado;
        inctres = parseData.TiempoRespuesta;
        incttie = parseData.TipoTiempo;
        inccorreos = parseData.CorreoAsignacion;
        $("#tipoarea").val(incarea);
        incpasi = incpasi.trim();
        $("#canal-usuario").removeAttr("disabled");
        $("#kt_new_ticket_submit").removeAttr("disabled");
        /*$.post('backend/getuserbyareatype.php',{
            area: incarea,
            usertype: "",
            tquery: "area"
        }).done(function(data, status){
            console.log(data)
            var parseData = JSON.parse(data)
            var arr001 = parseData.data
            var arr002 = Object.keys(parseData.data).length
            var selectList = "<select class='form-control form-control-lg form-select' name='personalasignado' id='personalasignado' autocomplete='off'>"
            selectList += "<option selected disabled></option>"
            for (i = 0; i < arr002; i++){
                selectList += "<option>" + arr001[i][0] + " - " + arr001[i][1] + "</option>"
            }
            selectList += "</select>";
            $("#personalasignado").removeAttr("disabled")
            $("#personalasignado").html(selectList)
        })*/
      });
    }
  });
});

/*$("#personalasignado").change(function(){
    var pa = $("#personalasignado").val()
    pa = pa.split(" - ")
    pa = pa[1]
    correoasesor = pa
})*/

var vAutoAsignado = false;

$("#check-asignarme").change(function () {
  var checkasesor = document.getElementById("check-asignarme");
  if (checkasesor.checked == true) {
    $.post("backend/getuserorqvalidate.php", {
      area: incarea,
      name: localStorage.getItem("ProfileName"),
    }).done(function (data, status) {
      console.log(data);
      var parseData = JSON.parse(data);
      parseData = parseData.data[0][0];
      if (parseData == "No existe") {
        Swal.fire({
          text: "No se puede auto-asignar debido a que su usario no pertenece al área en mención",
          icon: "warning",
          buttonsStyling: !1,
          confirmButtonText: "OK",
          customClass: {
            confirmButton: "btn btn-primary",
          },
        });
        checkasesor.checked = false;
      } else {
        vAutoAsignado = true;
      }
    });
  } else {
    vAutoAsignado = false;
  }
});

$("#canalglb").change(function () {
  if ($("#canal-usuario").val() == "RedesSociales") {
    $("#redessocialesglb").removeAttr("hidden");
    $("#agenciaglb").attr("hidden", "hidden");
  } else if ($("#canal-usuario").val() == "Presencial") {
    $("#redessocialesglb").attr("hidden", "hidden");
    $("#agenciaglb").removeAttr("hidden");
    $("#agencia-usuario").load("backend/getcatalogoagencias.php");
  } else if ($("#canal-usuario").val() == "Llamada") {
    $("#redessocialesglb").attr("hidden", "hidden");
    $("#agenciaglb").attr("hidden", "hidden");
  }
});

function get_asesor_ticket() {
  if (vAutoAsignado == true) {
    incasesor = localStorage.getItem("ProfileName");
  } else {
    incasesor = inccorreos;
    //incasesor = "TODOS"
  }
  return incasesor;
}

var incidasesor;
function get_asesorid_ticket() {
  if (vAutoAsignado == true) {
    incidasesor = localStorage.getItem("ProfileId");
  } else {
    incidasesor = "TODOS";
  }
  return incidasesor;
}

$("#kt_cancel_ticket").click(function () {
  $("#kt_new_ticket_1").attr("hidden", "hidden");
});

$("#profile-logout").click(function () {
  onlogout();
});

var tokenglobal = NewGuid();
localStorage.setItem("tokenglobal", tokenglobal);

var ticketnumber;
var ticketidn;

function create_new_ticket() {
  $.post("backend/generatetickets.php", {
    id: tokenglobal,
  }).done(function (data, status) {
    console.log(data);
    var parseData = JSON.parse(data);
    var nTicket = parseData.NTicket;
    ticketnumber = nTicket;
    var nTicketLarge = nTicket.toString().length;
    console.log(nTicketLarge);
    if (nTicketLarge == 1) nTicket = "0000000" + nTicket;
    if (nTicketLarge == 2) nTicket = "000000" + nTicket;
    if (nTicketLarge == 3) nTicket = "00000" + nTicket;
    if (nTicketLarge == 4) nTicket = "0000" + nTicket;
    if (nTicketLarge == 5) nTicket = "000" + nTicket;
    if (nTicketLarge == 6) nTicket = "00" + nTicket;
    if (nTicketLarge == 7) nTicket = "0" + nTicket;
    ticketidn = "#" + nTicket;
    console.log(ticketidn);

    $("#ticket-number").removeAttr("hidden");
    $("#ticket-number").text(ticketidn);
  });
}

function NewGuid() {
  return "xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx"
    .replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    })
    .toUpperCase();
}

/*Fecha Actual*/
function obtenerFecha() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + "-" + mm + "-" + dd;
  return today;
}

/*Hora Actual*/
function addZero(j) {
  if (j < 10) {
    j = "0" + j;
  }
  return j;
}

function obtenerHora() {
  var d = new Date();
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  var s = addZero(d.getSeconds());
  var horaString = h + ":" + m + ":" + s;
  horaString = horaString.toString();
  horaString = horaString.substr(0, 8);
  return horaString + ".000";
}

/*Validación de celular*/
function validatePhoneCelular(phone) {
  var re = /^(\0)?[ -]*(09)[ -]*([0-9][ -]*){8}$/;
  return re.test(phone);
}

/*Validación de cédula*/
function validarcedula(cedula) {
  var i;
  var acumulado;
  var instancia;
  acumulado = 0;

  /* Verifico que el campo no contenga letras */
  var ok = 1;
  for (i = 0; i < cedula.length && ok == 1; i++) {
    var n = parseInt(cedula.charAt(i));
    if (isNaN(n)) ok = 0;
  }

  if (ok == 0) {
    return false;
  }

  if (cedula.length < 10) {
    return false;
  }

  for (i = 1; i <= 9; i++) {
    if (i % 2 != 0) {
      instancia = cedula.substring(i - 1, i) * 2;
      if (instancia > 9) instancia -= 9;
    } else instancia = cedula.substring(i - 1, i);
    acumulado += parseInt(instancia);
  }
  while (acumulado > 0) acumulado -= 10;
  if (cedula.substring(9, 10) != acumulado * -1) {
    return false;
  } else {
    return true;
  }
  console.log("Cedula: " + cedula);
  console.log("Digito Verificador: " + acumulado * -1);
  console.log("--------------------------------------------------");
}

window.onbeforeunload = function () {
  localStorage.removeItem("tokenglobal");
};

window.onunload = function () {
  localStorage.removeItem("tokenglobal");
};

/*Upload file*/
function checkUpload(currentFile, files) {
  // 4MB
  var maxTotalFileSize = 4194304;
  var TotalFileSize = 0;
  for (var key in files) {
    TotalFileSize = TotalFileSize + files[key].size;
  }
  var grandTotalFileSize = currentFile.data.size + TotalFileSize;
  if (grandTotalFileSize >= maxTotalFileSize) {
    Swal.fire({
      text: "Se excedió el tamaño máximo para la carga",
      icon: "warning",
      buttonsStyling: !1,
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "btn btn-primary",
      },
    });
    return false;
  } else {
    return true;
  }
}

imgid = null;
imgname = null;
imgextension = null;
imgurl = null;
imgnewname = null;
imggestionid = NewGuid();
conteoarchivos = 0;

function get_max_upload_file() {
  $.post("backend/getmaxuploadfiles.php", {}).done(function (data, status) {
    console.log(data);
    var parseData = JSON.parse(data);
    parseData = parseData.MaxUploadFiles;
    parseData = parseInt(parseData, 10);
    maxuploadfile = parseData;
  });
}

function upload_files() {
  var uppy = Uppy.Core({
    locale: Uppy.locales.es_ES,
    restrictions: {
      maxFileSize: 1600000,
      maxNumberOfFiles: maxuploadfile,
    },
    onBeforeFileAdded: (currentFile, files) => checkUpload(currentFile, files),
  })

    .use(Uppy.Dashboard, {
      debug: true,
      inline: true,
      target: "#fileToUpload",
      locale: {
        strings: {
          dropPaste: "Arrastre archivos aquí, pegue o %{browse}",
          browse: "busque en su equipo",
        },
      },
      metaFields: [
        {
          id: "name",
          name: "Nombre",
          placeholder: "Nombre del archivo + la extensión",
        },
      ],
      height: 10,
      allowMultipleUploads: false,
      showProgressDetails: true,
      replaceTargetContent: true,
      autoProceed: false,
      browserBackButtonClose: true,
      showLinkToFileUploadResult: true,
      proudlyDisplayPoweredByUppy: false,
      maxWidth: 100,
      maxHeight: 100,
    })

    .use(Uppy.XHRUpload, {
      endpoint: "backend/uploadserver.php",
      fieldName: "fileToUpload[]",
    });

  uppy.on("file-added", (file) => {
    imgname = file.name;
    imgextension = file.extension;
    conteoarchivos++;
    console.log(conteoarchivos);
    console.log("File", file);
  });

  uppy.on("upload-success", (file, response) => {
    console.log("Cargado con éxito!!!");
    if (imggestionid == "") {
      imgid = file.id;
    } else {
      imgid = imggestionid;
    }
    imgname = file.meta.name;
    imgextension = file.extension;
    imgurl = "uploadfile/" + imgname;
    $.ajax({
      type: "POST",
      url: "backend/setuploadfiles.php",
      data: {
        id: NewGuid(),
        ticketid: localStorage.getItem("tokenglobal"),
        imgname: imgname,
        imgextension: imgextension,
        imgurl: imgurl,
        uploadby: pname,
      },
      success: function (data) {
        console.log("Insertado con éxito!!!");
      },
    });
  });

  uppy.on("file-removed", (file) => {
    if (imggestionid == "") {
      imgid = file.id;
    } else {
      imgid = imggestionid;
    }
    $.ajax({
      type: "POST",
      url: "backend/DELAdjunto.php",
      data: { imgid: imgid },
      success: function (data) {
        console.log(imgname, "Eliminado con éxito!!!");
      },
    });
    console.log("Removed file", file);
  });

  uppy.on("cancel-all", (groupid) => {
    $.ajax({
      type: "POST",
      url: "backend/DELAdjuntoGroup.php",
      data: { imginteraction: imginteraction },
      success: function (data) {
        console.log("Cancelado con éxito!!!");
      },
    });
    console.log("Cancelado todo");
  });
}

imginteraction = tokenglobal;
console.log("InteractionId:", imginteraction);
/*Fin Upload File*/

/*******************************************************Menus */
/*Menú dashboard*/
$("#dashboard-integral").click(function () {
  window.location = "dashboard-integral";
});

$("#dashboard-tipo-incidencias").click(function () {
  window.location = "dashboard-tipo-incidencias";
});

$("#dashboard-kpi-gestion").click(function () {
  window.location = "dashboard-kpi-gestion";
});

$("#dashboard-kpi-experiencia-cliente").click(function () {
  window.location = "dashboard-kpi-experiencia-cliente";
});

/*Menú tickets*/
$("#user-new-ticket").click(function () {
  window.location = "user-new-ticket";
});

/*$("#search-ticket").click(function(){
    var pusertype = localStorage.getItem("ProfileUserType")
    if (pusertype == "orquestador"){
        window.location = "user-assigned-ticket"
    }
    else {
        window.location = "search-ticket"
    }
})*/

/*Menú administración*/
$("#users-administration").click(function () {
  window.location = "list-user";
});

$("#settings-administration").click(function () {
  window.location = "settings-administration";
});

$("#rols-administration").click(function () {
  window.location = "list-profile";
});

$("#menu-reportes").click(function () {
  window.location = "reports";
});
/****************************************************Fin menus*/
