import Fatura from "./Fatura.js";

const melao = new Fatura(123, 'Melão', 2, 3);

const valor = melao.obterValorTotal();
const valorTotal = melao.valorTotal;

console.log(valor); // 6
console.log(valorTotal); // 6

//o que ta acontecendo aqui? to importando a Fatura.js, criando uma variável e instanciando a minha classe Fatura, o resultado ta sendo 6, porque eu to passando que a quantia é 2 e o preço é 3, 123 é a id e melão é a descriçao

console.log(melao.descricao);
console.log(melao.id);