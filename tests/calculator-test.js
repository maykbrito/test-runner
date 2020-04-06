// We use the assert standard library to make assertions
const assert = require('assert')
const { imc } = require('../calculator')

// We do not need to import the test functions since
// they are made global variables by test.js
test('if IMC higher or equals 30', () => {
    const nome = "Carlos";
    const peso = 110;
    const altura = 1.88;
    assert.equal(imc({ nome, peso, altura }), `${nome} você está acima do peso`)
})

test('if IMC lower than 30', () => {
    const nome = "Carlos";
    const peso = 88;
    const altura = 1.88;
    assert.equal(imc({ nome, peso, altura }), `${nome} você está abaixo do peso`)
})