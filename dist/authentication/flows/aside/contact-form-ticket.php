<!DOCTYPE html>
<html lang="en">
	<!--begin::Head-->
	<head><base href="../../../">
		<title>Contact form</title>
		<meta name="description" content="The most advanced Bootstrap Admin Theme on Themeforest trusted by 94,000 beginners and professionals. Multi-demo, Dark Mode, RTL support and complete React, Angular, Vue &amp; Laravel versions. Grab your copy now and get life-time updates for free." />
		<meta name="keywords" content="Metronic, bootstrap, bootstrap 5, Angular, VueJs, React, Laravel, admin themes, web design, figma, web development, free templates, free admin themes, bootstrap theme, bootstrap template, bootstrap dashboard, bootstrap dak mode, bootstrap button, bootstrap datepicker, bootstrap timepicker, fullcalendar, datatables, flaticon" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta charset="utf-8" />
		<link rel="shortcut icon" href="assets/media/logos/smico.ico" />
		<!--begin::Fonts-->
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
		<!--end::Fonts-->
		<!--begin::Global Stylesheets Bundle(used by all pages)-->
		<link href="assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css"/>
		<link href="assets/css/style.bundle.css" rel="stylesheet" type="text/css"/>
		<link href="assets/css/style.general.css" rel="stylesheet" type="text/css"/>
		<!--end::Global Stylesheets Bundle-->
	</head>
	<!--end::Head-->
	<!--begin::Body-->
	<body id="kt_body" class="login-body-bg">
		<!--begin::Main-->
		<div class="d-flex flex-column flex-root">
			<!--begin::Authentication - Sign-in -->
			<div class="d-flex flex-column flex-lg-row flex-column-fluid">
				<!--<div class="d-flex flex-column flex-lg-row-auto w-xl-500px positon-xl-relative rounded-parcial login-image">
					<div class="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-500px">
						<div class="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px"></div>
					</div>
				</div>-->
				<!--end::Aside-->
				<!--begin::Body-->
					<!--begin::Content-->
					<div class="modal d-flex flex-column flex-column-fluid contact-form">
						<!--begin::Wrapper-->
						<div class="w-lg-600px p-10 p-lg-15 mx-auto rounded login-shadow login-login">
                            <!--begin::Form-->
                            <form class="form w-600" novalidate="novalidate" id="kt_contact_form_header" action="#">
                                <!--begin::Logo-->
                                <div class="text-center mb-10">
                                    <img alt="Logo" src="assets/media/logos/logo-2.png" class="login-background-1 text-center"/>
                                </div>
                                <!--end::Logo-->
                                <!--begin::Heading-->
								<div class="text-center mb-10">
									<!--begin::Title-->
									<h2 class="mb-3" style="color: #00235E;">Formulario de contacto</h2>
									<br><h8 class="mb-3" style="color: #00235E;" id="kt_label_form_header">Por favor, registre la información que se muestra a continuación para ser contactado por uno de nuestros agentes</h8></br>
									<!--end::Title-->
								</div>
								<!--end::Heading-->
                            </form>
                            <!--end::Form-->
							<!--begin::Form-->
							<form class="form w-1000" novalidate="novalidate" id="kt_contact_form_form" action="#">
								<!--begin::Input group-->
								<div class="fv-row mb-10">
									<label class="form-label fs-6 fw-bolder text-dark">Cédula *</label>
									<input class="form-control form-control-lg" placeholder="Ingrese aquí su cédula" type="number" name="cedulacliente" id="cedulacliente" autocomplete="off" />
								</div>
                                <div class="fv-row mb-10">
									<label class="form-label fs-6 fw-bolder text-dark">Nombres completos *</label>
									<input class="form-control form-control-lg" placeholder="Ingrese aquí sus nombres y apellidos" type="input" name="nombrecliente" id="nombrecliente" autocomplete="off" />
								</div>
								<div class="fv-row mb-10">
									<label class="form-label fs-6 fw-bolder text-dark">Correo electrónico *</label>
									<input class="form-control form-control-lg" placeholder="Ingrese aquí su correo electrónico" type="input" name="correocliente" id="correocliente" autocomplete="off" />
								</div>
								<div class="fv-row mb-10">
									<label class="form-label fs-6 fw-bolder text-dark">Teléfono de contacto *</label>
									<input class="form-control form-control-lg" placeholder="Ingrese aquí su teléfono de contacto" type="number" name="contactocliente" id="contactocliente" autocomplete="off" />
								</div>
                                <!--end::Input group-->
								<!--begin::Input group-->
								<div class="fv-row mb-10">
									<!--begin::Input-->
									<label class="form-label fs-6 fw-bolder text-dark">Comentarios *</label>
									<textarea rows="4" class="form-control form-control-lg" placeholder="Ingrese aquí sus comentarios" type="input" id="comentarioscliente" name="comentarioscliente" autocomplete="off"></textarea>
									<!--end::Input-->
								</div>
								<!--end::Input group-->
								<!--begin::Actions-->
								<div class="text-center">
									<!--begin::Submit button-->
									<button type="submit" id="kt_contact_form_submit" class="btn btn-lg login-btnblue fw-bolder me-4">
										<span class="indicator-label">Enviar</span>
										<span class="indicator-progress">Un momento por favor...
										<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
									</button>
									<!--end::Submit button-->
									<a id="kt_cancel_contact_form" class="btn btn-lg border">Cancelar</a>
								</div>
								<!--end::Actions-->
							</form>
							<!--end::Form-->
						</div>
						<!--end::Wrapper-->
					</div>
					<!--end::Content-->
				</div>
				<!--end::Body-->
			</div>
			<!--end::Wrapper-->
		</div>
		<!--end::Main-->
		<!--begin::Javascript-->
		<!--begin::Global Javascript Bundle(used by all pages)-->
		<script src="assets/plugins/global/plugins.bundle.js"></script>
		<script src="assets/js/scripts.bundle.js"></script>
		<!--end::Global Javascript Bundle-->
		<!--begin::Page Vendors Javascript(used by this page)-->
		<script src="assets/plugins/custom/fullcalendar/fullcalendar.bundle.js"></script>
		<script src="assets/vendor/upload/es_ES.min.js"></script>
		<script src="assets/vendor/upload/jszip.js"></script>
		<script src="assets/vendor/upload/script_Y.js"></script>
		<script src="assets/vendor/upload/uppy.js"></script>
		<!--end::Page Vendors Javascript-->
		<!--begin::Page Custom Javascript(used by this page)-->
        <script src="assets/js/custom/authentication/client-access/contact-form-ticket.js"></script>
		<script src="assets/js/custom/index/globalfunctions.js"></script>
		<script src="assets/vendor/smtpjs/smtp.js"></script>
		<!--end::Page Custom Javascript-->
		<!--end::Javascript-->
	</body>
	<!--end::Body-->
</html>