//Exercicio 1
let n = 6;
let column = '*';

for (let index = 1; index < n; index += 1) {
  column = column + '*';
}
for (let index = 1; index <= n; index += 1) {
	console.log(column); ;
}

//Exercicio 2
let n = 7;
let count = 0;
for (let index = 1; index <= n; index += 1) {
	count = count + 1;
	let column = '*';
	for (let index = 1; index < count; index += 1) {
		column = column + '*';
	}
	console.log(column); 
}

//Exercicio 3
let n = 6;
let count = 0;
for (let index = 1; index <= n; index += 1) {
	count = count + 1;
	let column = '*';
	let space = ' ';
	for (let index = 1; index < count; index += 1) {
		column = column + '*';
	}
	for (let index = (n - 1); index >= count; index -= 1) {
		space = space + ' ';
	}
	console.log(`${space + column}`);
}

//Exercicio 4
let n = 13;
let count = 0;
for (let index = 1; index <= n; index += 1) {
	count = count + 1;
	let column = '*';
	let space = ' ';
	for (let index = 1; index < count; index += 1) {
		column = column + '*';
	}
	for (let index = (n - 1); index >= count; index -= 2) {
		space = space + ' ';
	}
	if (count % 2 !== 0) {
	console.log(`${space + column + space}`);
	}
}

