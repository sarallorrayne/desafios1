function ordemCrescente(a, b, c) {
    let numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

ordemCrescente(3, 1, 5);