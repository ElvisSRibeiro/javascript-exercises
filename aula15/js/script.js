const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
const raiz = document.getElementById('raiz');
const isInteiro = document.getElementById('isInteiro');
const notANumber = document.getElementById('notANumber');
const arrendondadoUp = document.getElementById('arrendondadoUp');
const arredondadoDown = document.getElementById('arredondadoDown');
const arrendondado = document.getElementById('arrendondado');


numeroTitulo.innerHTML = numero
texto.innerHTML += `<p>Seu número + 2 è ${numero + 2}</p>`;
texto.innerHTML += `<p>Sua raiz quadrada é ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p>É NaN? ${Number.isNaN(numero)} </p>`;
texto.innerHTML += `<p>Arrendondado para baixo ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arrendondado para cima ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Arrendondado com duas casas decimais ${numero.toFixed(2)}</p>`;

