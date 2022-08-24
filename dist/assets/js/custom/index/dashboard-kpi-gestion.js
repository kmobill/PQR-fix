window.onload = function(){
    var pname = localStorage.getItem("ProfileName")
    var ppicture = localStorage.getItem("ProfilePicture")
    if (ppicture == "account/pictureprofile/undefined" || ppicture == null || ppicture == undefined){
        ppicture = "account/pictureprofile/ico-usuario.png"
    }
    var pmail = localStorage.getItem("ProfileMail")
    var pusertype = localStorage.getItem("ProfileUserType")
    /*************************************************Notificaciones*/
    if (pusertype == "ingresador"){
        get_notifications("backend/getnotifications.php?action=ingresador", pname)
    }
    else {
        get_notifications("backend/getnotifications.php?action=noingresador", pname)
    }

    /*****************************************Valido tipo de usuario*/
    permissions_apps(pusertype)
    //validate_required_users(pusertype)

    /*****************************************Cargo datos de usuario de usuario*/
    user_data(ppicture, pname, pmail, pusertype)

    $("#dash1refresh").click()
    $("#dash2refresh").click()
    $("#dash3refresh").click()
    $("#dash4refresh").click()

    $("#slaproducto").load("backend/dashboardcatalogoproductos.php")
}

$("#profile-logout").click(function(){
    localStorage.removeItem("ProfileName")
    localStorage.removeItem("ProfilePicture")
    localStorage.removeItem("ProfileMail")
    localStorage.removeItem("ProfileUserType")
    Swal.fire({
        text: "Nos vemos luego!",
        icon: "success",
        buttonsStyling: !1,
        confirmButtonText: "OK",
        customClass: {
            confirmButton:"btn btn-primary"
        }
    })
})

$("#new-user").click(function(){
    $("#kt_modal_add_customer").removeAttr("hidden")
})

/****************************************************Dashboard */
/*Gráfico 1: Dashboard KPI gestión*/
/*Gráfico 1.1: Ratio de PQR´s*/
var dash1producto
var dash2producto
var dash3producto
var dash4producto
var mixedChart
var urlratio

$("#slaproducto").change(function(){
    $("#dash1refresh").click()
    $("#dash2refresh").click()
    $("#dash3refresh").click()
    $("#dash4refresh").click()
})

