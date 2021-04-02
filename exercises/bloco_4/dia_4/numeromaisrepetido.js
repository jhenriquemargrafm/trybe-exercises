function numeroMaisRepetido(array) {
    let contagemNumero = 0;
    let contagemNumeroRepetido = 0;
    let posicaoNumeroRepetido = 0;
    for (index = 0; index < array.length; index += 1) {
        let numeroAtual = array[index];
//definição do array atual
        for (index2 = 0; index2 < array.length; index2 += 1) {
//fazer comparação e contar caso seja repetido
            if (numeroAtual === array[index2]) {
                contagemNumero += 1;
            }
//fazer comparação com número de repetições do número anterior
        }   
        if (contagemNumero > contagemNumeroRepetido) {
            contagemNumeroRepetido = contagemNumero;
            posicaoNumeroRepetido = index;
        }
    contagemNumero = 0;
    }
    return array[posicaoNumeroRepetido];
}
console.log(numeroMaisRepetido([2, 1, 4, 3, 3]));