function maisCaracteres(nomes) {
    let nome = nomes[0];
    for (index = 0; index < nomes.length; index += 1) {
      if (nomes[index].length >= nome.length) {
        nome = nomes[index];
      }
    }
    return nome;
}
console.log(maisCaracteres(["José", "Maria" , "Matheus"]));