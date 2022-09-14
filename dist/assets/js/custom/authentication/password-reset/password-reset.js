window.onload = function () {
  localStorage.removeItem("tempcode");
};

("use strict");
var KTPasswordResetGeneral = (function () {
  var t, e, i;
  return {
    init: function () {
      (t = document.querySelector("#kt_password_reset_form")),
        (e = document.querySelector("#kt_password_reset_submit")),
        (i = FormValidation.formValidation(t, {
          fields: {
            username: {
              validators: {
                notEmpty: {
                  message: "Usuario es requerido",
                },
              },
            },
            // email: {
            //   validators: {
            //     notEmpty: {
            //       message: "Dirección de correo es requerida",
            //     },
            //     emailAddress: {
            //       message: "El correo ingresado no es válido",
            //     },
            //   },
            // },
          },
          plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            bootstrap: new FormValidation.plugins.Bootstrap5({
              rowSelector: ".fv-row",
              /*eleInvalidClass: "",
              eleValidClass: "",*/
            }),
          },
        })),
        e.addEventListener("click", function (o) {
          o.preventDefault(),
            i.validate().then(function (i) {
              var searchId = t.querySelector('[name="username"]').value;
              "Valid" == i
                ? (e.setAttribute("data-kt-indicator", "on"),
                  (e.disabled = !0),
                  setTimeout(function () {
                    e.removeAttribute("data-kt-indicator"),
                      (e.disabled = !1),
                      $.post("backend/getbyuserid.php", {
                        userId: searchId,
                      }).done(function (data, status) {
                        console.log(data);
                        var parseData = JSON.parse(data);
                        var correo = parseData.Correo;
                        var id = parseData.Id;
                        var userid = parseData.UserId;
                        var userName = parseData.Name;
                        if (correo == "NoExiste") {
                          Swal.fire({
                            text: "El usuario no existe en la base de datos",
                            icon: "warning",
                            buttonsStyling: !1,
                            confirmButtonText: "OK",
                            customClass: {
                              confirmButton: "btn btn-primary",
                            },
                          });
                          t.querySelector('[name="username"]').value = "";
                        } else {
                          $.post("backend/getcode.php", {}).done(function (
                            data,
                            status
                          ) {
                            var parseData1 = JSON.parse(data);
                            var code = parseData1.Codigo;
                            localStorage.setItem("tempcode", code);
                            localStorage.setItem("tempmail", correo);
                            localStorage.setItem("tempprofileid", id);
                            localStorage.setItem("tempUid", userid);
                            /**********************************************************************************************************Envió de mail*/
                            var subject = "Cooperativa San Francisco - Código para reseteo de clave";
                            var body = "<html>Estimado/a<br></br><br></br>";
                            body +=
                              "Se ha generado un código para recuperación de contraseña para uso de la aplicación<br></br><br></br>";
                            body +=
                              "A continuación se detalla el mismo:<br></br><br></br>";
                            body +=
                              "<strong><h2>" +
                              code +
                              "</h2></strong><br></br><br></br><br></br>";
                            body += "Saludos,<br></br>";
                            body += "Administrador del sistema</html>";

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
                                            background-image: url("../../../../media/patterns/fondoAzulSF.png");
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
                                                src="../../../../media/icons/iconoSF.png"
                                            /><img />
                                            <div class="container">
                                                <section class="title-container">
                                                <h3>Estimado/a ${ userName },</h3>
                                                <h3>
                                                  Se ha generado un código para recuperación de contraseña para uso de la aplicación.
                                                </h3>

                                                <h3>
                                                  A continuación se detalla el mismo:
                                                </h3>  

                                                </section>
                                                <section class="body-container">
                                                <div class="items-container">

                                                    <h1><strong>${ code }</h1>
                                                    
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

                            SendMailGlobal(correo, subject, body2);
                            /***********************************************************************************************************************/

                            Swal.fire({
                              text: "Se envió el código de recuperación al correo indicado!",
                              icon: "success",
                              buttonsStyling: !1,
                              confirmButtonText: "OK",
                              customClass: {
                                confirmButton: "btn btn-primary",
                              },
                            }).then(function (e) {
                              e.isConfirmed &&
                                (t.querySelector('[name="username"]').value = "");

                              $.post("backend/setcodetemp.php", {
                                id: NewGuid(),
                                mail: correo,
                                code: code,
                                uid: userid,
                              }).done(function (data, status) {
                                console.log(data);
                                window.location =
                                  "authentication/flows/aside/new-password";
                              });
                            });
                          });
                        }
                      });
                  }, 1500))
                : Swal.fire({
                    text: "Debe ingresar información en el campo de correo",
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
  KTPasswordResetGeneral.init();
});

function NewGuid() {
  return "xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx"
    .replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    })
    .toUpperCase();
}
