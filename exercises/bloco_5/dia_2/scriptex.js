// Exercicio 1 
let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(h1);

// Exercicio 2 
let mainDiv = document.createElement('div');
mainDiv.className = 'main-content';
document.body.appendChild(mainDiv);

// Exercicio 3 
let centerDiv = document.createElement('div');
centerDiv.className = 'center-content';
mainDiv.appendChild(centerDiv);

// Exercicio 4
let paragraph = document.createElement('p');
paragraph.innerText = 'Teste do parágrafo';
centerDiv.appendChild(paragraph);

// Exercicio 5
let leftSide = document.createElement('div');
leftSide.className = 'left-content';
mainDiv.appendChild(leftSide);

// Exercicio 6
let rightSide = document.createElement('div');
rightSide.className = 'right-content';
mainDiv.appendChild(rightSide);

// Exercicio - 7
let image = document.createElement('img');
image.className = 'small-image';
image.src = 'https://picsum.photos/200';
leftSide.appendChild(image);

// Exercicio - 8
let unordList = document.createElement('ul');
rightSide.appendChild(unordList);

let array = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez']
for (let index in array) {
    let number = document.createElement('li');
    number.innerText = array[index];
    unordList.appendChild(number);
}

// Exercicio - 9
for (index = 0; index < 3; index += 1) {
    let h3 = document.createElement('h3');
    h3.innerText = 'Divisão' + index;
    mainDiv.appendChild(h3);
}

