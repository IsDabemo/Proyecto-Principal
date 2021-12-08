const form = document.getElementById("form");


let limpiar = () => {
    form.reset();
}

let guardar = () => {

    var nombre, correo, telefono, direccion, expresion ;
    nombre = document.getElementById("txtNombre").value;
    correo = document.getElementById("txtCorreo").value;
    telefono = document.getElementById("txtTelefono").value;
    direccion = document.getElementById("txtDireccion").value;
    
    

    if(nombre.length == 0 || correo.length == 0 || telefono.length == 0 || direccion.length == 0){
       $('#campovacio').modal('show');
        return true;
    }else if(nombre.length > 30){
      $('#nombreLength').modal('show');
      return true;
    }else if(telefono.length < 8 || telefono.length>8){
        $('#telefonoLength').modal('show');
      return true;
    }else if(direccion.length > 50){
        $('#direccionLength').modal('show');
      return true;
    }else if(correo.test == isEmail){
        $('#correo').modal('show');
      return true;
    }
    else{
    let datos = localStorage.info==null?[]:JSON.parse(localStorage.info);

    
    let nombre = document.querySelector("#txtNombre").value;
    let correo = document.querySelector("#txtCorreo").value;
    let telefono = document.querySelector("#txtTelefono").value;
    let direccion = document.querySelector("#txtDireccion").value;
    

        datos.push({
        
            nombre : nombre,
            correo : correo,
            telefono : telefono,
            direccion : direccion,
            
        });

        localStorage.info = JSON.stringify(datos);

        listar();
    
        alert("Se guardo");
        form.reset();
        
    }
    
}


let listar = () => {
    let datos = localStorage.info==null?[]:JSON.parse(localStorage.info);
    let tabla = document.querySelector("#tblDatos");
    tabla.innerHTML = "";
    datos.forEach(element => {
        tabla.innerHTML += `
            <tr>
                <td>${element.nombre}</td>
                <td>${element.correo}</td>
                <td>${element.telefono}</td>
                <td>${element.direccion}</td>
                
                <td>
                    <button class="btn btn-primary" onclick="editar(${element.documento})">Editar</button>
                    <button class="btn btn-danger" onclick="eliminar(${element.documento})">Eliminar</button>
                </td>    
            </tr>
        `;
    });
}








let editar = (doc) => {

    let datos = localStorage.info==null?[]:JSON.parse(localStorage.info);

    let nombre = document.querySelector("#txtNombre");
    let correo = document.querySelector("#txtCorreo");
    let telefono = document.querySelector("#txtTelefono");
    let direccion = document.querySelector("#txtDireccion");
    let id = document.querySelector("#txtId");

    let btnGuardar = document.querySelector("#btnGuardar");
    let btnModificar = document.querySelector("#btnModificar");

    let resultado = datos.find(e => e.documento == doc);
    let resultadoIndex = datos.findIndex(e => e.documento == doc);

    if(resultado != undefined){

        btnGuardar.style.display = "none";
        btnModificar.style.display = "block";

        
        nombre.value = resultado.nombre;
        correo.value = resultado.correo;
        telefono.value = resultado.telefono;
        direccion.value = resultado.direccion;
       

        id.value = resultadoIndex;
       
    }else{
        alert("No lo encontro");
    }
}


let modificar = () => {
 
    let nombre = document.querySelector("#txtNombre").value;
    let correo = document.querySelector("#txtCorreo").value;
    let telefono = document.querySelector("#txtTelefono").value;
    let direccion = document.querySelector("#txtDireccion").value;
   
    let id = document.querySelector("#txtId").value;

  
    if(nombre.length == 0 || correo.length == 0 || telefono.length == 0 || direccion.length == 0){
        $('#campovacio').modal('show');
         return true;
     }else if(nombre.length > 30){
       $('#nombreLength').modal('show');
       return true;
     }else if(telefono.length < 8 || telefono.length>8){
         $('#telefonoLength').modal('show');
       return true;
     }else if(direccion.length > 50){
         $('#direccionLength').modal('show');
       return true;
     } else{
    let datos = localStorage.info==null?[]:JSON.parse(localStorage.info);

    let nombre = document.querySelector("#txtNombre").value;
    let correo = document.querySelector("#txtCorreo").value;
    let telefono = document.querySelector("#txtTelefono").value;
    let direccion = document.querySelector("#txtDireccion").value;
    let id = document.querySelector("#txtId").value;

    let btnGuardar = document.querySelector("#btnGuardar");
    let btnModificar = document.querySelector("#btnModificar");

    
    datos[id].nombre = nombre;
    datos[id].correo = correo;
    datos[id].telefono = telefono;
    datos[id].direccion = direccion;
    

    btnGuardar.style.display = "block";
    btnModificar.style.display = "none";

    localStorage.info = JSON.stringify(datos);

    listar();

    alert("Se modifico");
    form.reset();

 }

}





let eliminar = (doc) => {

    let datos = localStorage.info==null?[]:JSON.parse(localStorage.info);

    let resultadoIndex = datos.findIndex(e => e.documento == doc);

    if(resultadoIndex != -1){

        datos.splice(resultadoIndex, 1);

        localStorage.info = JSON.stringify(datos);

        listar();
    }else{
        alert("No lo encontro");
    }
}