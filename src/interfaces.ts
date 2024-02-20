// Interfaces (type x interface)
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