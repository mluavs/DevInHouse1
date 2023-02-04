export default class CalculadoraDeArea {
    tipo;
    base;
    altura;

    constructor(tipo, base, altura){
        this.tipo = tipo;
        this.base = base;
        this.altura = altura;
    }

    // esse método vai calcular a partir do switch case, de acordo com o tipo, o switch está DENTRO desse método, se não estivesse dentro, não funcionaria. O que tá acontecendo aqui é que ele entra no switch, confere o tipo, faz a conta e retorna o resultado, tanto que no outro arquivo é isso que eu to fazendo, eu to obrigatoriamente passando o tipo. Se eu passar um tipo que não existe, o resultado é null

    calcular() {
        let resultado;

    
        // aqui tá rolando um switch case, vamo lá
        switch(this.tipo) {
            case 'triangulo':
                resultado = (this.base * this.altura) / 2;
                break

            case 'quadrado':
                resultado = this.base * this.altura;
                break;

                default:
                    resultado = 'algum dado nao bateu';
        };
    
        return resultado
    }
}