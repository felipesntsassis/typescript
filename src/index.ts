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

// tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = 'Felipe';
let idade: number = 38;
let altura: number = 1.73;

// null
// undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void
let retorno:void;
let retornoView: any = 'Felipe';

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

// arrays
let dados: string[] = ['Felipe', 'Isabelle', 'Célia'];
let dados2: Array<string> = ['Felipe', 'Isabelle', 'Célia'];
let infos: (string | number)[] = ['Felipe', 38, 'Assis', 1985];

// Tuplas
let boleto:[string, number, number] = ['água conta', 199.90, 3214567];

// Métodos dos Arrays
dados.pop();

// Datas
let aniversario: Date = new Date('1985-03-06 11:30');
console.log(aniversario.toString());

// Funções
function addNumber(x: number, y: number): number {
    return x + y;
}

function addToHello(name: string): string {
    return `Hello ${name}!`;
}

function callToPhone(phone: number | string): number | string {
    return phone;
}

async function getDatabase(id: number): Promise<string> {
    return "Felipe";
}

let soma: number = addNumber(4, 7);
console.log(soma);
console.log(addToHello('Felipe'));
console.log(callToPhone('14996594635'));
console.log(callToPhone(14997637591));

// interfaces (type x interface)
type Robot = {
    id: number | string;
    name: string;
};

interface Robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
};

const bot1: Robot = {
    id: '1',
    name: 'Megaman'
};

const bot2: Robot2 = {
    id: '1',
    name: 'Megaman',

    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }

};

class Pessoa implements Robot2 {

    id: string | number;
    name: string;

    constructor(id: number | string, name: string) {
        this.id = id;
        this.name = name;
    }

    sayHello(): string {
        return `Hello I'm ${this.name}!`;
    }

}

const p = new Pessoa(1, 'Gutsman');
console.log(p.sayHello());

/**
 * Data modifiers
 * public
 * private 
 * protected
 */
// classes
// Character: Superclass
class Character {
    protected name?: string;
    readonly strength: number;
    skill: number;

    constructor(name: string, strength: number, skill: number) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    attack():void {
        console.log(`Attack with ${this.strength} points`);
    } 
}

// Magician: subclass
class Magician extends Character {
    magicPoints: number;

    constructor(name: string, strength: number, skill: number, magicPoints: number) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character('Ryu', 10, 98);
const p2 = new Magician('Gandalf', 9, 30, 100);
p1.attack();

// Generics
function concatArray<T>(...items: T[]): T[] {
    return new Array().concat(... items);
}

const numArray = concatArray<number[]>([1, 2], [3]);
const strArray = concatArray<string[]>(['Felipe', 'Goku', 'Vegeta']);
console.log(numArray);
console.log(strArray);
