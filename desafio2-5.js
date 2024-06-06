// Receba, no mínimo, duas sentenças como uma string e utilize split() para quebrá-la em frases menores com base em um ponto e vírgula como delimitador, separar duas frases com ponto e vírgula.

let duasFrases = 'O café dança com a manhã; Sonhos se misturam na xícara.';
let separarFrases =  duasFrases.split(';');

console.log(separarFrases);