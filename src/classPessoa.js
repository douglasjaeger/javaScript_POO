class Pessoa { 

    constructor(primeiroNome, sbrNome) {  

		this.nome = primeiroNome; 
		this.sobrenomes = sbrNome; } //Atributos

	exibir(dado) { console.log(dado, this.nome, "", this.sobrenomes) } //Metodo

} 

module.exports = Pessoa

