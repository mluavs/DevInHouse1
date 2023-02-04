import Juros from "./Juros.js";

const aplica1 = new Juros (10000, 0.07, 24);
console.log(aplica1);


const aplica2 = new Juros (1000, 0.15, 10);
console.log(aplica2);

const jurosSimples = aplica1.calcularJurosSimples()
const jurosCompostos = aplica2.calcularJurosCompostos()

console.log(jurosSimples);
console.log(jurosCompostos);
