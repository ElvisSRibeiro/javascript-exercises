//function criaPessoa(nome, sobrenome, idade) {
//    return {nome, sobrenome, idade};
//}
//const pessoa1 = criaPessoa('Luiz', 'Miranda', 25)
//const pessoa2 = criaPessoa('Maria', 'Geraldo', 32)
//const pessoa3 = criaPessoa('José', 'Oliveira', 17)

//console.log(pessoa1.nome, pessoa2.nome, pessoa3.sobrenome)

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Oliveira',
    idade: 25,

    fala() {
        //console.log(`Meu nome é ${this.nome} ${this.sobrenome}, e eu tenho ${this.idade} de idade`)
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        ++this.idade;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();