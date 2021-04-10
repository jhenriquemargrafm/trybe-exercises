window.onload = function() {
function setBackgroundColor(color) {
	let content = document.querySelector(".content")
	content.style.backgroundColor = color
	localStorage.setItem("backgroundColor", color)
}

// background-color
let backgroundColorButtons = document.querySelectorAll("#background-color")
for (let index = 0; index < backgroundColorButtons.length; index += 1) {
	backgroundColorButtons[index].addEventListener("click", function(event) {
		setBackgroundColor(event.target.innerText) //o pulo do gato - pegar o texto que está no botão
	})
}

function initialize() {
	let backgroundColor = localStorage.getItem("backgroundColor")
	if (backgroundColor) setBackgroundColor(backgroundColor)
}

initialize()
}