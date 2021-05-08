// Ordenação de números
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = array => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
}

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`);

// Fatorial
const factorial = number => {
  let answer = 1;
  for (let index = 2; index <= number; index += 1) {
    answer = index*answer;
  }
  return answer;
}
console.log(factorial(4))

// Fatorial recursivo
const recursiveFactorial = number => {
  if ( number > 1) {
    return number*recursiveFactorial(number - 1);
  } else {
    return 1;
  }
}
console.log(recursiveFactorial(5))

const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))
