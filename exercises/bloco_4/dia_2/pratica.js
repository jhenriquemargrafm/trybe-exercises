let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let maiorValor = 0
let valorNovo =0
let countImp =0
//1
for(let number of numbers) {
    console.log(number);
  }
//2
for(let number of numbers) {
    soma =soma + number;
  }
console.log(soma)
//3
console.log(soma/numbers.length)
//4
if (soma > 20) {
    console.log("Maior que 20");
} else {
    console.log("Menor que 20");
}
//5
for(let number of numbers) {
    if (number >= maiorValor) {
        maiorValor = number
    }
}
console.log(maiorValor);
//6
for(let number of numbers)
    if (number%2 ==! 0) {
        countImp = countImp + 1
    }
if (countImp > 0){
    console.log(countImp)
} else {
    console.log("Nenhum valor ìmpar encontrado")
}
//7 menor valor encontrado
let menorValor = numbers[1]
for(let number of numbers) {
    if (number <= menorValor) {
        menorValor = number
    }
}
console.log(menorValor)
//8 
let numeros = [];
for (let index = 1; index <= 25; index += 1) {
    numeros.push(index);
}
console.log(numeros)
//9
for (let index =0; index <= numeros.length; index += 1) {
    resto = numeros[index]%2;
    console.log("O resto de " + numeros[index] + " divido por 2 é: " + resto)
}
