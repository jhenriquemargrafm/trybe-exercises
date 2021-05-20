const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

function verificarNotas() {
  for (let i = 0; i < students.length; i += 1) {
    const student = students[i];
    if (student.grade >= 60) {
      student.approved = 'Aprovado';
    } else {
      student.approved = 'Recuperação';
    }
  }
}

verificarNotas();

console.log(students);

// Usando for Each
const studentsB = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

function verifyGrades() {
  studentsB.forEach((student, index) => {
    if (student.grade >= 60) {
      studentsB[index].approved = 'Aprovado';
    } else {
      studentsB[index].approved = 'Recuperação';
    }
  });
}
verifyGrades();


// Primeiro número divisivel por 5
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 5 === 0) {
    firstMultipleOf5 = numbers[index];
    break;
  }
}
console.log(firstMultipleOf5);

// Primeiro número divisivel por 5 usando find
const numbersB = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5A = numbersB.find((number) => number % 5 === 0);

console.log(firstMultipleOf5A);


// Estrutura de uma HoF
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

const arrayOfValuesB = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValuesB.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});

// FOR EACH
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Use o método forEach chamando a callback showEmailList para apresentar os emails.
emailListInData.forEach(showEmailList);

// Múltiplos de 2
const numbersC = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};
numbersC.forEach(multipliesFor2);

// Exemplo UPPERCASE
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];
const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};
names.forEach(convertToUpperCase);
console.log(names);

//FIND
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30

// Uso do some para ver se existe termos que seguem a condição dentro do array
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('R', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

// Uso do every para ver se todos os termos seguem a condição
const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades));