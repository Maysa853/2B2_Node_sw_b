const calculadora = require('./calculadora')
const minimist =require('minimist')

var argv=minimist(process.argv.slice(2))

console.log(argv={nome:"Maysa",idade:15})

const nome = argv["nome"]
const idade = argv["idade"]

console.log(`Nome: ${nome}' |Idade: ${idade}`)
