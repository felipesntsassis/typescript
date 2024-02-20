"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function printaObjeto(pessoa) {
    console.log(pessoa);
}
printaObjeto({
    nome: 'Bruce Wayne',
    vulgo: 'Batman'
});
let ligado = false;
let nome = 'Felipe';
let idade = 38;
let altura = 1.73;
let nulo = null;
let indefinido = undefined;
let retorno;
let retornoView = 'Felipe';
let produto = {
    id: 1,
    nome: 'Cerveja Petra (lata) 350ml'
};
let meuProduto = {
    nome: 'Tênis Nike',
    preco: 89.99,
    unidades: 5
};
let dados = ['Felipe', 'Isabelle', 'Célia'];
let dados2 = ['Felipe', 'Isabelle', 'Célia'];
let infos = ['Felipe', 38, 'Assis', 1985];
let boleto = ['água conta', 199.90, 3214567];
dados.pop();
let aniversario = new Date('1985-03-06 11:30');
console.log(aniversario.toString());
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `Hello ${name}!`;
}
function callToPhone(phone) {
    return phone;
}
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Felipe";
    });
}
let soma = addNumber(4, 7);
console.log(soma);
console.log(addToHello('Felipe'));
console.log(callToPhone('14996594635'));
console.log(callToPhone(14997637591));
;
const bot1 = {
    id: '1',
    name: 'Megaman'
};
const bot2 = {
    id: '1',
    name: 'Megaman',
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello I'm ${this.name}!`;
    }
}
const p = new Pessoa(1, 'Gutsman');
console.log(p.sayHello());
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
}
class Magician extends Character {
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character('Ryu', 10, 98);
const p2 = new Magician('Gandalf', 9, 30, 100);
p1.attack();
function concatArray(...items) {
    return new Array().concat(...items);
}
const numArray = concatArray([1, 2], [3]);
const strArray = concatArray(['Felipe', 'Goku', 'Vegeta']);
console.log(numArray);
console.log(strArray);
