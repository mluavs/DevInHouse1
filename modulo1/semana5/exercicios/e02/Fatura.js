// ok, to criando uma classe chamada fatura aqui, que ta recebendo como atributos id, descricao, quantia e preco. o constructor tá trazendo esses atributos com o this, essa é a sintaxe, depois tem um método ali chamado obterValorTotal() e o get eu to boiando

export default class Fatura {
    id;
    descricao;
    quantia = 0;
    preco = 0;

    constructor(id, descricao, quantia, preco) {
        this.id = id;
        this.descricao = descricao;
        // exemplo teste com if (?)
        if (quantia > 0) {
            this.quantia = quantia;
        }
        // exemplo teste com ternário
        this.preco = preco > 0 ? preco : 0;

        //this. quantia = quantia;
        //this. preco = preco;
    }

    obterValorTotal() {
        return this.quantia * this.preco;
    }

    get valorTotal() {
        return this.obterValorTotal()
    }
}