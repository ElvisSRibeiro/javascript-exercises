const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Avenida Brasil',
        numero: 320
    }
};

//atribuição por desestruturação
//o nome do atributo é usado como nome da variavel a ser chamada
const { endereco: {rua: r, numero}, endereco } = pessoa;
console.log(r, numero, endereco);