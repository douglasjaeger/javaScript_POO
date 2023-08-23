class Animal {
    constructor(animal, idade, banho, tosa){
        this.animal = animal;
        this.idade = idade;
        this.banho = banho;
        this.tosa = tosa;
    }

    mostrar(dados){
        console.log(dados);
        //console.log(this.animal, this.idade, this.banho, this.tosa);
    }

}

module.exports = Animal