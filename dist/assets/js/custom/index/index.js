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
}

$("#profile-logout").click(function(){
    onlogout()
})

$("#new-user").click(function(){
    $("#kt_modal_add_customer").removeAttr("hidden")
})

/****************************************************Dashboard */
function getNow() {
    var now = new Date();
    return {
        hours: now.getHours() + now.getMinutes() / 60,
        minutes: now.getMinutes() * 12 / 60 + now.getSeconds() * 12 / 3600,
        seconds: now.getSeconds() * 12 / 60
    };
}

function pad(number, length) {
    return new Array((length || 2) + 1 - String(number).length).join(0) + number;
}

var now = getNow();

// Create the chart
Highcharts.chart('chart-container-welcome', {
    chart: {
        type: 'gauge',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 200,
            viewDistance: 100,
            frame: {
                bottom: {
                    size: 5,
                    color: 'rgba(0,0,0,0.05)'
                }
            }
        },
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '90%'
    },
    credits: {
        enabled: false
    },
    title: {
        text: ''
    },
    yAxis: {
        labels: {
            distance: -20
        },
        min: 0,
        max: 12,
        lineWidth: 0,
        showFirstLabel: false,
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 5,
        minorTickPosition: 'inside',
        minorGridLineWidth: 0,
        minorTickColor: '#666',
        tickInterval: 1,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666'
    },
    tooltip: {
        formatter: function () {
            return this.series.chart.tooltipText;
        }
    },
    series: [{
        data: [{
            id: 'hour',
            y: now.hours,
            dial: {
                radius: '60%',
                baseWidth: 4,
                baseLength: '95%',
                rearLength: 0
            }
        }, {
            id: 'minute',
            y: now.minutes,
            dial: {
                baseLength: '95%',
                rearLength: 0
            }
        }, {
            id: 'second',
            y: now.seconds,
            dial: {
                radius: '100%',
                baseWidth: 1,
                rearLength: '20%'
            }
        }],
        animation: false,
        dataLabels: {
            enabled: false
        }
    }]
},

// Move
function (chart) {
    setInterval(function () {
        now = getNow();
        if (chart.axes) { // not destroyed
            var hour = chart.get('hour'),
                minute = chart.get('minute'),
                second = chart.get('second'),
                // run animation unless we're wrapping around from 59 to 0
                animation = now.seconds === 0 ?
                    false : {
                        easing: 'easeOutBounce'
                    };
            // Cache the tooltip text
            chart.tooltipText =
                    pad(Math.floor(now.hours), 2) + ':' +
                    pad(Math.floor(now.minutes * 5), 2) + ':' +
                    pad(now.seconds * 5, 2);
            hour.update(now.hours, true, animation);
            minute.update(now.minutes, true, animation);
            second.update(now.seconds, true, animation);
        }
    }, 1000);
});

/**
 * Easing function from https://github.com/danro/easing-js/blob/master/easing.js
 */
Math.easeOutBounce = function (pos) {
    if ((pos) < (1 / 2.75)) {
        return (7.5625 * pos * pos);
    }
    if (pos < (2 / 2.75)) {
        return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
    }
    if (pos < (2.5 / 2.75)) {
        return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
    }
    return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
};
/************************************************************* */

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
    if (pusertype == "administrador" || pusertype == "orquestador"){
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
