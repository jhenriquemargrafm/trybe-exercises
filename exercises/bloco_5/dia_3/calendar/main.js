function createDaysOfTheWeek() {
    let weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    let weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      let days = weekDays[index];
      let dayListItem = document.createElement('li');
      dayListItem.innerText = days;
  
      weekDaysList.appendChild(dayListItem);
    };
}
createDaysOfTheWeek();
  
// Exercicio 1 - Perguntar no Plantão sobre adicionar classe sem sobrescrever

let dezDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createNumericDays() {
  // Seletor do Ul id = Days
  let dezDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDays.length; index += 1) {
    let day = dezDays[index];
    let NumericDay = document.createElement('li');
    NumericDay.innerText = day;
    NumericDay.className = 'day';
    // Colocando a Li no HTML
    dezDaysList.appendChild(NumericDay);
    // Dias especiais
    if (day === 24 || day === 31) {
      NumericDay.className = 'day holiday';
    }
    if (day === 4 || day === 11 || day === 18) {
      NumericDay.className = 'day friday';
    }
    if (day === 25) {
      NumericDay.className = 'day holiday friday';
      // NumericDay.addClass ='holiday'
    }
  }
}
createNumericDays()

// Exercicio 2
function buttonHolidays(nomeRecebido) {
  let buttonDiv = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.innerText = nomeRecebido;
  button.id = 'btn-holiday';
  buttonDiv.appendChild(button);
}

buttonHolidays('Feriados')

// Exercicio 3
// O botão recebe o click
function highlightHolidays() {
  // Seleção do Botão
  let receiveClick = document.querySelector('#btn-holiday');
  // Seleção de todos os dias com a classe Holiday
  let allHolidays = document.querySelectorAll('.holiday')
  let standard = 'rgb(238,238,238)';
  let highlight = 'red';
  
  receiveClick.addEventListener('click', function() {
    for (let index = 0; index < allHolidays.length; index += 1) {
      if (allHolidays[index].style.backgroundColor !== highlight) {
        allHolidays[index].style.backgroundColor = highlight;
      } else {
        allHolidays[index].style.backgroundColor = standard;
      }
    }
  })
};
highlightHolidays();

// Exercicio 4
function buttonFriday(nomeRecebido) {
  let buttonDiv = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.innerText = nomeRecebido;
  button.id = 'btn-friday';
  buttonDiv.appendChild(button);
}
buttonFriday('Sexta-Feira')

// Exercicio 5
function highlightFridays() {
  let receiveClick = document.querySelector('#btn-friday');
  let allFriday = document.querySelectorAll('.friday') // nodeList
  let Text = 'YEAH!!!!!';
  let friday = allFriday;

  receiveClick.addEventListener('click', function() {
    for (let index = 0; index < allFriday.length; index += 1) {
      if (allFriday[index].innerText !== Text) {
        allFriday[index].innerText = Text;
      } else {
        allFriday[index].innerText = friday[index]; // Problema
      }
    }
  })
};
highlightFridays();

// Exercicio 6
function zoomInMouse() {
  let zoomIn = document.querySelector('#days');

  zoomIn.addEventListener('mouseover', function(event) {
    event.target.style.fontWeight = '600';
    event.target.style.fontSize = '30px';
  })
};

zoomInMouse();

function zoomOutMouse() {
  let zoomOut = document.querySelector('#days');

  zoomOut.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '300';
    event.target.style.fontSize = '15px';
  })
};

zoomOutMouse();

function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

newTaskSpan('Projeto:');


