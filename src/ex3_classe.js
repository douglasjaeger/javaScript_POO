const Pessoa_aqui = require ('./classPessoa')

const pessoa = new Pessoa_aqui('testeNome', 'testeSobrenome'); 

console.log(pessoa.nome); // testeNome 
console.log(pessoa.sobrenomes); // testeSobrenome 

pessoa.exibir("O nome é ") // chama metodo exibir


console.log("======================"); // testeSobrenome 

 
 Object.keys(pessoa).forEach(key => { // cria indice chamado key para os iens do objeto
    console.log(key, pessoa[key]);    // exibe a lista de conteúdo do objeto em sequencia
  });
