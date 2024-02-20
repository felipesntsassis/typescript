type Hero = {
    nome: string;
    vulgo: string;
    telefone: string;
}

function ligarPara(heroi: Hero) {
    return `Ligando para ${heroi.telefone}`;
}

ligarPara({
    nome: 'Steve Rogers',
    vulgo: 'Capitão América',
    telefone: ''
});