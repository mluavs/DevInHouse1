//Os juros de uma aplicação podem ser calculados de forma simples ou composta. Para o cálculo, geralmente se usa a letra C ou M para representar o montante final da aplicação, a letra i para representar a taxa aplicada (ao mês ou anual) e a letra t indicando o tempo (em meses ou anos) da aplicação.

export default class Juros {
    capitalInicial;
    taxaAplicada;
    tempo;

    constructor (capitalInicial, taxaAplicada, tempo) {
        this.capitalInicial = capitalInicial;
        this.taxaAplicada = taxaAplicada;
        this.tempo = tempo;
    }

    calcularJurosSimples() {
        const C = this.capitalInicial; // isso aqui veio do enunciado
        const i = this.taxaAplicada; // isso aqui veio do enunciado
        const t = this.tempo; // isso aqui veio do enunciado
        const J = C * i * t; // isso aqui veio do enunciado
        return Math.round(C + J);
    }

    calcularJurosCompostos() {
        const C = this.capitalInicial; // isso aqui veio do enunciado
        const i = this.taxaAplicada; // isso aqui veio do enunciado
        const t = this.tempo; // isso aqui veio do enunciado
        const M = C * (1 + i) ** t; // isso aqui veio do enunciado
        return Math.round(M);
    }
}