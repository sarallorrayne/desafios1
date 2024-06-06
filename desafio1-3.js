let fraseOuPalavra = prompt('Digite uma frase ou palavra e verifique se é um palíndromo: ');

function palindrome(str) {
    let strFormatada = str.toLowerCase().replace(/\s/g, '').replace(/[\W_]/g, '');
    let strInvertida = strFormatada.split('').reverse().join('');
    if (strFormatada === strInvertida) {
        console.log('É um palíndromo!');
    } else {
        console.log('Não é um palíndromo.');
    }
}

palindrome(fraseOuPalavra);