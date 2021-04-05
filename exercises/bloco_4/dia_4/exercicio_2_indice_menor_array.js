function menorValor(array) {
    let indiceMenor = 0;
    for (let index in array) {
      if (array[indiceMenor] > array[index]) {
        indiceMenor = index;
      }
    }
    return indiceMenor;
  }
console.log(menorValor([40,20,10,30,0,1,-8]));