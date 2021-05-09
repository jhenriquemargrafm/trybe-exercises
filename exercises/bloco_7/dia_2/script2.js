const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Adicionar chave e valor em um objeto
const addNewKey = (object, key, value) => {
  object[key] = value;
};

addNewKey(lesson2, 'turno', 'noite');
console.log(lesson2);

// Listar keys de um objeto
const listKeys = (obj) =>  Object.keys(obj);
console.log(listKeys(lesson2));

// Mostrar o tamanho de um objeto
const sizeObject = (object) =>  Object.keys(object).length;
console.log(sizeObject(lesson2));

// Mostrar valores de um objeto
const listValues = (object) =>  Object.values(object);
console.log(listValues(lesson2));

// Agrupar todas as lessons em um objeto
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

// Somar valores dentro de objetos dentro de objetos
const getNumberOfStudents = (mainObject) => {
  let total = 0;
  const lessons = Object.keys(mainObject);
  for (lesson in lessons) {
    total += mainObject[lessons[lesson]].numeroEstudantes;
    //Acessando o numero de Estudantes dentro da lesson dentro do objeto
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));

// Valores do objeto
const getValueByNumber = (object) => Object.values(object);
console.log(getValueByNumber(lesson2));