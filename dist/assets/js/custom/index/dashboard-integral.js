window.onload = function () {
  var pname = localStorage.getItem("ProfileName");
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
  //validate_required_users(pusertype)

  /*****************************************Cargo datos de usuario de usuario*/
  user_data(ppicture, pname, pmail, pusertype);

  $("#dash1refresh").click();
  $("#dash2refresh").click();
};

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

$("#new-user").click(function () {
  $("#kt_modal_add_customer").removeAttr("hidden");
});

/****************************************************Dashboard */
/*Gráfico 1: Dashboard integral*/
/*Gráfico 1.1: Reporte de incidencias*/
var dash1fecinicio;
var dash1fecfin;
var dash2fecinicio;
var dash2fecfin;
var dash1producto;
var dash1incidencia;
var mixedChart;

$("#dash1refresh").click(function () {
  $("#fechainicioticket").val("");
  $("#fechafinticket").val("");
  $("#slaproducto").text("");
  $("#slaincidencia").text("");
  $("#slaproducto").load("backend/dashboardcatalogoproductos.php");
  $("#slaincidencia").load("backend/dashboardtiposincidencias.php");
  dash1fecinicio = "";
  dash1fecfin = "";
  dash1producto = "";
  dash1incidencia = "";
  $.ajax({
    url: "backend/dashboardintegralincidencias.php?action=inicio",
    data: {
      fechainicio:
        dash1fecinicio == "" || dash1fecinicio == null
          ? "1900-01-01"
          : dash1fecinicio,
      fechafin:
        dash1fecfin == "" || dash1fecfin == null ? obtenerFecha() : dash1fecfin,
      producto:
        dash1producto == "" || dash1producto == null ? "" : dash1producto,
      incidencia:
        dash1incidencia == "" || dash1incidencia == null ? "" : dash1incidencia,
    },
    method: "POST",
    dataType: "JSON",
    success: function (data) {
      Highcharts.chart("chart-container", {
        chart: {
          shadow: true,
          borderRadius: 10,
          type: "cylinder",
          options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 200,
            viewDistance: 100,
            frame: {
              bottom: {
                size: 5,
                color: "rgba(0,0,0,0.05)",
              },
            },
          },
        },
        title: {
          text: "",
        },
        subtitle: {
          text: "",
        },
        exporting: {
          buttons: {
            contextButton: {
              menuItems: [
                "printChart",
                "seprator",
                "downloadXLS",
                "downloadCSV",
                "separator",
                "downloadPNG",
                "downloadJPEG",
                "downloadPDF",
              ],
            },
          },
        },
        lang: {
          printChart: "Imprimir gráfico",
          downloadXLS: "Descargar como XLS",
          downloadCSV: "Descargar como CSV",
          downloadPNG: "Descargar como PNG",
          downloadJPEG: "Descargar como JPEG",
          downloadPDF: "Descargar como PDF",
        },
        xAxis: {
          type: "category",
        },
        yAxis: {
          title: {
            text: "Cantidades",
          },
        },
        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true,
              format: "{point.y:.1f}",
            },
          },
          cylinder: {
            depth: 200,
            stacking: true,
            grouping: false,
            groupZPadding: 10,
          },
        },
        legend: {
          enabled: false,
        },
        series: [
          {
            name: "Cantidad",
            colorByPoint: true,
            data: data,
          },
        ],
      });
    },
    error: function (data) {
      console.log(data);
    },
  });
});

$("#fechainicioticket").change(function () {
  dash1fecinicio = $("#fechainicioticket").val();
  Swal.fire({
    text: "También debe ingresar la fecha de fin para aplicar el filtro",
    icon: "warning",
    buttonsStyling: !1,
    confirmButtonText: "OK",
    customClass: {
      confirmButton: "btn btn-primary",
    },
  });
});

