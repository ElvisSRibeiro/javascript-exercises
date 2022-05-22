/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.p
Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otávio'
const sobrenome = 'Miranda'
const idade = 32;
const peso = 84;
const altura = 1.80;
let IMC; // peso / (altura * altura)
let anoNascimento; // data atual - idade

IMC = peso / (altura * altura)
anoNascimento = 2022 - idade

//console.log(`${IMC}`)
//console.log(`${anoNascimento}`)
console.log(`${nome} ${sobrenome} tem ${idade} anos, nasceu em ${anoNascimento}, pesa ${peso}kg, tem ${altura} de altura e seu IMC é de ${IMC}.`)


