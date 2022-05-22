let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

[varA, varB, varC] = [varB, varC, varA] //modo mas moderno de modificar as posições sem utilizar uma variavel temporaria

console.log(varA, varB, varC)