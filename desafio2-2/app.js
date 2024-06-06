// utilize JavaScript para recuperar os valores digitados nos campos usando a propriedade value. Exiba os valores no console e na tela.

function registrarValores() {
    let nome = document.getElementById('campoNome').value;
    let idade = document.getElementById('campoIdade').value;

    document.getElementById('mostraNome').textContent = `Nome: ${nome}, Idade: ${idade}`;
    console.log(`Nome: ${nome}, Idade: ${idade}`);
}

registrarValores();