$("#dash1refresh").click(function(){
    dash1producto = $("#slaproducto").val()
    if (dash1producto == "" || dash1producto == null || dash1producto == "TODOS"){
        urlratio = "backend/dashboardkpigestion.php?action=ratiotodos"
    }
    else {
        urlratio = "backend/dashboardkpigestion.php?action=ratioproducto"
    }
    $.ajax({
        url: urlratio,
        data: {
            producto: dash1producto
        },
        method: "POST",
        dataType: "JSON",
        success: function(data){
            Highcharts.chart('chart-container', {
                chart: {
                    shadow: true,
                    height: 320,
                    borderRadius: 10,
                    type: 'gauge'
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                tooltip: {
                   enabled: true
                },
                pane: {
                    startAngle: -90,
                    endAngle: 90,
                    background: 0
                },
                exporting: {
                    buttons: {
                        contextButton: {
                            menuItems: ['printChart','separator','downloadPNG', 'downloadJPEG', 'downloadPDF']
                        }
                    }
                },
                lang: {
                    printChart: "Imprimir gráfico",
                    downloadPNG: "Descargar como PNG",
                    downloadJPEG: "Descargar como JPEG",
                    downloadPDF: "Descargar como PDF"
                },
                yAxis: {
                    min: 0,
                    max: 100,
                    plotBands: [{
                        from: 0,
                        to: 100,
                        thickness: '50%',
                        color: {
                            linearGradient: {},
                            stops: [
                                [0, '#FD3030'],
                                [1, '#ADFF2E']
                            ]
                        }
                    
                    }],
                    tickWidth: 0,
                    minorTickWidth: 0,
                    labels: {
                        y: 20
                    }
                },
                plotOptions: {
                    gauge: {
                        dial: {
                          radius: '70%',
                          backgroundColor: '#3A3A3A',
                          baseWidth: 20,
                          topWidth: 1,
                          baseLength: '3%', // of radius
                          rearLength: '0%'
                        }, 
                        pivot: {
                          radius: 10,
                          backgroundColor: '#3A3A3A'
                        }
                     }
                },
                legend: {
                    enabled: false
                },
                series: [{
                    name: 'Ratio de PRQ´s',
                    data: data,
                    dataLabels: {
                        borderWidth: 0,
                        useHTML: true,
                        format:
                            '<div style="text-align:center">' +
                            '<span style="font-size:50px; color:#ED8B00; font-family: Poppins;">{y}%</span><br/>' +
                            '</div>'
                    }
                }]
            });
        },
        error: function(data) {
            console.log(data)
        }
    })
})

$("#dash2refresh").click(function(){
    dash2producto = $("#slaproducto").val()
    if (dash2producto == "" || dash2producto == null || dash2producto == "TODOS"){
        urlratio = "backend/dashboardkpigestion.php?action=eficienciatodos"
    }
    else {
        urlratio = "backend/dashboardkpigestion.php?action=eficienciaproducto"
    }
    $.ajax({
        url: urlratio,
        data: {
            producto: dash2producto
        },
        method: "POST",
        dataType: "JSON",
        success: function(data){
            Highcharts.chart('chart-container1', {
                chart: {
                    shadow: true,
                    height: 320,
                    borderRadius: 10,
                    type: 'gauge'
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                tooltip: {
                   enabled: true
                },
                pane: {
                    startAngle: -90,
                    endAngle: 90,
                    background: 0
                },
                exporting: {
                    buttons: {
                        contextButton: {
                            menuItems: ['printChart','separator','downloadPNG', 'downloadJPEG', 'downloadPDF']
                        }
                    }
                },
                lang: {
                    printChart: "Imprimir gráfico",
                    downloadPNG: "Descargar como PNG",
                    downloadJPEG: "Descargar como JPEG",
                    downloadPDF: "Descargar como PDF"
                },
                yAxis: {
                    min: 0,
                    max: 100,
                    plotBands: [{
                        from: 0,
                        to: 100,
                        thickness: '50%',
                        color: {
                            linearGradient: {},
                            stops: [
                                [0, '#FD3030'],
                                [1, '#ADFF2E']
                            ]
                        }
                    
                    }],
                    tickWidth: 0,
                    minorTickWidth: 0,
                    labels: {
                        y: 20
                    }
                },            
                plotOptions: {
                    gauge: {
                        dial: {
                          radius: '70%',
                          backgroundColor: '#3A3A3A',
                          baseWidth: 20,
                          topWidth: 1,
                          baseLength: '3%', // of radius
                          rearLength: '0%'
                        }, 
                        pivot: {
                          radius: 10,
                          backgroundColor: '#3A3A3A'
                        }
                     }
                },
                legend: {
                    enabled: false
                },
                series: [{
                    name: 'Eficiencia',
                    data: data,
                    dataLabels: {
                        borderWidth: 0,
                        useHTML: true,
                        format:
                            '<div style="text-align:center">' +
                            '<span style="font-size:50px; color:#ED8B00; font-family: Poppins;">{y}%</span><br/>' +
                            '</div>'
                    }
                }]
            });
        },
        error: function(data) {
            console.log(data)
        }
    })
})

$("#dash3refresh").click(function(){
    dash3producto = $("#slaproducto").val()
    if (dash3producto == "" || dash3producto == null || dash3producto == "TODOS"){
        urlratio = "backend/dashboardkpigestion.php?action=escalamientotodos"
    }
    else {
        urlratio = "backend/dashboardkpigestion.php?action=escalamientoproducto"
    }
    $.ajax({
        url: urlratio,
        data: {
            producto: dash3producto
        },
        method: "POST",
        dataType: "JSON",
        success: function(data){
            Highcharts.chart('chart-container2', {
                chart: {
                    shadow: true,
                    height: 320,
                    borderRadius: 10,
                    type: 'gauge'
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                tooltip: {
                   enabled: true
                },
                pane: {
                    startAngle: -90,
                    endAngle: 90,
                    background: 0
                },
                exporting: {
                    buttons: {
                        contextButton: {
                            menuItems: ['printChart','separator','downloadPNG', 'downloadJPEG', 'downloadPDF']
                        }
                    }
                },
                lang: {
                    printChart: "Imprimir gráfico",
                    downloadPNG: "Descargar como PNG",
                    downloadJPEG: "Descargar como JPEG",
                    downloadPDF: "Descargar como PDF"
                },
                yAxis: {
                    min: 0,
                    max: 100,
                    plotBands: [{
                        from: 0,
                        to: 100,
                        thickness: '50%',
                        color: {
                            linearGradient: {},
                            stops: [
                                [0, '#FD3030'],
                                [1, '#ADFF2E']
                            ]
                        }
                    
                    }],
                    tickWidth: 0,
                    minorTickWidth: 0,
                    labels: {
                        y: 20
                    }
                },
                plotOptions: {
                    gauge: {
                        dial: {
                          radius: '70%',
                          backgroundColor: '#3A3A3A',
                          baseWidth: 20,
                          topWidth: 1,
                          baseLength: '3%', // of radius
                          rearLength: '0%'
                        }, 
                        pivot: {
                          radius: 10,
                          backgroundColor: '#3A3A3A'
                        }
                     }
                },
                legend: {
                    enabled: false
                },
                series: [{
                    name: 'Tasa de escalamiento',
                    data: data,
                    dataLabels: {
                        borderWidth: 0,
                        useHTML: true,
                        format:
                            '<div style="text-align:center">' +
                            '<span style="font-size:50px; color:#ED8B00; font-family: Poppins;">{y}%</span><br/>' +
                            '</div>'
                    }
                }]
            });
        },
        error: function(data) {
            console.log(data)
        }
    })
})

$("#dash4refresh").click(function(){
    dash4producto = $("#slaproducto").val()
    if (dash4producto == "" || dash4producto == null || dash4producto == "TODOS"){
        urlratio = "backend/dashboardkpigestion.php?action=tmotodos"
    }
    else {
        urlratio = "backend/dashboardkpigestion.php?action=tmoproductos"
    }
    $.ajax({
        url: urlratio,
        data: {
            producto: dash3producto
        },
        method: "POST",
        dataType: "JSON",
        success: function(data){
            var parseData = data.data[0][0]
            console.log(parseData)
            $("#chart-container3").text(getTimeDDHHMMSS(parseData))
        },
        error: function(data) {
            console.log(data)
        }
    })
})

/************************************************************* */
function getTimeDDHHMMSS(seconds1){
    var leftover = seconds1;
    var hours = Math.floor(leftover / 3600);
    leftover = leftover - (hours * 3600);
    var minutes = Math.floor(leftover / 60);
    leftover = leftover - (minutes * 60);

    hours = hours.toString()
    if (hours.length < 2) hours = "0" + hours

    minutes = minutes.toString()
    if (minutes.length < 2) minutes = "0" + minutes

    leftover = leftover.toString()
    if (leftover.length < 2) leftover = "0" + leftover

    timefull1 = hours + ':' + minutes + ':' + leftover
    return timefull1
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
