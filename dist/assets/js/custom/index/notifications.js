var dnotifications

window.onload = function(){
    //var pusertype1 = localStorage.getItem("ProfileUserType")
    //var pname1 = localStorage.getItem("ProfileName")
    if (tipoUsuario == "ingresador"){
        get_notifications("backend/getnotifications.php?action=ingresador", vProfileName)
    }
    else {
        get_notifications("backend/getnotifications.php?action=noingresador", vProfileName)
    }
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