class cuentaBancaria{
    constructor (titular, saldo){
        this.titular = titular,
        this.saldo = saldo;
    }

    depositar(monto){
        monto = this.saldo + monto;
    }

    retirar(monto){
        monto = this.saldo - monto;
    }

    transferir(monto){
        monto = this.saldo - monto;
    }
}

const miCuenta = new cuentaBancaria("Nicolas", 10000);
//miCuenta.depositar(1000);
console.log("Saldo actual: " + miCuenta.depositar(1000).monto)