document.querySelector('#btn_enviar').addEventListener('click', salvarInformacion);
document.querySelector('#btn_reservar').addEventListener('click', agregarRes);
imprimirPersona();
imprimirReservacion();

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
        inputSeleccionar.name = "btn_seleccionar";
        columnaSeleccionar.appendChild(inputSeleccionar);
      
        tbody.appendChild(fila);
    }
}

function agregarRes(){
    var sTipo = document.querySelector('#txt_tipo_reservacion').value,
    sCantidad = document.querySelector('#txt_cantidad').value,
    sFecha = document.querySelector('#txt_fecha').value,
    sHora = document.querySelector('#txt_hora').value,
    sPersonaID = document.querySelector('#tabla__contactanos tbody input[type=radio]:checked').value;

    var objetoPersonasID = buscarPersona(sPersonaID);
    
    agregarReservacion(objetoPersonasID,sTipo,sCantidad,sFecha,sHora);
    imprimirReservacion();
}

function imprimirReservacion(){
    var list = obtenerPersona(),
        tbody = document.querySelector('#tabla__contactanos2 tbody');
    tbody.innerHTML = '';
    for(var i =0; i<list.length;i++){
        for(var j = 0; j<list[i].reservacionList.length; j++){
            var row = tbody.insertRow(j);
            personaCell = row.insertCell(0);
            tipoCell = row.insertCell(1); 
            cantidadCell = row.insertCell(2);
            fechaCell = row.insertCell(3);
            horaCell = row.insertCell(4);
            columnaSeleccionar = row.insertCell(5);

            personaCell.innerHTML = list[i].nombre;
            tipoCell.innerHTML = list[i].reservacionList[j].tipo;
            cantidadCell.innerHTML = list[i].reservacionList[j].cant;
            fechaCell.innerHTML = list[i].reservacionList[j].fecha;
            horaCell.innerHTML = list[i].reservacionList[j].hora;

            var inputSeleccionar = document.createElement('input');
                inputSeleccionar.type = 'checkbox';
                inputSeleccionar.value = list[j].id;
                inputSeleccionar.name = "btn_seleccionar"
                columnaSeleccionar.appendChild(inputSeleccionar);
        }
    }

}