// const h1 = document.querySelector('.container h1');
// const data = new Date();

// //ctrl + / comenta multiplas linhas automaticamente

// //modo mais compacto de fazer um switch case
// //como a Date retorna um numero utilizando um array é possivel modificar na mão a linguagem
// function getDiaSemanaTexto(diaSemana) {
//     const diasSemana = ['domingo','segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
//     return diasSemana[diaSemana]; //<--- recebe o index e já que a semana começa em 0 consegue usar
// }
// function getNomeMes(numeroMes) {
//     const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio',
//         'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
//     return meses[numeroMes];
// }

// function zeroAEsquerda(num){
//     return num >= 10 ? num : `0${num}`
// }

// function criaData(data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);

//     return `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
//     ` de ${data.getFullYear()} ` +
//     `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
// };

// h1.innerHTML = criaData(data);


    //!!!!! essa e a forma mais resumida e compacta de se fazer
const h1 = document.querySelector('.container h1');
const data = new Date();
// const opcoes = {
//     dateStyle: 'full',
//     timeStyle: 'short'
// };

// h1.innerHTML = data.toLocaleString('pt-BR', opcoes);
h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});