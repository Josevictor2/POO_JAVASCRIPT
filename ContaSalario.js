import { Conta } from "./Conta";

export class ContaSalario extends Conta{
    constructor(cliente){
        super(0, this._cliente, 100);
    }

    sacar(valor){
        const taxa = 1.01;
        return this._sacar(taxa, valor);
    }
        

}