$("#fechafinticket").change(function () {
  $("#slaproducto").text("");
  $("#slaincidencia").text("");
  $("#slaproducto").load("backend/dashboardcatalogoproductos.php");
  $("#slaincidencia").load("backend/dashboardtiposincidencias.php");
  dash1fecfin = $("#fechafinticket").val();
  $.ajax({
    url: "backend/dashboardintegralincidencias.php?action=fechas",
    data: {
      fechainicio:
        dash1fecinicio == "" || dash1fecinicio == null
          ? "1900-01-01"
          : dash1fecinicio,
      fechafin:
        dash1fecfin == "" || dash1fecfin == null ? obtenerFecha() : dash1fecfin,
      producto:
        dash1producto == "" || dash1producto == null ? "" : dash1producto,
      incidencia:
        dash1incidencia == "" || dash1incidencia == null ? "" : dash1incidencia,
    },
    method: "POST",
    dataType: "JSON",
    success: function (data) {
      Highcharts.chart("chart-container", {
        chart: {
          shadow: true,
          borderRadius: 10,
          type: "cylinder",
          options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 200,
            viewDistance: 100,
            frame: {
              bottom: {
                size: 5,
                color: "rgba(0,0,0,0.05)",
              },
            },
          },
        },
        title: {
          text: "",
        },
        subtitle: {
          text: "",
        },
        exporting: {
          buttons: {
            contextButton: {
              menuItems: [
                "printChart",
                "seprator",
                "downloadXLS",
                "downloadCSV",
                "separator",
                "downloadPNG",
                "downloadJPEG",
                "downloadPDF",
              ],
            },
          },
        },
        lang: {
          printChart: "Imprimir gráfico",
          downloadXLS: "Descargar como XLS",
          downloadCSV: "Descargar como CSV",
          downloadPNG: "Descargar como PNG",
          downloadJPEG: "Descargar como JPEG",
          downloadPDF: "Descargar como PDF",
        },
        xAxis: {
          type: "category",
        },
        yAxis: {
          title: {
            text: "Cantidades",
          },
        },
        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true,
              format: "{point.y:.1f}",
            },
          },
          cylinder: {
            depth: 200,
            stacking: true,
            grouping: false,
            groupZPadding: 10,
          },
        },
        legend: {
          enabled: false,
        },
        series: [
          {
            name: "Cantidad",
            colorByPoint: true,
            data: data,
          },
        ],
      });
    },
    error: function (data) {
      console.log(data);
    },
  });
});

$("#slaproducto").change(function () {
  $("#slaincidencia").text("");
  $("#slaincidencia").load("backend/dashboardtiposincidencias.php");
  dash1producto = $("#slaproducto").val();
  $.ajax({
    url: "backend/dashboardintegralincidencias.php?action=productos",
    data: {
      fechainicio:
        dash1fecinicio == "" || dash1fecinicio == null
          ? "1900-01-01"
          : dash1fecinicio,
      fechafin:
        dash1fecfin == "" || dash1fecfin == null ? obtenerFecha() : dash1fecfin,
      producto:
        dash1producto == "" || dash1producto == null ? "" : dash1producto,
      incidencia:
        dash1incidencia == "" || dash1incidencia == null ? "" : dash1incidencia,
    },
    method: "POST",
    dataType: "JSON",
    success: function (data) {
      Highcharts.chart("chart-container", {
        chart: {
          shadow: true,
          borderRadius: 10,
          type: "cylinder",
          options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 200,
            viewDistance: 100,
            frame: {
              bottom: {
                size: 5,
                color: "rgba(0,0,0,0.05)",
              },
            },
          },
        },
        title: {
          text: "",
        },
        subtitle: {
          text: "",
        },
        exporting: {
          buttons: {
            contextButton: {
              menuItems: [
                "printChart",
                "seprator",
                "downloadXLS",
                "downloadCSV",
                "separator",
                "downloadPNG",
                "downloadJPEG",
                "downloadPDF",
              ],
            },
          },
        },
        lang: {
          printChart: "Imprimir gráfico",
          downloadXLS: "Descargar como XLS",
          downloadCSV: "Descargar como CSV",
          downloadPNG: "Descargar como PNG",
          downloadJPEG: "Descargar como JPEG",
          downloadPDF: "Descargar como PDF",
        },
        xAxis: {
          type: "category",
        },
        yAxis: {
          title: {
            text: "Cantidades",
          },
        },
        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true,
              format: "{point.y:.1f}",
            },
          },
          cylinder: {
            depth: 200,
            stacking: true,
            grouping: false,
            groupZPadding: 10,
          },
        },
        legend: {
          enabled: false,
        },
        series: [
          {
            name: "Producto",
            colorByPoint: true,
            data: data,
          },
        ],
      });
    },
    error: function (data) {
      console.log(data);
    },
  });
});

