// criei uma classe chamada Animal com 3 atributos, tá, nome, idade e som. essa classe tem constructor (nome, idade, som). pois bem. depois, eu to criando subclasses Cachorro e Gato que tão recebendo o atributo som da superclasse que no caso delas vai ser latido e miado respectivamente


export default class Animal {
    nome;
    idade;
    som;

    constructor(nome, idade, som) {
        this.nome = nome;
        this.idade = idade;
        this.som = som;
    }
}

export class Cachorro extends Animal {
    constructor(nome, idade) {
        super(nome, idade, 'latido')
    }
}

export class Gato extends Animal {
    constructor(nome, idade) {
        super (nome, idade, 'miado')
    }
}
