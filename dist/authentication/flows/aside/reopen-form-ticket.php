<!DOCTYPE html>
<html lang="en">
	<!--begin::Head-->
	<head><base href="">
		<title>Re-open form</title>
		<meta charset="utf-8" />
		<link rel="shortcut icon" href="../../../assets/media/logos/smico.ico" />
		<!--begin::Fonts-->
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
		<!--end::Fonts-->
		<!--begin::Page Vendor Stylesheets(used by this page)-->
		<link href="../../../assets/plugins/custom/fullcalendar/fullcalendar.bundle.css" rel="stylesheet" type="text/css" />
		<!--end::Page Vendor Stylesheets-->
		<!--begin::Global Stylesheets Bundle(used by all pages)-->
		<link href="../../../assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
		<link href="../../../assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
		<link href="../../../assets/css/style.general.css" rel="stylesheet" type="text/css"/>
		<link rel="stylesheet" href="../../../assets/vendor/icomoon/style.css">
		<link href="../../../assets/vendor/upload/uppy.css" rel="stylesheet" type="text/css" />
		<!--<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.1/css/bootstrap.min.css" />-->
		<link rel="stylesheet" href="https://cdn.datatables.net/1.11.3/css/dataTables.bootstrap5.min.css" />
		<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/alertify.min.css"/>
		<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/themes/bootstrap.min.css"/>
	</head>
	<!--end::Head-->
	<!--begin::Body-->
	<body id="kt_body" class="login-body-bg">
		<!--begin::Main-->
		<div class="d-flex flex-column flex-root">
			<!--begin::Authentication - Sign-in -->
			<div class="d-flex flex-column flex-lg-row flex-column-fluid">
				<!--begin::Body-->
					<div class="d-flex flex-column flex-lg-row-fluid py-10 global-form">
						<!--begin::Content-->
						<div class="d-flex flex-center flex-column flex-column-fluid">
                            <!--begin::Wrapper-->
                            <div class="w-lg-1000px p-10 p-lg-15 mx-auto rounded login-shadow login-login" id="reopenform" hidden>
								<!--begin::Form-->
								<form class="form w-1000" novalidate="novalidate" action="#" id="kt_reopen_form">
                                    <!--begin::Logo-->
                                    <div class="text-center mb-10">
                                        <img alt="Logo" src="../../../assets/media/logos/logo-2.png" class="login-background-1 text-center"/>
                                    </div>
                                    <!--end::Logo-->
                                    <!--begin::Heading-->
                                    <div class="text-center mb-10">
                                        <!--begin::Title-->
                                        <h2 class="mb-3" style="color: #00235E;">Re-apertura ticket</h2>
                                        <br><h8 class="mb-3" style="color: #00235E;" id="kt_label_form_header">Por favor, valide y apruebe el ticket a continuación</h8></br>
                                        <!--end::Title-->
                                    </div>
                                    <!--end::Heading-->
                                    <br>
                                    <!--begin::tabs-->
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <a class="nav-link active" id="ticket-reopen-tab" data-bs-toggle="tab" href="#ticket-reopen" role="tab" aria-controls="ticket-reopen" aria-selected="true">Re-apertura
                                                <span class="btn btn-outline-primary btn-sm" id="ticket-reopen-tab-cant"></span>
                                            </a>
                                        </li>
                                    </ul>
                                    <!--end::tabs-->
                                    <!--begin::all tab-->
                                    <div class="tab-content" id="myTabContent">
                                        <!--begin::pendiente tab-->
                                        <div class="tab-pane fade show active" id="ticket-pendiente" role="tabpanel" aria-labelledby="ticket-reopen-tab">
                                            <!--begin::Input group-->
                                            <div class="fv-row mb-10">
                                                <!--begin::Table-->
                                                <table class="table table-bordered nowrap table-responsive responsive" id="datatable-ajax-reopen" style="width:100%">
                                                    <thead thead-dark></thead>
                                                    <tbody></tbody>
                                                </table>
                                                <!--end::Table-->
                                            </div>
									        <!--end::Input group-->
                                        </div>
                                        <!--end::pendiente tab-->
                                    </div>
                                    <!--end::all tab-->
                                    <!--begin::Input group-->
									<div class="fv-row mb-10">
										<!--begin::Wrapper-->
										<div class="d-flex flex-stack mb-2">
											<!--begin::Label-->
											<label class="form-label fw-bolder text-dark fs-6 mb-0">Comentarios</label>
											<!--end::Label-->
										</div>
										<!--end::Wrapper-->
										<!--begin::Input-->
										<textarea rows="4" class="form-control form-control-lg" type="input" id="commentsreopen" name="commentsreopen" autocomplete="off"></textarea>
										<!--end::Input-->
									</div>
											<!--end::Input group-->
                                    <!--begin::Actions-->
                                    <div class="text-center">
                                        <!--begin::Submit button-->
                                        <button type="submit" id="kt_reopen_form_submit" class="btn btn-lg login-btnblue fw-bolder me-4">
                                            <span class="indicator-label">Autorizar</span>
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
                    <!--begin::Body-->
					<div class="d-flex flex-column flex-lg-row-fluid py-10 global-form">
						<!--begin::Content-->
						<div class="d-flex flex-center flex-column flex-column-fluid">
                            <!--begin::Wrapper-->
                            <div class="w-lg-600px p-10 p-lg-15 mx-auto rounded" id="panelcomentarios" hidden>
								<!--begin::Form-->
								<form class="form w-600" novalidate="novalidate">
									<!--begin::Input group-->
									<div class="mb-10">
										<!--begin::Wrapper-->
										<!--begin::Table-->
										<table class="table table-striped table-bordered table-condensed" id="datatable-ajax-comments" style="width:100%">
                                            <thead thead-dark></thead>
                                            <tbody></tbody>
                                        </table>
										<!--end::Table-->
									</div>
									<!--end::Input group-->
								</form>
								<!--end::Form-->
							</div>
							<!--end::Wrapper-->
						</div>
						<!--end::Content-->
					</div>
					<!--end::Body-->
					<!--begin::Body-->
					<div class="d-flex flex-column flex-lg-row-fluid py-10 global-form">
						<!--begin::Content-->
						<div class="d-flex flex-center flex-column flex-column-fluid">
                            <!--begin::Wrapper-->
                            <div class="w-lg-600px p-10 p-lg-15 mx-auto rounded" id="paneluploads" hidden>
								<!--begin::Form-->
								<form class="form w-600" novalidate="novalidate">
									<!--begin::Input group-->
									<div class="mb-10">
										<!--begin::Wrapper-->
										<!--begin::Table-->
										<table class="table table-striped table-bordered table-condensed" id="datatable-ajax-uploads" style="width:100%">
                                            <thead thead-dark></thead>
                                            <tbody></tbody>
                                        </table>
										<!--end::Table-->
									</div>
									<!--end::Input group-->
								</form>
								<!--end::Form-->
							</div>
							<!--end::Wrapper-->
							</div>
						<!--end::Content-->
					</div>
					<!--end::Body-->
					<!--begin::Body-->
					<div class="d-flex flex-column flex-lg-row-fluid py-10 global-form">
						<!--begin::Content-->
						<div class="d-flex flex-center flex-column flex-column-fluid">
                            <!--begin::Wrapper-->
                            <div class="w-lg-600px p-10 p-lg-15 mx-auto rounded" id="paneltiempos" hidden>
								<!--begin::Form-->
								<form class="form w-600" novalidate="novalidate">
									<!--begin::Input group-->
									<div class="mb-10">
										<!--begin::Wrapper-->
										<!--begin::Table-->
										<table class="table table-striped table-bordered table-condensed" id="datatable-ajax-times" style="width:100%">
                                            <thead thead-dark></thead>
                                            <tbody></tbody>
                                        </table>
										<!--end::Table-->
									</div>
									<!--end::Input group-->
								</form>
								<!--end::Form-->
							</div>
							<!--end::Wrapper-->
						</div>
						<!--end::Content-->
					</div>
					<!--end::Body-->
					<!--begin::Body-->
					<div class="d-flex flex-column flex-lg-row-fluid py-10 global-form">
						<!--begin::Content-->
						<div class="d-flex flex-center flex-column flex-column-fluid">
                            <!--begin::Wrapper-->
                            <div class="w-lg-600px p-10 p-lg-15 mx-auto rounded" id="panelhistory" hidden>
								<!--begin::Form-->
								<form class="form w-600" novalidate="novalidate">
									<!--begin::Input group-->
									<div class="mb-10">
										<!--begin::Wrapper-->
										<!--begin::Table-->
										<table class="table table-striped table-bordered table-condensed" id="datatable-ajax-history" style="width:100%">
                                            <thead thead-dark></thead>
                                            <tbody></tbody>
                                        </table>
										<!--end::Table-->
									</div>
									<!--end::Input group-->
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
		<script src="../../../assets/plugins/global/plugins.bundle.js"></script>
		<script src="../../../assets/js/scripts.bundle.js"></script>
		<!--end::Global Javascript Bundle-->
        <!--begin::Page Vendors Javascript(used by this page)-->
		<script src="../../../assets/plugins/custom/fullcalendar/fullcalendar.bundle.js"></script>
		<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
		<script src="https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js"></script>
		<script src="https://cdn.datatables.net/1.11.3/js/dataTables.bootstrap5.min.js"></script>
		<script src="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/alertify.min.js"></script>
		<!--end::Page Vendors Javascript-->
		<!--begin::Page Vendors Javascript(used by this page)-->
		<script src="../../../assets/plugins/custom/fullcalendar/fullcalendar.bundle.js"></script>
		<script src="../../../assets/vendor/upload/es_ES.min.js"></script>
		<script src="../../../assets/vendor/upload/jszip.js"></script>
		<script src="../../../assets/vendor/upload/script_Y.js"></script>
		<script src="../../../assets/vendor/upload/uppy.js"></script>
		<!--end::Page Vendors Javascript-->
		<!--begin::Page Custom Javascript(used by this page)-->
        <script src="../../../assets/js/custom/authentication/client-access/reopen-form-ticket.js"></script>
        <script src="../../../assets/js/custom/index/globalfunctions.js"></script>
		<script src="../../../assets/vendor/smtpjs/smtp.js"></script>
		<!--end::Page Custom Javascript-->
		<!--end::Javascript-->
	</body>
	<!--end::Body-->
    <style>
		td.details-control {
    		background: url('../../../assets/media/icons/details_open.png') no-repeat center center;
    		cursor: pointer;
		}
		
		tr.shown td.details-control {
    		background: url('../../../assets/media/icons/details_close.png') no-repeat center center;
		}
	</style>
</html>