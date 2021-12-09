$(document).ready(function () {
    $('.forgot-pass').click(function(event) {
      $(".pr-wrap").toggleClass("show-pass-reset");
    }); 
    
    $('.pass-reset-submit').click(function(event) {
      $(".pr-wrap").removeClass("show-pass-reset");
    }); 
});

$(document).ready(function () {
  $("#login").validate({
     lang: 'es',

     rules: {  
      usuario: {
        required: true
      },
      contraseña: {
        required: true
      },
      
      },

     messages: {
        contraseña: 'Este campo es requerido',
        usuario: 'Este campo es requerido'
     }

  });
});



function guardarlocalstorage() {

  const letras = new RegExp ('^[A-Z]+$', 'i');
  usu = document.getElementById("usuario").value;
  contra = document.getElementById("contraseña").value;

  if (usu != "" && contra != "") {
  let login = {
     usuario: usu,
     contraseña: contra,
     
  }
  localStorage.setItem("login", JSON.stringify(login));
  window.open('./index.html', 'Inicio');
} else {
  $('#modal').modal('show');

  //window.alert("Llene todos los campos");
}
}

function obtenerlocalstorage() {
  if(localStorage.getItem("login")){

     let login = JSON.parse(localStorage.getItem("login"));
     //window.alert(JSON.stringify(login));
     
     
     console.log(login);

  }else{
  window.alert("No hay entradas en el local storage");

  
}

}

//document.getElementById('productCode').value = '';
//document.getElementById('product').value = '';