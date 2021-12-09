document.querySelector('#btn_enviar').addEventListener('click', salvarInformacion);
document.querySelector('#btn_reservar').addEventListener('click', agregarReservacion);
imprimirPersona();

function salvarInformacion(){
    var sID = document.querySelector('#txt_id').value,
    sNombre = document.querySelector('#txt_nombre').value,
    sCorreo = document.querySelector('#txt_correo').value,
    sTelefono = document.querySelector('#txt_telefono').value,
    sDescripcion = document.querySelector('#txt_descripcion').value;

    agregarPersona(sID,sNombre,sCorreo,sTelefono,sDescripcion);
    imprimirPersona();
} 


function imprimirPersona(){
    var list  = obtenerPersona(),
    tbody = document.querySelector('#tabla__contactanos tbody');

    tbody.innerHTML = '';

    for(var i =0; i<list.length; i++){
        var fila = tbody.insertRow(i),
        columnaID = fila.insertCell(0),
        columnaNombre = fila.insertCell(1),
        columnaCorreo = fila.insertCell(2),
        columnaTelefono = fila.insertCell(3),
        columnaDescripcion = fila.insertCell(4);
        columnaSeleccionar = fila.insertCell(5);
        
        columnaID.innerHTML = list[i].id;
        columnaNombre.innerHTML = list[i].nombre;
        columnaCorreo.innerHTML = list[i].correo;
        columnaTelefono.innerHTML = list[i].telefono;
        columnaDescripcion.innerHTML = list[i].descripcion;
        columnaSeleccionar.innerHTML = list[i].seleccionar;

        var inputSeleccionar = document.createElement('input');
        inputSeleccionar.type = 'radio';
        inputSeleccionar.value = list[i].id;
        inputSeleccionar.name = "btn_seleccionar"
        columnaSeleccionar.appendChild(inputSeleccionar);
      
        tbody.appendChild(fila);
    }
}

function agregarRes(){
    var sTipo = document.querySelector('#txt_tipo_reservacion').value,
    sCantidad = document.querySelector('#txt_cantidad').value,
    sFecha = document.querySelector('#txt_fecha').value,
    sHora = document.querySelector('#txt_hota').value,
    sPersonaID = document.querySelector('#tabla_contactanos tbody input[type=radio]:checked').value;
    sPersonaNom = document.querySelector('#tabla_contactanos tbody input[type=radio]:checked').value;

    var objetoPersonasID = buscarPersona(sPersonaID);
    var objetoPersonasNom = buscarPersona(sPersonaNom);
    
    agregarReservacion(sPersonaID,sPersonaNom,sTipo,sCantidad,sFecha,sHora);

}