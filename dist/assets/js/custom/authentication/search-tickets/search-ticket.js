var pname = localStorage.getItem("ProfileName");
var ppicture = localStorage.getItem("ProfilePicture");

function sendQuerySearchTickets(argumentsToQuery, searchtype, tipoUsuario) {
  console.log("argumentos: ", argumentsToQuery);
  dtajax = $("#datatable-ajax").DataTable({
    processing: true,
    destroy: true,
    paging: true,
    searching: true,
    responsive: true,
    pageLength: 5,
    scrollX: true,
    info: false,
    dom: "Bfrtip",
    language: {
      url: "assets/vendor/bootstrap/Spanish.json",
    },
    lengthMenu: [
      [5, 10, 25, 50],
      ["5", "10", "25", "50"],
    ],
    ajax: {
      type: "POST",
      dataType: "json",
      url: "backend/getticketsgestion.php",
      data: {
        rangoinicio: "dateI" in argumentsToQuery ? argumentsToQuery.dateI : "",
        rangofin: "dateE" in argumentsToQuery ? argumentsToQuery.dateE : "",
        tipousuario: tipoUsuario,
        profileid:
          profileid == "" || profileid == undefined ? "No aplica" : profileid,
        areaid: areaid == "" || areaid == undefined ? "No aplica" : areaid,
        statet: "",
        searchtype: searchtype,
        ticketid: "ticket" in argumentsToQuery ? argumentsToQuery.ticket : "",
        cedulaid: "cedula" in argumentsToQuery ? argumentsToQuery.cedula : "",
      },
      complete: function (getdiv) {
        $("#kt_search_ticket_submit").attr("disabled", "disabled");
      },
    },
    columns: [
      {
        className: "details-control",
        orderable: false,
        data: null,
        defaultContent: "",
      },
    ],
    columnDefs: [
      { title: "Detalles", targets: 0 },
      { title: "Ticket", targets: 5 },
      { title: "Cédula", targets: 1, visible: false },
      { title: "Nombres", targets: 2 },
      { title: "Mail", targets: 3, visible: false },
      { title: "Teléfono", targets: 4, visible: false },
      { title: "Producto", targets: 6, visible: false },
      {
        title: "Tipo incidencia",
        targets: 7,
        visible: false,
      },
      {
        title: "Sub-tipo incidencia",
        targets: 8,
        visible: false,
      },
      { title: "Área", targets: 9, visible: false },
      {
        title: "Tiempo respuesta",
        targets: 10,
        visible: false,
      },
      { title: "Creado por", targets: 11, visible: false },
      { title: "Estado", targets: 12 },
      {
        title: "Agente asignado",
        targets: 13,
        visible: false,
      },
      { title: "Id", targets: 14, visible: false },
      { title: "Fecha creación", targets: 15 },
    ],
    order: [[15, "desc"]],
    initComplete: function (settings, json) {
      if (json == null || json == "") {
        alert("Error");
      }
    },
  });
}

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
  get_notifications("backend/getnotifications.php?action=noingresador", pname);
}

/*****************************************Valido tipo de usuario*/
permissions_apps(pusertype);

/*****************************************Cargo datos de usuario de usuario*/
user_data(ppicture, pname, pmail, pusertype);

var profileid = localStorage.getItem("ProfileId");
var areaid = localStorage.getItem("ProfileUserArea");

var dtajax;

$("#cedulaticket").on("keyup", () => {
  $("#kt_search_ticket_submit").removeAttr("disabled");
  console.log("changing cedula");
});
$("#fechainicioticket").on("keyup", () => {
  $("#kt_search_ticket_submit").removeAttr("disabled");
  console.log("changing initial Date");
});
$("#fechafinticket").on("keyup", () => {
  $("#kt_search_ticket_submit").removeAttr("disabled");
  console.log("changing final Date");
});
$("#ticketticket").on("keyup", () => {
  $("#kt_search_ticket_submit").removeAttr("disabled");
  console.log("changing ticket");
});

