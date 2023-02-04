import Funcionario from "./Funcionario.js";

console.log('m1 s05 e01');

const ada = new Funcionario('528.442.848-31', 'Ada Lovelace', 1000) // esse new tá instanciando a classe. é isso? 

console.log(ada.salario);
console.log(ada.cpf);
console.log(ada.nomeCompleto);
ada.promover(50) // to aumentando o salário dela a nível de percentual aqui, ou seja, 50%, o que totaliza um novo salário de 1500 lulas
console.log(ada.salario);