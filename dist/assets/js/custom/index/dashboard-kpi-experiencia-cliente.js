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
  $("#dash3refresh").click();
  $("#dash4refresh").click();
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
var urlkpifcr;
var urlkpinps;
var urlkpidetail;
var urlkpidetailnps;
var kpifechainicio;
var kpifechafin;

$("#dash1refresh").click(function () {
  kpifechainicio = "";
  kpifechafin = "";
  $("#fechainicioticket1").val("");
  $("#fechafinticket1").val("");
  if (kpifechainicio == "" || kpifechafin == "") {
    urlkpifcr = "backend/dashboardkpiexperiencia.php?action=fcrtodos";
    var datatab = $("#datatable-detail-fcr-no");
    get_detail(
      datatab,
      "backend/dashboardkpiexperiencia.php?action=fcrdetailtodos",
      kpifechainicio,
      kpifechafin
    );

    urlkpinps = "backend/dashboardkpiexperiencia.php?action=npstodos";
    var datatab1 = $("#datatable-detail-nps");
    get_detail(
      datatab1,
      "backend/dashboardkpiexperiencia.php?action=npstodosdetail",
      kpifechainicio,
      kpifechafin
    );
  } else {
    urlkpifcr = "backend/dashboardkpiexperiencia.php?action=fcrfechas";
    var datatab = $("#datatable-detail-fcr-no");
    get_detail(
      datatab,
      "backend/dashboardkpiexperiencia.php?action=fcrdetailfechas",
      kpifechainicio,
      kpifechafin
    );

    urlkpinps = "backend/dashboardkpiexperiencia.php?action=npsfechas";
    var datatab1 = $("#datatable-detail-nps");
    get_detail(
      datatab1,
      "backend/dashboardkpiexperiencia.php?action=npsfechasdetail",
      kpifechainicio,
      kpifechafin
    );
  }
  $.ajax({
    url: urlkpifcr,
    data: {
      fechainicio: kpifechainicio,
      fechafin: kpifechafin,
    },
    method: "POST",
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      Highcharts.chart("chart-container", {
        chart: {
          shadow: true,
          type: "column",
          borderRadius: 10,
          options3d: {
            enabled: true,
            alpha: 10,
            beta: 10,
            depth: 100,
          },
        },
        title: {
          text: "",
        },
        subtitle: {
          text: "",
        },
        xAxis: {
          type: "category",
          categories: ["SI", "NO"],
        },
        yAxis: {
          title: {
            text: "Cantidades",
          },
        },
        plotOptions: {
          series: {
            grouping: true,
            borderWidth: 0,
            borderWidth: 0,
            dataLabels: {
              enabled: true,
              format: "{point.y:.1f}",
            },
          },
          column: {
            depth: 200,
            stacking: true,
            grouping: false,
            groupZPadding: 10,
          },
        },
        exporting: {
          buttons: {
            contextButton: {
              menuItems: [
                "printChart",
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
          downloadPNG: "Descargar como PNG",
          downloadJPEG: "Descargar como JPEG",
          downloadPDF: "Descargar como PDF",
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

  $.ajax({
    url: urlkpinps,
    data: {
      fechainicio: kpifechainicio,
      fechafin: kpifechafin,
    },
    method: "POST",
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      Highcharts.chart("chart-container2", {
        chart: {
          shadow: true,
          height: 320,
          borderRadius: 10,
          type: "gauge",
        },
        title: {
          text: "",
        },
        subtitle: {
          text: "",
        },
        tooltip: {
          enabled: true,
        },
        pane: {
          startAngle: -90,
          endAngle: 90,
          background: 0,
        },
        exporting: {
          buttons: {
            contextButton: {
              menuItems: [
                "printChart",
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
          downloadPNG: "Descargar como PNG",
          downloadJPEG: "Descargar como JPEG",
          downloadPDF: "Descargar como PDF",
        },
        yAxis: {
          min: 0,
          max: 100,
          plotBands: [
            {
              from: 0,
              to: 100,
              thickness: "50%",
              color: {
                linearGradient: {},
                stops: [
                  [0, "#FD3030"],
                  [1, "#ADFF2E"],
                ],
              },
            },
          ],
          tickWidth: 0,
          minorTickWidth: 0,
          labels: {
            y: 20,
          },
        },
        plotOptions: {
          gauge: {
            dial: {
              radius: "70%",
              backgroundColor: "#3A3A3A",
              baseWidth: 20,
              topWidth: 1,
              baseLength: "3%", // of radius
              rearLength: "0%",
            },
            pivot: {
              radius: 10,
              backgroundColor: "#3A3A3A",
            },
          },
        },
        legend: {
          enabled: false,
        },
        series: [
          {
            name: "NPS",
            data: data,
            dataLabels: {
              borderWidth: 0,
              useHTML: true,
              format:
                '<div style="text-align:center">' +
                '<span style="font-size:50px; color:#ED8B00; font-family: Poppins;">{y}%</span><br/>' +
                "</div>",
            },
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
  kpifechainicio = "";
  kpifechainicio = $("#fechainicioticket1").val();
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
  kpifechafin = "";
  kpifechafin = $("#fechafinticket1").val();
  aplica_filtro_fecha();
});

function aplica_filtro_fecha() {
  if (kpifechainicio == "" || kpifechafin == "") {
    urlkpifcr = "backend/dashboardkpiexperiencia.php?action=fcrtodos";
    var datatab = $("#datatable-detail-fcr-no");
    get_detail(
      datatab,
      "backend/dashboardkpiexperiencia.php?action=fcrdetailtodos",
      kpifechainicio,
      kpifechafin
    );

    urlkpinps = "backend/dashboardkpiexperiencia.php?action=npstodos";
    var datatab1 = $("#datatable-detail-nps");
    get_detail(
      datatab1,
      "backend/dashboardkpiexperiencia.php?action=npstodosdetail",
      kpifechainicio,
      kpifechafin
    );
  } else {
    urlkpifcr = "backend/dashboardkpiexperiencia.php?action=fcrfechas";
    var datatab = $("#datatable-detail-fcr-no");
    get_detail(
      datatab,
      "backend/dashboardkpiexperiencia.php?action=fcrdetailfechas",
      kpifechainicio,
      kpifechafin
    );

    urlkpinps = "backend/dashboardkpiexperiencia.php?action=npsfechas";
    var datatab1 = $("#datatable-detail-nps");
    get_detail(
      datatab1,
      "backend/dashboardkpiexperiencia.php?action=npsfechasdetail",
      kpifechainicio,
      kpifechafin
    );
  }

  $.ajax({
    url: urlkpifcr,
    data: {
      fechainicio: kpifechainicio,
      fechafin: kpifechafin,
    },
    method: "POST",
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      Highcharts.chart("chart-container", {
        chart: {
          shadow: true,
          type: "column",
          borderRadius: 10,
          options3d: {
            enabled: true,
            alpha: 10,
            beta: 10,
            depth: 100,
          },
        },
        title: {
          text: "",
        },
        subtitle: {
          text: "",
        },
        xAxis: {
          type: "category",
          categories: ["SI", "NO"],
        },
        yAxis: {
          title: {
            text: "Cantidades",
          },
        },
        plotOptions: {
          series: {
            grouping: true,
            borderWidth: 0,
            borderWidth: 0,
            dataLabels: {
              enabled: true,
              format: "{point.y:.1f}",
            },
          },
          column: {
            depth: 200,
            stacking: true,
            grouping: false,
            groupZPadding: 10,
          },
        },
        exporting: {
          buttons: {
            contextButton: {
              menuItems: [
                "printChart",
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
          downloadPNG: "Descargar como PNG",
          downloadJPEG: "Descargar como JPEG",
          downloadPDF: "Descargar como PDF",
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

  $.ajax({
    url: urlkpinps,
    data: {
      fechainicio: kpifechainicio,
      fechafin: kpifechafin,
    },
    method: "POST",
    dataType: "JSON",
    success: function (data) {
      console.log(data);
      Highcharts.chart("chart-container2", {
        chart: {
          shadow: true,
          height: 320,
          borderRadius: 10,
          type: "gauge",
        },
        title: {
          text: "",
        },
        subtitle: {
          text: "",
        },
        tooltip: {
          enabled: true,
        },
        pane: {
          startAngle: -90,
          endAngle: 90,
          background: 0,
        },
        exporting: {
          buttons: {
            contextButton: {
              menuItems: [
                "printChart",
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
          downloadPNG: "Descargar como PNG",
          downloadJPEG: "Descargar como JPEG",
          downloadPDF: "Descargar como PDF",
        },
        yAxis: {
          min: 0,
          max: 100,
          plotBands: [
            {
              from: 0,
              to: 100,
              thickness: "50%",
              color: {
                linearGradient: {},
                stops: [
                  [0, "#FD3030"],
                  [1, "#ADFF2E"],
                ],
              },
            },
          ],
          tickWidth: 0,
          minorTickWidth: 0,
          labels: {
            y: 20,
          },
        },
        plotOptions: {
          gauge: {
            dial: {
              radius: "70%",
              backgroundColor: "#3A3A3A",
              baseWidth: 20,
              topWidth: 1,
              baseLength: "3%", // of radius
              rearLength: "0%",
            },
            pivot: {
              radius: 10,
              backgroundColor: "#3A3A3A",
            },
          },
        },
        legend: {
          enabled: false,
        },
        series: [
          {
            name: "NPS",
            data: data,
            dataLabels: {
              borderWidth: 0,
              useHTML: true,
              format:
                '<div style="text-align:center">' +
                '<span style="font-size:50px; color:#ED8B00; font-family: Poppins;">{y}%</span><br/>' +
                "</div>",
            },
          },
        ],
      });
    },
    error: function (data) {
      console.log(data);
    },
  });
}

/********************************************************** */
var ddetailfcrno;

function get_detail(datatab, urlaction, fechainicio, fechafin) {
  ddetailfcrno = datatab.DataTable({
    processing: true,
    destroy: true,
    paging: true,
    searching: false,
    responsive: true,
    pageLength: 5,
    ordering: false,
    scrollX: true,
    info: false,
    dom: "Bfrtip",
    lengthMenu: [
      [5, 10, 25, 50],
      ["5", "10", "25", "50"],
    ],
    ajax: {
      type: "POST",
      dataType: "json",
      url: urlaction,
      data: {
        fechainicio:
          fechainicio == "" || fechainicio == null ? "1900-01-01" : fechainicio,
        fechafin:
          fechafin == "" || fechafin == null ? obtenerFecha() : fechafin,
      },
    },
    columnDefs: [{ title: "Comentario", targets: 0 }],
    order: [[0, "desc"]],
    initComplete: function (settings, json) {
      if (json == null || json == "") {
        alert("Error");
      }
    },
    buttons: [
      {
        text: "",
        className: "hidden",
      },
    ],
  });

  new $.fn.dataTable.Buttons(ddetailfcrno, {
    buttons: [
      {
        extend: "csv",
        text: "CSV",
        title: "Comentarios CSV",
        className: "btn btn-sm login-btnblue",
      },
      {
        extend: "excel",
        text: "Excel",
        title: "Comentarios EXCEL",
        className: "btn btn-sm login-btnblue",
      },
      {
        extend: "pdf",
        text: "Pdf",
        title: "Comentarios PDF",
        className: "btn btn-sm login-btnblue",
      },
      {
        extend: "copy",
        text: "Copiar",
        className: "btn btn-sm login-btnblue",
      },
    ],
  });

  ddetailfcrno
    .buttons(1, null)
    .container()
    .appendTo(ddetailfcrno.table().container());
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
