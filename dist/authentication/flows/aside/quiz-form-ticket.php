<!DOCTYPE html>
<html lang="en">
	<!--begin::Head-->
	<head><base href="../../../">
		<title>Quiz form</title>
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
				<!--begin::Body-->
					<!--begin::Content-->
					<div class="d-flex flex-center flex-column flex-column-fluid">
						<!--begin::Wrapper-->
						<div class="w-lg-500px p-10 p-lg-15 mx-auto rounded login-shadow login-login" id="quizform" hidden>
							<!--begin::Form-->
							<form class="form w-100" novalidate="novalidate" id="kt_quiz_form" action="#">
								<!--begin::Logo-->
								<div class="text-center mb-10">
									<img alt="Logo" src="assets/media/logos/logo-2.png" class="login-background-1 text-center"/>
								</div>
								<!--end::Logo-->
                                <!--begin::Heading-->
								<div class="text-center mb-10">
									<!--begin::Title-->
									<h2 class="mb-3" style="color: #00235E;">Encuesta</h2>
									<br><h8 class="mb-3" style="color: #00235E;" id="kt_label_form_header">Por favor, responda la siguientes preguntas</h8></br>
									<!--end::Title-->
								</div>
								<!--end::Heading-->
                            </form>
                            <!--end::Form-->
							<!--begin::Form-->
							<form class="form w-1000" novalidate="novalidate" id="kt_quiz_form_form" action="#">
								<!--begin::Input group-->
								<div class="fv-row mb-10 align-items-center text-center">
									<label class="form-label fs-4 fw-bolder text-dark">¿Su requerimiento ha sido solventado? *</label>
									<!--begin::select-->
                                    <select class="form-select" name="respuestaencuesta" id="respuestaencuesta" autocomplete="off">
                                        <option selected disabled></option>
									   	<option value="SI">SI</option>
                                        <option value="NO">NO</option>
                                    </select>
                                    <!--end::select-->
								</div>
								<!--end::Input group-->
                                <!--begin::Input group-->
								<div class="fv-row mb-10 align-items-center text-center">
									<!--begin::Wrapper-->
									<div class="d-flex flex-stack mb-2">
										<!--begin::Label-->
										<label id="respuestanolabel" class="form-label fw-bolder text-dark fs-6 mb-0" hidden>Su ayuda con un comentario del por que no fue solventado</label>
										<!--end::Label-->
									</div>
									<!--end::Wrapper-->
									<!--begin::Input-->
									<textarea rows="4" class="form-control form-control-lg" type="input" id="respuestano" name="respuestano" autocomplete="off" hidden></textarea>
									<!--end::Input-->
								</div>
								<!--end::Input group-->
								<!--begin::Input group-->
								<div class="fv-row mb-10 align-items-center text-center" id="npsform" hidden>
									<label class="form-label fs-4 fw-bolder text-dark">¿Recomendaría la Cooperativa San Francisco de Ambato a un familiar o amigo? *</label>
									<label class="form-label fs-7 fw-bolder">Seleccione un valor entre 0 y 10, siendo 0 nada recomendado y 10 muy recomendado</label>
									<br></br>
                                    <!--<input type="range" class="form-range" min="0" max="10" value=-5 id="range-nps">
									<label class="form-label fs-3 fw-bolder" id="range-value"></label>-->
									<!--begin::select-->
                                    <select class="form-select" name="npsencuesta" id="npsencuesta" autocomplete="off">
                                        <option selected disabled></option>
									   	<option value=0>0</option>
                                        <option value=1>1</option>
										<option value=2>2</option>
										<option value=3>3</option>
										<option value=4>4</option>
										<option value=5>5</option>
										<option value=6>6</option>
										<option value=7>7</option>
										<option value=8>8</option>
										<option value=9>9</option>
										<option value=10>10</option>
                                    </select>
                                    <!--end::select-->
								</div>
								<!--<script>
									var slider = document.getElementById("range-nps");
									var output = document.getElementById("range-value");
									output.innerHTML = "Seleccionado: " + slider.value;

									slider.oninput = function() {
										output.innerHTML = "Seleccionado: " + this.value;
									}
								</script>-->
								<!--end::Input group-->
								<!--begin::Input group-->
								<div class="fv-row mb-10 align-items-center text-center" id="npscomment" hidden>
									<!--begin::Wrapper-->
									<div class="d-flex flex-stack mb-2">
										<!--begin::Label-->
										<label id="respuestanolabel" class="form-label fw-bolder text-dark fs-6 mb-0">Su ayuda con un comentario del por que su calificación</label>
										<!--end::Label-->
									</div>
									<!--end::Wrapper-->
									<!--begin::Input-->
									<textarea rows="4" class="form-control form-control-lg" type="input" id="respuestanps" name="respuestanps" autocomplete="off"></textarea>
									<!--end::Input-->
								</div>
								<!--end::Input group-->
								<!--begin::Actions-->
								<div class="text-center">
									<!--begin::Submit button-->
									<button type="submit" id="kt_quiz_form_submit" class="btn btn-lg login-btnblue fw-bolder me-4">
										<span class="indicator-label">Enviar</span>
										<span class="indicator-progress">Un momento por favor...
										<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
									</button>
									<!--end::Submit button-->
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
        <script src="assets/js/custom/authentication/client-access/quiz-form-ticket.js"></script>
		<script src="assets/vendor/smtpjs/smtp.js"></script>
		<!--end::Page Custom Javascript-->
		<!--end::Javascript-->
	</body>
	<!--end::Body-->
</html>