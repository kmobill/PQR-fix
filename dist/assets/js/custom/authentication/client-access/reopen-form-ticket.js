var ticketid
var cedula
var nombres
var mail
var phone
var numeroticket
var ticketData
var pname
var adminName
var ticketidg

function get_admin(){
    $.post('../../../backend/getuseradmin.php',{
    }).done(function(data, status){
        var adminData = JSON.parse(data)
        adminName = adminData.data[0][1]
        console.log(adminName)
    })
}

window.onload = function(){
    get_admin()
    var searchParams = new URLSearchParams(window.location.search)
    ticketid = searchParams.get("TicketId")
    console.log(ticketid)
    ticketidg = ticketid
    get_tickets_reapertura()
}

"use strict";
var KTReopenForm = function(){
    var t, e, i
    return{
        init:function(){
            t = document.querySelector("#kt_reopen_form"),
            e = document.querySelector("#kt_reopen_form_submit"),
            i = FormValidation.formValidation(t,{
                fields:{
                    commentsreopen:{
                        validators:{
                            notEmpty:{
                                message:"Comentario es requerido"
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
                            $.post('../../../backend/setreopenticket.php',{
                                ticketidg: ticketidg,
                                estadog: "ABIERTO",
                                numeroticket: nticketid,
                                idcoment: NewGuid(),
                                agente: adminName,
                                comentarios: $("#commentsreopen").val()
                            }).done(function(data, status){
                                console.log(data)
                                var parseData = JSON.parse(data)
                                if (parseData.Result == "OK"){
                                    Swal.fire({
                                        text: "Se ha devuelto el ticket al usuario, " + pname,
                                        icon: "success",
                                        buttonsStyling: !1,
                                        confirmButtonText: "OK",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    }).then((result) => {
                                        window.close()
                                    })
                                }
                                else {
                                    Swal.fire({
                                        text: "Ocurrió un error al devolver el ticket, vuelva a intentarlo",
                                        icon: "warning",
                                        buttonsStyling: !1,
                                        confirmButtonText: "OK",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    })
                                }
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

$("#respuestaencuesta").change(function(){
    var rsp = $("#respuestaencuesta").val()
    if (rsp == "SI"){
        $("#respuestano").val("")
        $("#respuestanolabel").attr("hidden","hidden")
        $("#respuestano").attr("hidden","hidden")
    }
    else {
        $("#respuestanolabel").removeAttr("hidden")
        $("#respuestano").removeAttr("hidden")
    }
    
})

KTUtil.onDOMContentLoaded((function(){
    KTReopenForm.init()
}))

window.onbeforeunload = function(){
    localStorage.removeItem("tokenglobal")
}

window.onunload = function(){
    localStorage.removeItem("tokenglobal")
}

function NewGuid(){
    return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
    function(c){
        var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    }).toUpperCase();
}

var dtajaxreopen

function get_tickets_reapertura(){
    /*Tickets finalizados*/
    $.post('../../../backend/getreopen.php',{
        ticketid: ticketid
    }).done(function(data, status){
        var parseData = JSON.parse(data)
        parseData = parseData.Existe
        if (parseData == "NO"){
            Swal.fire({
                text: "El ticket indicado no existe o ya se encuentra aprobado",
                icon: "warning",
                buttonsStyling: !1,
                confirmButtonText: "OK",
                customClass: {
                    confirmButton: "btn btn-primary"
                }
            }).then((result) => {
                $("#reopenform").attr("hidden")
                window.close()
            })
        }
        else {
            $("#reopenform").removeAttr("hidden")
            $("#ticket-reopen-tab-cant").text(parseData)
            dtajaxreopen = $("#datatable-ajax-reopen").DataTable({
                processing: true,
                destroy: true,
                paging: false,
                searching: false,
                responsive: true,
                pageLength: 5,
                scrollX: true,
                info: false,
                dom: "Bfrtip",
                language: {
                    url: '../../../assets/vendor/bootstrap/Spanish.json'
                },
                ajax:{
                    type: "POST",
                    dataType: "json",
                    url: "../../../backend/getreopenticket.php",
                    data: {
                        ticketid: ticketid
                    },   
                    complete: function(getdiv){
                        $("#kt_all_filter_ticket").removeAttr("hidden")
                        $("#kt_show_filter_date_ticket").removeAttr("hidden")
                        $("#kt_search_ticket_form").attr("hidden","hidden")
                    }
                },
                columns: [
                    {
                        "className": 'details-control',
                        "orderable": false,
                        "data": null,
                        "defaultContent": ''
                    }
                ],
                columnDefs: [
                    {title: "Detalles", targets: 0},
                    /*{
                        title: "Descargar",
                        targets: 0,
                        data: null,
                        defaultContent: '<button class="btn btn-success btn-sm btn-block btngrabacion" name="btngrabacion" id="btngrabacion"><i class="fa fa-download"></i></button>'
                    },*/
                    {title: "Ticket", targets: 5},
                    {title: "Cédula", targets: 1, visible: false},
                    {title: "Nombres", targets: 2},
                    {title: "Mail", targets: 3, visible: false},
                    {title: "Teléfono", targets: 4, visible: false},
                    {title: "Producto", targets: 6, visible: false},
                    {title: "Tipo incidencia", targets: 7, visible: false},
                    {title: "Sub-tipo incidencia", targets: 8, visible: false},
                    {title: "Área", targets: 9, visible: false},
                    {title: "Tiempo respuesta", targets: 10, visible: false},
                    {title: "Creado por", targets: 11, visible: false},
                    {title: "Estado", targets: 12},
                    {title: "Agente asignado", targets: 13, visible: false},
                    {title: "Id", targets: 14, visible: false},
                    {title: "Fecha creación", targets: 15},
                ],
                order: [[ 15, "desc" ]],
                initComplete: function(settings,json){
                    if (json == null || json == ""){
                        alert("Error")
                    }
                }
            })
        }
    })
}

$('#datatable-ajax-reopen tbody').on('click', 'td.details-control', function(){
    var tr = $(this).closest('tr')
    var row = dtajaxreopen.row($(this).parents('tr'))

    if (row.child.isShown()){
        row.child.hide()
        tr.removeClass('shown')
    }
    else {
        var dataglb = row.data()
        var cedula = dataglb[1]
        var mail = dataglb[3]
        var phone = dataglb[4]
        var producto = dataglb[6]
        var tincidencia = dataglb[7]
        var stincidencia = dataglb[8]
        var area = dataglb[9]
        var trespuesta = dataglb[10] + " " + dataglb[16]
        var creadop = dataglb[11]
        pname = dataglb[11]
        clientMail = dataglb[3]
        aasignado = dataglb[13]
        timeresp = dataglb[10]
        typetime = dataglb[16]
        nticketid = dataglb[5]
        ticketidg  = dataglb[14]
        row.child(format_reopen(cedula, mail, phone, producto, tincidencia, stincidencia, area, trespuesta, creadop, aasignado)).show()
        tr.addClass('shown')
    }
});

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

function format_reopen(cedula, mail, phone, producto, tincidencia, stincidencia, area, trespuesta, creadop, aasignado){
    return '<table class="table table-striped table-bordered">'+
        '<tr>'+
            '<td>Cédula:</td>'+
            '<td>' + cedula + '</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Correo: </td>'+
            '<td>' + mail + '</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Teléfono: </td>'+
            '<td>' + phone + '</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Producto:</td>'+
            '<td>' + producto + '</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Tipo incidencia:</td>'+
            '<td>' + tincidencia + '</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Sub-tipo incidencia:</td>'+
            '<td>' + stincidencia + '</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Área:</td>'+
            '<td>' + area + '</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Tiempo respuesta:</td>'+
            '<td>' + trespuesta + '</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Creado por:</td>'+
            '<td>' + creadop + '</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Agente asignado:</td>'+
            '<td>' + aasignado + '</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Acciones:</td>'+
            '<td><div class="btn-group dropup">'+
                '<button class="btn btn-link dropdown-toggle" type="button" id="ticket-actions" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">'+
                'Acciones sobre ticket'+
                '</button>'+
                '<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="ticket-actions">'+
                    '<li><a class="dropdown-item btn-comment" href="#">Ver comentarios</a></li>'+
                    '<li><a class="dropdown-item btn-filesupload" href="#">Ver capturas subidas</a></li>'+
                    '<li><a class="dropdown-item btn-history" href="#">Ver historial</a></li>'+
                    '<li><a class="dropdown-item btn-time-ocup" href="#">Ver tiempos</a></li>'+
                '</ul>'+
            '</div></td>'+
        '</tr>'+
    '</table>';
}

/********************************************************************Comentarios */
/*Dialogo Comentarios*/
alertify.commnetsdialog || alertify.dialog('commnetsdialog',function(){
    return {
        main:function(content){
            this.setContent(content)
        },
        setup:function(){
            return {
                options:{
                    basic: false,
                    maximizable: false,
                    resizable: false,
                    padding: false,
                    title: "Comentarios",
                    closable: true,
					movable: false
                }
            }
        },
        settings:{
            selector:undefined
        }
    }
})

/******************************************************************************Comentarios*/
$('#datatable-ajax-reopen tbody').on('click', '.btn-comment', function(){
    if (ticketidg == "Sin Registro"){
        $(".btn-comment").attr("disabled","disabled")
    }
    else {
        alertify.commnetsdialog ($("#panelcomentarios")[0])
        alertify.commnetsdialog()	
            .set('overflow',false)
        $("#panelcomentarios").removeAttr("hidden")
        get_comentarios()
    }
})

/******************************************************************************Uploads*/
/*Dialogo uploads*/
alertify.uploadsdialog || alertify.dialog('uploadsdialog',function(){
    return {
        main:function(content){
            this.setContent(content)
        },
        setup:function(){
            return {
                options:{
                    basic: false,
                    maximizable: false,
                    resizable: false,
                    padding: false,
                    title: "Capturas/Archivos",
                    closable: true,
					movable: false
                }
            }
        },
        settings:{
            selector:undefined
        }
    }
})

$('#datatable-ajax-reopen tbody').on('click', '.btn-filesupload', function(){
    if (ticketidg == "Sin Registro"){
        $(".btn-filesupload").attr("disabled","disabled")
    }
    else {
        $.post('../../../backend/getuploads.php',{
            ticketidg: ticketidg
        }).done(function(data, status){
            var parseData = JSON.parse(data)
            parseData = parseData.data[0][0]
            if (parseData == "Sin archivo"){
                Swal.fire({
                    text: "No existen archivos cargados para el ticket seleccionado",
                    icon: "warning",
                    buttonsStyling: !1,
                    confirmButtonText: "OK",
                    customClass: {
                        confirmButton: "btn btn-primary"
                    }
                })
            }
            else {
                alertify.uploadsdialog ($("#paneluploads")[0])
                alertify.uploadsdialog()	
                    .set('overflow',false)
                $("#paneluploads").removeAttr("hidden")
                get_uploads()
            }
        })
    }
})

/******************************************************************************Tiempos de ocupación*/
/*Dialogo historial*/
alertify.timedialog || alertify.dialog('timedialog',function(){
    return {
        main:function(content){
            this.setContent(content)
        },
        setup:function(){
            return {
                options:{
                    basic: false,
                    maximizable: false,
                    resizable: false,
                    padding: false,
                    title: "Tiempos de ocupación",
                    closable: true,
					movable: false
                }
            }
        },
        settings:{
            selector:undefined
        }
    }
})

$('#datatable-ajax-reopen tbody').on('click', '.btn-time-ocup', function(){
    if (ticketidg == "Sin Registro"){
        $(".btn-time-ocup").attr("disabled","disabled")
    }
    else {
        $.post('../../../backend/gettimes.php',{
            ticketid: ticketidg
        }).done(function(data, status){
            var parseData = JSON.parse(data)
            parseData = parseData.data[0][0]
            if (parseData == "Sin registro"){
                Swal.fire({
                    text: "No existen datos de tiempo para el ticket seleccionado",
                    icon: "warning",
                    buttonsStyling: !1,
                    confirmButtonText: "OK",
                    customClass: {
                        confirmButton: "btn btn-primary"
                    }
                })
            }
            else {
                alertify.timedialog ($("#paneltiempos")[0])
                alertify.timedialog()	
                    .set('overflow',false)
                $("#paneltiempos").removeAttr("hidden")
                get_tickets_times()
            }
        })
    }
})

/******************************************************************************Historial*/
/*Dialogo historial*/
alertify.historydialog || alertify.dialog('historydialog',function(){
    return {
        main:function(content){
            this.setContent(content)
        },
        setup:function(){
            return {
                options:{
                    basic: false,
                    maximizable: false,
                    resizable: false,
                    padding: false,
                    title: "Historial",
                    closable: true,
					movable: false
                }
            }
        },
        settings:{
            selector:undefined
        }
    }
})

$('#datatable-ajax-reopen tbody').on('click', '.btn-history', function(){
    if (ticketidg == "Sin Registro"){
        $(".btn-history").attr("disabled","disabled")
    }
    else {
        $.post('../../../backend/getticketshistory.php',{
            ticketid: ticketidg
        }).done(function(data, status){
            var parseData = JSON.parse(data)
            parseData = parseData.data[0][0]
            if (parseData == "Sin archivo"){
                Swal.fire({
                    text: "No existen archivos cargados para el ticket seleccionado",
                    icon: "warning",
                    buttonsStyling: !1,
                    confirmButtonText: "OK",
                    customClass: {
                        confirmButton: "btn btn-primary"
                    }
                })
            }
            else {
                alertify.historydialog ($("#panelhistory")[0])
                alertify.historydialog()	
                    .set('overflow',false)
                $("#panelhistory").removeAttr("hidden")
                get_tickets_historial()
            }
        })
    }
})

var dcommentajax

function get_comentarios(){
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
            url: '../../../assets/vendor/bootstrap/Spanish.json'
        },
        lengthMenu: [
            [5,10,25,50],
            ['5','10', '25', '50']
        ],
        ajax:{
            type: "POST",
            dataType: "json",
            url: "../../../backend/getcomments.php",
            data: {
                ticketidg: ticketidg
            },            
        },
        columnDefs: [
            {title: "Fecha Creación", targets: 0},
            {title: "Comentario", targets: 1},
            {title: "Agente", targets: 2}
        ],
        order: [[ 0, "desc" ]],
        initComplete: function(settings,json){
            if (json == null || json == ""){
                alert("Error")
            }
        }
    })
}

var duploadsajax

function get_uploads(){
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
            url: '../../../assets/vendor/bootstrap/Spanish.json'
        },
        lengthMenu: [
            [5,10,25,50],
            ['5','10', '25', '50']
        ],
        ajax:{
            type: "POST",
            dataType: "json",
            url: "../../../backend/getuploads.php",
            data: {
                ticketidg: ticketidg
            },            
        },
        columnDefs: [
            {title: "Fecha Creación", targets: 0},
            {
                title: "Archivo", 
                targets: 1,
                data: "Descargar",
                render: function(data, type, row, meta){
                    data = '<a href="' + row[1] + '" download="' + row[2] + '">Descargar</a>'
                    return data
                }
            },
            {title: "", targets: 2, visible: false},
            {title: "Subido por", targets: 3}
        ],
        order: [[ 0, "desc" ]],
        initComplete: function(settings,json){
            if (json == null || json == ""){
                alert("Error")
            }
        }
    })
}

var dtajaxtimes

function get_tickets_times(){
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
            url: '../../../assets/vendor/bootstrap/Spanish.json'
        },
        lengthMenu: [
            [5,10,25,50],
            ['5','10', '25', '50']
        ],
        ajax:{
            type: "POST",
            dataType: "json",
            url: "../../../backend/gettimes.php",
            data: {
                ticketid: ticketidg
            },   
            complete: function(getdiv){
                $("#kt_all_filter_ticket").removeAttr("hidden")
                $("#kt_show_filter_date_ticket").removeAttr("hidden")
                $("#kt_search_ticket_form").attr("hidden","hidden")
            }
        },
        columnDefs: [
            {title: "Fecha creación", targets: 0},
            {title: "Tiempo gestión", targets: 1},
            {title: "Tiempo excedido", targets: 2},
            {title: "Asesor", targets: 3},
        ],
        order: [[ 0, "desc" ]],
        initComplete: function(settings,json){
            if (json == null || json == ""){
                alert("Error")
            }
        }
    })
}

var dtajaxhistory

function get_tickets_historial(){
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
            url: '../../../assets/vendor/bootstrap/Spanish.json'
        },
        lengthMenu: [
            [5,10,25,50],
            ['5','10', '25', '50']
        ],
        ajax:{
            type: "POST",
            dataType: "json",
            url: "../../../backend/getticketshistory.php",
            data: {
                ticketid: ticketidg
            },   
            complete: function(getdiv){
                $("#kt_all_filter_ticket").removeAttr("hidden")
                $("#kt_show_filter_date_ticket").removeAttr("hidden")
                $("#kt_search_ticket_form").attr("hidden","hidden")
            }
        },
        columnDefs: [
            {title: "Nombres", targets: 0},
            {title: "Ticket", targets: 1, visible: false},
            {title: "Estado", targets: 2},
            {title: "Asesor", targets: 3},
            {title: "Fecha creación", targets: 4},
        ],
        order: [[ 4, "desc" ]],
        initComplete: function(settings,json){
            if (json == null || json == ""){
                alert("Error")
            }
        }
    })
}