<!DOCTYPE html>
<html lang="es">
	<!--begin::Head-->
	<head><base href="">
		<title>Search ticket</title>
		<meta charset="utf-8" />
		<link rel="shortcut icon" href="assets/media/logos/smico.ico" />
		<!--begin::Fonts-->
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
		<!--end::Fonts-->
		<!--begin::Page Vendor Stylesheets(used by this page)-->
		<link href="assets/plugins/custom/fullcalendar/fullcalendar.bundle.css" rel="stylesheet" type="text/css" />
		<!--end::Page Vendor Stylesheets-->
		<!--begin::Global Stylesheets Bundle(used by all pages)-->
		<link href="assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
		<link href="assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
		<link href="assets/css/style.general.css" rel="stylesheet" type="text/css"/>
		<link rel="stylesheet" href="assets/vendor/icomoon/style.css">
		<!--<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.1/css/bootstrap.min.css" />-->
		<link rel="stylesheet" href="https://cdn.datatables.net/1.11.3/css/dataTables.bootstrap5.min.css" />
		<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/alertify.min.css"/>
		<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/themes/bootstrap.min.css"/>
	</head>
	<!--end::Head-->
<!--begin::Input group-->
<div class="fv-row mb-10" id="redessocialesglb">
										<label class="form-label fs-6 fw-bolder text-dark">Redes Sociales *</label>
										<!--begin::select-->
										<select class="form-control form-control-lg form-select" name="redessociales-usuario" id="redessociales-usuario" autocomplete="off">
											<option selected disabled></option>
											<option value="Messenger">Messenger</option>
											<option value="Whatsapp">Whatsapp</option>
											<option value="Instagram">Instagram</option>
											<option value="Webpage">Página Web</option>
											<option value="Twitter">Twitter</option>
											<option value="Telegram">Telegram</option>
										</select>
										<!--end::select-->
									</div>
									<!--end::Input group-->
                                    </div>
		<!--end::Root-->		
		<!--begin::Scrolltop-->
		<div id="kt_scrolltop" class="scrolltop" data-kt-scrolltop="true">
			<i class="bi bi-box-arrow-in-up"></i>
		</div>
		<!--end::Scrolltop-->
		<!--end::Main-->
		<!--begin::Javascript-->
		<!--begin::Global Javascript Bundle(used by all pages)-->
		<script src="assets/plugins/global/plugins.bundle.js"></script>
		<script src="assets/js/scripts.bundle.js"></script>
		<!--end::Global Javascript Bundle-->
		<!--begin::Page Vendors Javascript(used by this page)-->
		<script src="assets/plugins/custom/fullcalendar/fullcalendar.bundle.js"></script>
		<!--end::Page Vendors Javascript-->
		<!--begin::Page Custom Javascript(used by this page)-->
		<script src="https://code.highcharts.com/highcharts.js"></script>
		<script src="https://code.highcharts.com/highcharts-3d.js"></script>
		<script src="https://code.highcharts.com/highcharts-more.js"></script>
		<script src="https://code.highcharts.com/modules/accessibility.js"></script>
		<script src="https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js"></script>
		<script src="https://cdn.datatables.net/1.11.3/js/dataTables.bootstrap5.min.js"></script>
		<!--<script src="assets/js/custom/widgets.js"></script>-->
		<!--end::Page Custom Javascript-->
		<!--end::Javascript-->
	</body>
	<!--end::Body-->
</html>
<script>
    $("#redessociales-usuario").change(function(){
        var mail = "sertecmega@gmail.com, soporte@kimobill.com"
        var subject = "Nuevo ticket creado: 14801612" 
        var body = "<html>Estimado/a,<br></br><br></br>"
            body += "Se ha creado el Ticket #14801612, con el siguiente detalle:<br></br><br></br>"
            body += "<strong>Producto: " + $("#tipoproducto").val() +"</strong><br></br>"
            body += "<strong>Tipo incidencia: " + $("#tipoincidencia").val() +"</strong><br></br>"
            body += "<strong>Sub-tipo incidencia: " + $("#subtipoincidencia").val() +"</strong><br></br><br></br><br></br>"
            body += "Saludos,<br></br>"
            body += "Administrador del sistema</html>"
        var mails = mail.split(", ")
        var msize = mails.length
        for (i = 0; i < msize; i++){
            console.log(mails[i])
            SendMailGlobal(mails[i], subject, body)
        }
        function SendMailGlobal(to, subject, body){
            $.post('backend/sendmailclass.php',{
            to: to,
            subject: subject,
            body: body
            }).done(function(data, status){
                console.log(data, status)
                localStorage.setItem("responseMail", data)
            })
        }
    })
</script>
