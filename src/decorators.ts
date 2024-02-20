// Decorators
function ExibirNome(target: any) {
    console.log(target);
}

@ExibirNome
class Funcionario {}

@ExibirNome
class Gerente {}

function ApiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, { __version: version, __name: 'Felipe' });
    };
}

function minLength(length: number) {
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => '[play] ' + _value;
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`);
            } else {
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    }
}

@ApiVersion('1.10')
class Api {
    @minLength(3)
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const api = new Api('usuarios');
console.log(api.name);