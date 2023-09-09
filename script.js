const button = document.querySelector('.botao')
const playerCom = document.querySelector('player-com')
const comItem = document.querySelector('.comItem')
const container = document.querySelector('.container')
const winnerResult = document.querySelector('.winner')
const jokempo = document.querySelector('.jokempo')
let comResul = null // faz com que eu consiga pegar o valor da função, transformando ela global
let select = document.querySelector('.select')
let minhaJogada = null
let items = ['Pedra', 'Papel', 'Tesoura']

button.addEventListener('click', () => {
    comItem.innerHTML = ''
    winnerResult.innerHTML = ''
    jokempo.innerHTML = ''
    comResul = comJogada()
    minhaJogada = select.value

    setTimeout(() => {
        comItem.innerHTML = `<span>${comResul}</span>`
    }, 3000);
    winner()
    jokerTimer()
})

const comJogada = () => {
    let index = Math.floor(Math.random() * items.length)
    return items[index]
}

const jokerTimer = () => {
    setTimeout(() => {
        jokempo.innerHTML = `JO... `
    }, 1000);
    setTimeout(() => {
        jokempo.innerHTML += `KEM...`
    }, 2000);
    setTimeout(() => {
        jokempo.innerHTML += `PO...`
    }, 3000);
}

const winner = () => {
    const com = comResul
    const player = minhaJogada
    const comWinner = com === 'Pedra' && player === 'Tesoura' || com === 'Papel' && player === 'Pedra' || com === 'Tesoura' && player === 'Papel'
    const playerWinner = player === 'Pedra' && com === 'Tesoura' || player === 'Papel' && com === 'Pedra' || player === 'Tesoura' && com === 'Papel'
    if (com === player) {
        setTimeout(() => {
            winnerResult.innerHTML = `EMPATE!`
        }, 3500);
    }
    if (comWinner) {
        setTimeout(() => {
            winnerResult.innerHTML = ` COMPUTADOR GANHOU,VOCÊ PERDEU =(`
        }, 3500);
    }
    if (playerWinner) {
        setTimeout(() => {
            winnerResult.innerHTML = `Você GANHOU!!`
        }, 3500);
    }
}




