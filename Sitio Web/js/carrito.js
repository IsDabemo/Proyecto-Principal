const clickbtn = document.querySelectorAll('button');
const tabla = document.querySelector('.tbody');

var modalWrap = null;

const showModal = () => {
    let total = 0;
    let cantidad = 0;

    carrito.forEach(plato => {
        const platoPrecio = Number(plato.precio.replace("L.",''));
        total = total + platoPrecio * plato.cantidad;
    })

    carrito.forEach(plato => {
        const cantPlato = Number(document.querySelector('.add').value);
        cantidad = cantidad + cantPlato;
    })

    if(modalWrap !== null){
        modalWrap.remove();
    }

    modalWrap = document.createElement('div');

    if (total == 0) {
        modalWrap.innerHTML = `
            <div class="modal" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="exampleModalLabel">Error</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Debe añadir un platillo para realizar su compra.
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        totalCantidad();
        modalWrap.innerHTML = `
            <div class="modal" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="exampleModalToggleLabel">Confirmación de compra</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            La cantidad de platilos es: <strong>${cantidad}</strong>
                            <br>
                            El total de su compra es de: <strong>L.${total}</strong>
                            <br>
                            <center>
                            <br>
                            <strong>¿Desea confirmar la compra?</strong>
                            </center>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                            <button class="btn btn-success" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" onclick="limpiaTabla()">Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    document.body.append(modalWrap);

    var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
    modal.show();
}

function limpiaTabla(){
    const tr = document.querySelector('.tbody');
    for (let i = 0; i <= carrito.length; i++) {
        carrito.splice(i);
    }
    tr.remove();
    totalCarrito();
}

let carrito = [];

clickbtn.forEach(btn => {
    btn.addEventListener('click', agregaCarrito);
})

function agregaCarrito (e) {
    const button = e.target;
    const comida = button.closest('.columnaProducto');
    const ctitulo = comida.querySelector('.titulo').textContent;
    const cprecio = comida.querySelector('.precio').textContent;
    const cimagen = comida.querySelector('img').src;

    const combo = {
        titulo : ctitulo,
        precio : cprecio,
        imagen : cimagen,
        cantidad : 1
    };
    agregaComboCar(combo);
}

function agregaComboCar(combo){

    for (let i = 0; i < carrito.length; i++) {
        if(carrito[i].titulo.trim() === combo.titulo.trim()){
            carrito[i].cantidad ++;
            addLocalStorage();
            return null;
        }
    }
    carrito.push(combo);
    addLocalStorage();
}

function cargarCarrito(){
    tabla.innerHTML = '';
    carrito.map(plato => {
        const tr = document.createElement('tr');
        tr.classList.add('itemCarrito');
        const cont = `
        <tr>
            <th scope="row">1</th>
            <td class="table_productos">
                <img src=${plato.imagen} alt="">
                <h6 class="title">${plato.titulo}</h6>
            </td>
            <td class="table_precio">${plato.precio}</td>
            <td class="table_cantidad">
                <input class="add" type="number" min="1" value=${plato.cantidad}>
                <button class="delete btn btn-danger">X</button>
            </td>
        </tr>
        `
        tr.innerHTML = cont;
        tabla.append(tr);
        tr.querySelector('.delete').addEventListener('click', eliminarPlato);
        tr.querySelector('.add').addEventListener('change', añadirPlato);
        tr.querySelector('.add').addEventListener('change', totalCantidad);

    })
    totalCarrito();
}

function totalCarrito() {
    let total = 0;
    const carTotal = document.querySelector('.itemCartTotal');
    carrito.forEach(plato => {
        const platoPrecio = Number(plato.precio.replace("L.",''));
        total = total + platoPrecio * plato.cantidad;
    })
    carTotal.innerHTML =`Total: L. ${total}`;

    totalCantidad();
    addLocalStorage();
}

function totalCantidad() {
    let cantidad = 0;
    const carCantidad = document.querySelector('.itemCantPlatos');
    carrito.forEach(plato => {
        const cantPlato = Number(plato.cantidad);
        cantidad = cantidad + cantPlato;
        console.log(cantPlato);
    })
    carCantidad.innerHTML =`Cantidad: ${cantidad}`;
}

function añadirPlato(e){
    const addPlato = e.target;
    const tr = addPlato.closest('.itemCarrito');
    const titulo = tr.querySelector('.title').textContent;

    carrito.forEach(plato => {
        if(plato.titulo.trim() === titulo.trim()){
            addPlato.value < 1 ? (addPlato.value = 1) : addPlato.value;
            plato.cantidad = addPlato.value;
            totalCantidad();
            totalCarrito();
            console.log(carrito);
        }
    })
}

function eliminarPlato(e){
    const delPlato = e.target;
    const tr = delPlato.closest('.itemCarrito');
    const titulo = tr.querySelector('.title').textContent;

    for (let i = 0; i < carrito.length; i++) {
        if(carrito[i].titulo.trim() === titulo.trim()){
            carrito.splice(i,1);
        }    
    }

    tr.remove();
    totalCarrito();
    totalCantidad();
}

function addLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

window.onload = function () {
    const storage = JSON.parse(localStorage.getItem('carrito'));

    if(storage){
        carrito = storage;
        cargarCarrito();
    }
}