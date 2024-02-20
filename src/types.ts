type heroi = {
    nome: string;
    vulgo: string;
}

// Isso printa um objeto
function printaObjeto(pessoa: heroi) {
    console.log(pessoa);
}

printaObjeto({
    nome: 'Bruce Wayne',
    vulgo: 'Batman'
});