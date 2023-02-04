export default class Funcionario {
    // class sempre tem um constructor, é a sintaxe dele meu anjo
// atributos
    cpf;
    nomeCompleto;
    salario;

    constructor(cpf, nomeCompleto, salario){
        this.cpf = cpf;
        this.nomeCompleto = nomeCompleto;
        this.salario = salario;
    }

    // método recebendo 'percentual' como parâmetro
    promover(percentual) {
        const multiplicador = percentual / 100 +1; 
        const novoSalario = this.salario * multiplicador;
        this.salario = novoSalario;
        // this.salario *= percentual / 100 + 1
    }
};