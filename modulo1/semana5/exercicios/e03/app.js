import Personagem from "./Personagem.js";

// aqui eu to instanciando a classe
const marimar = new Personagem("Marimar");

console.log(marimar.percentualVida); // 100

marimar.sofreuDano(50);

console.log(marimar.percentualVida); // 50

marimar.usouKitMedico();

console.log(marimar.percentualVida); // 60