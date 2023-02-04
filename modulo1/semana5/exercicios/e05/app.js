import CalculadoraDeArea from "./CalculadoraDeArea.js";

// essa variável tá me dizendo que eu estou instanciando a classe do outro arquivo e passando 3 parâmetros que são o tipo, que nesse caso é quadrado, é uma string, um nome qualquer e depois to passando duas medidas pra que o cálculo no método seja feito
const quadA = new CalculadoraDeArea("quadrado", 6, 6);
const areaQA = quadA.calcular();
console.log(areaQA); // 36


// essa variável tá me dizendo que eu estou instanciando a classe do outro arquivo e passando 3 parâmetros que são o tipo, que nesse caso é triângulo, é uma string, um nome qualquer e depois to passando duas medidas pra que o cálculo no método seja feito
const triangB = new CalculadoraDeArea("triangulo", 8, 7);
const areaTB = triangB.calcular();
console.log(areaTB); // 28