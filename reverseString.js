const a = "abacate"

function reverseString(palavra) {
    let resultado = "";
    for (let i = palavra.length - 1; i >= 0; i += -1) {
        resultado += palavra[i]
    }
    return resultado
}

console.log(reverseString(a))