$("#slaincidencia").change(function () {
  $("#slaproducto").text("");
  $("#slaproducto").load("backend/dashboardcatalogoproductos.php");
  dash1incidencia = $("#slaincidencia").val();
  $.ajax({
    url: "backend/dashboardintegralincidencias.php?action=incidencias",
    data: {
      fechainicio:
        dash1fecinicio == "" || dash1fecinicio == null
          ? "1900-01-01"
          : dash1fecinicio,
      fechafin:
        dash1fecfin == "" || dash1fecfin == null ? obtenerFecha() : dash1fecfin,
      producto:
        dash1producto == "" || dash1producto == null ? "" : dash1producto,
      incidencia:
        dash1incidencia == "" || dash1incidencia == null ? "" : dash1incidencia,
    },
    method: "POST",
    dataType: "JSON",
    success: function (data) {
      Highcharts.chart("chart-container", {
        chart: {
          shadow: true,
          borderRadius: 10,
          type: "cylinder",
          options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 200,
            viewDistance: 100,
            frame: {
              bottom: {
                size: 5,
                color: "rgba(0,0,0,0.05)",
              },
            },
          },
        },
        title: {
          text: "",
        },
        subtitle: {
          text: "",
        },
        exporting: {
          buttons: {
            contextButton: {
              menuItems: [
                "printChart",
                "seprator",
                "downloadXLS",
                "downloadCSV",
                "separator",
                "downloadPNG",
                "downloadJPEG",
                "downloadPDF",
              ],
            },
          },
        },
        lang: {
          printChart: "Imprimir gráfico",
          downloadXLS: "Descargar como XLS",
          downloadCSV: "Descargar como CSV",
          downloadPNG: "Descargar como PNG",
          downloadJPEG: "Descargar como JPEG",
          downloadPDF: "Descargar como PDF",
        },
        xAxis: {
          type: "category",
        },
        yAxis: {
          title: {
            text: "Cantidades",
          },
        },
        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true,
              format: "{point.y:.1f}",
            },
          },
          cylinder: {
            depth: 200,
            stacking: true,
            grouping: false,
            groupZPadding: 10,
          },
        },
        legend: {
          enabled: false,
        },
        series: [
          {
            name: "Incidencias",
            colorByPoint: true,
            data: data,
          },
        ],
      });
    },
    error: function (data) {
      console.log(data);
    },
  });
});

/*Gráfico 2: Dashboard integral*/
$("#dash2refresh").click(function () {
  dash2fecinicio = $("#fechainicioticket1").val();
  dash2fecfin = $("#fechafinticket1").val();
  $.ajax({
    url: "backend/dashboardintegralincidencias.php?action=analiticainicio",
    data: {
      fechainicio:
        dash2fecinicio == "" || dash2fecinicio == null
          ? "1900-01-01"
          : dash2fecinicio,
      fechafin:
        dash2fecfin == "" || dash2fecfin == null ? obtenerFecha() : dash2fecfin,
      producto:
        dash1producto == "" || dash1producto == null ? "" : dash1producto,
      incidencia:
        dash1incidencia == "" || dash1incidencia == null ? "" : dash1incidencia,
    },
    method: "POST",
    dataType: "JSON",
    success: function (data) {
      Highcharts.chart("chart-container1", {
        chart: {
          shadow: true,
          borderRadius: 10,
          type: "cylinder",
          options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 200,
            viewDistance: 100,
            frame: {
              bottom: {
                size: 5,
                color: "rgba(0,0,0,0.05)",
              },
            },
          },
        },
        title: {
          text: "",
        },
        subtitle: {
          text: "",
        },
        exporting: {
          buttons: {
            contextButton: {
              menuItems: [
                "printChart",
                "seprator",
                "downloadXLS",
                "downloadCSV",
                "separator",
                "downloadPNG",
                "downloadJPEG",
                "downloadPDF",
              ],
            },
          },
        },
        lang: {
          printChart: "Imprimir gráfico",
          downloadXLS: "Descargar como XLS",
          downloadCSV: "Descargar como CSV",
          downloadPNG: "Descargar como PNG",
          downloadJPEG: "Descargar como JPEG",
          downloadPDF: "Descargar como PDF",
        },
        xAxis: {
          type: "category",
        },
        yAxis: {
          title: {
            text: "Cantidades",
          },
        },
        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true,
              format: "{point.y:.1f}",
            },
          },
          cylinder: {
            depth: 200,
            stacking: true,
            grouping: false,
            groupZPadding: 10,
          },
        },
        legend: {
          enabled: false,
        },
        series: [
          {
            name: "Incidencias",
            colorByPoint: true,
            data: data,
          },
        ],
      });
    },
    error: function (data) {
      console.log(data);
    },
  });
});

$("#fechainicioticket1").change(function () {
  dash2fecinicio = $("#fechainicioticket1").val();
  Swal.fire({
    text: "También debe ingresar la fecha de fin para aplicar el filtro",
    icon: "warning",
    buttonsStyling: !1,
    confirmButtonText: "OK",
    customClass: {
      confirmButton: "btn btn-primary",
    },
  });
});

$("#fechafinticket1").change(function () {
  dash2fecfin = $("#fechafinticket1").val();
  $("#dash2refresh").click();
});

/************************************************************* */
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
    if (pusertype == "ingresador" || pusertype == "orquestador"){
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
