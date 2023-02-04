//aqui eu to importando os arquivos, criando uma variável dos times, que é um array e to instanciando a classe Time, atribuindo o nome do time e a sigla dele

import Time from "./Time.js";
import Partida from "./Partida.js";

const times = [
    new Time ('Grêmio','GRE'),
    new Time ('Internacional', 'INT'),
    new Time ('São Paulo', 'SAO'),
]

console.log(Array.isArray(times));

// aqui eu to criando uma variável chamada partidas e instanciando a classe Partidas do outro arquivo, com os parâmetros de sigla e gols para os respectivos times
const partidas = [
    new Partida ('GRE', 2, 'SAO', 6),
    new Partida ('INT', 9, 'GRE', 5)
]

// esse forEach ta fazendo o seguinte: cada vez que ele passa por um time, ele percorre os dados da partida que tão logo abaixo e computa os dados utilizando o método computarPartida, que tá no outro arquivo, depois disso ele ainda exibe a situação, que consiste na contagem de pontos
times.forEach(time => {
    partidas.forEach(partida => {
        time.computarPartida(partida);
    });
    time.exibirSituacao();
});