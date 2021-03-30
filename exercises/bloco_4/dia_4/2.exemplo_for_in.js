let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }

let food = ['hamburguer', 'bife', 'acarajé'];
for (let position in food) {
    console.log(position);
    }   
for (let value of food) {
      console.log(value);
    }

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
    }
for (let value in names) {
        console.log("Olá " + names[value]);
    }

let carro = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
    }
for (let value in carro) {
        console.log(value +": " + carro[value]);
    }