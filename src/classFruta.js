class Fruta{
    constructor(nome, tipo, estação, qtd, valor){
        this.nome = nome;
        this.tipo = tipo;
        this.estação = estação;
        this.qtd = qtd;
        this.valor = valor;
    }
    
    exibição(dado){
        console.log(dado);
        console.log(this.nome, this.tipo, this.estação);
        
          };
      
}
 
module.exports = Fruta