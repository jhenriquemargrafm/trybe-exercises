function maiorValor(array) {
    let indiceMaior = 0;
    for (let index in array) {
      if (array[index] >= array[indiceMaior]) {
        indiceMaior = index;
      }
    }
    return indiceMaior;
}
console.log(maiorValor([40,20,50,30]));