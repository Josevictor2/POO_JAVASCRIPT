import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroConta = 0;

constructor(cliente,agencia){
    super(0, cliente, agencia);
    ContaCorrente.numeroConta += 1;
}

    sacar(valor){
        let taxa = 1.1;
        return this._sacar(taxa, valor);
    }
    
}

