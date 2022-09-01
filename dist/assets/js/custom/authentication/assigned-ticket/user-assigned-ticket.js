var pname;
var tipousuario;
var usuario;
var profileid;
var areaid;
var maxuploadfile;
var datatemp = [];

function get_max_upload_file() {
  $.post("backend/getmaxuploadfiles.php", {}).done(function (data, status) {
    console.log(data);
    var parseData = JSON.parse(data);
    parseData = parseData.MaxUploadFiles;
    parseData = parseInt(parseData, 10);
    maxuploadfile = parseData;
  });
}

get_max_upload_file();

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

profileid = localStorage.getItem("ProfileId");
areaid = localStorage.getItem("ProfileUserArea");

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

get_tickets_abiertos();
get_tickets_proceso();
get_tickets_finalizados();

var dtajax;
var dtajaxproceso;
var dtajaxfinalizado;
var ticketidg;
var nticketid;
var timeresp;
var typetime;
var aasignado;
var clientMail;
var vEditProducto;
var vEditTIncidencia;
var vEditSTIncidencia;
var vEditArea;
var vEditTRespuesta;

//new method to get the ticket id

/* $("#datatable-ajax tbody").on("click", "td.details-control", function () {

}); */

/**************************************************************************Pendientes*/
$("#datatable-ajax tbody").on("click", "#ticket-actions", function () {
  console.log("test ticket-actions");
  const prevtr = $(this)
    .parent("div")
    .parent("td")
    .parent("tr")
    .parent("tbody")
    .parent("table")
    .parent("td")
    .parent("tr")
    .prev();

  console.log("parent ticket action", prevtr);
  var row = dtajax.row(prevtr);
  console.log(row.data());
  var dataglb = row.data();
  datatemp = dataglb;
  console.log("se ha hecho click en el btn ticket action");
  vEditProducto = dataglb[6];
  vEditTIncidencia = dataglb[7];
  vEditSTIncidencia = dataglb[8];
  vEditArea = dataglb[9];
  vEditTRespuesta = dataglb[10] + " " + dataglb[16];
  clientMail = dataglb[3];
  aasignado = dataglb[13];
  timeresp = dataglb[10];
  typetime = dataglb[16];
  nticketid = dataglb[5];
  ticketidg = dataglb[14];
  console.log("ticket", ticketidg);
});
$("#datatable-ajax tbody").on("click", "td.details-control", function () {
  var tr = $(this).closest("tr");
  //   const tbody = $("#datatable-ajax tbody");
  console.log("parent td", $(this).parents("tr"));
  var row = dtajax.row($(this).parents("tr"));
  console.log(JSON.stringify(row.data()));
  console.log(row.data());
  /* console.log(tbody[0]);
  console.log(row.child); */
  if (row.child.isShown()) {
    row.child.hide();
    tr.removeClass("shown");
  } else {
    var dataglb = row.data();
    var cedula = dataglb[1];
    var mail = dataglb[3];
    var phone = dataglb[4];

    vEditProducto = dataglb[6];
    vEditTIncidencia = dataglb[7];
    vEditSTIncidencia = dataglb[8];
    vEditArea = dataglb[9];
    vEditTRespuesta = dataglb[10] + " " + dataglb[16];

    var producto = dataglb[6];
    var tincidencia = dataglb[7];
    var stincidencia = dataglb[8];
    var area = dataglb[9];
    var trespuesta = dataglb[10] + " " + dataglb[16];
    var creadop = dataglb[11];
    clientMail = dataglb[3];
    aasignado = dataglb[13];
    timeresp = dataglb[10];
    typetime = dataglb[16];
    nticketid = dataglb[5];
    ticketidg = dataglb[14];
    var canal = dataglb[17];
    var redsocial =
      dataglb[18] == "" || dataglb[18] == null ? "No Aplica" : dataglb[18];
    var agencia =
      dataglb[19] == "" || dataglb[19] == null ? "No Aplica" : dataglb[19];
    var comentario = dataglb[20];
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
          canal,
          redsocial,
          agencia,
          comentario
        )
      )
      .show();
    tr.addClass("shown");
  }
});

/**************************************************************************En proceso*/
$("#datatable-ajax-proceso tbody").on(
  "click",
  "td.details-control",
  function () {
    var tr = $(this).closest("tr");
    var row = dtajaxproceso.row($(this).parents("tr"));

    if (row.child.isShown()) {
      row.child.hide();
      tr.removeClass("shown");
    } else {
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
      clientMail = dataglb[3];
      aasignado = dataglb[13];
      timeresp = dataglb[10];
      typetime = dataglb[16];
      nticketid = dataglb[5];
      ticketidg = dataglb[14];
      var canal = dataglb[17];
      var redsocial =
        dataglb[18] == "" || dataglb[18] == null ? "No Aplica" : dataglb[18];
      var agencia =
        dataglb[19] == "" || dataglb[19] == null ? "No Aplica" : dataglb[19];
      row
        .child(
          format_proc_fin(
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
            canal,
            redsocial,
            agencia
          )
        )
        .show();
      tr.addClass("shown");
    }
  }
);

/**************************************************************************Finalizado*/
$("#datatable-ajax-finalizado tbody").on(
  "click",
  "td.details-control",
  function () {
    var tr = $(this).closest("tr");
    var row = dtajaxfinalizado.row($(this).parents("tr"));

    if (row.child.isShown()) {
      row.child.hide();
      tr.removeClass("shown");
    } else {
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
      clientMail = dataglb[3];
      aasignado = dataglb[13];
      timeresp = dataglb[10];
      typetime = dataglb[16];
      nticketid = dataglb[5];
      ticketidg = dataglb[14];
      var canal = dataglb[17];
      var redsocial =
        dataglb[18] == "" || dataglb[18] == null ? "No Aplica" : dataglb[18];
      var agencia =
        dataglb[19] == "" || dataglb[19] == null ? "No Aplica" : dataglb[19];
      row
        .child(
          format_finish(
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
            canal,
            redsocial,
            agencia
          )
        )
        .show();
      tr.addClass("shown");
    }
  }
);

$("#kt_show_filter_date_ticket").click(function () {
  $("#kt_search_ticket_form").removeAttr("hidden");
  $("#kt_show_filter_date_ticket").attr("hidden", "hidden");
});

$("#user-new-ticket").click(function () {
  window.location = "user-new-ticket";
});

$("#search-ticket").click(function () {
  window.location = "user-assigned-ticket";
});

$("#kt_clean_ticket").click(function () {
  location.reload();
});

$("#profile-logout").click(function () {
  onlogout();
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
  ccanal,
  rredsocial,
  aagencia,
  ccomentario
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
    "<td>Canal:</td>" +
    "<td>" +
    ccanal +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Red social:</td>" +
    "<td>" +
    rredsocial +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Agencia:</td>" +
    "<td>" +
    aagencia +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Primer comentario:</td>" +
    "<td>" +
    ccomentario +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Acciones:</td>" +
    '<td><div class="btn-group dropup">' +
    '<button class="btn btn-link dropdown-toggle" type="button" id="ticket-actions" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">' +
    "Acciones sobre ticket" +
    "</button>" +
    '<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="ticket-actions">' +
    '<li><a class="dropdown-item btn-comment" href="#">Ver comentarios</a></li>' +
    '<li><a class="dropdown-item btn-filesupload" href="#">Ver capturas subidas</a></li>' +
    '<li><a class="dropdown-item btn-editar-ticket" href="#" data-bs-toggle="modal" data-bs-target="#edicionTCK">Editar ticket</a></li>' +
    '<li><a class="dropdown-item btn-gestionar-ticket" href="#" data-bs-toggle="modal" data-bs-target="#gestionTCK">Gestionar ticket</a></li>' +
    "</ul>" +
    "</div></td>" +
    "</tr>" +
    "</table>"
  );
}

