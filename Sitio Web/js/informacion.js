document.querySelector('#btn_enviar').addEventListener('click', salvarInformacion);
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
        columnaSeleccionar.appendChild(inputSeleccionar);
      
        tbody.appendChild(fila);
    }
}