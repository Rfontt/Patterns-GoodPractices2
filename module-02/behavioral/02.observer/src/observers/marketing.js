export default class Marketing {
    // importante lembrar que o update é responsável por gerenciar seus erros/exeptions
    // não deve-se ter await no notify porque a responsabilidade do notify é só emitir eventos
    // só notificar todo mundo

    update({ id, userName }){
        console.log(`${id}: [marketing] will sebd an welcome email to [${userName}]`);
    }
}