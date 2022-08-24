var pname
var maxuploadfile

function get_max_upload_file(){
    $.post('backend/getmaxuploadfiles.php',{
    }).done(function(data, status){
        console.log(data)
        var parseData = JSON.parse(data)
        parseData = parseData.MaxUploadFiles
        parseData = parseInt(parseData, 10)
        maxuploadfile = parseData
    })
}

get_max_upload_file()

window.onload = function(){
    $("#slimsorquestador").attr("hidden","hidden")
    pname = localStorage.getItem("ProfileName")
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

    /*****************************************Cargo datos de usuario de usuario*/
    user_data(ppicture, pname, pmail, pusertype)

    $("#perfil-usuario").load("backend/getprofiles.php")
}

$("#profile-logout").click(function(){
    onlogout()
})

window.onerror = function(message, source, lineno, colno, error) {
    if (message == "Uncaught TypeError: Cannot read property 'length' of undefined"){
        swal({
            title: "", 
            text: "No se encontraron datos, compruebe los filtros", 
            icon: "error",
            button: {visible: false},
            timer: 3000
        })
        $("#panelcomentarios").attr("hidden", "hidden")
    }
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

window.onbeforeunload = function(){
    localStorage.removeItem("tokenglobal")
}

window.onunload = function(){
    localStorage.removeItem("tokenglobal")
}

/******************************************************************Cambio max upload*/
$("#kt_cancel_max_upload").click(function(){
    get_max_upload_file()
    $("#kt_maxupload_administration_submit").prop("checked", false)
    $("#kt_sla_administration_submit").prop("checked", false)
    $("#kt_productos_administration_submit").prop("checked", false)
    $("#kt_tipoisncidencia_administration_submit").prop("checked", false)
    $("#kt_subtipoisncidencia_administration_submit").prop("checked", false)
    $("#kt_createincidencia_administration_submit").prop("checked", false)
    $("#staticMaxUpload").modal('hide')
})

$('#staticMaxUpload').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
})

