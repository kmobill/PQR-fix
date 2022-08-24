<!DOCTYPE html>
<html lang="en">
	<!--begin::Head-->
	<head><base href="../../../">
		<title>Login</title>
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
				<!--begin::Aside-->
				<!--<div class="d-flex flex-column flex-lg-row-auto w-xl-500px positon-xl-relative rounded-parcial login-image">
					<div class="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-500px">
						<div class="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px"></div>
					</div>
				</div>-->
				<!--end::Aside-->
				<!--begin::Body-->
				<div class="d-flex flex-column flex-lg-row-fluid py-10">
					<!--begin::Content-->
					<div class="d-flex flex-center flex-column flex-column-fluid">
						<!--begin::Wrapper-->
						<div class="h-lg-850px p-10 p-lg-15 mx-auto rounded login-shadow login-login">
							<!--begin::Form-->
							<form class="form w-100" novalidate="novalidate" id="kt_sign_in_form" action="#">
								<!--begin::Logo-->
								<div class="text-center mb-10">
									<img alt="Logo" src="assets/media/logos/logo-2.png" class="login-background-1 text-center"/>
									<center>
										<img src="templates/images/login/0.png" id="imagenlogin" name="imagenlogin"> 
									</center>
								</div>
								<!--end::Logo-->
								<p></p>
								<!--begin::Heading-->
								<div class="text-center mb-10">
									<!--begin::Title-->
									<h2 class="mb-3" style="color: #00235E;">Bienvenido/a al Sistema de Tickets</h2>
									<p>
										<br><h8 class="mb-3" style="color: #00235E;">Bienvenido/a de nuevo</h8>
										<br><h8 class="mb-3" style="color: #00235E;">Por favor, inicia sesión con tu usuario y contraseña</h8></br></br>
									</p>
									<!--end::Title-->
								</div>
								<!--end::Heading-->
								<!--begin::Input group-->
								<div class="fv-row mb-10">
									<!--begin::Label-->
									<label class="form-label fs-6 fw-bolder text-dark">Usuario</label>
									<!--end::Label-->
									<!--begin::Input-->
									<input class="form-control form-control-lg" onKeyUp="usuario(this);" onfocus="usuario(this);" placeholder="Nombre de usuario" type="text" name="username" autocomplete="off" />
									<!--end::Input-->
								</div>
								<!--end::Input group-->
								<!--begin::Input group-->
								<div class="fv-row mb-10">
									<!--begin::Wrapper-->
									<div class="d-flex flex-stack mb-2">
										<!--begin::Label-->
										<label class="form-label fw-bolder text-dark fs-6 mb-0">Contraseña</label>
										<!--end::Label-->
										<!--begin::Link-->
										<a href="authentication/flows/aside/password-reset" style="color: #FF5500" class="link-primary fs-6 fw-bolder">Olvido su contraseña?</a>
										<!--end::Link-->
									</div>
									<!--end::Wrapper-->
									<!--begin::Input-->
									<input class="form-control form-control-lg" onkeypress="valKey(event);" onKeyUp="password1();" onfocus="password1();" placeholder="Contraseña" type="password" name="password" autocomplete="off" />
									<!--end::Input-->
								</div>
								<!--end::Input group-->
								<!--begin::Actions-->
								<div class="text-center">
									<!--begin::Submit button-->
									<button type="submit" id="kt_sign_in_submit" class="btn btn-lg login-btnblue w-100 mb-5">
										<span class="indicator-label">Continuar</span>
										<span class="indicator-progress">Un momento por favor...
										<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
									</button>
									<!--end::Submit button-->
									<!--<p></p>
									<a href="authentication/flows/aside/client-access" style="color: #FF5500" class="link-primary fs-4 fw-bolder">* Acceso clientes *</a>-->
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
			<!--end::Authentication - Sign-in-->
		</div>
		<!--end::Main-->
		<!--begin::Javascript-->
		<!--begin::Global Javascript Bundle(used by all pages)-->
		<script src="assets/plugins/global/plugins.bundle.js"></script>
		<script src="assets/js/scripts.bundle.js"></script>
		<!--end::Global Javascript Bundle-->
		<!--begin::Page Custom Javascript(used by this page)-->
		<script src="assets/js/custom/authentication/sign-in/general.js?v=<?php echo(rand()); ?>"></script>
		<script src="assets/js/custom/authentication/sign-in/loginexperience.js?v=<?php echo(rand()); ?>"></script>
		<script src="assets/js/custom/index/globalfunctions.js?v=<?php echo(rand()); ?>"></script>
		<!--end::Page Custom Javascript-->
		<!--end::Javascript-->
	</body>
	<!--end::Body-->
</html>
