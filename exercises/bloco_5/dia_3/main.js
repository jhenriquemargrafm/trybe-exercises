const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

// Quando clicar em uma das três opções, a função selectedBox é acionada:
divUm.addEventListener('click', selectedBox);
divDois.addEventListener('click', selectedBox);
divTres.addEventListener('click', selectedBox);

// Adicionando a classe Tech ao elemento selecionado - Removendo o tech e colocando o tech no elemento clicado.
function selectedBox(selectedElement) {
	document.getElementsByClassName('tech')[0].classList.remove('tech');
	selectedElement.target.classList.add('tech');
}
  
// Input é o evento do DOM que recebe informação do usuário	
input.addEventListener('input', newText);

// Coloca o texto recebido do usuário na opção que foi clicada
function newText(selectedElement) {
  document.getElementsByClassName('tech')[0].innerText = selectedElement.target.value;
  }

// Recebe o click duplo do usuário:
myWebpage.addEventListener('dblclick', callPage);

// Chama uma página nova
function callPage() {
  window.location.replace('https://www.linkedin.com/in/josehenriquemargrafmelo/');
}

// Recebe o mouseover do usuário
myWebpage.addEventListener('mouseover', newColor);

// muda a cor do elemento myWebpage
function newColor(selectedElement) {
  selectedElement.target.style.color = 'black';
}



function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.