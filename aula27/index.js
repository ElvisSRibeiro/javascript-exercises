//Operação ternária
// (condição) ? 'Valor para verdadeira' : 'Valor para falso';
const pontuacaoUsuario = 336;

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'; 
                                //o primeiro é o if, se for falso o segundo é verdadeiro
const corUsuario = 'Azul';
const corPadrao = corUsuario || 'Preta'; // <--coloca uma cor default para o usuario;

console.log(nivelUsuario, corPadrao);

