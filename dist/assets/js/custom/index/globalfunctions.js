
function disableIE(){//Context menu
    if (document.all){
        return false;
    }
}

function disableNS(e){
    if (document.layers || (document.getElementById && !document.all)){
        if (e.which == 2 || e.which==3) {
            return false;
        }
    }
}

if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = disableNS;
}
else {
    document.onmouseup = disableNS;
    document.oncontextmenu = disableIE;
}

/*document.oncontextmenu = new Function("return false");

document.onkeydown = function(){
    if(window.event && window.event.keyCode == 116){
        delete_ticket_no_used(tokenglobal)
    }

    if (event.keyCode == 123){//F12
        return false;
    }
    else if (event.ctrlKey && event.shiftKey && event.keyCode == 73){//Ctrl+Shift+I
        return false;
    }

    $("#search-ticket").click(function(){
        var pusertype = localStorage.getItem("ProfileUserType")
        if (pusertype == "orquestador"){
                window.location = "user-assigned-ticket"
        }
        else {
                window.location = "search-ticket"
        }
    })
}*/

$("#search-ticket").click(function(){
	var pusertype = localStorage.getItem("ProfileUserType")
        if (pusertype == "administrador" || pusertype == "supervisor" || pusertype == "orquestador"){
		window.location = "user-assigned-ticket"
        }
        else {
		window.location = "search-ticket"
        }
})

window.addEventListener("keypress", function(event){
    if (event.keyCode == 13){
        event.preventDefault();
    }
}, false)

function validate_user_orq_sup_other(){
    var vProfileName = localStorage.getItem("ProfileName")
	if (vProfileName == null || vProfileName == undefined){
		window.location = "authentication/flows/aside/sign-in"
	}
	var tipoUsuario = localStorage.getItem("ProfileUserType")
	if (tipoUsuario == "ingresador"){
		window.location = 'search-ticket'
	}
	else {
    		window.location = 'user-assigned-ticket'
	}
}

function validate_required_users(usertype){
    if (usertype != "su"){
        $.post('backend/validaterequiredusers.php?action=orquestador',{
        }).done(function(data, status){
            console.log(data)
            var existeorq = JSON.parse(data)
            existeorq = existeorq.data[0][0]
            if (existeorq == "NoExiste"){
                Swal.fire({
                    text: "Se requiere un usuario orquestador, debe crearlo antes de continuar...",
                    icon: "warning",
                    buttonsStyling: !1,
                    confirmButtonText: "OK",
                    customClass: {
                        confirmButton:"btn btn-primary"
                    }
                }).then((result) => {
                    $("#users-administration").click()
                })
                
            }
        })
    }
    else {
        console.log(usertype)
    }
}

function user_data(picture, name, mail, usertype){
    $("#picture-profile").attr("src", picture)
    $("#picture-profile-mini").attr("src", picture)
    $("#name-profile").text(name)
    var a = localStorage.getItem("ProfileUserArea")
    if (a == undefined || a == ""){
        $("#mail-profile").text(mail)    
    }
    else {
        $("#mail-profile").text(a + " - " + mail)
    }
    $("#usertype-profile").text(usertype)
}

function permissions_apps(profileid){
    if (profileid == "ingresador"){
        $("#menu-dashboard").attr("hidden","hidden")
        $("#menu-tickets").removeAttr("hidden")
        $("#menu-administration").attr("hidden","hidden")
        $("#menu-reportes").attr("hidden","hidden")
        $(".form-check").attr("hidden","hidden")
    }

    if (profileid == "orquestador"){
        $("#menu-dashboard").removeAttr("hidden")
        $("#menu-tickets").removeAttr("hidden")
        $("#menu-administration").attr("hidden","hidden")
        $("#menu-reportes").attr("hidden","hidden")
	    $("#search-ticket").removeAttr("hidden")
    }

    if (profileid == "supervisor"){
        $("#menu-dashboard").removeAttr("hidden")
        $("#menu-tickets").removeAttr("hidden")
        $("#menu-administration").attr("hidden","hidden")
        $("#menu-reportes").removeAttr("hidden")
	    $("#search-ticket").removeAttr("hidden")
    }

    if (profileid == "administrador"){
        $("#menu-dashboard").removeAttr("hidden")
        $("#menu-tickets").removeAttr("hidden")
        $("#menu-administration").removeAttr("hidden","hidden")
        $("#menu-reportes").removeAttr("hidden")
        $("#rols-administration").attr("hidden","hidden")
        $(".form-check").attr("hidden","hidden")
    }

    if (profileid == "administrador de usuarios"){
        $("#menu-dashboard").attr("hidden","hidden")
        $("#menu-tickets").attr("hidden","hidden")
        $("#menu-administration").removeAttr("hidden","hidden")
        $("#menu-reportes").attr("hidden","hidden")
        $("#rols-administration").attr("hidden","hidden")
        $("#settings-administration").attr("hidden","hidden")
        $(".form-check").attr("hidden","hidden")
    }
}

$("#profile-logout").click(function(){
	onlogout()
})

function onlogout(){
    $.post('backend/dellogin.php',{
        profileid: localStorage.getItem("ProfileId")
    }).done(function(data, status){
        console.log(status)
    })
    localStorage.removeItem("ProfileId")
    localStorage.removeItem("ProfileUserId")
    localStorage.removeItem("ProfileName")
    localStorage.removeItem("ProfilePicture")
    localStorage.removeItem("ProfileMail")
    localStorage.removeItem("ProfileUserType")
    localStorage.removeItem("ProfileCallAgencia")
    localStorage.removeItem("ProfileUserArea")
    localStorage.removeItem("tokenglobal")
    /*Swal.fire({
        text: "Nos vemos luego!",
        icon: "success",
        buttonsStyling: !1,
        confirmButtonText: "OK",
        customClass: {
            confirmButton:"btn btn-primary"
        }
    })*/
}

function delete_ticket_no_used(tokenglobal){
    $.post('backend/delticketnouse.php',{
        id: tokenglobal
     }).done(function(data, status){
         console.log(data)
     })
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

function get_notifications(urlaction, usuarioaction){
    dnotifications = $("#datatable-notifications").DataTable({
        processing: true,
        destroy: true,
        paging: false,
        searching: false,
        responsive: true,
        pageLength: 5,
            scrollX: true,
            info: false,
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
            url: urlaction, 
            data: {
                usuario: usuarioaction
            },            
        },
        columnDefs: [
            {title: "Id Ticket", targets: 0},
            {title: "Creado por", targets: 1},
            {title: "Estado", targets: 2},
            {title: "Asesor actual", targets: 3}
        ],
        order: [[ 0, "desc" ]],
        initComplete: function(settings,json){
            if (json == null || json == ""){
                alert("Error")
            }
        }
    })
}
