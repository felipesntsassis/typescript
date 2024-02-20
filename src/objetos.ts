// Objetos
// objeto - sem previsibilidade
let produto: object = {
    id: 1,
    nome: 'Cerveja Petra (lata) 350ml'
};

// objeto - tipado
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: 'Tênis Nike',
    preco: 89.99,
    unidades: 5
};
