
//Cabecero

const ingresos = [
    new Ingreso('Bono', 50000),
    new Ingreso('quincena', 120000)
];


const egresos = [
    new Egreso('vacaciones', 5000),
    new Egreso('ropa', 800)
];

let cargarApp = () => {
    cargarCabecero()
    cargarIngresos()
   cargarEgresos()

}



const cargarCabecero = () => {



    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());



}

const totalIngresos = () => {

    let totalIngreso = 0;
    for (let ingreso of ingresos) {

        totalIngreso += ingreso.valor;
    }

    return totalIngreso;

}


const totalEgresos = () => {
    let totalEgreso = 0;

    for (let egreso of egresos) {
        totalEgreso += egreso.valor;
    }

    return totalEgreso;
}



function formatoMoneda(valor) {

    return valor.toLocaleString('es-Mx', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2
    });
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', { style: 'percent', minimumFractionDigits: 2 });
};

const cargarIngresos = () => {
    let ingresosHTML = '';
    for (let ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
    <div id="lista-ingresos">
    <div class="elemento limpiarEstilos">
      <div class= "elemento_descripcion">${ingreso.descripcion}</div>
       <div class= "derecha limpiarEstilos">
         <div class= "elemento_valor">${formatoMoneda(ingreso.valor)}</div>
         <div class= elemento_eliminar">
           <button onclick= eliminarIngreso(${ingreso.id}) class="elemento_eliminar--btn">
           <ion-icon name="close-circle-outline"></ion-icon></button>
      </div>
      </div>
    </div>

    `;
    return ingresoHTML;
}

const eliminarIngreso = (id) => {
    let indiceEliminar = ingresos.findIndex((ingreso) => ingreso.id === id);
    ingresos.splice(indiceEliminar, 1);
 
cargarCabecero();
cargarIngresos();

}


const cargarEgresos = () => {
    let egresosHTML = '';
    for (let egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso) => {
    let egresoHTML = `
    <div id="lista-egresos">
    <div class="elemento limpiarEstilos">
      <div class="elemento_descripcion">${egreso.descripcion}
      </div>
       <div class="derecha limpiarEstilos">
         <div class="elemento_valor">${formatoMoneda(egreso.valor)}
        </div>
         <div class=elemento_eliminar">
           <button onclick= eliminarEgreso(${egreso.id}) class="elemento_eliminar--btn">
           <ion-icon name="close-circle-outline"></ion-icon>
            </button>
      </div>
      </div>
    </div>

   `
    return egresoHTML;

}

const eliminarEgreso = (id) => {
        let indiceEliminar = egresos.findIndex((egreso) => egreso.id === id);
        egresos.splice(indiceEliminar, 1);
     
  cargarCabecero();
  cargarEgresos();

}



const agregarDato = () =>{
    let forma =  document.querySelector('#forma');
    let tipo = document.getElementById("tipo").value;
    descripcion = document.getElementById("descripcion").value;
    valor = parseInt(document.getElementById("valor").value);
    if(descripcion !==""&& valor!==""){
        if(tipo=="ingreso"){
            ingresos.push(new Ingreso(descripcion,valor));
        }else{
            egresos.push(new Egreso(descripcion,valor));
        }
    }

    cargarApp();

}




