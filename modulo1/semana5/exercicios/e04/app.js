import { Cachorro, Gato } from "./Animal.js";


const totó = new Cachorro('totó', 4);
console.log( totó.som );   // "latido"     

const miu = new Gato('miu', 8);
console.log( miu.som );   // "miado"