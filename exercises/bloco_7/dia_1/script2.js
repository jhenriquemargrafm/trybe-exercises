// Fatorial
const factorial = number => {
  let result = 1

  for (let index = 2; index <= number; index += 1) {
      result *= index
  }

  return result
}

console.log(factorial(5))

// Fatorial Recursiva
const rfactorial = number => number > 1 ? number * rfactorial(number - 1) : 1
console.log(rfactorial(5))

// Longest Word
const longestWord = text => {
  let wordArray = text.split(' ')
  let maxLength = 0
  let result = ''

  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length;
          result = word;
      }
  }

  return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))

// Longestword em uma linha
const longestWords = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]

console.log(longestWords("Antonio foi no banheiro e não sabemos o que aconteceu"))