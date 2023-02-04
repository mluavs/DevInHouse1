export default class Personagem {
    nome;
    percentualVida = 100;


    //OKK CONSTRUCTOR NÃO É OBRIGATÓRIO NA CLASSE E SE EU DEIXAR ELE AQUI ME RETORNA NaN NO CONSOLE
    // constructor(nome, percentualVida){
    //     this.nome = nome;
    //     this.percentualVida = percentualVida;
    // }

    sofreuDano(percentualDano) {
        const NovaVida = this.percentualVida - percentualDano;
        this.percentualVida = NovaVida < 0 ? 0 : NovaVida;
    }
    
    usouKitMedico() {
        const NovaVida = this.percentualVida + 10;
        this.percentualVida = NovaVida > 100 ? 100 : NovaVida
    };
}