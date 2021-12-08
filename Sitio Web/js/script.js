var selectedRow = null;
var opcion;
function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData);
    }
    resetForm();
}

//Funcion para guardar la data --Aguirre
function readFormData() {
    var formData = {};
    formData["nombree"] = document.getElementById("nombree").value;
    formData["contrasena"] = document.getElementById("contrasena").value;
    formData["nombreu"] = document.getElementById("nombreu").value;
    formData["telefono"] = document.getElementById("telefono").value;
    formData["direccion"] = document.getElementById("direccion").value;
    formData["puesto"] = document.getElementById("puesto").value;
    formData["correo"] = document.getElementById("correo").value;
    return formData;
}

//Fncion Para insertar la data en las columnas
function insertNewRecord(data) {
    if (data.nombree != "" && data.contrasena != "" && data.nombreu != "" && data.telefono != "" && data.direccion != "" && data.puesto != "" && data.correo != "") {
      
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nombree;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.contrasena;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.nombreu;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.telefono;
    var cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.direccion;
    var cell4 = newRow.insertCell(5);
    cell4.innerHTML = data.puesto;
    var cell4 = newRow.insertCell(6);
    cell4.innerHTML = data.correo;
    var cell5 = newRow.insertCell(7);
    cell5.innerHTML = `<button style='width: 50px;'  class='btn btn-success' onClick='onEdit(this)'><i class='fas fa-marker'></i></button> <button style='width: 50px;' data-bs-toggle='modal' onClick='pasar(this)' data-bs-target='#modal1' class='btn btn-danger'><i class='fas fa-trash'></i></button>`


    guardarlocalstorage();
 } else {
    $('#modal').modal('show');


 }

    
}

function guardarlocalstorage() {

    nombree = document.getElementById("nombree").value;
    contrasena= document.getElementById("contrasena").value;
    nombreu = document.getElementById("nombreu").value;
    telefono = document.getElementById("telefono").value;
    direccion = document.getElementById("direccion").value;
    puesto = document.getElementById("puesto").value;
    correo = document.getElementById("correo").value;

 
    if (nombree != "" && contrasena != "" && nombreu != "" && telefono != "" && direccion != "" && puesto != "" && correo != "") {
       let usuario = {
        nombree: nombree,
        contrasena: contrasena,
        nombreu: nombreu,
        telefono: telefono,
        direccion: direccion,
        puesto: puesto,
        correo: correo
       }
       localStorage.setItem("usuario", JSON.stringify(usuario));
    } else {
       window.alert("Llene todos los campos");
    }
 }
 
//Funcion para editar la data en la tabla
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nombree").value = selectedRow.cells[0].innerHTML;
    document.getElementById("contrasena").value = selectedRow.cells[1].innerHTML;
    document.getElementById("nombreu").value = selectedRow.cells[2].innerHTML;
    document.getElementById("telefono").value = selectedRow.cells[3].innerHTML;
    document.getElementById("direccion").value = selectedRow.cells[4].innerHTML;
    document.getElementById("puesto").value = selectedRow.cells[5].innerHTML;
    document.getElementById("correo").value = selectedRow.cells[6].innerHTML;
}

//Funcion actualizar
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nombree;
    selectedRow.cells[1].innerHTML = formData.contrasena;
    selectedRow.cells[2].innerHTML = formData.nombreu;
    selectedRow.cells[3].innerHTML = formData.telefono;
    selectedRow.cells[4].innerHTML = formData.direccion;
    selectedRow.cells[5].innerHTML = formData.puesto;
    selectedRow.cells[6].innerHTML = formData.correo;
}

//Funcion para eliminar la tabla
function onDelete() {
    
    td=opcion;
    row = td.parentElement.parentElement;
    document.getElementById('storeList').deleteRow(row.rowIndex);
    
    resetForm();
}

function pasar(td)
{   
    opcion= td;
}

//Funcion para limpiar
function resetForm() {
    document.getElementById('productCode').value = '';
    document.getElementById('product').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('perPrice').value = '';
}