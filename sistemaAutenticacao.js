export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if (SistemaAutenticacao.ehAutenticado(autenticavel)) {
            return autenticavel.autenticar(senha);
        }

        return false;
    }

    static ehAutenticado(autenticavel){
        return 'autenticar' in autenticavel && autenticavel.autenticar instanceof Function;
    }
}