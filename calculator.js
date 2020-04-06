const imc = ({ peso, altura, nome }) => {
    const imc = peso / (altura * altura)

    if (imc >= 30) return `${nome} você está acima do peso`
    return `${nome} você está abaixo do peso`
}

module.exports = {
    imc
}