$("#search-type").change(function () {
  //   location.reload();
  var sType = $("#search-type").val();
  $("#kt_search_ticket_submit").removeAttr("disabled");
  if (sType == "ticket") {
    $("#cedulaticket").val(" ");
    $("#fechainicioticket").val(" ");
    $("#fechafinticket").val(" ");

    $("#por-ticket").removeAttr("hidden");
    $("#por-cedula").attr("hidden", "hidden");
    $("#por-fecha-inicio").attr("hidden", "hidden");
    $("#por-fecha-fin").attr("hidden", "hidden");
    KTUtil.onDOMContentLoaded(function () {
      KTSearchByTicket.init();
    });
  }

  if (sType == "cedula") {
    $("#fechainicioticket").val(" ");
    $("#fechafinticket").val(" ");
    $("#ticketticket").val(" ");
    $("#por-ticket").attr("hidden", "hidden");
    $("#por-cedula").removeAttr("hidden");
    $("#por-fecha-inicio").attr("hidden", "hidden");
    $("#por-fecha-fin").attr("hidden", "hidden");
    KTUtil.onDOMContentLoaded(function () {
      KTSearchByNUI.init();
    });
  }

  if (sType == "fechas") {
    $("#cedulaticket").val(" ");
    $("#ticketticket").val(" ");
    $("#por-ticket").attr("hidden", "hidden");
    $("#por-cedula").attr("hidden", "hidden");
    $("#por-fecha-inicio").removeAttr("hidden");
    $("#por-fecha-fin").removeAttr("hidden");
    KTUtil.onDOMContentLoaded(function () {
      KTSearchByDate.init();
    });
  }
});

("use strict");

//argumentsToQuery is an Object with the arguments to be sent to the server
//searchtype is the type of search to be made (ticket, cedula, fecha)
//tipoUsuario is the type of user (ingresador, noingresador,etc)

