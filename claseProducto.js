class producto{
    constructor (nombre, precio){
        this.nombre = nombre,
        this.precio = precio;
    }

    mostrar(precio){
        console.log("Precio actual: " + (precio = this.precio))
    }
}

const miCuenta = new cuentaBancaria("Lata de tomate", 46);