function format_proc_fin(
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
  ccanal,
  rredsocial,
  aagencia
) {
  //Cambio final 006
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
    "<td>Canal:</td>" +
    "<td>" +
    ccanal +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Red social:</td>" +
    "<td>" +
    rredsocial +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Agencia:</td>" +
    "<td>" +
    aagencia +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Acciones:</td>" +
    '<td><div class="btn-group dropup">' +
    '<button class="btn btn-link dropdown-toggle" type="button" id="ticket-actions" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">' +
    "Acciones sobre ticket" +
    "</button>" +
    '<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="ticket-actions">' +
    '<li><a class="dropdown-item btn-comment" href="#">Ver comentarios</a></li>' +
    '<li><a class="dropdown-item btn-filesupload" href="#">Ver capturas subidas</a></li>' +
    '<li><a class="dropdown-item btn-history" href="#">Ver historial</a></li>' +
    '<li><a class="dropdown-item btn-time-ocup" href="#">Ver tiempos</a></li>' +
    '<li><a class="dropdown-item btn-gestionar-ticket" href="#" data-bs-toggle="modal" data-bs-target="#gestionTCK">Gestionar ticket</a></li>' +
    "</ul>" +
    "</div></td>" +
    "</tr>" +
    "</table>"
  );
}

function format_finish(
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
  ccanal,
  rredsocial,
  aagencia
) {
  //Cambio final 007
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
    "<td>Canal:</td>" +
    "<td>" +
    ccanal +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Red social:</td>" +
    "<td>" +
    rredsocial +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Agencia:</td>" +
    "<td>" +
    aagencia +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Acciones:</td>" +
    '<td><div class="btn-group dropup">' +
    '<button class="btn btn-link dropdown-toggle" type="button" id="ticket-actions" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">' +
    "Acciones sobre ticket" +
    "</button>" +
    '<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="ticket-actions">' +
    '<li><a class="dropdown-item btn-comment" href="#">Ver comentarios</a></li>' +
    '<li><a class="dropdown-item btn-filesupload" href="#">Ver capturas subidas</a></li>' +
    '<li><a class="dropdown-item btn-history" href="#">Ver historial</a></li>' +
    '<li><a class="dropdown-item btn-time-ocup" href="#">Ver tiempos</a></li>' +
    '<li><a class="dropdown-item btn-reopen" href="#">Solicitar reaperturar ticket</a></li>' +
    "</ul>" +
    "</div></td>" +
    "</tr>" +
    "</table>"
  );
}

/********************************************************************Edicion ticket*/
/*$('#datatable-ajax tbody').on('click', '.btn-editar-ticket', function(){
	var data = dtajax.row($(this).parents('tr')).data()
	console.log(data)
})*/

$("#edicionTCK").on("shown.bs.modal", function () {
  KTUtil.onDOMContentLoaded(function () {
    KTEditarTicketCliente.init();
  });
  $("#torquestador").load("backend/getuserssupervisor.php");
  $("#tipoproducto").load("backend/getcatalogoproductos.php");
  $("#tipoincidencia").load("backend/getcatalogotiposincidencia.php");
  $("#kt_edicion_ticket_submit").removeAttr("hidden");
  setTimeout(getEditTicketTP, 500, vEditProducto);
  setTimeout(getEditTicketTI, 500, vEditTIncidencia);
  setTimeout(getEditTicketTSIA, 700);
  setTimeout(getEditTicketTSI, 700, vEditSTIncidencia);
  setTimeout(getEditTicketTA, 500, vEditArea);
  setTimeout(getEditTicketTR, 500, vEditTRespuesta);
});

function getEditTicketTP(data) {
  $("#tipoproducto").val(data);
}

function getEditTicketTI(data) {
  $("#tipoincidencia").val(data);
}

function getEditTicketTSI(data) {
  $("#subtipoincidencia").val(data);
}

function getEditTicketTSIA() {
  var tipoinciden = $("#tipoincidencia").val();
  var tipoproducto = $("#tipoproducto").val();

  if (tipoinciden == "Sugerencias") {
    $("#subtipoincidencia").empty();
    $("#subtipoincidencia option:selected").text("none");
  } else {
    $("#subtipoincidencia").load(
      "backend/getincidenciasubtipo.php",
      {
        tipoproducto: tipoproducto,
        tipoinciden: tipoinciden,
      },
      function (response, status) {
        console.log(response);
        console.log(vEditSTIncidencia);
        $("#subtipoincidencia").val(vEditSTIncidencia);
      }
    );
  }
}

function getEditTicketTA(data) {
  $("#tipoarea").val(data);
}

function getEditTicketTR(data) {
  $("#tiemporespuesta").val(data);
}

$("#edicionTCK").on("hidden.bs.modal", function () {
  $(this).find("form").trigger("reset");
});

$("#torquestador").change(function () {
  //$("#tipoproducto").load("backend/getcatalogoproductos.php")
  $("#tipoproducto").removeAttr("disabled");
  $("#tipoincidencia").removeAttr("disabled");
  $("#subtipoincidencia").removeAttr("disabled");
  getEditTicketTSIA();
});

$("#tipoproducto").change(function () {
  //$("#tipoincidencia").load("backend/getcatalogotiposincidencia.php")
  $("#tipoincidencia").removeAttr("disabled");
});

var incarea;
var inctres;
var incttie;
var inccorreos;

$("#tipoincidencia").change(function () {
  var tipoinciden = $("#tipoincidencia").val();
  var tipoproducto = $("#tipoproducto").val();

  if (tipoinciden == "Sugerencias") {
    $("#subtipoincidencia").val("");
    $("#subtipoincidencia option:selected").text("none");
    $("#subtipoincidencia").attr("disabled", "disabled");
    $("#tipoarea").val("");
    $("#tiemporespuesta").val("");

    incarea = "";
    inctres = "";
    incttie = "";
    inccorreos = "";
  } else {
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
  }
});

$("#subtipoincidencia").change(function () {
  var tipoincidencia = $("#tipoincidencia").val();
  var tipoproducto = $("#tipoproducto").val();
  var subtipoincidencia = $("#subtipoincidencia").val();
  $.post("backend/getincidenciasdata.php", {
    tipoproducto: tipoproducto,
    tipoincidencia: tipoincidencia,
    subtipoincidencia: subtipoincidencia,
  }).done(function (data, status) {
    console.log(data);
    var parseData = JSON.parse(data);
    incarea = parseData.Area;
    inctres = parseData.TiempoRespuesta;
    incttie = parseData.TipoTiempo;
    inccorreos = parseData.CorreoAsignacion;
    $("#tipoarea").val(incarea);
    $("#tiemporespuesta").val(inctres + " " + incttie);
    $("#kt_edicion_ticket_submit").removeAttr("hidden");
  });
});