var KTSearchByTicket = (function () {
  var t, e, i;
  return {
    init: function () {
      (t = document.querySelector("#kt_search_ticket_form")),
        (e = document.querySelector("#kt_search_ticket_submit")),
        (i = FormValidation.formValidation(t, {
          fields: {
            ticketticket: {
              validators: {
                notEmpty: {
                  message: "Número de ticket es requerido (solo números)",
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
          n.preventDefault();
          const searchType = $("#search-type").val();
          console.log(searchType);
          if (searchType === "ticket") {
            i.validate().then(function (i) {
              const argumentsToQuery = { ticket: $("#ticketticket").val() };
              console.log("ticket: ", $("#ticketticket").val());
              console.log(argumentsToQuery);
              const tipousuario = localStorage.getItem("ProfileUserType");
              "Valid" == i
                ? (e.setAttribute("data-kt-indicator", "on"),
                  (e.disabled = !0),
                  setTimeout(function () {
                    e.removeAttribute("data-kt-indicator"),
                      (e.disabled = !1),
                      sendQuerySearchTickets(
                        argumentsToQuery,
                        searchType,
                        tipousuario
                      );
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
          }
        });
    },
  };
})();

var KTSearchByNUI = (function () {
  var t, e, i;
  return {
    init: function () {
      (t = document.querySelector("#kt_search_ticket_form")),
        (e = document.querySelector("#kt_search_ticket_submit")),
        (i = FormValidation.formValidation(t, {
          fields: {
            cedulaticket: {
              validators: {
                notEmpty: {
                  message: "Cédula es requerida",
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
          n.preventDefault();
          const searchType = $("#search-type").val();
          console.log(searchType);
          if (searchType === "cedula") {
            i.validate().then(function (i) {
              const argumentsToQuery = { cedula: $("#cedulaticket").val() };
              console.log("cedula: ", $("#cedulaticket").val());
              console.log(argumentsToQuery);
              const tipousuario = localStorage.getItem("ProfileUserType");
              "Valid" == i
                ? (e.setAttribute("data-kt-indicator", "on"),
                  (e.disabled = !0),
                  setTimeout(function () {
                    e.removeAttribute("data-kt-indicator"),
                      (e.disabled = !1),
                      sendQuerySearchTickets(
                        argumentsToQuery,
                        searchType,
                        tipousuario
                      );
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
          }
        });
    },
  };
})();

var KTSearchByDate = (function () {
  var t, e, i;
  return {
    init: function () {
      (t = document.querySelector("#kt_search_ticket_form")),
        (e = document.querySelector("#kt_search_ticket_submit")),
        (i = FormValidation.formValidation(t, {
          fields: {
            fechainicioticket: {
              validators: {
                notEmpty: {
                  message: "Fecha de inicio es requerida",
                },
              },
            },
            fechafinticket: {
              validators: {
                notEmpty: {
                  message: "Fecha de fin es requerida",
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
          n.preventDefault();
          const searchType = $("#search-type").val();
          console.log(searchType);
          if (searchType === "fechas") {
            i.validate().then(function (i) {
              const rangeDate = {
                dateI: $("#fechainicioticket").val() + " 00:00:00",
                dateF: $("#fechafinticket").val() + " 23:59:59",
              };
              console.log("rangeDate: ", rangeDate);
              console.log($("#fechainicioticket").val() + " 00:00:00");
              console.log($("#fechafinticket").val() + " 23:59:59");

              const tipousuario = localStorage.getItem("ProfileUserType");
              i == "Valid"
                ? (e.setAttribute("data-kt-indicator", "on"),
                  (e.disabled = !0),
                  setTimeout(function () {
                    e.removeAttribute("data-kt-indicator"),
                      (e.disabled = !1),
                      sendQuerySearchTickets(
                        rangeDate,
                        searchType,
                        tipousuario
                      );
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
          }
        });
    },
  };
})();

var ticketidg;

$("#datatable-ajax tbody").on("click", "td.details-control", function () {
  var tr = $(this).closest("tr");
  var row = dtajax.row($(this).parents("tr"));

  if (row.child.isShown()) {
    row.child.hide();
    tr.removeClass("shown");
  } else {
    console.log(row.data());
    var dataglb = row.data();
    var cedula = dataglb[1];
    var mail = dataglb[3];
    var phone = dataglb[4];
    var producto = dataglb[6];
    var tincidencia = dataglb[7];
    var stincidencia = dataglb[8];
    var area = dataglb[9];
    var trespuesta = dataglb[10] + " " + dataglb[16];
    var creadop = dataglb[11];
    var aasignado = dataglb[13];
    var canal = dataglb[17];
    ticketidg = dataglb[14];
    row
      .child(
        format(
          cedula,
          mail,
          phone,
          producto,
          tincidencia,
          stincidencia,
          area,
          trespuesta,
          creadop,
          aasignado,
          canal
        )
      )
      .show();
    tr.addClass("shown");
  }
});

$("#kt_show_filter_date_ticket").click(function () {
  $("#kt_search_ticket_form").removeAttr("hidden");
  $("#kt_show_filter_date_ticket").attr("hidden", "hidden");
});

/* $("#kt_clean_ticket").click(function () {
  location.reload();
}); */

$("#profile-logout").click(function () {
  localStorage.removeItem("ProfileName");
  localStorage.removeItem("ProfilePicture");
  localStorage.removeItem("ProfileMail");
  localStorage.removeItem("ProfileUserType");
  Swal.fire({
    text: "Nos vemos luego!",
    icon: "success",
    buttonsStyling: !1,
    confirmButtonText: "OK",
    customClass: {
      confirmButton: "btn btn-primary",
    },
  });
});

window.onerror = function (message, source, lineno, colno, error) {
  if (
    message == "Uncaught TypeError: Cannot read property 'length' of undefined"
  ) {
    swal({
      title: "",
      text: "No se encontraron datos, compruebe los filtros",
      icon: "error",
      button: { visible: false },
      timer: 3000,
    });
    $("#panelcomentarios").attr("hidden", "hidden");
  }
};

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

window.onbeforeunload = function () {
  localStorage.removeItem("tokenglobal");
};

window.onunload = function () {
  localStorage.removeItem("tokenglobal");
};

function format(
  cedula,
  mail,
  phone,
  producto,
  tincidencia,
  stincidencia,
  area,
  trespuesta,
  creadop,
  aasignado,
  canal
) {
  return (
    '<table class="table table-striped table-bordered">' +
    "<tr>" +
    "<td>Cédula:</td>" +
    "<td>" +
    cedula +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Correo: </td>" +
    "<td>" +
    mail +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Teléfono: </td>" +
    "<td>" +
    phone +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Producto:</td>" +
    "<td>" +
    producto +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Tipo incidencia:</td>" +
    "<td>" +
    tincidencia +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Sub-tipo incidencia:</td>" +
    "<td>" +
    stincidencia +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Área:</td>" +
    "<td>" +
    area +
    "</td>" +
    "</tr>" +
    "<td>Canal:</td>" +
    "<td>" +
    canal +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Tiempo respuesta:</td>" +
    "<td>" +
    trespuesta +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Creado por:</td>" +
    "<td>" +
    creadop +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Agente asignado:</td>" +
    "<td>" +
    aasignado +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Comentarios: </td>" +
    '<td><a class="btn btn-link btn-comment">Ver comentarios</a></td>' +
    "</tr>" +
    "<tr>" +
    "<td>Capturas/Archivos subidos: </td>" +
    '<td><a class="btn btn-link btn-filesupload">Ver archivos</a></td>' +
    "</tr>" +
    "</table>"
  );
}

/*Dialogo Comentarios*/
alertify.commnetsdialog ||
  alertify.dialog("commnetsdialog", function () {
    return {
      main: function (content) {
        this.setContent(content);
      },
      setup: function () {
        return {
          options: {
            basic: false,
            maximizable: false,
            resizable: false,
            padding: false,
            title: "Comentarios",
            closable: true,
            movable: false,
          },
        };
      },
      settings: {
        selector: undefined,
      },
    };
  });

/*Dialogo uploads*/
alertify.uploadsdialog ||
  alertify.dialog("uploadsdialog", function () {
    return {
      main: function (content) {
        this.setContent(content);
      },
      setup: function () {
        return {
          options: {
            basic: false,
            maximizable: false,
            resizable: false,
            padding: false,
            title: "Capturas/Archivos",
            closable: true,
            movable: false,
          },
        };
      },
      settings: {
        selector: undefined,
      },
    };
  });

$("#datatable-ajax tbody").on("click", ".btn-comment", function () {
  if (ticketidg == "Sin Registro") {
    $(".btn-comment").attr("disabled", "disabled");
  } else {
    alertify.commnetsdialog($("#panelcomentarios")[0]);
    alertify.commnetsdialog().set("overflow", false);
    $("#panelcomentarios").removeAttr("hidden");
    get_comentarios();
  }
});

$("#datatable-ajax tbody").on("click", ".btn-filesupload", function () {
  if (ticketidg == "Sin Registro") {
    $(".btn-filesupload").attr("disabled", "disabled");
  } else {
    $.post("backend/getuploads.php", {
      ticketidg: ticketidg,
    }).done(function (data, status) {
      var parseData = JSON.parse(data);
      parseData = parseData.data[0][0];
      if (parseData == "Sin archivo") {
        Swal.fire({
          text: "No existen archivos cargados para el ticket seleccionado",
          icon: "warning",
          buttonsStyling: !1,
          confirmButtonText: "OK",
          customClass: {
            confirmButton: "btn btn-primary",
          },
        });
      } else {
        alertify.uploadsdialog($("#paneluploads")[0]);
        alertify.uploadsdialog().set("overflow", false);
        $("#paneluploads").removeAttr("hidden");
        get_uploads();
      }
    });
  }
});

var dcommentajax;

function get_comentarios() {
  dcommentajax = $("#datatable-ajax-comments").DataTable({
    processing: true,
    destroy: true,
    paging: true,
    searching: true,
    responsive: true,
    pageLength: 5,
    scrollX: true,
    info: false,
    dom: "Bfrtip",
    language: {
      url: "assets/vendor/bootstrap/Spanish.json",
    },
    lengthMenu: [
      [5, 10, 25, 50],
      ["5", "10", "25", "50"],
    ],
    ajax: {
      type: "POST",
      dataType: "json",
      url: "backend/getcomments.php",
      data: {
        ticketidg: ticketidg,
      },
    },
    columnDefs: [
      { title: "Fecha Creación", targets: 0 },
      { title: "Comentario", targets: 1 },
      { title: "Agente", targets: 2 },
    ],
    order: [[0, "desc"]],
    initComplete: function (settings, json) {
      if (json == null || json == "") {
        alert("Error");
      }
    },
  });
}

var duploadsajax;

function get_uploads() {
  duploadsajax = $("#datatable-ajax-uploads").DataTable({
    processing: true,
    destroy: true,
    paging: true,
    searching: true,
    responsive: true,
    pageLength: 5,
    scrollX: true,
    info: false,
    dom: "Bfrtip",
    language: {
      url: "assets/vendor/bootstrap/Spanish.json",
    },
    lengthMenu: [
      [5, 10, 25, 50],
      ["5", "10", "25", "50"],
    ],
    ajax: {
      type: "POST",
      dataType: "json",
      url: "backend/getuploads.php",
      data: {
        ticketidg: ticketidg,
      },
    },
    columnDefs: [
      { title: "Fecha Creación", targets: 0 },
      {
        title: "Archivo",
        targets: 1,
        data: "Descargar",
        render: function (data, type, row, meta) {
          data =
            '<a href="' + row[1] + '" download="' + row[2] + '">Descargar</a>';
          return data;
        },
      },
      { title: "Archivo", targets: 2, visible: false },
      { title: "Agente", targets: 3 },
    ],
    order: [[0, "desc"]],
    initComplete: function (settings, json) {
      if (json == null || json == "") {
        alert("Error");
      }
    },
  });
}

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
    if (pusertype == "orquestador" || pusertype == "administrador"){ //Cambio final 004
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