"use strict";
var KTMaxUpload = function(){
    var t, e, i
    return {
        init:function(){
            t = document.querySelector("#kt_max_upload_form"),
            e = document.querySelector("#kt_max_upload_submit"),
            i = FormValidation.formValidation(t,{
                fields: {
                    "cantidad-maxupload":{
                        validators:{
                            notEmpty:{
                                message:"Cantidad es requerida"
                            }
                        }
                    }
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger,
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: ".fv-row",
                        eleInvalidClass: "",
                        eleValidClass: ""
                    })
                }
            }),
            e.addEventListener("click",(function(o){
                o.preventDefault(),
                i.validate().then((function(i){
                    "Valid" == i?(
                        e.setAttribute("data-kt-indicator","on"),
                        e.disabled = !0,
                        setTimeout((function(){
                            e.removeAttribute("data-kt-indicator"),
                            e.disabled = !1,
                            $.post('backend/setmaxuploadfiles.php',{
                                maxuploadfiles: $("#cantidad-maxupload").val()
                            }).done(function(data, status){
                                console.log(status)
                                Swal.fire({
                                    text: "Se ha modificado la cantidad máxima de archivos a cargar para los tickets",
                                    icon: "success",
                                    buttonsStyling: !1,
                                    confirmButtonText: "OK",
                                    customClass: {
                                        confirmButton: "btn btn-primary"
                                    }
                                }).then((result) => {
                                    location.reload()
                                })
                            })
                        }),1500)
                    ):Swal.fire({
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

/******************************************************************* Cambio SLA*/
$('#staticSLA').on('shown.bs.modal', function(){
    $("#slaproducto").load("backend/getcatalogoproductos.php")
})

$('#staticSLA').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
})

$("#slaproducto").change(function(){
    $("#slaincidencia").removeAttr("disabled")
    $("#slaincidencia").load("backend/getcatalogotiposincidencia.php")
})

$("#slaincidencia").change(function(){
    var tipoinciden = $("#slaincidencia option:selected").text()
    var tipoproducto =$("#slaproducto option:selected").text()
    $("#slasubtipoincidencia").load("backend/getincidenciasubtipo.php",{
        tipoproducto: tipoproducto,
        tipoinciden: tipoinciden
    }, function(response, status){
        $("#slasubtipoincidencia").removeAttr("disabled")
        $("#new-sla-time").removeAttr("disabled")
        $("#new-sla-type").removeAttr("disabled")
    })
})

var trespuesta
var ttiempo
var idincidencia

$("#slasubtipoincidencia").change(function(){
    var tipoincidencia = $("#slaincidencia option:selected").text()
    var tipoproducto = $("#slaproducto option:selected").text()
    var subtipoincidencia = $("#slasubtipoincidencia option:selected").text()
    $.post('backend/getincidenciasdata.php',{
        tipoproducto: tipoproducto,
        tipoincidencia: tipoincidencia,
        subtipoincidencia: subtipoincidencia
    }).done(function(data, status){
        console.log(data)
        var parseData = JSON.parse(data)
        trespuesta = parseData.TiempoRespuesta
        ttiempo = parseData.TipoTiempo
        trespuesta = trespuesta + " " + ttiempo
        idincidencia = parseData.Id
        $("#slaactual").val(trespuesta)
    })
})

$("#new-sla-type").change(function(){
    var typetm = $("#new-sla-type option:selected").text()
    if (typetm == "inmediato"){
        $("#new-sla-time").val(0)
        $("#new-sla-time").attr("disabled","disabled")
    }
    else {
        $("#new-sla-time").val("")
        $("#new-sla-time").removeAttr("disabled")
    }
})

$("#kt_cancel_sla").click(function(){
    $("#kt_maxupload_administration_submit").prop("checked", false)
    $("#kt_sla_administration_submit").prop("checked", false)
    $("#kt_productos_administration_submit").prop("checked", false)
    $("#kt_tipoisncidencia_administration_submit").prop("checked", false)
    $("#kt_subtipoisncidencia_administration_submit").prop("checked", false)
    $("#kt_createincidencia_administration_submit").prop("checked", false)
    $("#staticSLA").modal('hide')
})

var KTSla = function(){
    var t, e, i
    return{
        init:function(){
            t = document.querySelector("#kt_sla_form"),
            e = document.querySelector("#kt_sla_submit"),
            i = FormValidation.formValidation(t,{
                fields:{
                    slaincidencia:{
                        validators:{
                            notEmpty:{
                                message:"Tipo incidencia es requerido"
                            }
                        }
                    },
                    slaproducto:{
                        validators:{
                            notEmpty:{
                                message:"Producto es requerido"
                            }
                        }
                    },
                    slasubtipoincidencia:{
                        validators:{
                            notEmpty:{
                                message:"Sub-tipo de incidencia es requerido"
                            }
                        }
                    },
                    "new-sla-time":{
                        validators:{
                            notEmpty:{
                                message:"El nuevo tiempo es requerido"
                            }
                        }
                    },
                    "new-sla-type":{
                        validators:{
                            notEmpty:{
                                message:"El tipo de tiempo es requerido"
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
                    var tipoincidencia = t.querySelector('[name="slaincidencia"]').value
                    var tipoproducto = t.querySelector('[name="slaproducto"]').value
                    var subtipoincidencia = t.querySelector('[name="slasubtipoincidencia"]').value
                    "Valid" == i?(
                        e.setAttribute("data-kt-indicator","on"),
                        e.disabled = !0,
                        setTimeout((function(){
                            e.removeAttribute("data-kt-indicator"),
                            e.disabled = !1,
                            $.post('backend/udpincidenciassla.php',{
                                idincidencia: idincidencia,
                                tiemporespuesta: $("#new-sla-time").val(),
                                tipotiemporsp: $("#new-sla-type option:selected").text(),
                            }).done(function(data, status){
                                console.log(status)
                                var parseData = JSON.parse(data)
                                parseData = parseData.Result
                                if (parseData == "OK"){
                                    Swal.fire({
                                        text: "SLA modificado con éxito",
                                        icon: "success",
                                        buttonsStyling: !1,
                                        closeOnClickOutside: false,
                                        closeOnEsc: false,
                                        confirmButtonText: 'OK',
                                        customClass:{
                                            confirmButton: "btn btn-primary"
                                        }
                                    }).then((result) => {
                                        location.reload()
                                    })
                                }
                                else {
                                    Swal.fire({
                                        text: "A ocurrido un error al actualizar la información, vuelva a intentarlo",
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

/********************************************************Nuevos productos */
var dtajaxallproducts
var idnewproducts
var productIdGst

$('#staticProductos').on('shown.bs.modal', function(){
    $("#lblProductGst").text("Nuevo Producto *")
    $("#kt_newproduct_submit").text("Guardar")
    idnewproducts = NewGuid()
    dtajaxallproducts = $("#datatable-ajax-products").DataTable({
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
            url: 'assets/vendor/bootstrap/Spanish.json'
        },
        lengthMenu: [
            [5,10,25,50],
            ['5','10', '25', '50']
        ],
        ajax:{
            type: "POST",
            dataType: "json",
            url: "backend/getallproducts.php",
            data: {}
        },
        columnDefs: [
	    {
		title: "Estado",
                render: function(data,type,row){
                    return [
                        '<button type="button" class="btn btn-secondary btn-sm btn-activedesactive-product" data-bs-toggle="tooltip" data-bs-placement="top" title="Activar/Desactivar" name="btn-activedesactive-product">'+data+'</button>'
                    ].join('')

                },
                "targets": 4
            },
            {
                title: "Editar",
                targets: 0,
                data: null,
                defaultContent: '<button type="button" class="btn btn-primary btn-sm btn-edit-product" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar producto" name="btn-edit-product"><i class="fa fa-edit"></i></button>',
            },
            {
                title: "Eliminar",
                targets: 1,
                data: null,
                defaultContent: '<button type="button" class="btn btn-danger btn-sm btn-delete-product" data-bs-toggle="tooltip" data-bs-placement="top" title="Eliminar producto" name="btn-delete-product"><i class="fa fa-times"></i></button>'
            },
            {title: "Producto", targets: 2},
            {title: "Id", targets: 3, visible: false},
        ],
        order: [[ 2, "asc" ]],
        initComplete: function(settings,json){
            if (json == null || json == ""){
                alert("Error")
            }
        }
    })
})

$("#kt_cancel_newproduct").click(function(){
    idnewproducts = ""
    $("#kt_maxupload_administration_submit").prop("checked", false)
    $("#kt_sla_administration_submit").prop("checked", false)
    $("#kt_productos_administration_submit").prop("checked", false)
    $("#kt_tipoisncidencia_administration_submit").prop("checked", false)
    $("#kt_subtipoisncidencia_administration_submit").prop("checked", false)
    $("#kt_createincidencia_administration_submit").prop("checked", false)
    $("#staticProductos").modal('hide')
})

$('#datatable-ajax-products tbody').on('click', '.btn-edit-product', function(){
    var data = dtajaxallproducts.row($(this).parents('tr')).data()
    console.log(data)
    var productname = data[2]
    productIdGst = data[3]
    $("#newproduct").val(productname)
    $("#lblProductGst").text("Editar Producto *")
    $("#kt_newproduct_submit").text("Editar")
})

$('#datatable-ajax-products tbody').on('click', '.btn-activedesactive-product', function(){
    var data = dtajaxallproducts.row($(this).parents('tr')).data()
    console.log(data)
    var productid = data[3]
    var productname = data[2]
	var productstateAct = data[4]
	if (productstateAct == "Activa"){
		var stateprd = "desactivara"
		var stateprd1 = "desactivados"
		var productstate = 0
	}
	else {
		var stateprd = "activara"
		var stateprd1 = "activados"
		var productstate = 1
	}
    Swal.fire({
        text: "Esta acción  " + stateprd + " el producto seleccionado, \n*Recuerde que de hacerlo también se " + stateprd + " el catalogo de incidencias atadas al mismo",
        icon: "warning",
        buttonsStyling: !1,
        closeOnClickOutside: false,
        closeOnEsc: false,
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: "No, cancelar",
        customClass:{
            confirmButton: "btn btn-primary",
            cancelButton: "btn btn-danger"
        }
    }).then((result) => {
        if (result['isConfirmed']){
            $.post('backend/activatedeactivateproducts.php',{
                productid: productid,
                productname: productname,
				productstate: productstate
            }).done(function(data, status){
                var parseData = JSON.parse(data)
                parseData = parseData.Result
                if (parseData == "OK"){
                    Swal.fire({
                        title: "",
                        text: "Producto y catalogo fueron " + stateprd1 + " con éxito",
                        icon: "success",
                        button: {visible: false},
                        timer: 2000
                    })
                    dtajaxallproducts.ajax.reload()
                }
				else {
                    Swal.fire({
                        title: "",
                        text: "Ocurrio un error, intentelo nuevamente",
                        icon: "error",
                        button: {visible: false},
                        timer: 2000
                    })
                }
            })
        }
    })
})

$('#datatable-ajax-products tbody').on('click', '.btn-delete-product', function(){
    var data = dtajaxallproducts.row($(this).parents('tr')).data()
    console.log(data)
    var productid = data[3]
    var productname = data[2]
    Swal.fire({
        text: "Esta seguro que desea eliminar el producto  " + productname + "?, *Recuerde que de hacerlo también se eliminaran las incidencias atadas al mismo",
        icon: "success",
        buttonsStyling: !1,
        closeOnClickOutside: false,
        closeOnEsc: false,
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: "No, cancelar",
        customClass:{
            confirmButton: "btn btn-primary",
            cancelButton: "btn btn-danger"
        }
    }).then((result) => {
        if (result['isConfirmed']){
            $.post('backend/delproducts.php',{
                productid: productid,
                productname: productname
            }).done(function(data, status){
                var parseData = JSON.parse(data)
                parseData = parseData.Result
                if (parseData == "OK"){
                    Swal.fire({
                        title: "", 
                        text: "Producto e incidencias eliminadas con éxito", 
                        icon: "success",
                        button: {visible: false},
                        timer: 2000
                    })
                    dtajaxallproducts.ajax.reload()
                }
                else {
                    Swal.fire({
                        title: "", 
                        text: "Ocurrio un error al eliminar el producto e incidencias, intentelo nuevamente", 
                        icon: "error",
                        button: {visible: false},
                        timer: 2000
                    })
                }
            })
        }
    })
})

$('#staticProductos').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
})

var KTNewProduct = function(){
    var t, e, i
    return {
        init:function(){
            t = document.querySelector("#kt_staticproductos_form"),
            e = document.querySelector("#kt_newproduct_submit"),
            i = FormValidation.formValidation(t,{
                fields: {
                    newproduct:{
                        validators:{
                            notEmpty:{
                                message:"Producto es requerida"
                            }
                        }
                    }
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger,
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: ".fv-row",
                        eleInvalidClass: "",
                        eleValidClass: ""
                    })
                }
            }),
            e.addEventListener("click",(function(o){
                o.preventDefault(),
                i.validate().then((function(i){
                    "Valid" == i?(
                        e.setAttribute("data-kt-indicator","on"),
                        e.disabled = !0,
                        setTimeout((function(){
                            e.removeAttribute("data-kt-indicator"),
                            e.disabled = !1,
                            $.post('backend/setnewproduct.php',{
                                id: idnewproducts,
                                producto: $("#newproduct").val(),
                                productIdGst: (productIdGst == '' || productIdGst == undefined)?'Nuevo':productIdGst
                            }).done(function(data, status){
                                var parseData = JSON.parse(data)
                                parseData = parseData.Result
                                if ($("#kt_newproduct_submit").text() == "Guardar"){
                                    var mensaje = "Se ha creado el nuevo producto"
                                    var mensaje2 = "Existió un error al ingresar el nuevo producto, vuelva a intentarlo"
                                }
                                else {
                                    var mensaje = "Se ha editado el producto selccionado"
                                    var mensaje2 = "Existió un error al editar el producto, vuelva a intentarlo"
                                }
                                if (parseData == "OK"){
                                    Swal.fire({
                                        text: mensaje,
                                        icon: "success",
                                        buttonsStyling: !1,
                                        confirmButtonText: "OK",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    }).then((result) => {
                                        $("#newproduct").val('')
                                        $("#lblProductGst").text("Nuevo Producto *")
                                        $("#kt_newproduct_submit").text("Guardar")
					productIdGst = ""
                                        idnewproducts = NewGuid()
                                        dtajaxallproducts.ajax.reload()
                                        //location.reload()
                                    })
                                }
                                else {
                                    Swal.fire({
                                        text: mensaje2,
                                        icon: "warning",
                                        buttonsStyling: !1,
                                        confirmButtonText: "OK",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    })
                                }
                            })
                        }),1500)
                    ):Swal.fire({
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

/********************************************************Nuevos tipos de incidencias */
var dtajaxalltincidences
var idnewtincidences
var tincidenciasIdGst

$('#staticTiposincidencia').on('shown.bs.modal', function(){
    $("#lblTincidenciaGst").text("Nuevo Tipo de incidencia *")
    $("#kt_newtincidence_submit").text("Guardar")
    idnewtincidences = NewGuid()
    dtajaxalltincidences = $("#datatable-ajax-tincidencias").DataTable({
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
            url: 'assets/vendor/bootstrap/Spanish.json'
        },
        lengthMenu: [
            [5,10,25,50],
            ['5','10', '25', '50']
        ],
        ajax:{
            type: "POST",
            dataType: "json",
            url: "backend/getalltincidences.php",
            data: {}
        },
        columnDefs: [
	    {
                title: "Estado",
                render: function(data,type,row){
                    return [
                        '<button type="button" class="btn btn-secondary btn-sm btn-activedesactive-incidence" data-bs-toggle="tooltip" data-bs-placement="top" title="Activar/Desactivar" name="btn-activedesactive-incidence">'+data+'</button>'
                    ].join('')

                },
                "targets": 4
            },
            {
                title: "Editar",
                targets: 0,
                data: null,
                defaultContent: '<button type="button" class="btn btn-primary btn-sm btn-edit-incidence" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar tipo de incidencia" name="btn-edit-incidence"><i class="fa fa-users"></i></button>',
            },
            {
                title: "Eliminar",
                targets: 1,
                data: null,
                defaultContent: '<button type="button" class="btn btn-danger btn-sm btn-delete-tincidence" data-bs-toggle="tooltip" data-bs-placement="top" title="Eliminar tipo de incidencia" name="btn-delete-tincidence"><i class="fa fa-times"></i></button>'
            },
            {title: "Tipo incidencia", targets: 2},
            {title: "Id", targets: 3, visible: false}
        ],
        order: [[ 2, "asc" ]],
        initComplete: function(settings,json){
            if (json == null || json == ""){
                alert("Error")
            }
        }
    })
})

$("#kt_cancel_newtincidence").click(function(){
    idnewtincidences = ""
    $("#kt_maxupload_administration_submit").prop("checked", false)
    $("#kt_sla_administration_submit").prop("checked", false)
    $("#kt_productos_administration_submit").prop("checked", false)
    $("#kt_tipoisncidencia_administration_submit").prop("checked", false)
    $("#kt_subtipoisncidencia_administration_submit").prop("checked", false)
    $("#kt_createincidencia_administration_submit").prop("checked", false)
    $("#staticTipoisncidencia").modal('hide')
})

$('#datatable-ajax-tincidencias tbody').on('click', '.btn-activedesactive-incidence', function(){
    var data = dtajaxalltincidences.row($(this).parents('tr')).data()
    console.log(data)
    var incidenceid = data[3]
    var tincidencianame = data[2]
    var tincidenciastateAct = data[4]
    if (tincidenciastateAct == "Activa"){
	var stateprd = "desactivara"
	var stateprd1 = "desactivados"
	var tincidenciastate = 0
    }
    else {
	var stateprd = "activara"
	var stateprd1 = "activados"
	var tincidenciastate = 1
    }
    Swal.fire({
        text: "Esta acción  " + stateprd + " el tipo de incidencia seleccionado, \n*Recuerde que de hacerlo también se " + stateprd + " el catalogo de incidencias atadas al mismo",
        icon: "warning",
        buttonsStyling: !1,
        closeOnClickOutside: false,
        closeOnEsc: false,
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: "No, cancelar",
        customClass:{
            confirmButton: "btn btn-primary",
            cancelButton: "btn btn-danger"
        }
    }).then((result) => {
        if (result['isConfirmed']){
            $.post('backend/activatedeactivatetincidencia.php',{
                incidenceid: incidenceid,
                tincidencianame: tincidencianame,
		tincidenciastate: tincidenciastate
            }).done(function(data, status){
                var parseData = JSON.parse(data)
                parseData = parseData.Result
                if (parseData == "OK"){
                    Swal.fire({
                        title: "",
                        text: "Tipos de incidencia y catalogo fueron " + stateprd1 + " con éxito",
                        icon: "success",
                        button: {visible: false},
                        timer: 2000
                    })
                    dtajaxalltincidences.ajax.reload()
                }
		else {
                    Swal.fire({
                        title: "",
                        text: "Ocurrio un error, intentelo nuevamente",
                        icon: "error",
                        button: {visible: false},
                        timer: 2000
                    })
                }
            })
        }
    })
})

$('#datatable-ajax-tincidencias tbody').on('click', '.btn-edit-incidence', function(){
    var data = dtajaxalltincidences.row($(this).parents('tr')).data()
    console.log(data)
    var tincidencianame = data[2]
    tincidenciasIdGst = data[3]
    $("#newtincidence").val(tincidencianame)
    $("#lblTincidenciaGst").text("Editar Tipo de incidencia *")
    $("#kt_newtincidence_submit").text("Editar")
})

$('#datatable-ajax-tincidencias tbody').on('click', '.btn-delete-tincidence', function(){
    var data = dtajaxalltincidences.row($(this).parents('tr')).data()
    console.log(data)
    var incidenceid = data[3]
    var incidencename = data[2]
    Swal.fire({
        text: "Esta seguro que desea eliminar el tipo de incidencia  " + incidencename + "?, *Recuerde que de hacerlo también se eliminaran las incidencias atadas al mismo",
        icon: "success",
        buttonsStyling: !1,
        closeOnClickOutside: false,
        closeOnEsc: false,
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: "No, cancelar",
        customClass:{
            confirmButton: "btn btn-primary",
            cancelButton: "btn btn-danger"
        }
    }).then((result) => {
        if (result['isConfirmed']){
            $.post('backend/deltincidences.php',{
                incidenceid: incidenceid,
                incidencename: incidencename
            }).done(function(data, status){
                var parseData = JSON.parse(data)
                parseData = parseData.Result
                if (parseData == "OK"){
                    Swal.fire({
                        title: "", 
                        text: "Tipos de incidencia e incidencias de catálogo eliminadas con éxito", 
                        icon: "success",
                        button: {visible: false},
                        timer: 2000
                    })
                    dtajaxalltincidences.ajax.reload()
                }
                else {
                    Swal.fire({
                        title: "", 
                        text: "Ocurrio un error al eliminar los tipos de incidencia e incidencias de catálogo, intentelo nuevamente", 
                        icon: "error",
                        button: {visible: false},
                        timer: 2000
                    })
                }
            })
        }
    })
})

$('#staticTiposincidencia').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
})

var KTNewTIncidencia = function(){
    var t, e, i
    return {
        init:function(){
            t = document.querySelector("#kt_statictiposincidencia_form"),
            e = document.querySelector("#kt_newtincidence_submit"),
            i = FormValidation.formValidation(t,{
                fields: {
                    newtincidence:{
                        validators:{
                            notEmpty:{
                                message:"Tipo de incidencia es requerida"
                            }
                        }
                    }
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger,
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: ".fv-row",
                        eleInvalidClass: "",
                        eleValidClass: ""
                    })
                }
            }),
            e.addEventListener("click",(function(o){
                o.preventDefault(),
                i.validate().then((function(i){
                    "Valid" == i?(
                        e.setAttribute("data-kt-indicator","on"),
                        e.disabled = !0,
                        setTimeout((function(){
                            e.removeAttribute("data-kt-indicator"),
                            e.disabled = !1,
                            $.post('backend/setnewtincidence.php',{
                                id: idnewtincidences,
                                tipoincidencia: $("#newtincidence").val(),
                                tincidenciasIdGst: (tincidenciasIdGst == '' || tincidenciasIdGst == undefined)?'Nuevo':tincidenciasIdGst
                            }).done(function(data, status){
                                var parseData = JSON.parse(data)
                                parseData = parseData.Result
                                if ($("#kt_newtincidence_submit").text() == "Guardar"){
                                    var mensaje = "Se ha creado el nuevo tipo de incidencia"
                                    var mensaje2 = "Existió un error al ingresar el nuevo tipo de incidencia, vuelva a intentarlo"
                                }
                                else {
                                    var mensaje = "Se ha editado el nuevo tipo de incidencia"
                                    var mensaje2 = "Existió un error al editar el tipo de incidencia, vuelva a intentarlo"
                                }
                                if (parseData == "OK"){
                                    Swal.fire({
                                        text: mensaje,
                                        icon: "success",
                                        buttonsStyling: !1,
                                        confirmButtonText: "OK",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    }).then((result) => {
                                        $("#newtincidence").val('')
                                        $("#lblTincidenciaGst").text("Nuevo Tipo de incidencia *")
                                        $("#kt_newtincidence_submit").text("Guardar")
					tincidenciasIdGst = ""
                                        idnewtincidences = NewGuid()
                                        dtajaxalltincidences.ajax.reload()
                                        //location.reload()
                                    })
                                }
                                else {
                                    Swal.fire({
                                        text: mensaje2,
                                        icon: "warning",
                                        buttonsStyling: !1,
                                        confirmButtonText: "OK",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    })
                                }
                            })
                        }),1500)
                    ):Swal.fire({
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

/********************************************************Nuevos sub tipos de incidencias */
var dtajaxallstincidences
var idnewstincidences
var stincidenciasIdGst

$('#staticSubtipoisncidencia').on('shown.bs.modal', function(){
    $("#lblSTincidenciaGst").text("Nuevo Sub-tipo de incidencia *")
    $("#kt_newstincidence_submit").text("Guardar")
    idnewstincidences = NewGuid()
    dtajaxallstincidences = $("#datatable-ajax-stincidencias").DataTable({
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
            url: 'assets/vendor/bootstrap/Spanish.json'
        },
        lengthMenu: [
            [5,10,25,50],
            ['5','10', '25', '50']
        ],
        ajax:{
            type: "POST",
            dataType: "json",
            url: "backend/getallstincidences.php",
            data: {}
        },
        columnDefs: [
	    {
                title: "Estado",
                render: function(data,type,row){
                    return [
                        '<button type="button" class="btn btn-secondary btn-sm btn-activedesactive-stincidencias" data-bs-toggle="tooltip" data-bs-placement="top" title="Activar/Desactivar" name="btn-activedesactive-stincidencias">'+data+'</button>'
                    ].join('')

                },
                "targets": 4
            },
            {
                title: "Editar",
                targets: 0,
                data: null,
                defaultContent: '<button type="button" class="btn btn-primary btn-sm btn-edit-stincidencias" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar Sub-tipo incidencias" name="btn-edit-stincidencias"><i class="fa fa-users"></i></button>',
            },
            {
                title: "Eliminar",
                targets: 1,
                data: null,
                defaultContent: '<button type="button" class="btn btn-danger btn-sm btn-delete-stincidence" data-bs-toggle="tooltip" data-bs-placement="top" title="Eliminar sub-tipo de incidencia" name="btn-delete-stincidence"><i class="fa fa-times"></i></button>'
            },
            {title: "Sub-tipo incidencia", targets: 2},
            {title: "Id", targets: 3, visible: false}
        ],
        order: [[ 2, "asc" ]],
        initComplete: function(settings,json){
            if (json == null || json == ""){
                alert("Error")
            }
        }
    })
})

$("#kt_cancel_newstincidence").click(function(){
    idnewstincidences = ""
    $("#kt_maxupload_administration_submit").prop("checked", false)
    $("#kt_sla_administration_submit").prop("checked", false)
    $("#kt_productos_administration_submit").prop("checked", false)
    $("#kt_tipoisncidencia_administration_submit").prop("checked", false)
    $("#kt_subtipoisncidencia_administration_submit").prop("checked", false)
    $("#kt_createincidencia_administration_submit").prop("checked", false)
    $("#staticTipoisncidencia").modal('hide')
})

$('#datatable-ajax-stincidencias tbody').on('click', '.btn-activedesactive-stincidencias', function(){
    var data = dtajaxallstincidences.row($(this).parents('tr')).data()
    console.log(data)
    var stincidenceid = data[3]
    var stcidencename = data[2]
    var stincidenciastateAct = data[4]
    if (stincidenciastateAct == "Activa"){
	var stateprd = "desactivara"
	var stateprd1 = "desactivados"
	var stincidenciastate = 0
    }
    else {
	var stateprd = "activara"
	var stateprd1 = "activados"
	var stincidenciastate = 1
    }
    Swal.fire({
        text: "Esta acción  " + stateprd + " el Sub-tipo de incidencia seleccionado, \n*Recuerde que de hacerlo también se " + stateprd + " el catalogo de incidencias atadas al mismo",
        icon: "warning",
        buttonsStyling: !1,
        closeOnClickOutside: false,
        closeOnEsc: false,
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: "No, cancelar",
        customClass:{
            confirmButton: "btn btn-primary",
            cancelButton: "btn btn-danger"
        }
    }).then((result) => {
        if (result['isConfirmed']){
            $.post('backend/activatedeactivatestincidencia.php',{
                stincidenceid: stincidenceid,
                stcidencename: stcidencename,
		stincidenciastate: stincidenciastate
            }).done(function(data, status){
                var parseData = JSON.parse(data)
                parseData = parseData.Result
                if (parseData == "OK"){
                    Swal.fire({
                        title: "",
                        text: "Sub-tipos de incidencia y catalogo fueron " + stateprd1 + " con éxito",
                        icon: "success",
                        button: {visible: false},
                        timer: 2000
                    })
                    dtajaxallstincidences.ajax.reload()
                }
		else {
                    Swal.fire({
                        title: "",
                        text: "Ocurrio un error, intentelo nuevamente",
                        icon: "error",
                        button: {visible: false},
                        timer: 2000
                    })
                }
            })
        }
    })
})

$('#datatable-ajax-stincidencias tbody').on('click', '.btn-edit-stincidencias', function(){
    var data = dtajaxallstincidences.row($(this).parents('tr')).data()
    console.log(data)
    var stincidencianame = data[2]
    stincidenciasIdGst = data[3]
    $("#newstincidence").val(stincidencianame)
    $("#lblSTincidenciaGst").text("Editar Sub Tipo de incidencia *")
    $("#kt_newstincidence_submit").text("Editar")
})

$('#datatable-ajax-stincidencias tbody').on('click', '.btn-delete-stincidence', function(){
    var data = dtajaxallstincidences.row($(this).parents('tr')).data()
    console.log(data)
    var stincidenceid = data[3]
    var stcidencename = data[2]
    Swal.fire({
        text: "Esta seguro que desea eliminar el sub-tipo de incidencia  " + stcidencename + "?, *Recuerde que de hacerlo también se eliminaran las incidencias atadas al mismo",
        icon: "success",
        buttonsStyling: !1,
        closeOnClickOutside: false,
        closeOnEsc: false,
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: "No, cancelar",
        customClass:{
            confirmButton: "btn btn-primary",
            cancelButton: "btn btn-danger"
        }
    }).then((result) => {
        if (result['isConfirmed']){
            $.post('backend/delstincidences.php',{
                stincidenceid: stincidenceid,
                stcidencename: stcidencename
            }).done(function(data, status){
                var parseData = JSON.parse(data)
                parseData = parseData.Result
                if (parseData == "OK"){
                    Swal.fire({
                        title: "", 
                        text: "Sub-tipos de incidencia e incidencias de catálogo eliminadas con éxito", 
                        icon: "success",
                        button: {visible: false},
                        timer: 2000
                    })
                    dtajaxallstincidences.ajax.reload()
                }
                else {
                    Swal.fire({
                        title: "", 
                        text: "Ocurrio un error al eliminar los sub-tipos de incidencia e incidencias de catálogo, intentelo nuevamente", 
                        icon: "error",
                        button: {visible: false},
                        timer: 2000
                    })
                }
            })
        }
    })
})

$('#staticSubtipoisncidencia').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
})

var KTNewSTIncidencia = function(){
    var t, e, i
    return {
        init:function(){
            t = document.querySelector("#kt_staticsubtipoisncidencia_form"),
            e = document.querySelector("#kt_newstincidence_submit"),
            i = FormValidation.formValidation(t,{
                fields: {
                    newstincidence:{
                        validators:{
                            notEmpty:{
                                message:"Sub-tipo de incidencia es requerida"
                            }
                        }
                    }
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger,
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: ".fv-row",
                        eleInvalidClass: "",
                        eleValidClass: ""
                    })
                }
            }),
            e.addEventListener("click",(function(o){
                o.preventDefault(),
                i.validate().then((function(i){
                    "Valid" == i?(
                        e.setAttribute("data-kt-indicator","on"),
                        e.disabled = !0,
                        setTimeout((function(){
                            e.removeAttribute("data-kt-indicator"),
                            e.disabled = !1,
                            $.post('backend/setnewstincidence.php',{
                                id: idnewstincidences,
                                stipoincidencia: $("#newstincidence").val(),
                                stincidenciasIdGst: (stincidenciasIdGst == '' || stincidenciasIdGst == undefined)?'Nuevo':stincidenciasIdGst
                            }).done(function(data, status){
                                var parseData = JSON.parse(data)
                                parseData = parseData.Result
                                if ($("#kt_newstincidence_submit").text() == "Guardar"){
                                    var mensaje = "Se ha creado el nuevo sub-tipo de incidencia"
                                    var mensaje2 = "Existió un error al ingresar el nuevo sub-tipo de incidencia, vuelva a intentarlo"
                                }
                                else {
                                    var mensaje = "Se ha editado el sub-tipo de incidencia selccionado"
                                    var mensaje2 = "Existió un error al editar el sub-tipo de incidencia, vuelva a intentarlo"
                                }
                                if (parseData == "OK"){
                                    Swal.fire({
                                        text: mensaje,
                                        icon: "success",
                                        buttonsStyling: !1,
                                        confirmButtonText: "OK",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    }).then((result) => {
                                        $("#newstincidence").val('')
                                        $("#lblSTincidenciaGst").text("Nuevo Sub-tipo de incidencia *")
                                        $("#kt_newstincidence_submit").text("Guardar")
					stincidenciasIdGst = ""
                                        idnewstincidences = NewGuid()
                                        dtajaxallstincidences.ajax.reload()
                                        //location.reload()
                                    })
                                }
                                else {
                                    Swal.fire({
                                        text: mensaje2,
                                        icon: "warning",
                                        buttonsStyling: !1,
                                        confirmButtonText: "OK",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    })
                                }
                            })
                        }),1500)
                    ):Swal.fire({
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

/********************************************************Nuevas incidencias */
var dtajaxallctgincidences
var idnewctgincidences
var newincidenciasIdGst

$('#staticCreateincidencia').on('shown.bs.modal', function(){
    $("#lblCTincidenciaGst").text("Ingreso de nuevas incidencias")
    $("#kt_newctgincidence_submit").text("Guardar")
    $("#slimsorquestador").attr("hidden","hidden")
    $(".ss-main").attr("hidden","hidden")
    //$("#newincidencetincidencia").removeAttr("disabled")
    //$("#newincidencesubtipoincidencia").removeAttr("disabled")
    //$("#newincidencearea").removeAttr("disabled")
    //$("#newincidenceslatype").removeAttr("disabled")
    //$("#newincidencetime").removeAttr("disabled")
    $("#newincidenceproducto").load("backend/getcatalogoproductos.php")
    $("#newincidencetincidencia").load("backend/getcatalogotiposincidencia.php")
    $("#newincidencesubtipoincidencia").load("backend/getcatalogosubtiposincidencia.php")
    $("#newincidencearea").load("backend/getuserarea.php")

    idnewstincidences = NewGuid()
    dtajaxallctgincidences = $("#datatable-ajax-ctgincidencias").DataTable({
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
            url: 'assets/vendor/bootstrap/Spanish.json'
        },
        lengthMenu: [
            [5,10,25,50],
            ['5','10', '25', '50']
        ],
        ajax:{
            type: "POST",
            dataType: "json",
            url: "backend/getallcatalogoincidences.php",
            data: {}
        },
        columnDefs: [
	    {
                title: "Estado",
                render: function(data,type,row){
                    return [
                        '<button type="button" class="btn btn-secondary btn-sm btn-activedesactive-catincidence" data-bs-toggle="tooltip" data-bs-placement="top" title="Activar/Desactivar" name="btn-activedesactive-catincidence">'+data+'</button>'
                    ].join('')

                },
                "targets": 9
            },
	    {
                title: "Editar",
                targets: 0,
                data: null,
                defaultContent: '<button type="button" class="btn btn-primary btn-sm btn-edit-catincidence" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar incidencia" name="btn-ecit-catincidence"><i class="fa fa-users"></i></button>'
            },
            {
                title: "Eliminar",
                targets: 1,
                data: null,
                defaultContent: '<button type="button" class="btn btn-danger btn-sm btn-delete-catincidence" data-bs-toggle="tooltip" data-bs-placement="top" title="Eliminar incidencia" name="btn-delete-catincidence"><i class="fa fa-times"></i></button>'
            },
            {title: "Id", targets: 2, visible: false},
            {title: "Producto", targets: 3},
            {title: "Tipo incidencia", targets: 4},
            {title: "Sub-tipo incidencia", targets: 5},
            {title: "Area", targets: 6},
            {title: "Tiempo respuesta", targets: 7},
            {title: "Tipo tiempo", targets: 8},
	    {title: "Personal asignado", targets: 10, visible: false}
        ],
        order: [[ 3, "asc" ]],
        initComplete: function(settings,json){
            if (json == null || json == ""){
                alert("Error")
            }
        }
    })
})

var orqedit
$('#datatable-ajax-ctgincidencias tbody').on('click', '.btn-edit-catincidence', function(){
    var data = dtajaxallctgincidences.row($(this).parents('tr')).data()
    console.log(data)
    newincidenciasIdGst = data[2]
    $("#newincidenceproducto").val(data[3])
    $("#newincidencetincidencia").val(data[4])
    //$("#newincidencetincidencia").attr("disabled","disabled")
    $("#newincidencesubtipoincidencia").val(data[5])
    //$("#newincidencesubtipoincidencia").attr("disabled","disabled")
    $("#newincidencearea").val(data[6])
    //$("#newincidencearea").attr("disabled","disabled")
    $("#newincidenceslatype").val(data[8])
    //$("#newincidenceslatype").attr("disabled","disabled")
    $("#newincidencetime").val(data[7])
    //$("#newincidencetime").attr("disabled","disabled")
    $("#lblCTincidenciaGst").text("Edición de incidencias")
    $("#kt_newctgincidence_submit").text("Editar")
    $("#slimsorquestador").removeAttr("hidden")
    $(".ss-main").removeAttr("hidden")
    if (slimSelectOrq != undefined){
        slimSelectOrq.destroy()
        slimSelectValues = ""
    }
    slimSelectOrq = new SlimSelect({
        select: '#slimsorquestador',
        selected: false,
        closeOnSelect: false,
        beforeOnChange: function(){
            slimSelectValues = ""
        },
        onChange: function(){
            slimSelectValues = slimSelectOrq.selected()
        },
    })

    orqedit = data[10]

    $("#slimsorquestador").load("backend/getusersorquestador.php", {area: $("#newincidencearea").val()})
    Swal.fire({
    	title: "",
        text: "Obteniendo orquestadores de la incidencia en edición actual, espere un momento por favor",
        //icon: "success",
	showConfirmButton: false,
        button: {visible: false},
        timer: 2000
    })
    const callorqedit = setTimeout(getorquestadoredit, 2000)
})

function getorquestadoredit(){
    var c = ""
    var a = orqedit
    a = a.split(",")
    for (i = 0; i < a.length; i++){
        var b = '"' + a[i] + '"'
        c = c + "," + b
    }
    c = c.replace(",", "")

    $.post('backend/getusersorquestadoredit.php',{
        pasignado: c
    }).done(function(data, status){
        console.log(data)
        var dataglb = JSON.parse(data)
        var datalen = dataglb.data.length
        for (i = 0; i < datalen; i++){
                //console.log(dataglb.data[i][0] + " - " + dataglb.data[i][1])
                slimSelectOrq.set(dataglb.data[i][0] + " - " + dataglb.data[i][1])
        }
    })
}

$("#kt_cancel_newctgincidence").click(function(){
    idnewstincidences = ""
    $("#kt_maxupload_administration_submit").prop("checked", false)
    $("#kt_sla_administration_submit").prop("checked", false)
    $("#kt_productos_administration_submit").prop("checked", false)
    $("#kt_tipoisncidencia_administration_submit").prop("checked", false)
    $("#kt_subtipoisncidencia_administration_submit").prop("checked", false)
    $("#kt_createincidencia_administration_submit").prop("checked", false)
    $("#lblCTincidenciaGst").text("Edición de incidencias")
    if (slimSelectOrq != undefined){
	slimSelectOrq.destroy()
    } 
    slimSelectValues = ""
    mailOrq = ""
    nameOrq = ""
})

$("#newincidencearea").change(function(){
    $("#slimsorquestador").removeAttr("hidden")
    $(".ss-main").removeAttr("hidden")
    $("#orquestadoreslbl").removeAttr("hidden")
    if (slimSelectOrq != undefined){
        slimSelectOrq.destroy()
	slimSelectValues = ""
    }
    slimSelectOrq = new SlimSelect({
        select: '#slimsorquestador',
        selected: false,
        closeOnSelect: false,
        beforeOnChange: function(){
            slimSelectValues = ""
        },
        onChange: function(){
            slimSelectValues = slimSelectOrq.selected()
        },
    })
    $("#slimsorquestador").load("backend/getusersorquestador.php", {area: $("#newincidencearea").val()})
    $("#newincidenceslatype").removeAttr("disabled")
    $("#newincidencetime").removeAttr("disabled")
})

$('#datatable-ajax-ctgincidencias tbody').on('click', '.btn-activedesactive-catincidence', function(){
    var data = dtajaxallctgincidences.row($(this).parents('tr')).data()
    console.log(data)
    var catalogoincid = data[2]
    var catalogoincstateAct = data[9]
    var catalogoproducto = data[3]
    var catalogotincidencia = data[4]
    var catalogostincidencia = data[5]
    if (catalogoincstateAct == "Activa"){
	var stateprd = "desactivara"
	var stateprd1 = "desactivados"
	var ctalogoincstate = 0
    }
    else {
 	var stateprd = "activara"
	var stateprd1 = "activados"
	var ctalogoincstate = 1
    }
    Swal.fire({
        text: "Esta acción  " + stateprd + " del catalogo de incidencia seleccionado",
        icon: "warning",
        buttonsStyling: !1,
        closeOnClickOutside: false,
        closeOnEsc: false,
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: "No, cancelar",
        customClass:{
            confirmButton: "btn btn-primary",
            cancelButton: "btn btn-danger"
        }
    }).then((result) => {
        if (result['isConfirmed']){
            $.post('backend/activatedeactivatecatalogo.php',{
                catalogoincid: catalogoincid,
		ctalogoincstate: ctalogoincstate,
		catalogoproducto: catalogoproducto,
		catalogotincidencia: catalogotincidencia,
		catalogostincidencia: catalogostincidencia
            }).done(function(data, status){
                var parseData = JSON.parse(data)
                parseData = parseData.Result
                if (parseData == "OK"){
                    Swal.fire({
                        title: "",
                        text: "Incidencia fue " + stateprd1 + " en el catalogo con éxito",
                        icon: "success",
                        button: {visible: false},
                        timer: 2000
                    })
                    dtajaxallctgincidences.ajax.reload()
                }
		else if (parseData == "PRODUCTO INACTIVO"){
		    Swal.fire({
                        title: "",
                        text: "El producto atado al catalogo se encuentra inactivo, debe habilitarlo antes de continuar",
                        icon: "warning",
                        button: {visible: false},
                        timer: 4000
                    })
		}
		else if (parseData == "TIPO INCIDENCIA INACTIVO"){
                    Swal.fire({
                        title: "",
                        text: "El tipo de incidencia atada al catalogo se encuentra inactivo, debe habilitarlo antes de continuar",
                        icon: "warning",
                        button: {visible: false},
                        timer: 4000
                    })
                }
		else if (parseData == "SUB TIPO INCIDENCIA INACTIVO"){
                    Swal.fire({
                        title: "",
                        text: "El sub-tipo de incidencia atada al catalogo se encuentra inactivo, debe habilitarlo antes de continuar",
                        icon: "warning",
                        button: {visible: false},
                        timer: 4000
                    })
                }
		else if (parseData == "ERROR"){
                    Swal.fire({
                        title: "",
                        text: "Ocurrio un error, intentelo nuevamente",
                        icon: "error",
                        button: {visible: false},
                        timer: 4000
                    })
                }
            })
        }
    })
})

$('#datatable-ajax-ctgincidencias tbody').on('click', '.btn-delete-catincidence', function(){
    var data = dtajaxallctgincidences.row($(this).parents('tr')).data()
    console.log(data)
    var catalogoincid = data[2]
    var catalogoincproducto = data[4]
    var catalogoinctincidencia = data[5]
    var catalogoincstincidencia = data[6]
    Swal.fire({
        text: "Esta seguro que desea eliminar del catálogo la incidencia... Producto: " + catalogoincproducto + ", Tipo incidencia: " + catalogoinctincidencia + ", Sub-tipo incidencia: " + catalogoincstincidencia + "?",
        icon: "success",
        buttonsStyling: !1,
        closeOnClickOutside: false,
        closeOnEsc: false,
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: "No, cancelar",
        customClass:{
            confirmButton: "btn btn-primary",
            cancelButton: "btn btn-danger"
        }
    }).then((result) => {
        if (result['isConfirmed']){
            $.post('backend/delcatalogoincidences.php',{
                catalogoincid: catalogoincid
            }).done(function(data, status){
                var parseData = JSON.parse(data)
                parseData = parseData.Result
                if (parseData == "OK"){
                    Swal.fire({
                        title: "", 
                        text: "Se ha eliminado con éxito la incidencia seleccionada del catálogo", 
                        icon: "success",
                        button: {visible: false},
                        timer: 2000
                    })
                    dtajaxallctgincidences.ajax.reload()
                }
                else {
                    Swal.fire({
                        title: "", 
                        text: "Ocurrio un error al eliminar la incidencia del catálogo, intentelo nuevamente", 
                        icon: "error",
                        button: {visible: false},
                        timer: 2000
                    })
                }
            })
        }
    })
})

$("#newincidenceproducto").change(function(){
	$("#newincidencetincidencia").removeAttr("disabled")
})

$("#newincidencetincidencia").change(function(){
	$("#newincidencesubtipoincidencia").removeAttr("disabled")
})

$("#newincidencesubtipoincidencia").change(function(){
	$("#newincidencearea").removeAttr("disabled")
})

$('#staticCreateincidencia').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
})

var KTNewCatalogIncidence = function(){
    var t, e, i
    return {
        init:function(){
            t = document.querySelector("#kt_staticcreateincidencia_form"),
            e = document.querySelector("#kt_newctgincidence_submit"),
            i = FormValidation.formValidation(t,{
                fields: {
                    newincidenceproducto:{
                        validators:{
                            notEmpty:{
                                message:"Producto es requerido"
                            }
                        }
                    },
                    newincidencetincidencia:{
                        validators:{
                            notEmpty:{
                                message:"Tipo incidencia es requerido"
                            }
                        }
                    },
                    newincidencesubtipoincidencia:{
                        validators:{
                            notEmpty:{
                                message:"Sub-tipo de incidencia es requerido"
                            }
                        }
                    },
                    newincidencearea:{
                        validators:{
                            notEmpty:{
                                message:"Área es requerido"
                            }
                        }
                    },
                    newincidenceslatype:{
                        validators:{
                            notEmpty:{
                                message:"Tipo de tiempo es requerido"
                            }
                        }
                    },
                    newincidencetime:{
                        validators:{
                            notEmpty:{
                                message:"Tiempo es requerido"
                            }
                        }
                    }
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger,
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: ".fv-row",
                        eleInvalidClass: "",
                        eleValidClass: ""
                    })
                }
            }),
            e.addEventListener("click",(function(o){
                o.preventDefault(),
                i.validate().then((function(i){
                    get_orquetadores_mail(),
                    "Valid" == i?(
                        e.setAttribute("data-kt-indicator","on"),
                        e.disabled = !0,
                        setTimeout((function(){
                            e.removeAttribute("data-kt-indicator"),
                            e.disabled = !1,
                            $.post('backend/setnewincidence.php',{
                                id: idnewstincidences,
                                producto: $("#newincidenceproducto").val(),
                                tipoincidencia: $("#newincidencetincidencia").val(),
                                stincidencia: $("#newincidencesubtipoincidencia").val(),
                                area: $("#newincidencearea").val(),
                                casignacion: mailOrq,
                                pasignado: nameOrq,
                                tiemporespuesta: $("#newincidencetime").val(),
                                tipotiempo: $("#newincidenceslatype").val(),
				                newincidenciasIdGst: (newincidenciasIdGst == '' || newincidenciasIdGst == undefined)?'Nuevo':newincidenciasIdGst
                            }).done(function(data, status){
                                console.log(data)
                                var parseData = JSON.parse(data)
                                parseData = parseData.Result
				                if ($("#kt_newctgincidence_submit").text() == "Guardar"){
                                    var mensaje = "Se ha agregado la nueva incidencia al catalogo"
                                    var mensaje2 = "Existió un error al ingresar al catalogo, vuelva a intentarlo"
                                }
                                else {
                                    var mensaje = "Se ha editado la incidencia seleccionada"
                                    var mensaje2 = "Existió un error al editar la incidencia, vuelva a intentarlo"
                                }
                                if (parseData == "OK"){
                                    Swal.fire({
                                        text: mensaje,
                                        icon: "success",
                                        buttonsStyling: !1,
                                        confirmButtonText: "OK",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    }).then((result) => {
                                        //location.reload()
                                        idnewstincidences = NewGuid()
                                        $("#staticCreateincidencia").find("input,textarea,select").val("");
					                    $("#orquestadoreslbl").attr("hidden","hidden")
                                        $("#slimsorquestador").attr("hidden","hidden")
                                        slimSelectOrq.destroy()
                                        $("#lblCTincidenciaGst").text("Ingreso de nuevas incidencias")
                                        $("#kt_newctgincidence_submit").text("Guardar")
                                        newincidenciasIdGst = ""
                                        dtajaxallctgincidences.ajax.reload()
                                    })
                                }
                                else if (parseData == "YA_EXISTE"){
                                    Swal.fire({
                                        text: "La incidencia por registrarse ya se encuentra atada a los orquestadores seleccionados, por favor ingresa una nueva",
                                        icon: "warning",
                                        buttonsStyling: !1,
                                        confirmButtonText: "OK",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    })
                                }
                                else if (parseData == "ERROR"){
                                    Swal.fire({
                                        text: mensaje2,
                                        icon: "warning",
                                        buttonsStyling: !1,
                                        confirmButtonText: "OK",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    })
                                }
                            })
                        }),1500)
                    ):Swal.fire({
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

function NewGuid(){
    return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
    function(c){
        var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    }).toUpperCase()
}

$("#kt_maxupload_administration_submit").click(function(){
    $("#cantidad-maxUpload-actual").val(maxuploadfile)
    KTUtil.onDOMContentLoaded((function(){
        KTMaxUpload.init()
    }))
})

$("#kt_sla_administration_submit").click(function(){
    KTUtil.onDOMContentLoaded((function(){
        KTSla.init()
    }))
})

$("#kt_productos_administration_submit").click(function(){
    KTUtil.onDOMContentLoaded((function(){
        KTNewProduct.init()
    }))
})

$("#kt_tipoisncidencia_administration_submit").click(function(){
    KTUtil.onDOMContentLoaded((function(){
        KTNewTIncidencia.init()
    }))
})

$("#kt_subtipoisncidencia_administration_submit").click(function(){
    KTUtil.onDOMContentLoaded((function(){
        KTNewSTIncidencia.init()
    }))
})

var slimSelectOrq 
var slimSelectValues
var mailOrq = ""
var nameOrq = ""

$("#kt_createincidencia_administration_submit").click(function(){
    /*slimSelectOrq = new SlimSelect({
        select: '#slimsorquestador',
        selected: false,
        closeOnSelect: false,
        beforeOnChange: function(){
            slimSelectValues = ""
        },
        onChange: function(){
            slimSelectValues = slimSelectOrq.selected()
        },
    })*/

    KTUtil.onDOMContentLoaded((function(){
        KTNewCatalogIncidence.init()
    }))

    $(".ss-main").attr("hidden","hidden")
    $("#orquestadoreslbl").attr("hidden","hidden")
})

function get_orquetadores_mail(){
    mailOrq = ''
    nameOrq = ''
    if (slimSelectValues == "" || slimSelectValues == undefined){
        console.log("Sin info")
    }
    else {
        var a = slimSelectValues.length
        if (a == 1){
            var b = slimSelectValues[0].split(" - ")
            mailOrq = b[1] + ","
            nameOrq = b[0] + ","
        }
        else {
            for (var i = 0; i < a; i++) {
                var c = slimSelectValues[i].split(" - ")
                mailOrq = mailOrq + c[1] + ","
                nameOrq = nameOrq + c[0] + ","
            }
        }
        mailOrq = mailOrq.substring(0, mailOrq.length - 1);
        nameOrq = nameOrq.substring(0, nameOrq.length - 1);
        console.log(mailOrq)
        console.log(nameOrq)
    }
}

$("#newincidenceslatype").change(function(){
    var af = $("#newincidenceslatype").val()
    if (af == "inmediato"){
        $("#newincidencetime").val(0)
        $("#newincidencetime").attr("disabled","disabled")
    }
    else {
        $("#newincidencetime").val("")
        $("#newincidencetime").removeAttr("disabled")
    }
})

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
