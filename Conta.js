export class Conta{

constructor(saldo,agencia, cliente){
    this.agencia = agencia;
    this._cliente = cliente;
    this._saldo = saldo;
}

    set cliente(valor){
        if (valor instanceof Cliente) {
            this._cliente = valor;
        }
    }
    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }
    sacar(valor){

    }

    _sacar(taxa, valor){
        const valorSacado = taxa*valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor){
        if (valor > 0) {
            this._saldo += valor;
        }
        return this._saldo;
    }

    transferir(valor, conta){
        const valorSacado = this._sacar(valor);
        conta._depositar(valorSacado);
    }
}
