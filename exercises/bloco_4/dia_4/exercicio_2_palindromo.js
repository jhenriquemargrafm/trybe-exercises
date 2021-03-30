function verificaPalindromo(string) {
    for(let index = 0; index < (string.length / 2); index += 1 ){
        if(string[index] != string[string.length - index - 1] ) {
        return false;
        break;
    }
    return true
}
}
console.log(verificaPalindromo('hahahah'));