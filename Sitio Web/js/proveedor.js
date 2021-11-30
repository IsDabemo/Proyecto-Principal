let guardar = () => {

    
    var nombre, correo, telefono, direccion, expresion ;
    nombre = document.getElementById("txtNombre").value;
    correo = document.getElementById("txtCorreo").value;
    telefono = document.getElementById("txtTelefono").value;
    direccion = document.getElementById("txtDireccion").value;
    
    expresion = /\w+@\w+\.+[a-z]/; 
  
    if(nombre.length == 0 || correo.length == 0 || telefono.length == 0 || direccion.length == 0){
        alert("Todos los campos son obligatorios");
        return true;
    }else if(nombre.length > 30){
      alert("En el campo nombre solo se aceptan 30 caracteres como maximo");
      return true;
    }else if(correo.length > 30){
      alert("En el campo correo solo se aceptan 30 caracteres como maximo");
      return true;
    }else if(expresion.test(correo)){
      alert("El correo no es valido");
      return true;
    }
    else if(telefono.length < 8 || telefono.length > 11){
      alert("En el campo telefono se aceptan 8 digitos minimo y 11 maximo");
      return true;
    }else if(direccion.length > 50){
      alert("En el campo direccion solo se aceptan 50 caracteres como maximo");
      return true;
 } else{

        let datos = localStorage.info==null?[]:JSON.parse(localStorage.info);

    
    let nombre = document.querySelector("#txtNombre").value;
    let correo = document.querySelector("#txtCorreo").value;
    let telefono = document.querySelector("#txtTelefono").value;
    let direccion = document.querySelector("#txtDireccion").value;
    let estado = document.querySelector("#estado").value;

        datos.push({
        
            'nombre' : nombre,
            'correo' : correo,
            'telefono' : telefono,
            'direccion' : direccion,
            'estado' : estado
        });

        localStorage.info = JSON.stringify(datos);

        listar();
    
        alert("Se guardo");
        
        
    }

    
}

/*resetForm(); {
document.getElementById('form.form').reset();
}*/



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
                <td>${element.estado}</td>
                <td>
                    <button class="btn btn-primary" onclick="editar(${element.documento})">Editar</button>
                    <button class="btn btn-danger" onclick="eliminar(${element.documento})">Eliminar</button>
                </td>    
            </tr>
        `;
    });
}


let cmb = () => {
    let datos = localStorage.info==null?[]:JSON.parse(localStorage.info);
    let cmb = document.querySelector("#cmbDatos");
    cmb.innerHTML = "";
    datos.forEach(element => {
        cmb.innerHTML += `
            <select>
              

            </select>
        `;
    });
}















let editar = (doc) => {

    let datos = localStorage.info==null?[]:JSON.parse(localStorage.info);

    let nombre = document.querySelector("#txtNombre");
    let correo = document.querySelector("#txtCorreo");
    let telefono = document.querySelector("#txtTelefono");
    let direccion = document.querySelector("#txtDireccion");
    let estado = document.querySelector("#estado");
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
        estado.value = resultado.estado;

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
    let estado = document.querySelector("#estado").value;
    let id = document.querySelector("#txtId").value;

    expresion = /\w+@\w+\.+[a-z]/; 
  
    if(nombre.length == 0 || correo.length == 0 || telefono.length == 0 || direccion.length == 0){
        alert("Todos los campos son obligatorios");
        return true;
    }else if(nombre.length > 30){
      alert("En el campo nombre solo se aceptan 30 caracteres como maximo");
      return true;
    }else if(correo.length > 30){
      alert("En el campo correo solo se aceptan 30 caracteres como maximo");
      return true;
    }else if(expresion.test(correo)){
      alert("El correo no es valido");
      return true;
    }
    else if(telefono.length < 8 || telefono.length > 11){
      alert("En el campo telefono se aceptan 8 digitos minimo y 11 maximo");
      return true;
    }else if(direccion.length > 50){
      alert("En el campo direccion solo se aceptan 50 caracteres como maximo");
      return true;
 } else{
    let datos = localStorage.info==null?[]:JSON.parse(localStorage.info);

    let nombre = document.querySelector("#txtNombre").value;
    let correo = document.querySelector("#txtCorreo").value;
    let telefono = document.querySelector("#txtTelefono").value;
    let direccion = document.querySelector("#txtDireccion").value;
    let estado = document.querySelector("#estado").value;
    let id = document.querySelector("#txtId").value;

    let btnGuardar = document.querySelector("#btnGuardar");
    let btnModificar = document.querySelector("#btnModificar");

    
    datos[id].nombre = nombre;
    datos[id].correo = correo;
    datos[id].telefono = telefono;
    datos[id].direccion = direccion;
    datos[id].estado = estado;

    btnGuardar.style.display = "block";
    btnModificar.style.display = "none";

    localStorage.info = JSON.stringify(datos);

    listar();

    alert("Se modifico");

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