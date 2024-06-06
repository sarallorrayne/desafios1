// Faça a soma de duas variáveis numéricas e apresente no console com uma mensagem amigável em Template String.

let primeiraVariavel = prompt('Informe o primeiro número a ser somado ao segundo: ');
let segundaVariavel = prompt('Informe o segundo número a ser somado ao primeiro: ');
let resultado = parseInt(primeiraVariavel) + parseInt(segundaVariavel);

console.log(`O resultado da somas dos números informados é: ${resultado}!`);