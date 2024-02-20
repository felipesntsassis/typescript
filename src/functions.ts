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