var KTEditarTicketCliente = (function () {
  var t, e, i;
  return {
    init: function () {
      (t = document.querySelector("#kt_edticket_form")),
        (e = document.querySelector("#kt_edicion_ticket_submit")),
        (i = FormValidation.formValidation(t, {
          fields: {
            torquestador: {
              validators: {
                notEmpty: {
                  message: "Supervisor es requerido",
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
            editcomentario: {
              validators: {
                notEmpty: {
                  message: "El comentario es requerido",
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
          n.preventDefault(),
            i.validate().then(function (i) {
              "Valid" == i
                ? (e.setAttribute("data-kt-indicator", "on"),
                  (e.disabled = !0),
                  setTimeout(function () {
                    e.removeAttribute("data-kt-indicator"),
                      (e.disabled = !1),
                      $.post("backend/udpedittickets.php", {
                        ticketidg: ticketidg,
                        producto: $("#tipoproducto").val(),
                        tipoincidencia: $("#tipoincidencia").val(),
                        stincidencia: $("#subtipoincidencia").val(),
                        area: incarea,
                        tiemporespuesta: inctres,
                        tipotiempo: incttie,
                        numeroticket: nticketid,
                        idcoment: NewGuid(),
                        comentarios: $("#editcomentario").val(),
                        agente: aasignado,
                      }).done(function (data, status) {
                        console.log(data);
                        var parseData = JSON.parse(data);
                        parseData = parseData.Result;
                        if (parseData == "OK") {
                          var correosupervisor = $("#torquestador").val();
                          correosupervisor = correosupervisor.split(" - ");
                          correosupervisor = correosupervisor[1];
                          //SendMailTicketEdit(nticketid, aasignado, $("#tipoproducto").val(), $("#tipoincidencia").val(), $("#subtipoincidencia").val(), correoorquestador)
                          /**********************************************************************************************************Envió de mail*/
                          var subject = "Edición " + nticketid;
                          var body =
                            "<html>Estimado Supervisor,<br></br><br></br>";
                          body +=
                            "Se le notifica que el " +
                            nticketid +
                            ", ha sido modificado por el usuario " +
                            aasignado +
                            " con los siguientes datos:<br></br><br></br>";
                          body +=
                            "<strong>Producto: " +
                            $("#tipoproducto").val() +
                            "</strong><br></br>";
                          body +=
                            "<strong>Tipo incidencia: " +
                            $("#tipoincidencia").val() +
                            "</strong><br></br>";
                          body +=
                            "<strong>Sub-tipo incidencia: " +
                            $("#subtipoincidencia").val() +
                            "</strong><br></br><br></br><br></br>";
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
                                                <h3>Estimado Supervisor,</h3>
                                                <h3>
                                                Se le notifica que el ${nticketid}, ha sido modificado por el usuario ${aasignado} con los siguientes datos:
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
                                                    <h1><strong>Sub-tipo incidencia: </strong>" ${$(
                                                      "#subtipoincidencia"
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
                          SendMailGlobal(correosupervisor, subject, body2);
                          /***********************************************************************************************************************/

                          Swal.fire({
                            text: "Ticket editado con éxito, se ha enviado un registro del cambio a su supervisor",
                            icon: "success",
                            buttonsStyling: !1,
                            confirmButtonText: "OK",
                            customClass: {
                              confirmButton: "btn btn-primary",
                            },
                          }).then((result) => {
                            location.reload();
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

$("#kt_editar_cancel_ticket").click(function () {
  $("#kt_edicion_ticket_submit").attr("hidden", "hidden");
  $("#edicionTCK").modal("hide");
});

/********************************************************************Gestion ticket*/
$("#gestionTCK").on("shown.bs.modal", function () {
  $("#maxuploadcant").text(
    "Cargar archivos o print (Max. " + maxuploadfile + " archivos - 4Mb)"
  );
  upload_files();
  getTime();
  if (typetime == "inmediato") {
    $("#tiempomaximo").text("Sin límite");
    $("#tiemporestante").text("Sin límite");
    $("#tiempoexcedido").text("00:00:00:00");
    getTranscTime(seconds);
  } else {
    getMaxTime();
    getTranscTime(seconds);
    setTimeout(getRestTime, 1000);
  }

  if (tipousuario == "orquestador") {
    var selectList =
      "<select class='form-control form-control-lg form-select' name='ticketestado' id='ticketestado' autocomplete='off'>";
    selectList += "<option selected disabled></option>";
    selectList += "<option value='ESCALAR'>ESCALAR</option>";
    selectList += "<option value='EN PROCESO'>EN PROCESO</option>";
    selectList += "</select>";
    $("#ticketestado").html(selectList);
  } else {
    /*else if (tipousuario == "administrador"){
        var selectList = "<select class='form-control form-control-lg form-select' name='ticketestado' id='ticketestado' autocomplete='off'>"
        selectList += "<option selected disabled></option>"
        selectList += "<option value='EN PROCESO'>EN PROCESO</option>"
        selectList += "<option value='FINALIZADO'>FINALIZAR</option>"
        selectList += "</select>"
        $("#ticketestado").html(selectList)
    }*/
    var selectList =
      "<select class='form-control form-control-lg form-select' name='ticketestado' id='ticketestado' autocomplete='off'>";
    selectList += "<option selected disabled></option>";
    selectList += "<option value='ESCALAR'>ESCALAR</option>";
    selectList += "<option value='EN PROCESO'>EN PROCESO</option>";
    selectList += "<option value='FINALIZADO'>FINALIZAR</option>";
    selectList += "</select>";
    $("#ticketestado").html(selectList);
  }
});

$("#gestionTCK").on("hidden.bs.modal", function () {
  $(".fv-plugins-message-container").text("");
  clearInterval(counter);
  clearInterval(counter1);
  clearInterval(counter2);
  clearInterval(counter3);
  $("#tiempogestion").text("00:00:00:00");
  vTiempoResTemp = 0;
  $(this).find("form").trigger("reset");
});

var tUs = 0;

$("#ticketestado").change(function () {
  var estadotg = $("#ticketestado").val();
  if (estadotg == "EN PROCESO" || estadotg == "FINALIZADO") {
    $("#uploadtg").removeAttr("hidden");
    $("#escalrtg").attr("hidden", "hidden");
    $("#commentstg").removeAttr("hidden");
    $("#kt_gestion_ticket_submit").removeAttr("hidden");
    tUs = 0;
  } else {
    $("#uploadtg").attr("hidden", "hidden");
    $("#escalrtg").removeAttr("hidden");
    $("#commentstg").removeAttr("hidden");
    $("#kt_gestion_ticket_submit").removeAttr("hidden");
    $("#ticketescalar").load("backend/getuserssuporq.php", {
      profileid: profileid,
    });
    tUs = 1;
  }
});

var usescalar;
var usernameescalar;
var profileidescalar;
var usermailescalar;

$("#ticketescalar").change(function () {
  usescalar = $("#ticketescalar").val();
  usescalar = usescalar.split(" - ");
  usernameescalar = usescalar[0];
  usermailescalar = usescalar[1];
  profileidescalar = usescalar[2];
});

("use strict");
const form = document.getElementById("kt_gticket_form");

var validatorUpdateTicket = FormValidation.formValidation(form, {
  fields: {
    ticketestado: {
      validators: {
        notEmpty: {
          message: "Estado es requerido",
        },
      },
    },
    observacionesincidencia: {
      validators: {
        notEmpty: {
          message: "Comentarios es requerido",
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
});

var validatorUpdateTicketEscalar = FormValidation.formValidation(form, {
  fields: {
    ticketestado: {
      validators: {
        notEmpty: {
          message: "Estado es requerido",
        },
      },
    },
    observacionesincidencia: {
      validators: {
        notEmpty: {
          message: "Comentarios es requerido",
        },
      },
    },
    ticketescalar: {
      validators: {
        notEmpty: {
          message: "Escalamiento es requerido",
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
});

const submitButton = document.getElementById("kt_gestion_ticket_submit");
submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (tUs == 0) {
    if (validatorUpdateTicket) {
      validatorUpdateTicket.validate().then(function (status) {
        console.log(status);
        if (status == "Valid") {
          submitButton.setAttribute("data-kt-indicator", "on");
          submitButton.disabled = true;
          setTimeout(function () {
            submitButton.removeAttribute("data-kt-indicator");
            submitButton.disabled = false;
            $.post("backend/udptickets.php", {
              ticketidg: ticketidg,
              estadog: $("#ticketestado").val(),
              numeroticket: nticketid,
              idcoment: NewGuid(),
              idtime: NewGuid(),
              agente: pname,
              profileid: profileid,
              comentarios: $("#observacionesincidencia").val(),
              maxtime: vTiempoResTemp,
              gestime: seconds + oldsegundos,
              exctime: secondsexctime,
            }).done(function (data, status) {
              console.log(data);
              try {
                var parseData = JSON.parse(data);
              } catch (error) {
                var parseData = JSON.parse("");
                console.log(error);
              }
              if (parseData.Result == "OK") {
                var estadoticket = $("#ticketestado").val();
                if (estadoticket == "FINALIZADO") {
                  /**********************************************************************************************************Envió de mail*/
                  //var urlencuesta = "http://localhost/SANFRANTK/dist/authentication/flows/aside/quiz-form-ticket?TicketId=" + ticketidg //QA
                  var urlencuesta =
                    "http://186.46.61.28:54667/dist/authentication/flows/aside/quiz-form-ticket?TicketId=" +
                    ticketidg; //Producción
                  var subject = "Encuesta " + nticketid;
                  /*var body = "<html>Estimado/a cliente,<br></br><br></br>"
                                        body += "A finalizado su ticket, su ayuda respondiendo una encuesta ingresando en el siguiente link: <br></br><br></br>"
                                        body += "<a href=" + urlencuesta + ">Ir a encuesta</a><br></br><br></br><br></br>"
                                        body += "Saludos,<br></br>"
                                        body += "Administrador del sistema</html>"*/
                  var body =
                    "<a href='" +
                    urlencuesta +
                    "'><img src='https://drive.google.com/uc?export=view&id=1j-MLd5C_8ID9faI4oCnrPhK5UZQ4YmgS' alt='ticket-finalizado' border='0'></a>";
                  SendMailGlobal(clientMail, subject, body);
                  /***********************************************************************************************************************/
                }
                Swal.fire({
                  text: "Ticket actualizado con éxito",
                  icon: "success",
                  buttonsStyling: !1,
                  confirmButtonText: "OK",
                  customClass: {
                    confirmButton: "btn btn-primary",
                  },
                }).then((result) => {
                  location.reload();
                });
              } else {
                Swal.fire({
                  text: "Ocurrió un error al actualizar el ticket, vuelva a intentarlo",
                  icon: "warning",
                  buttonsStyling: !1,
                  confirmButtonText: "OK",
                  customClass: {
                    confirmButton: "btn btn-primary",
                  },
                });
              }
            });
          }, 1500);
        } else {
          Swal.fire({
            text: "Debe ingresar información en los campos requeridos",
            icon: "error",
            buttonsStyling: !1,
            confirmButtonText: "OK",
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
        }
      });
    }
  } else {
    if (validatorUpdateTicketEscalar) {
      validatorUpdateTicketEscalar.validate().then(function (status) {
        console.log(status);
        if (status == "Valid") {
          submitButton.setAttribute("data-kt-indicator", "on");
          submitButton.disabled = true;
          setTimeout(function () {
            submitButton.removeAttribute("data-kt-indicator");
            submitButton.disabled = false;
            $.post("backend/udptickets.php", {
              ticketidg: ticketidg,
              estadog: "EN PROCESO",
              numeroticket: nticketid,
              idcoment: NewGuid(),
              idtime: NewGuid(),
              agente: usernameescalar,
              profileid: profileidescalar,
              comentarios: $("#observacionesincidencia").val(),
              maxtime: vTiempoResTemp,
              gestime: seconds + oldsegundos,
              exctime: secondsexctime,
            }).done(function (data, status) {
              console.log(data);
              console.log($("#tipoproducto"));
              var parseData = JSON.parse(data);
              if (parseData.Result == "OK") {
                var subject = "Ticket escalado: " + nticketid;
                /* var body = "<html>Estimado/a,<br></br><br></br>";
                body +=
                  "Se le ha escalado el ticket " +
                  nticketid +
                  ", por el usuario " +
                  localStorage.getItem("ProfileName") +
                  ", con el siguiente detalle:<br></br><br></br>";
                body +=
                  "<strong>Producto: </strong>" + datatemp[6] ||
                  "" + "<br></br>";
                body +=
                  "<strong>Tipo incidencia: " +
                  datatemp[7] +
                  "</strong><br></br>";
                body +=
                  "<strong>Sub-tipo incidencia: " +
                  datatemp[8] +
                  "</strong><br></br><br></br><br></br>";
                body +=
                  "<strong>Comentario: </strong>" +
                  $("#observacionesincidencia").val() +
                  "<br></br><br></br><br></br>";
                body += "Saludos,<br></br>";
                body += "Administrador del sistema</html>"; */
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
                                                Se le ha escalado el ticket ${nticketid}, por el usuario ${localStorage.getItem(
                  "ProfileName"
                )} , con el siguiente detalle:
                                                </h3>
                                                </section>
                                                <section class="body-container">
                                                <div class="items-container">
                                                    <h1><strong>Producto: </strong> ${
                                                      datatemp[6] || ""
                                                    }</h1>
                                                    <h1><strong>Tipo incidencia: </strong> ${
                                                      datatemp[7]
                                                    }</h1>
                                                    <h1><strong>Sub-tipo incidencia: </strong> ${
                                                      datatemp[8]
                                                    }</h1>
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
                SendMailGlobal(usermailescalar, subject, body2);

                Swal.fire({
                  text: "Ticket actualizado con éxito",
                  icon: "success",
                  buttonsStyling: !1,
                  confirmButtonText: "OK",
                  customClass: {
                    confirmButton: "btn btn-primary",
                  },
                }).then((result) => {
                  location.reload();
                });
              } else {
                Swal.fire({
                  text: "Ocurrió un error al actualizar el ticket, vuelva a intentarlo",
                  icon: "warning",
                  buttonsStyling: !1,
                  confirmButtonText: "OK",
                  customClass: {
                    confirmButton: "btn btn-primary",
                  },
                });
              }
            });
          }, 1500);
        } else {
          Swal.fire({
            text: "Debe ingresar información en los campos requeridos",
            icon: "error",
            buttonsStyling: !1,
            confirmButtonText: "OK",
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
        }
      });
    }
  }
});

$("#kt_gestion_cancel_ticket").click(function () {
  clearInterval(counter);
  clearInterval(counter1);
  clearInterval(counter2);
  clearInterval(counter3);
  $("#tiempogestion").text("00:00:00:00");
  vTiempoResTemp = 0;
  $("#uploadtg").attr("hidden", "hidden");
  $("#escalrtg").attr("hidden", "hidden");
  $("#commentstg").attr("hidden", "hidden");
  $("#commentstg").val("");
  $("#kt_gestion_ticket_submit").attr("hidden", "hidden");
  $("#gestionTCK").modal("hide");
});

$("#gestionTCK").on("hidden.bs.modal", function () {
  $("#ticketestado").removeClass("is-valid");
  $(".fv-plugins-message-container").text("");
  $(this).find("form").trigger("reset");
});

/********************************************************************Comentarios */
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

/******************************************************************************Comentarios*/
$("#datatable-ajax tbody").on("click", ".btn-comment", function () {
  console.log("test66666666666666666666666666666");
  console.log(this);
  if (ticketidg == "Sin Registro") {
    $(".btn-comment").attr("disabled", "disabled");
  } else {
    alertify.commnetsdialog($("#panelcomentarios")[0]);
    alertify.commnetsdialog().set("overflow", false);
    $("#panelcomentarios").removeAttr("hidden");
    get_comentarios();
  }
});

$("#datatable-ajax-proceso tbody").on("click", ".btn-comment", function () {
  if (ticketidg == "Sin Registro") {
    $(".btn-comment").attr("disabled", "disabled");
  } else {
    alertify.commnetsdialog($("#panelcomentarios")[0]);
    alertify.commnetsdialog().set("overflow", false);
    $("#panelcomentarios").removeAttr("hidden");
    get_comentarios();
  }
});

$("#datatable-ajax-finalizado tbody").on("click", ".btn-comment", function () {
  if (ticketidg == "Sin Registro") {
    $(".btn-comment").attr("disabled", "disabled");
  } else {
    alertify.commnetsdialog($("#panelcomentarios")[0]);
    alertify.commnetsdialog().set("overflow", false);
    $("#panelcomentarios").removeAttr("hidden");
    get_comentarios();
  }
});

/******************************************************************************Uploads*/
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

$("#datatable-ajax-proceso tbody").on("click", ".btn-filesupload", function () {
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

$("#datatable-ajax-finalizado tbody").on(
  "click",
  ".btn-filesupload",
  function () {
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
  }
);

/******************************************************************************Tiempos de ocupación*/
/*Dialogo historial*/
alertify.timedialog ||
  alertify.dialog("timedialog", function () {
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
            title: "Tiempos de ocupación",
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

$("#datatable-ajax-proceso tbody").on("click", ".btn-time-ocup", function () {
  if (ticketidg == "Sin Registro") {
    $(".btn-time-ocup").attr("disabled", "disabled");
  } else {
    $.post("backend/gettimes.php", {
      ticketid: ticketidg,
    }).done(function (data, status) {
      var parseData = JSON.parse(data);
      parseData = parseData.data[0][0];
      if (parseData == "Sin registro") {
        Swal.fire({
          text: "No existen datos de tiempo para el ticket seleccionado",
          icon: "warning",
          buttonsStyling: !1,
          confirmButtonText: "OK",
          customClass: {
            confirmButton: "btn btn-primary",
          },
        });
      } else {
        alertify.timedialog($("#paneltiempos")[0]);
        alertify.timedialog().set("overflow", false);
        $("#paneltiempos").removeAttr("hidden");
        get_tickets_times();
      }
    });
  }
});

$("#datatable-ajax-finalizado tbody").on(
  "click",
  ".btn-time-ocup",
  function () {
    if (ticketidg == "Sin Registro") {
      $(".btn-time-ocup").attr("disabled", "disabled");
    } else {
      $.post("backend/gettimes.php", {
        ticketid: ticketidg,
      }).done(function (data, status) {
        var parseData = JSON.parse(data);
        parseData = parseData.data[0][0];
        if (parseData == "Sin registro") {
          Swal.fire({
            text: "No existen datos de tiempo para el ticket seleccionado",
            icon: "warning",
            buttonsStyling: !1,
            confirmButtonText: "OK",
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
        } else {
          alertify.timedialog($("#paneltiempos")[0]);
          alertify.timedialog().set("overflow", false);
          $("#paneltiempos").removeAttr("hidden");
          get_tickets_times();
        }
      });
    }
  }
);

/******************************************************************************Historial*/
/*Dialogo historial*/
alertify.historydialog ||
  alertify.dialog("historydialog", function () {
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
            title: "Historial",
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

$("#datatable-ajax-proceso tbody").on("click", ".btn-history", function () {
  if (ticketidg == "Sin Registro") {
    $(".btn-history").attr("disabled", "disabled");
  } else {
    $.post("backend/getticketshistory.php", {
      ticketid: ticketidg,
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
        alertify.historydialog($("#panelhistory")[0]);
        alertify.historydialog().set("overflow", false);
        $("#panelhistory").removeAttr("hidden");
        get_tickets_historial();
      }
    });
  }
});

$("#datatable-ajax-finalizado tbody").on("click", ".btn-history", function () {
  if (ticketidg == "Sin Registro") {
    $(".btn-history").attr("disabled", "disabled");
  } else {
    $.post("backend/getticketshistory.php", {
      ticketid: ticketidg,
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
        alertify.historydialog($("#panelhistory")[0]);
        alertify.historydialog().set("overflow", false);
        $("#panelhistory").removeAttr("hidden");
        get_tickets_historial();
      }
    });
  }
});

/******************************************************************************Reapertura de ticket*/
/*Dialogo Reapertura*/
alertify.reopendialog ||
  alertify.dialog("reopendialog", function () {
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
            title: "Solicitud para reapertura de ticket",
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

var adminName;
var adminMail;

$("#datatable-ajax-finalizado tbody").on("click", ".btn-reopen", function () {
  if (ticketidg == "Sin Registro") {
    $(".btn-reopen").attr("disabled", "disabled");
  } else {
    $("#supervisor-area").load("backend/getuserssupervisor.php");
    KTUtil.onDOMContentLoaded(function () {
      KTReopenTicket.init();
    });
    alertify.reopendialog($("#panelreapertura")[0]);
    alertify.reopendialog().set("overflow", false);
    $("#panelreapertura").removeAttr("hidden");
    /*$.post('backend/getuseradmin.php',{
        }).done(function(data, status){
            var adminData = JSON.parse(data)
            var ifexist = adminData.data[0][0]
            if (ifexist == "Existe"){
                adminName = adminData.data[0][1]
                adminMail = adminData.data[0][2]
                KTUtil.onDOMContentLoaded((function(){
                    KTReopenTicket.init()
                }))
                alertify.reopendialog ($("#panelreapertura")[0])
                alertify.reopendialog()	
                .set('overflow',false)
                $("#panelreapertura").removeAttr("hidden")
            }
            else {
                Swal.fire({
                    text: "No existe un supervisor para continuar con este proceso",
                    icon: "warning",
                    buttonsStyling: !1,
                    confirmButtonText: "OK",
                    customClass: {
                        confirmButton: "btn btn-primary"
                    }
                })
                alertify.reopendialog().close()
                alertify.reopendialog().destroy()
            }
        }) */
  }
});

$("#supervisor-area").change(function () {
  var supa = $("#supervisor-area").val();
  var supaarr = supa.split(" - ");
  adminName = supaarr[0];
  adminMail = supaarr[1];
  console.log(adminName);
  console.log(adminMail);
});

var KTReopenTicket = (function () {
  console.log("Grabo 2 vez");
  var t, e, i;
  return {
    init: function () {
      (t = document.querySelector("#kt_reopen_ticket")),
        (e = document.querySelector("#kt_reopen_ticket_submit")),
        (i = FormValidation.formValidation(t, {
          fields: {
            "supervisor-area": {
              validators: {
                notEmpty: {
                  message: "Supervisor es requerido",
                },
              },
            },
            commentsreopen: {
              validators: {
                notEmpty: {
                  message: "Comentario es requerido",
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
          n.preventDefault(),
            i.validate().then(function (i) {
              "Valid" == i
                ? (e.setAttribute("data-kt-indicator", "on"),
                  (e.disabled = !0),
                  setTimeout(function () {
                    e.removeAttribute("data-kt-indicator"),
                      (e.disabled = !1),
                      $.post("backend/setreopenticket.php", {
                        ticketidg: ticketidg,
                        estadog: "POR REAPERTURA",
                        numeroticket: nticketid,
                        idcoment: NewGuid(),
                        agente: pname,
                        comentarios: $("#commentsreopen").val(),
                      }).done(function (data, status) {
                        console.log(data);
                        var parseData = JSON.parse(data);
                        if (parseData.Result == "OK") {
                          /**********************************************************************************************************Envió de mail*/
                          //var urlReopenticket = "http://localhost/SANFRANTK/dist/authentication/flows/aside/reopen-form-ticket?TicketId=" + ticketidg //QA
                          var urlReopenticket =
                            "http://186.46.61.28:54667/dist/authentication/flows/aside/reopen-form-ticket?TicketId=" +
                            ticketidg; //Producción
                          var subject = "Re-apertura " + nticketid;
                          var body =
                            "<html>Estimado supervisor " +
                            adminName +
                            ",<br></br><br></br>";
                          body +=
                            "El asesor " +
                            pname +
                            " a solicitado la re-apertura de el " +
                            nticketid +
                            ", puede autorizarlo ingresando en el siguiente link: <br></br><br></br>";
                          body +=
                            "<a href=" +
                            urlReopenticket +
                            ">Ir a autorizar</a><br></br><br></br><br></br>";
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
                                                    <h3>Estimado/a, Estimado ${adminName}</h3>
                                                    <h3>
                                                    El asesor  ${pname}, ha solicitado la re-apertura del ${nticketid} , con el siguiente detalle:
                                                    </h3>
                                                    </section>
                                                    <section class="body-container">
                                                    <div class="items-container">
                                                        <h1><strong>, puede autorizarlo ingresando en el siguiente link: </strong> </h1>
                                                        <h1> <a href='${urlReopenticket}>Ir a autorizar</a></h1>
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
                          SendMailGlobal(adminMail, subject, body);
                          /***********************************************************************************************************************/
                          Swal.fire({
                            text:
                              "Se ha enviado su solicitud al supervisor, " +
                              adminName,
                            icon: "success",
                            buttonsStyling: !1,
                            confirmButtonText: "OK",
                            customClass: {
                              confirmButton: "btn btn-primary",
                            },
                          }).then((result) => {
                            location.reload();
                          });
                        } else {
                          Swal.fire({
                            text: "Ocurrió un error al enviar la solicitud, vuelva a intentarlo",
                            icon: "warning",
                            buttonsStyling: !1,
                            confirmButtonText: "OK",
                            customClass: {
                              confirmButton: "btn btn-primary",
                            },
                          });
                        }
                      });
                  }, 2e3))
                : console.log("Sin comentarios");
            });
        });
    },
  };
})();

/**********************************************************************Fin*/

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
      { title: "", targets: 2, visible: false },
      { title: "Subido por", targets: 3 },
    ],
    order: [[0, "desc"]],
    initComplete: function (settings, json) {
      if (json == null || json == "") {
        alert("Error");
      }
    },
  });
}

function get_cantidad_abiertos() {
  $.post("backend/gettiketsgestioncantidad.php", {
    rangoinicio: "1990-01-01 00:00:00",
    rangofin: obtenerFecha() + " 23:59:59",
    profileid: profileid,
    areaid: areaid,
    statet: "ABIERTO",
    tipousuario: tipousuario,
  }).done(function (data, status) {
    var parseData = JSON.parse(data);
    parseData = parseInt(parseData.Cantidad);
    $("#ticket-pendiente-tab-cant").text(parseData);
  });
}

function get_cantidad_procesos() {
  $.post("backend/gettiketsgestioncantidad.php", {
    rangoinicio: "1990-01-01 00:00:00",
    rangofin: obtenerFecha() + " 23:59:59",
    profileid: profileid,
    areaid: areaid,
    statet: "EN PROCESO",
    tipousuario: tipousuario,
  }).done(function (data, status) {
    var parseData = JSON.parse(data);
    parseData = parseInt(parseData.Cantidad);
    $("#ticket-proceso-tab-cant").text(parseData);
  });
}

function get_cantidad_finalizados() {
  $.post("backend/gettiketsgestioncantidad.php", {
    rangoinicio: "1990-01-01 00:00:00",
    rangofin: obtenerFecha() + " 23:59:59",
    profileid: profileid,
    areaid: areaid,
    statet: "FINALIZADO",
    tipousuario: tipousuario,
  }).done(function (data, status) {
    var parseData = JSON.parse(data);
    parseData = parseInt(parseData.Cantidad);
    $("#ticket-finalizado-tab-cant").text(parseData);
  });
}

function get_tickets_abiertos() {
  /*Tickets abiertos*/
  $.post("backend/gettiketsgestioncantidad.php", {
    rangoinicio: "1990-01-01 00:00:00",
    rangofin: obtenerFecha() + " 23:59:59",
    profileid: profileid,
    areaid: areaid,
    statet: "ABIERTO",
    tipousuario: tipousuario,
  }).done(function (data, status) {
    var parseData = JSON.parse(data);
    parseData = parseInt(parseData.Cantidad);
    if (parseData == 0) {
      $("#ticket-pendiente-tab-cant").text(parseData);
    } else {
      $("#ticket-pendiente-tab-cant").text(parseData);
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
            rangoinicio: "1990-01-01 00:00:00",
            rangofin: obtenerFecha() + " 23:59:59",
            tipousuario: tipousuario,
            profileid: profileid,
            areaid: areaid,
            statet: "ABIERTO",
            searchtype: "",
            ticketid: "",
            cedulaid: "",
          },
          complete: function (getdiv) {
            $("#kt_all_filter_ticket").removeAttr("hidden");
            $("#kt_show_filter_date_ticket").removeAttr("hidden");
            $("#kt_search_ticket_form").attr("hidden", "hidden");
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
          { title: "Tipo incidencia", targets: 7, visible: false },
          { title: "Sub-tipo incidencia", targets: 8, visible: false },
          { title: "Área", targets: 9, visible: false },
          { title: "Tiempo respuesta", targets: 10, visible: false },
          { title: "Creado por", targets: 11, visible: false },
          { title: "Estado", targets: 12 },
          { title: "Agente asignado", targets: 13, visible: false },
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
  });
}

function get_tickets_proceso() {
  /*Tickets en proceso*/
  $.post("backend/gettiketsgestioncantidad.php", {
    rangoinicio: "1990-01-01 00:00:00",
    rangofin: obtenerFecha() + " 23:59:59",
    profileid: profileid,
    areaid: areaid,
    statet: "EN PROCESO",
    tipousuario: tipousuario,
  }).done(function (data, status) {
    var parseData = JSON.parse(data);
    parseData = parseInt(parseData.Cantidad);
    if (parseData == 0) {
      $("#ticket-proceso-tab-cant").text(parseData);
    } else {
      $("#ticket-proceso-tab-cant").text(parseData);
      dtajaxproceso = $("#datatable-ajax-proceso").DataTable({
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
            rangoinicio: "1990-01-01 00:00:00",
            rangofin: obtenerFecha() + " 23:59:59",
            tipousuario: tipousuario,
            profileid: profileid,
            areaid: areaid,
            statet: "EN PROCESO",
            searchtype: "",
            ticketid: "",
            cedulaid: "",
          },
          complete: function (getdiv) {
            $("#kt_all_filter_ticket").removeAttr("hidden");
            $("#kt_show_filter_date_ticket").removeAttr("hidden");
            $("#kt_search_ticket_form").attr("hidden", "hidden");
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
          { title: "Tipo incidencia", targets: 7, visible: false },
          { title: "Sub-tipo incidencia", targets: 8, visible: false },
          { title: "Área", targets: 9, visible: false },
          { title: "Tiempo respuesta", targets: 10, visible: false },
          { title: "Creado por", targets: 11, visible: false },
          { title: "Estado", targets: 12 },
          { title: "Agente asignado", targets: 13, visible: false },
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
  });
}

function get_tickets_finalizados() {
  /*Tickets finalizados*/
  $.post("backend/gettiketsgestioncantidad.php", {
    rangoinicio: "1990-01-01 00:00:00",
    rangofin: obtenerFecha() + " 23:59:59",
    profileid: profileid,
    areaid: areaid,
    statet: "FINALIZADO",
    tipousuario: tipousuario,
  }).done(function (data, status) {
    var parseData = JSON.parse(data);
    parseData = parseInt(parseData.Cantidad);
    if (parseData == 0) {
      $("#ticket-finalizado-tab-cant").text(parseData);
    } else {
      $("#ticket-finalizado-tab-cant").text(parseData);
      dtajaxfinalizado = $("#datatable-ajax-finalizado").DataTable({
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
            rangoinicio: "1990-01-01 00:00:00",
            rangofin: obtenerFecha() + " 23:59:59",
            tipousuario: tipousuario,
            profileid: profileid,
            areaid: areaid,
            statet: "FINALIZADO",
            searchtype: "",
            ticketid: "",
            cedulaid: "",
          },
          complete: function (getdiv) {
            $("#kt_all_filter_ticket").removeAttr("hidden");
            $("#kt_show_filter_date_ticket").removeAttr("hidden");
            $("#kt_search_ticket_form").attr("hidden", "hidden");
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
          /*{
                        title: "Descargar",
                        targets: 0,
                        data: null,
                        defaultContent: '<button class="btn btn-success btn-sm btn-block btngrabacion" name="btngrabacion" id="btngrabacion"><i class="fa fa-download"></i></button>'
                    },*/
          { title: "Ticket", targets: 5 },
          { title: "Cédula", targets: 1, visible: false },
          { title: "Nombres", targets: 2 },
          { title: "Mail", targets: 3, visible: false },
          { title: "Teléfono", targets: 4, visible: false },
          { title: "Producto", targets: 6, visible: false },
          { title: "Tipo incidencia", targets: 7, visible: false },
          { title: "Sub-tipo incidencia", targets: 8, visible: false },
          { title: "Área", targets: 9, visible: false },
          { title: "Tiempo respuesta", targets: 10, visible: false },
          { title: "Creado por", targets: 11, visible: false },
          { title: "Estado", targets: 12 },
          { title: "Agente asignado", targets: 13, visible: false },
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
  });
}

var dtajaxtimes;

function get_tickets_times() {
  dtajaxtimes = $("#datatable-ajax-times").DataTable({
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
      url: "backend/gettimes.php",
      data: {
        ticketid: ticketidg,
      },
      complete: function (getdiv) {
        $("#kt_all_filter_ticket").removeAttr("hidden");
        $("#kt_show_filter_date_ticket").removeAttr("hidden");
        $("#kt_search_ticket_form").attr("hidden", "hidden");
      },
    },
    columnDefs: [
      { title: "Fecha creación", targets: 0 },
      { title: "Tiempo gestión", targets: 1 },
      { title: "Tiempo excedido", targets: 2 },
      { title: "Asesor", targets: 3 },
    ],
    order: [[0, "desc"]],
    initComplete: function (settings, json) {
      if (json == null || json == "") {
        alert("Error");
      }
    },
  });
}

var dtajaxhistory;

function get_tickets_historial() {
  dtajaxhistory = $("#datatable-ajax-history").DataTable({
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
      url: "backend/getticketshistory.php",
      data: {
        ticketid: ticketidg,
      },
      complete: function (getdiv) {
        $("#kt_all_filter_ticket").removeAttr("hidden");
        $("#kt_show_filter_date_ticket").removeAttr("hidden");
        $("#kt_search_ticket_form").attr("hidden", "hidden");
      },
    },
    columnDefs: [
      { title: "Nombres", targets: 0 },
      { title: "Ticket", targets: 1, visible: false },
      { title: "Estado", targets: 2 },
      { title: "Asesor", targets: 3 },
      { title: "Fecha creación", targets: 4 },
    ],
    order: [[4, "desc"]],
    initComplete: function (settings, json) {
      if (json == null || json == "") {
        alert("Error");
      }
    },
  });
}

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

function upload_files() {
  console.log(maxuploadfile);
  var uppy = Uppy.Core({
    locale: Uppy.locales.es_ES,
    restrictions: {
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

  uppy.on("error", (error) => {
    console.error(error.stack);
  });

  uppy.on("file-added", (file) => {
    console.log(file);
    imgname = file.name;
    imgextension = file.extension;
    conteoarchivos++;
    console.log(conteoarchivos);
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
        ticketid: ticketidg,
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
      url: "/Upload/DELAdjunto.php",
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
      url: "/Upload/DELAdjuntoGroup.php",
      data: { imginteraction: imginteraction },
      success: function (data) {
        console.log("Cancelado con éxito!!!");
      },
    });
    console.log("Cancelado todo");
  });
}
/*Fin Upload File*/

var seconds;
var secondsexctime = 0;
var timefull;
var counter;

/*Funcion tiempo*/
function getTime() {
  //Gestion actual tiempo
  seconds = 0;
  counter = setInterval(function () {
    getTimeFull();
  }, 1000);
  function getTimeFull() {
    seconds++;
    var leftover = seconds;
    var days = Math.floor(leftover / 86400);
    leftover = leftover - days * 86400;
    var hours = Math.floor(leftover / 3600);
    leftover = leftover - hours * 3600;
    var minutes = Math.floor(leftover / 60);
    leftover = leftover - minutes * 60;

    days = days.toString();
    if (days.length < 2) days = "0" + days;

    hours = hours.toString();
    if (hours.length < 2) hours = "0" + hours;

    minutes = minutes.toString();
    if (minutes.length < 2) minutes = "0" + minutes;

    leftover = leftover.toString();
    if (leftover.length < 2) leftover = "0" + leftover;

    timefull = days + ":" + hours + ":" + minutes + ":" + leftover;
    $("#tiempogestion").text(timefull);
  }
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

var vTiempoResTemp = 0;

function getMaxTime() {
  //timeresp = dataglb[10]
  switch (typetime) {
    case "inmediato":
      $("#tiempomaximo").text("Sin límite");
      break;
    case "minuto":
      vTiempoResTemp = timeresp * 60;
      $("#tiempomaximo").text(getTimeDDHHMMSS(vTiempoResTemp));
      break;
    case "hora":
      vTiempoResTemp = timeresp * 3600;
      $("#tiempomaximo").text(getTimeDDHHMMSS(vTiempoResTemp));
      break;
    case "dia":
      vTiempoResTemp = timeresp * 86400;
      $("#tiempomaximo").text(getTimeDDHHMMSS(vTiempoResTemp));
      break;
    case "semana":
      vTiempoResTemp = timeresp * 604800;
      $("#tiempomaximo").text(getTimeDDHHMMSS(vTiempoResTemp));
      break;
    case "laboral":
      vTiempoResTemp = 28800;
      $("#tiempomaximo").text(getTimeDDHHMMSS(vTiempoResTemp));
      break;
  }
}

var vTimeTranscFull;
var counter1;
var oldsegundos;

/*function getTranscTime(segundos){ //Tiempo transcurrido
    $.post('backend/getgestiontime.php',{
        ticketid: ticketidg
    }).done(function(data, status){
        var parseData = JSON.parse(data)
        oldsegundos = (isNaN(parseInt(parseData.tiempogestion)))?0:parseInt(parseData.tiempogestion) //Cambio final 001
        console.log(oldsegundos)
        segundos = segundos + oldsegundos
        counter1 = setInterval(function(){
            getTimeFull1()
        },1000);
        function getTimeFull1(){
            segundos++
            var leftover = segundos;
            var days = Math.floor(leftover / 86400);
            leftover = leftover - (days * 86400);
            var hours = Math.floor(leftover / 3600);
            leftover = leftover - (hours * 3600);
            var minutes = Math.floor(leftover / 60);
            leftover = leftover - (minutes * 60);

            days = days.toString()
            if (days.length < 2) days = "0" + days

            hours = hours.toString()
            if (hours.length < 2) hours = "0" + hours

            minutes = minutes.toString()
            if (minutes.length < 2) minutes = "0" + minutes

            leftover = leftover.toString()
            if (leftover.length < 2) leftover = "0" + leftover

            vTimeTranscFull = days + ':' + hours + ':' + minutes + ':' + leftover
            $("#tiempotranscurrido").text(vTimeTranscFull)
        }
    })
}*/

function getTranscTime(segundos) {
  //Tiempo transcurrido
  $.post("backend/gettimefromcreateticket.php", {
    ticketid: ticketidg,
  }).done(function (data, status) {
    var parseData = JSON.parse(data);
    oldsegundos = isNaN(parseInt(parseData.tiempogestion))
      ? 0
      : parseInt(parseData.tiempogestion); //Cambio final 001
    console.log(oldsegundos);
    segundos = segundos + oldsegundos;
    counter1 = setInterval(function () {
      getTimeFull1();
    }, 1000);
    function getTimeFull1() {
      segundos++;
      var leftover = segundos;
      var days = Math.floor(leftover / 86400);
      leftover = leftover - days * 86400;
      var hours = Math.floor(leftover / 3600);
      leftover = leftover - hours * 3600;
      var minutes = Math.floor(leftover / 60);
      leftover = leftover - minutes * 60;

      days = days.toString();
      if (days.length < 2) days = "0" + days;

      hours = hours.toString();
      if (hours.length < 2) hours = "0" + hours;

      minutes = minutes.toString();
      if (minutes.length < 2) minutes = "0" + minutes;

      leftover = leftover.toString();
      if (leftover.length < 2) leftover = "0" + leftover;

      vTimeTranscFull = days + ":" + hours + ":" + minutes + ":" + leftover;
      $("#tiempotranscurrido").text(vTimeTranscFull);
    }
  });
}

var timefull1;

function getTimeDDHHMMSS(seconds1) {
  var leftover = seconds1;
  var days = Math.floor(leftover / 86400);
  leftover = leftover - days * 86400;
  var hours = Math.floor(leftover / 3600);
  leftover = leftover - hours * 3600;
  var minutes = Math.floor(leftover / 60);
  leftover = leftover - minutes * 60;

  days = days.toString();
  if (days.length < 2) days = "0" + days;

  hours = hours.toString();
  if (hours.length < 2) hours = "0" + hours;

  minutes = minutes.toString();
  if (minutes.length < 2) minutes = "0" + minutes;

  leftover = leftover.toString();
  if (leftover.length < 2) leftover = "0" + leftover;

  timefull1 = days + ":" + hours + ":" + minutes + ":" + leftover;
  console.log(timefull1);
  console.log(seconds);
  return timefull1;
}

var vTimeRestante;
var counter2;
var vTimeExcedido;
var counter3;

function getRestTime() {
  var segundosrestantes = vTiempoResTemp - (oldsegundos + seconds);
  counter2 = setInterval(function () {
    getTimeRestante();
  }, 1000);
  function getTimeRestante() {
    segundosrestantes--;
    var leftover = segundosrestantes;
    var days = Math.floor(leftover / 86400);
    leftover = leftover - days * 86400;
    var hours = Math.floor(leftover / 3600);
    leftover = leftover - hours * 3600;
    var minutes = Math.floor(leftover / 60);
    leftover = leftover - minutes * 60;

    days = days.toString();
    if (days.length < 2) days = "0" + days;

    hours = hours.toString();
    if (hours.length < 2) hours = "0" + hours;

    minutes = minutes.toString();
    if (minutes.length < 2) minutes = "0" + minutes;

    leftover = leftover.toString();
    if (leftover.length < 2) leftover = "0" + leftover;

    vTimeRestante = days + ":" + hours + ":" + minutes + ":" + leftover;
    $("#tiemporestante").text(vTimeRestante);
    var allgsegundos = parseInt(oldsegundos) + parseInt(seconds);
    if (allgsegundos > vTiempoResTemp) {
      clearInterval(counter2);
      $("#tiemporestante").text("00:00:00:00");
      oldsegundos = parseInt(oldsegundos) + parseInt(seconds);
      secondsexctime = oldsegundos - vTiempoResTemp;
      console.log(oldsegundos, seconds, vTiempoResTemp);
      counter2 = setInterval(function () {
        getTimeExcedido();
      }, 1000);
      function getTimeExcedido() {
        secondsexctime++;
        var leftover = secondsexctime;
        var days = Math.floor(leftover / 86400);
        leftover = leftover - days * 86400;
        var hours = Math.floor(leftover / 3600);
        leftover = leftover - hours * 3600;
        var minutes = Math.floor(leftover / 60);
        leftover = leftover - minutes * 60;

        days = days.toString();
        if (days.length < 2) days = "0" + days;

        hours = hours.toString();
        if (hours.length < 2) hours = "0" + hours;

        minutes = minutes.toString();
        if (minutes.length < 2) minutes = "0" + minutes;

        leftover = leftover.toString();
        if (leftover.length < 2) leftover = "0" + leftover;

        vTimeExcedido = days + ":" + hours + ":" + minutes + ":" + leftover;
        $("#tiempoexcedido").text(vTimeExcedido);
      }
    }
  }
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

$("#search-ticket").click(function () {
  var pusertype = localStorage.getItem("ProfileUserType");
  if (
    pusertype == "ingresador" ||
    pusertype == "orquestador" ||
    pusertype == "administrador"
  ) {
    //Cambio final 003
    window.location = "user-assigned-ticket";
  } else {
    window.location = "search-ticket";
  }
});

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
