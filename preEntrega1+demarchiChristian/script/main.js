

function tienda() {
    let consultaCompra = prompt("Desea realizar una compra?");
    if(consultaCompra ==`si`){
        seleccion1 = parseInt(prompt(`Contamos con los siguientes productos: \n` + producto1.detalle+`\n`+  producto2.detalle +`\n`+ producto3.detalle +`\n`+ producto4.detalle +`\n`+`0_Si desea salir\n`+ `Por favor seleccione uno: `));
    } else if(consultaCompra == `no`){
        alert("Muchas gracias por su visita");
    }

    
    while(seleccion1 !=``){
        switch(seleccion1){
            case 1: condicionesCase(producto1);
                break;
            case 2: condicionesCase(producto2);
                break;
            case 3: condicionesCase(producto3);
                break;
            case 4: condicionesCase(producto4);
                break;
            case 0: alert(`Muchas gracias por su visita`);
                break;
        }
    }


}  

function Producto(id,nombre,precio,stock,iva){
    this.id = parseInt(id);
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.stock = parseInt(stock);
    this.iva = parseFloat(iva);
    this.detalle = this.id +`__ `+ this.nombre +` con un valor de$`+ this.precio +` contamos con un stock de: ` + this.stock;
}
const producto1 = new Producto(`1`,`GTX 1660ti`,150000,50,1.21);
const producto2 = new Producto(`2`,`RTX 3050`,180000,30,1.21);
const producto3 = new Producto(`3`,`RTX 3060`,200000,20,1.21); 
const producto4 = new Producto(`4`,`RTX 3070`,300000,10,1.21);


const multiplicacion = (numero1 , numero2) => numero1 * numero2;

const resta = (numero1 , numero2) => numero1 - numero2;

const condicionesCase=(product) => {
    seleccion2 = parseInt(prompt("Usted selecciono: " + product.detalle + `\n Que cantidad desea comprar`));
    if((seleccion2>=1)&&(seleccion2<product.stock)){
        resultadoX = alert(`El monto total es $` + parseFloat(multiplicacion(seleccion2,product.precio)));
        console.log("la cantidad de stock acual es de:" + resta(product.stock,seleccion2));
    }else{alert("La cantidad ingresada es mayor a nuestro stock, por favor seleccione una cantidad menor.");
        
    }
    alert("muchas gracias por su compra");

}

