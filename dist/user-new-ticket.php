<!DOCTYPE html>
<html lang="es">
	<!--begin::Head-->
	<head><base href="">
		<title>User new ticket</title>
		<meta charset="utf-8" />
		<link rel="shortcut icon" href="assets/media/logos/smico.ico" />
		<!--begin::Fonts-->
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
		<!--end::Fonts-->
		<!--begin::Page Vendor Stylesheets(used by this page)-->
		<link href="assets/plugins/custom/fullcalendar/fullcalendar.bundle.css" rel="stylesheet" type="text/css" />
		<link href="assets/vendor/upload/uppy.css" rel="stylesheet" type="text/css" />
		<!--end::Page Vendor Stylesheets-->
		<!--begin::Global Stylesheets Bundle(used by all pages)-->
		<link href="assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
		<link href="assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
		<link href="assets/css/style.general.css" rel="stylesheet" type="text/css"/>
		<link rel="stylesheet" href="assets/vendor/icomoon/style.css">
		<!--end::Global Stylesheets Bundle-->
	</head>
	<!--end::Head-->
	
	<!--begin::Body-->
	<body id="kt_body" class="all-body-bg header-fixed header-tablet-and-mobile-fixed toolbar-enabled">
		<!--begin::Main-->
		<!--begin::Root-->
		<div class="d-flex flex-column flex-root">
			<!--begin::Page-->
			<div class="page d-flex flex-row flex-column-fluid">
				<!--begin::Wrapper-->
					<!------------------------------------------------------------------------------------------------------------------------------------------------- Menu principal-->
				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
					<!--begin::Header-->
					<div id="kt_header" class="header align-items-stretch bgcolor" data-kt-sticky="true" data-kt-sticky-name="header" data-kt-sticky-offset="{default: '200px', lg: '300px'}">
						<!--begin::Container-->
						<div class="container-xxl d-flex align-items-center">
							<!--begin::Heaeder menu toggle-->
							<div class="d-flex topbar align-items-center d-lg-none ms-n2 me-3" title="Show aside menu">
								<div class="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px" id="kt_header_menu_mobile_toggle">
									<i class="bi bi-list"></i>
								</div>
							</div>
							<!--end::Heaeder menu toggle-->
							<!--begin::Header Logo-->
							<div class="header-logo me-5 me-md-10 flex-grow-1 flex-lg-grow-0">
								<a>
									<img alt="Logo" src="assets/media/logos/isologo_002.png" class="logo-default h-55px" />
									<img alt="Logo" src="assets/media/logos/logo-2.png" class="logo-sticky h-55px" />
								</a>
							</div>
							<!--end::Header Logo-->
							<!--begin::Wrapper-->
							<div class="d-flex align-items-stretch justify-content-end flex-lg-grow-1">
								<!--begin::Navbar-->
								<div class="d-flex align-items-stretch" id="kt_header_nav">
									<!--begin::Menu wrapper-->
									<div class="header-menu align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_header_menu_mobile_toggle" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}">
										<!--begin::Menu-->
										<div class="menu menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch" id="#kt_header_menu" data-kt-menu="true">
											<div id="menu-dashboard" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" class="menu-item here show menu-lg-down-accordion me-lg-1">
												<span class="menu-link py-3">
													<span class="menu-title">Dashboard</span>
													<span class="menu-arrow d-lg-none"></span>
												</span>
												<div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px">
													<div id="dashboard-integral" data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item menu-lg-down-accordion">
														<span class="menu-link py-3">
															<span class="menu-icon">
																<i class="bi bi-file-bar-graph"></i>
															</span>
															<span class="menu-title">Integral</span>
														</span>
													</div>
													<div id="dashboard-tipo-incidencias" data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item menu-lg-down-accordion">
														<span class="menu-link py-3">
															<span class="menu-icon">
																<i class="bi bi-diagram-2"></i>
															</span>
															<span class="menu-title">Tipo incidencias</span>
														</span>
													</div>
													<div id="dashboard-kpi-gestion" data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item menu-lg-down-accordion">
														<span class="menu-link py-3">
															<span class="menu-icon">
																<i class="bi bi-graph-up"></i>
															</span>
															<span class="menu-title">KPI??s gesti??n</span>
														</span>
													</div>
													<div id="dashboard-kpi-experiencia-cliente" data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item menu-lg-down-accordion">
														<span class="menu-link py-3">
															<span class="menu-icon">
																<i class="bi bi-columns-gap"></i>
															</span>
															<span class="menu-title">KPI??s experiencia cliente</span>
														</span>
													</div>
												</div>
											</div>
											<div id="menu-tickets" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" class="menu-item menu-lg-down-accordion me-lg-1">
												<span class="menu-link py-3">
													<span class="menu-title">Tickets</span>
													<span class="menu-arrow d-lg-none"></span>
												</span>
												<div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px">
													<div id="user-new-ticket" data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item menu-lg-down-accordion">
														<span class="menu-link py-3">
															<span class="menu-icon">
																<i class="bi bi-file-earmark-plus"></i>
															</span>
															<span class="menu-title">Nuevo</span>
														</span>
													</div>
													<div id="search-ticket" data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item menu-lg-down-accordion">
														<span class="menu-link py-3">
															<span class="menu-icon">
																<i class="bi bi-search"></i>
															</span>
															<span class="menu-title">Buscar</span>
														</span>
													</div>
												</div>		
											</div>
											<div id="menu-administration" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" class="menu-item menu-lg-down-accordion me-lg-1">
												<span class="menu-link py-3">
													<span class="menu-title">Administraci??n</span>
													<span class="menu-arrow d-lg-none"></span>
												</span>
												<div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px">
													<div id="users-administration" data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item menu-lg-down-accordion">
														<span class="menu-link py-3">
															<span class="menu-icon">
																<i class="bi bi-people"></i>
															</span>
															<span class="menu-title">Usuarios</span>
														</span>
													</div>
													<div id="rols-administration" data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item menu-lg-down-accordion">
														<span class="menu-link py-3">
															<span class="menu-icon">
																<i class="bi bi-person-check"></i>
															</span>
															<span class="menu-title">Roles</span>
														</span>
													</div>
													<div id="settings-administration" data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item menu-lg-down-accordion">
														<span class="menu-link py-3">
															<span class="menu-icon">
																<i class="bi bi-sliders"></i>
															</span>
															<span class="menu-title">Configuraciones</span>
														</span>
													</div>
												</div>
											</div>
											<div id="menu-reportes" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" class="menu-item menu-lg-down-accordion me-lg-1">
												<span class="menu-link py-3">
													<span class="menu-title">Reportes</span>
													<span class="menu-arrow d-lg-none"></span>
												</span>
											</div>
										</div>
										<!--end::Menu-->
									</div>
									<!--end::Menu wrapper-->
								</div>
								<!--end::Navbar-->
				<!----------------------------------------------------------------------------------------------------------------------------------------------Fin menu principal-->
				<!--------------------------------------------------------------------------------------------------------------------------------------Notificaciones y user info-->
								<!--begin::Topbar-->
								<div class="d-flex align-items-stretch flex-shrink-0">
									<!--begin::Toolbar wrapper-->
									<div class="topbar d-flex align-items-stretch flex-shrink-0">
										<!--begin::Notifications-->
										<div class="d-flex align-items-center ms-1 ms-lg-3">
											<!--begin::Menu- wrapper-->
											<div class="btn btn-icon btn-active-light-primary position-relative w-30px h-30px w-md-40px h-md-40px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
												<i class="bi bi-app-indicator"></i>
											</div>
											<!--begin::Menu-->
											<div class="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px" data-kt-menu="true">
												<!--begin::Heading-->
												<div class="d-flex flex-column bgi-no-repeat rounded-top" style="background-image:url('assets/media/misc/pattern-1.jpg')">
													<!--begin::Title-->
													<h3 class="text-white fw-bold px-9 mt-10 mb-6">Notificaciones
													<span class="fs-8 opacity-75 ps-3">??ltimas 72 horas</span></h3>
													<!--end::Title-->
													<!--begin::Tabs-->
													<ul class="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-bold px-9">
														<li class="nav-item">
															<a class="text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab">Gesti??n</a>
														</li>
													</ul>
													<!--end::Tabs-->
												</div>
												<!--end::Heading-->
												<!--begin::Tab content-->
												<div class="tab-content">
													<!--begin::Tab panel-->
													<div  id="kt_topbar_notifications_1" role="tabpanel">
														<!--begin::Items-->
														<div class="scroll-y mh-325px my-5 px-8">
															<!-- Aqui contenido de notificaciones-->
															<table class="table nowrap table-responsive responsive" id="datatable-notifications" style="width:100%">
																<thead thead-dark hidden></thead>
																<tbody></tbody>
															</table>
														</div>
														<!--end::Items-->
													</div>
													<!--end::Tab panel-->
												</div>
												<!--end::Tab content-->
											</div>
											<!--end::Menu-->
											<!--end::Menu wrapper-->
										</div>
										<!--end::Notifications-->										
										<!--begin::User-->
										<div class="d-flex align-items-center ms-1 ms-lg-3" id="kt_header_user_menu_toggle">
											<!--begin::Menu wrapper-->
											<div class="cursor-pointer symbol symbol-md-40px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
												<img id="picture-profile" alt="image">
											</div>
											<!--begin::Menu-->
											<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px" data-kt-menu="true">
												<!--begin::Menu item-->
												<div class="menu-item px-3">
													<div class="menu-content d-flex align-items-center px-3">
														<!--begin::Avatar-->
														<div class="symbol symbol-50px me-5">
															<img alt="Logo" id="picture-profile-mini">
														</div>
														<!--end::Avatar-->
														<!--begin::Username-->
														<div class="d-flex flex-column">
															<div class="fw-bolder d-flex align-items-center fs-5">
																<label id="name-profile"></label></div>
															<a id="usertype-profile" class="fw-bold text-muted text-hover-primary fs-7"></a>
															<a id="mail-profile" class="fw-bold text-muted text-hover-primary fs-9"></a>
														</div>
														<!--end::Username-->
													</div>
												</div>
												<!--end::Menu item-->
												<!--begin::Menu separator-->
												<div class="separator my-2"></div>
												<!--end::Menu separator-->
												<!--begin::Menu item-->
												<div class="menu-item px-5">
													<a href="authentication/flows/aside/sign-in" id="profile-logout" class="menu-link px-5">Desconectarse</a>
												</div>
												<!--end::Menu item-->
											</div>
											<!--end::Menu-->
											<!--end::Menu wrapper-->
										</div>
										<!--end::User -->
										<!--begin::Aside mobile toggle-->
										<!--end::Aside mobile toggle-->
									</div>
									<!--end::Toolbar wrapper-->
								</div>
								<!--end::Topbar-->
					<!-----------------------------------------------------------------------------------------------------------------------------------Fin Notificaciones y user info-->
							</div>
							<!--end::Wrapper-->
						</div>
						<!--end::Container-->
					</div>
					<!--end::Header-->
                    <!--begin::Body-->
					<div class="d-flex flex-column flex-lg-row-fluid py-10 global-form">
						<!--begin::Content-->
						<div class="d-flex flex-center flex-column flex-column-fluid">
                            <!--begin::Wrapper-->
                            <div class="w-lg-1000px p-10 p-lg-15 mx-auto rounded login-shadow login-login" id="kt_new_ticket_1">
                                <!--begin::Form-->
                                <form class="form w-1000" novalidate="novalidate" id="kt_client_access_form" action="#">
									<!--begin::mini header-->
									<div class="bg-mini-header">
										<!--begin::Logo-->
										<div class="text-right">
											<img alt="Logo" src="assets/media/logos/isologo_002.png" class="login-background-1 text-center"/>
										</div>
										<!--end::Logo-->
										<!--begin::Heading-->
										<div class="text-left">
											<!--begin::Title-->
											<h1 class="mb-3" style="color: #FFFFFF;">Nuevo ticket</h1>
											<!--end::Title-->
										</div>
										<!--end::Heading-->
									</div>
									<!--end::mini header-->
									<!--begin::ticket-->
									<div class="bg-ticket">
                                    	<!--begin::Heading-->
										<div class="ticket-text-right mb-10">
											<h1 class="mb-3" style="color: #FFFFFF;" id="ticket-number" hidden># Ticket: </h1>
										</div>
									</div>
									<!--end::ticket-->
									<!--end::Heading-->
									<!--begin::Input group-->
                                    <div class="text-center mb-10">
										<p>
											<br><h6 class="mb-3" style="color: #00235E;">Por favor, registre la informaci??n que se muestra a continuaci??n</h6></br>
										</p>
									</div>
                                    <!--end::Input group-->
                                    <!--begin::Input group-->
                                    <div class="fv-row mb-10">
										<div class="form-group row">
                                        <label class="form-label fs-6 fw-bolder text-dark col-sm-3 col-form-label col-sm-3 col-form-label" for="cedulacliente">C??dula cliente *</label>
											<div class="col-sm-9">
												<div class="input-group mb-3">
													<input class="form-control form-control-lg" type="number" placeholder="Ingrese la c??dula del cliente" name="cedulacliente" id="cedulacliente" autocomplete="off" />
													<button type="button" id="kt_client_access_submit" class="btn login-btnblue fw-bolder me-4">
														<span class="indicator-label">Buscar</span>
														<span class="indicator-progress">Un momento por favor...
														<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
													</button>
												</div>
											</div>
										</div>
                                    </div>
                                    <!--end::Input group-->
                                </form>
                                <!--end::Form-->
								<!--begin::Form-->
								<form class="form w-1000" novalidate="novalidate" id="kt_new_ticket_form" action="#">
                                    <div class="fv-row mb-10">
										<div class="form-group row">
									    	<label for="nombrecliente" class="form-label fs-6 fw-bolder text-dark col-sm-3 col-form-label">Nombres cliente *</label>
											<div class="col-sm-9">
									    		<input disabled class="form-control form-control-lg" type="input" name="nombrecliente" id="nombrecliente" autocomplete="off" />
											</div>
										</div>
								    </div>
									<div class="fv-row mb-10">
										<div class="form-group row">
									    	<label for="correocliente" class="form-label fs-6 fw-bolder text-dark col-sm-3 col-form-label">Correo cliente *</label>
											<div class="col-sm-9">
									    		<input disabled class="form-control form-control-lg" type="input" name="correocliente" id="correocliente" autocomplete="off" />
											</div>
										</div>
								    </div>
									<div class="fv-row mb-10">
										<div class="form-group row">
									    	<label for="celularcliente" class="form-label fs-6 fw-bolder text-dark col-sm-3 col-form-label">Celular cliente *</label>
											<div class="col-sm-9">
									    		<input disabled class="form-control form-control-lg" type="input" name="celularcliente" id="celularcliente" autocomplete="off" />
											</div>
										</div>
								    </div>
									<div class="fv-row mb-10">
										<div class="form-group row">
											<label for="tipoproducto" class="form-label fs-6 fw-bolder text-dark col-sm-3 col-form-label">Producto *</label>
											<div class="col-sm-9">
												<select disabled class="form-control form-control-lg form-select" name="tipoproducto" id="tipoproducto" autocomplete="off">
													<option selected disabled></option>
												</select>
											</div>
										</div>
									</div>
									<div class="fv-row mb-10">
										<div class="form-group row">
											<label for="tipoincidencia" class="form-label fs-6 fw-bolder text-dark col-sm-3 col-form-label">Tipo incidencia *</label>
											<div class="col-sm-9">
												<select disabled class="form-control form-control-lg form-select" name="tipoincidencia" id="tipoincidencia" autocomplete="off">
													<option selected disabled></option>
												</select>
											</div>
										</div>
									</div>
									<div class="fv-row mb-10">
										<div class="form-group row">
											<label for="subtipoincidencia" class="form-label fs-6 fw-bolder text-dark col-sm-3 col-form-label">Sub-tipo incidencia *</label>
											<div class="col-sm-9">
												<select disabled class="form-control form-control-lg form-select" name="subtipoincidencia" id="subtipoincidencia" autocomplete="off">
													<option selected disabled></option>
												</select>
											</div>
										</div>
									</div>
									<div class="fv-row mb-10">
										<div class="form-group row">
											<label for="tipoarea" class="form-label fs-6 fw-bolder text-dark col-sm-3 col-form-label">??rea *</label>
											<div class="col-sm-9">
												<input class="form-control form-control-lg" type="input" name="tipoarea" id="tipoarea" autocomplete="off" disabled/>
											</div>
										</div>
									</div>
									<div class="fv-row mb-10" id="canalglb">
										<div class="form-group row">
											<label for="canal-usuario" class="form-label fs-6 fw-bolder text-dark col-sm-3 col-form-label">Canal *</label>
											<div class="col-sm-9">
												<select class="form-control form-control-lg form-select" name="canal-usuario" id="canal-usuario" autocomplete="off" disabled>
													<option selected disabled></option>
													<option value="Llamada">Llamada</option>
													<option value="RedesSociales">Redes Sociales</option>
													<option value="Presencial">Presencial</option>
												</select>
											</div>
										</div>
									</div>
									<div class="fv-row mb-10" id="redessocialesglb" hidden>
										<div class="form-group row">
											<label for="redessociales-usuario" class="form-label fs-6 fw-bolder text-dark col-sm-3 col-form-label">Redes Sociales *</label>
											<div class="col-sm-9">
												<select class="form-control form-control-lg form-select" name="redessociales-usuario" id="redessociales-usuario" autocomplete="off">
													<option selected disabled></option>
													<option value="Messenger">Messenger</option>
													<option value="Whatsapp">Whatsapp</option>
													<option value="Instagram">Instagram</option>
													<option value="Webpage">P??gina Web</option>
													<option value="Twitter">Twitter</option>
													<option value="Telegram">Telegram</option>
												</select>
											</div>
										</div>
									</div>
									<div class="fv-row mb-10" id="agenciaglb" hidden>
										<div class="form-group row">
                                        	<label for="agencia-usuario" class="form-label fs-6 fw-bolder text-dark col-sm-3 col-form-label">Agencia *</label>
											<div class="col-sm-9">
												<select class="form-control form-control-lg form-select" name="agencia-usuario" id="agencia-usuario" autocomplete="off">
													<option selected disabled></option>
												</select>
											</div>
										</div>
                                    </div>
									<div class="fv-row mb-10">
										<div class="form-group row">
											<div class="d-flex flex-stack mb-2">
												<div class="form-check">
													<input class="form-check-input" type="checkbox" value="" id="check-asignarme">
													<label class="form-label fw-bolder text-dark fs-6 mb-0" for="check-asignarme" id="check-asignarme-label">
														Asignarme a m??
													</label>
												</div>
											</div>
										</div>
									</div>
									<div class="fv-row mb-10">
										<div class="form-group row">
											<label for="fileToUpload" class="form-label fs-6 fw-bolder text-dark col-sm-3 col-form-label" id="maxuploadcant">Cargar archivos o print (Max. 10 archivos - 4Mb)</label>
											<div class="col-sm-9">
												<div style="width: 500px" id="fileToUpload" name="fileToUpload[]" multiple="multiple">
											</div>
										</div>
									</div>
									<br></br>
									<div class="fv-row mb-10">
										<div class="form-group row">
											<label for="observacionesincidencia" class="form-label fs-6 fw-bolder text-dark col-sm-3 col-form-label">Comentarios</label>
											<div class="col-sm-9">
												<textarea rows="4" class="form-control form-control-lg" type="input" id="observacionesincidencia" name="observacionesincidencia" autocomplete="off"></textarea>
											</div>
										</div>
									</div>
									<div class="text-center">
										<!--begin::Submit button-->
										<button type="submit" id="kt_new_ticket_submit" class="btn btn-lg login-btnblue fw-bolder me-4">
											<span class="indicator-label">Guardar</span>
											<span class="indicator-progress">Un momento por favor...
											<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
										</button>
										<!--end::Submit button-->
										<a id="kt_cancel_ticket" class="btn btn-lg border">Cancelar</a>
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
			<!--end::Page-->
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
		<script src="assets/vendor/upload/jszip.js"></script>
		<script src="assets/vendor/upload/script_Y.js"></script>
		<script src="https://releases.transloadit.com/uppy/locales/v2.1.0/es_ES.min.js"></script>
		<script src="assets/vendor/upload/uppy.js"></script>
		<script src="assets/vendor/upload/es_ES.min.js"></script>

		<script src="https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js"></script>
		<script src="https://cdn.datatables.net/1.11.3/js/dataTables.bootstrap5.min.js"></script>
		<!--end::Page Vendors Javascript-->
		<!--begin::Page Custom Javascript(used by this page)-->
		<script src="assets/js/custom/index/globalfunctions.js?v=<?php echo(rand()); ?>"></script>
        	<script src="assets/js/custom/authentication/user-access/user-new-ticket.js?v=<?php echo(rand()); ?>"></script>
		<script src="assets/vendor/smtpjs/smtp.js"></script>
		<!--end::Page Custom Javascript-->
		<!--end::Javascript-->
	</body>
	<!--end::Body-->
</html>
