const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 44, 56];
console.log('numeros: ',numeros);

//Obter o tamanho do array
console.log('método length mostra quantos elementos eu tenho no array, o que nesse caso são:', numeros.length)

//Adicionar elemento ao final do array
const novoTamanho = numeros.push(45);
console.log('método push adiciona um novo elemento ao final do array, nesse caso o array mostra que agora são ', novoTamanho, 'elementos')
console.log('se eu der um novo console.log aqui, o número que eu coloquei no parâmetro do push agora aparece no array', numeros)

//Remover último elemento do array
const elementoRemovido = numeros.pop();
console.log('método pop remove o último elemento, que no caso é o', elementoRemovido, 'que foi atribuído a uma variável');

//Remover primeiro elemento do array
const elementoRemovidoShift = numeros.shift();
console.log('método shift remove o primeiro elemento do array, que no caso é', elementoRemovidoShift);
console.log('se eu der console.log em numeros agora, o que eu recebo como retorno é o seguinte:',numeros, 'porque 1 foi removido e o 45 também');

//adicionar elemento no início do array
const novoTamanhoUnshift = numeros.unshift(80);
console.log('método unshift tá adicionando um elemento no início do array e me retornando o tamanho desse array, que antes era 11 e agora é', novoTamanhoUnshift);
console.log('console.log no anjinho de novo e recebo isso aqui:',numeros, 'porque 80 foi passado como parâmetro no método unshift, tá');

//Obter parte de um array
const pedaco = numeros.slice(1,3);
console.log('numeros:',numeros);
console.log('método slice obtém parte de um array, no caso ele ta retornando a partir do elemento na posição 1 até o 3, ainda que não incluido o 3, sabe', pedaco);

//Deletar parte de um array
const deletado = numeros.splice(1, 2);
console.log('numeros:', numeros);
console.log('aqui eu mostro o que foi deletado:',deletado, 'que são os elementos 1 e 2 do array');

//Adicionar item em índice específico
numeros.splice(1, 0, 300);
console.log('array com splice + adição', numeros);
//não entendi

//Tranformar array em string com separador
const numerosSemSep = numeros.join();
console.log('Array com método join, mas sem separador fica assim:', numerosSemSep, 'vira uma string, viu');

const numerosComSep = numeros.join(', ');
console.log('Array com método join, com separador passado como parâmetro no método', numerosComSep);

//Percorrer Array
const numerosDobrados = [];
numeros.forEach((elemento, indice) => {
    numerosDobrados.push(elemento * 2)
})
console.log('método pop remove o último elemento, que no caso é o ', elementoRemovido);
console.log('tá, o rolê aqui é que eu to percorrendo array e pra cada elemento, eu to multiplicando o elemento por 2, o que me dá o seguinte resultado:',numerosDobrados);

//Percorrer um array retornando um novo array modificado
const numerosTriplicado = numeros.map((elemento) => elemento * 3)
console.log('aqui to usando o método map pra mapear todos os elementos do array e depois tem uma função ali pra multiplicar cada um desses elementos por 3, o que me entrega o seguinte resultado:', numerosTriplicado);

//Encontrar o primeiro elemento que corresponda ao filtro
const numeroEncontrado = numeros.find((elemento) => elemento % 2 !== 0);
console.log('Aqui tá me retornando o primeiro número encontrado com find que corresponde ao filtro de ser um número ímpar, esse número é:', numeroEncontrado);

//Encontrar elementos que correspondam ao filtro
const numerosEncontrados = numeros.filter((elemento) => elemento % 2 !== 0);
console.log('Esses são os números ímpares encontrados com o método filter, que tá recebendo uma callback function como parâmetro',numerosEncontrados);

//Verificar se ao menos um item corresponde ao filtro
const correspondeSome = numeros.some((elemento)=> elemento % 2 !== 0);
console.log('True ou False retornam pra me dizer que há alguma correspondência ou não, nesse caso, a resposta é:',correspondeSome);

//Verificar se todos os itens correspondem ao filtro
const correspondeEvery = numeros.every((elemento)=> elemento % 2 !== 0)
console.log('True ou False nesse caso tão verificando se todos os elementos do array correspondem com o filtro, o que nesse exemplo é:', correspondeEvery);

//Retornar um único valor
const soma = numeros.reduce((acc, elemento) => (acc, elemento))
console.log(soma);
//não entendi porque tá retornando 56

const aluno = {
    id: 1,
    nome: 'Marina',
    turmas: [
        {
            id: 1,
            nome: 'Audaces',
        },
        {
            id: 2,
            nome: 'DevInHouse',
        }
    ],
    teste: 'la la land'
}
console.log('Retornar o objeto:', aluno.teste);

//Deletar propriedade objeto
delete aluno.teste;
console.log('Retornando o objeto com propriedade deletada', aluno);

//Adicionar método
aluno.imprimeTurma = function () {
    console.log(aluno.turmas.map((turma) => turma.nome).join())}
    // console.log(this.turmas.map((turma) => turma.nome).join());}
//não sei se entendi bem

aluno.imprimeTurma()

//Obter nomes das chaves de um objeto
const chaves = Object.keys(aluno);
console.log('Object keys', chaves);

chaves.forEach((chave) => {
    console.log(chave, aluno[chave]);
});

//Obter chave e valor objeto
const chaveValor = Object.entries(aluno);

console.log('Object.entries', JSON.stringify(chaveValor));