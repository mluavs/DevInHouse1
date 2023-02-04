// isso aqui deu pra entender bem, tava vindo do enunciado do exercicio
export default class Partida {
    siglaTimeA;
    golsTimeA;
    siglaTimeB;
    golsTimeB;

    constructor(siglaTimeA, golsTimeA, siglaTimeB, golsTimeB){
        this.siglaTimeA = siglaTimeA;
        this.golsTimeA = golsTimeA;
        this.siglaTimeB = siglaTimeB;
        this.golsTimeB = golsTimeB;
    }
}