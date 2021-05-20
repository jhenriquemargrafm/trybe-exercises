// teste
const function1 = () => {
  console.log('Acordando!!')
};

const function2 = () => {
  console.log('Bora tomar café!!') ;
};

const function3 = () => {
  console.log('Partiu dormir!!') ;
};

const doingThings= (parameter1, parameter2, parameter3) => { 
  parameter1();
  parameter2();
  parameter3();
};

// Exercicio do cadastro
const cadastrofuncionario = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().split(' ').join('_');
  return { nomeCompleto, email: `${email}@trybe.com` };
};

const newEmployees = (cadastrofuncionario) => {
  const employees = {
    id1: cadastrofuncionario('Pedro Guerra'),
    id2: cadastrofuncionario('Luiza Drumond'),
    id3: cadastrofuncionario('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(cadastrofuncionario));

