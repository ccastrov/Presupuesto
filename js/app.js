
//Cabecero

const cargarCabecero = () => {
    const egresos = {
        Renta: 900,
        Ropa: 400
    };

    const ingresos = {
        Quincena: 9000,
        Venta: 400
    };
    var presupuesto = totalIngresos(ingresos) - totalEgresos(egresos);
    var porcentajeEgreso = totalEgresos(egresos) / totalIngresos(ingresos);
   
   
    console.log(formatoMoneda((presupuesto)));
    console.log(formatoPorcentaje(porcentajeEgreso));
    console.log(formatoMoneda(totalIngresos(ingresos)));
    console.log(formatoMoneda(totalEgresos(egresos)));

}

const totalIngresos = (ingresos) => {

    let totalIngreso = 0;
    for (const ingreso in ingresos) {

        totalIngreso += ingresos[ingreso];
    }

    return totalIngreso;

}

const totalEgresos = (egresos) => {
    let totalEgreso = 0;
   
    for(const egreso in egresos){
        totalEgreso+= egresos[egreso]
    }
   
    return totalEgreso;
}

const formatoMoneda = (valor) =>{
  
  const formato = valor.toLocaleString('es-Mx',{
    style: 'currency',
    currency: 'MXN'
    });

    return formato;
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', {style: 'percent', minimumFractionDigits: 2});
  };

/*const formatoPorcentaje = (valor) =>{
const porcentaje = (valor*100).toFixed(2);
return porcentaje.toLocaleString('es-Mx',{style: 'percent', currency: 'MXN'})
//return porcentaje;

}*/






