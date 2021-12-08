const form = document.getElementById("form");
cargarSelect();

let limpiar = () => {
    form.reset();

    let btnGuardar = document.querySelector("#btnGuardar");
    let btnModificar = document.querySelector("#btnModificar");

    btnGuardar.style.display = "block";
    btnModificar.style.display = "none";
}

let guardar = () => {

    
    var nombrePro, categoria, proveedor, precio, stock, anio ;
    nombrePro = document.getElementById("txtNombre").value;
    categoria = document.getElementById("cmbCategoria").value;
    proveedor = document.getElementById("cmbProveedor").value;
    precio = document.getElementById("txtPrecio").value;
    stock = document.getElementById("txtStock").value;
    anio = document.getElementById("txtAnio").value;
   
    if(nombrePro.length == 0 ||  precio.length == 0 || stock.length == 0 || anio.length == 0){
        $('#campovacio').modal('show');
        return true;
    }else if(nombrePro.length > 30){
        $('#nombreLength').modal('show');
      return true;
    }
    else if(precio.value > 0 && precio.value <= 15){
        $('#precio').modal('show');
      return true;
    }else if(stock.value > 0){
        $('#stock').modal('show');
      return true;
    }
    else{
     let dato = localStorage.producto==null?[]:JSON.parse(localStorage.producto);

    
    let nombrePro = document.querySelector("#txtNombre").value;
    let categoria = document.querySelector("#cmbCategoria").value;
    let proveedor = document.querySelector("#cmbProveedor").value;
    let precio = document.querySelector("#txtPrecio").value;
    let stock = document.querySelector("#txtStock").value;
    let anio = document.querySelector("#txtAnio").value;
    

        dato.push({
        
            nombrePro : nombrePro,
            categoria : categoria,
            proveedor : proveedor,
            precio : precio,
            stock : stock,
            anio : anio,
            
        });

        
        localStorage.producto = JSON.stringify(dato);

        listar();
    
        alert("Se guardo");
        form.reset();
        
        
    }

    
}

let listar = () => {
    let dato = localStorage.producto==null?[]:JSON.parse(localStorage.producto);
    let tabla = document.querySelector("#tblDatos");
    tabla.innerHTML = "";
    dato.forEach(element => {
        tabla.innerHTML += `
            <tr>
                <td>${element.nombrePro}</td>
                <td>${element.categoria}</td>
                <td>${element.proveedor}</td>
                <td>${element.precio}</td>
                <td>${element.stock}</td>
                <td>${element.anio}</td>
                
                <td>
                    <button class="btn btn-primary" onclick="editar(${element.documento})">Editar</button>
                    <button class="btn btn-danger" onclick="eliminar(${element.documento})">Eliminar</button>
                </td>    
            </tr>
        `;
    });
}


function cargarSelect() {
    
    $('#cmbProveedor option').remove();
    const datos = JSON.parse(localStorage.getItem("info")); 
    for (var i in datos) 
    {
        var con = datos[i]; 

        
        $('#cmbProveedor').append('<option>' + con.nombre + '</option>');


    }
}





let editar = (doc) => {

    let dato = localStorage.producto==null?[]:JSON.parse(localStorage.producto);

    let nombrePro = document.querySelector("#txtNombre");
    let categoria = document.querySelector("#cmbCategoria");
    let proveedor = document.querySelector("#cmbProveedor");
    let precio = document.querySelector("#txtPrecio");
    let stock = document.querySelector("#txtStock");
    let anio = document.querySelector("#txtAnio");
    let id = document.querySelector("#txtId");

    let btnGuardar = document.querySelector("#btnGuardar");
    let btnModificar = document.querySelector("#btnModificar");

    let resultado = dato.find(e => e.documento == doc);
    let resultadoIndex = dato.findIndex(e => e.documento == doc);

    if(resultado != undefined){

        btnGuardar.style.display = "none";
        btnModificar.style.display = "block";

        
        nombrePro.value = resultado.nombrePro;
        categoria.value = resultado.categoria;
        proveedor.value = resultado.proveedor;
        precio.value = resultado.precio;
        stock.value = resultado.stock;
        anio.value = resultado.anio;
       

        id.value = resultadoIndex;
    }else{
        alert("No lo encontro");
    }
}


let modificar = () => {
 
    let nombrePro = document.querySelector("#txtNombre").value;
    let categoria = document.querySelector("#cmbCategoria").value;
    let proveedor = document.querySelector("#cmbProveedor").value;
    let precio = document.querySelector("#txtPrecio").value;
    let stock = document.querySelector("#txtStock").value;
    let anio = document.querySelector("#txtAnio").value;
   
    let id = document.querySelector("#txtId").value;
 
  
    if(nombrePro.length == 0 || categoria.length == 0 || proveedor.length == 0 || precio.length == 0 || stock.length == 0 || anio.length == 0){
        alert("Todos los campos son obligatorios");
        return true;
    }else if(nombrePro.length > 30){
      alert("En el campo nombre solo se aceptan 30 caracteres como maximo");
      return true;
    }
    else if(precio.length > 15){
      alert("En el campo precio solo se aceptan 15 digitos como maximo");
      return true;
 }else if(stock.length < 0){
    alert("El stock debe ser mayor a 0");
    return true;
}
  else{
    let dato = localStorage.producto==null?[]:JSON.parse(localStorage.info);

    let nombrePro = document.querySelector("#txtNombre").value;
    let categoria = document.querySelector("#cmbCategoria").value;
    let proveedor = document.querySelector("#cmbProveedor").value;
    let precio = document.querySelector("#txtPrecio").value;
    let stock = document.querySelector("#txtStock").value;
    let anio = document.querySelector("#txtAnio").value;

    let id = document.querySelector("#txtId").value;

    let btnGuardar = document.querySelector("#btnGuardar");
    let btnModificar = document.querySelector("#btnModificar");

    
    dato[id].nombrePro = nombrePro;
    dato[id].categoria = categoria;
    dato[id].proveedor = proveedor;
    dato[id].precio = precio;
    dato[id].stock = stock;
    dato[id].anio = anio;
    

    btnGuardar.style.display = "block";
    btnModificar.style.display = "none";

    localStorage.producto = JSON.stringify(dato);

    listar();

    alert("Se modifico");
    form.reset();

 }

}


let eliminar = (doc) => {

    let dato = localStorage.producto==null?[]:JSON.parse(localStorage.producto);

    let resultadoIndex = dato.findIndex(e => e.documento == doc);

    if(resultadoIndex != -1){

        dato.splice(resultadoIndex, 1);

        localStorage.producto = JSON.stringify(dato);

        listar();
    }else{
        alert("No lo encontro");
    }
}