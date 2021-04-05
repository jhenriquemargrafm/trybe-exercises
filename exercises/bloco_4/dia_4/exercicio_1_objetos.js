//1
let info1 = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
console.log("Bem vinda, " + info1.personagem)
//2
info1.recorrente = 'Sim'
//3
for (let index in info1) {
    console.log(index);
  }
//4
for (let index in info1) {
    console.log(info1[index]);
  }
//5
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

for (let index in info1) {
    if (
      info1[index] === info1.recorrente && info1[index] === 'Sim' && info2[index] === 'Sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info1[index] + ' e ' + info2[index]);
    }
  }

