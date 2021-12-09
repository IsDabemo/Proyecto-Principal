var contactanosLista = [];

function agregarPersona(pid,pnombre,pcorreo,ptelefono,pdescripcion,pseleccionar){
    var nuevaPersona = {
        id: pid,
        nombre: pnombre,
        correo: pcorreo,
        telefono: ptelefono,
        descripcion: pdescripcion,
        seleccionar: pseleccionar,
        reservacionList: [] 
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

function buscarPersona(pid){
    var objetoPer;
    for(var i = 0; i < contactanosLista.length; i++){
        if(contactanosLista[i].id == pid){
            objetoPer = contactanosLista[i];
        }
    }
    return objetoPer;
}

function agregarReservacion(pobjeto,ptipo,pcant,pfecha,phora){
    var objetoRes = {
        tipo: ptipo,
        cant: pcant,
        fecha: pfecha,
        hora: phora
    }

    var index = contactanosLista.indexOf(pobjeto);
    pobjeto.reservacionList.push(objetoRes);

    contactanosLista[index] = pobjeto;
    localStoragePersona(contactanosLista);
}


