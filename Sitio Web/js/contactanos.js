var contactanosLista = [];

function agregarPersona(pid,pnombre,pcorreo,ptelefono,pdescripcion,pseleccionar){
    var nuevaPersona = {
        id: pid,
        nombre: pnombre,
        correo: pcorreo,
        telefono: ptelefono,
        descripcion: pdescripcion,
        seleccionar: pseleccionar
    };
    console.log(nuevaPersona);
    contactanosLista.push(nuevaPersona);
    localStoragePersona(contactanosLista);
}

function obtenerPersona(){
    var storedList = localStorage.getItem('localPersona');
    if(storedList == null){
        contactanosLista = [];
    }
    else{
        contactanosLista = JSON.parse(storedList);
    }
    return contactanosLista;
}

function localStoragePersona(plist){
    localStorage.setItem('localPersona', JSON.stringify(plist));
}
