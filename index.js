var prompt = require('prompt-sync')()

var base = prompt('digite a base do triângulo: ')
var altura = prompt('digite a altura do triângulo: ')

var area = (base*altura)/2

console.log(`A Área do triângulo é: ${area}`)