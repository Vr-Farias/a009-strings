//Crie a const para a frase aqui
const minhaFrase = ("Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"")
const novaFrase1 = minhaFrase.replace("verde", "rosa")
const novaFrase2 = novaFrase1.replace("azul", "laranja")

console.log(minhaFrase) //frase original
console.log(novaFrase2) //frase modificada
console.log(novaFrase2.includes("verde")) //imprime false
console.log(novaFrase2.includes("laranja")) //imprime true
