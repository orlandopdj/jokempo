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
    const jkp = document.querySelector('.jokempo')

    if(winnerResult.textContent.length) {
        limparContent()
    }
    if(!jkp.textContent.length) {
        comResul = comJogada()
        minhaJogada = select.value
        winner()
        jokerTimer()
        setTimeout(() => {
            comItem.innerHTML = `<span>${comResul}</span>`
        }, 2200);
    }
})

const limparContent = () => {
    comItem.innerHTML = ''
    winnerResult.innerHTML = ''
    jokempo.innerHTML = ''
}

const comJogada = () => {
    let index = Math.floor(Math.random() * items.length)
    return items[index]
}

const jokerTimer = () => {
        setTimeout(() => {
            jokempo.innerHTML = `JO... `
        }, 100);
        setTimeout(() => {
            jokempo.innerHTML += `KEN...`
        }, 1100);
        setTimeout(() => {
            jokempo.innerHTML += `PÔ...`
        }, 2100);
}

const winner = () => {
    const com = comResul
    const player = minhaJogada
    const comWinner = com === 'Pedra' && player === 'Tesoura' || com === 'Papel' && player === 'Pedra' || com === 'Tesoura' && player === 'Papel'
    const playerWinner = player === 'Pedra' && com === 'Tesoura' || player === 'Papel' && com === 'Pedra' || player === 'Tesoura' && com === 'Papel'
    if (com === player) {
        setTimeout(() => {
            winnerResult.innerHTML = `EMPATE!`
        }, 2200);
    }
    if (comWinner) {
        setTimeout(() => {
            winnerResult.innerHTML = ` COMPUTADOR GANHOU,VOCÊ PERDEU =(`
        }, 2200);
    }
    if (playerWinner) {
        setTimeout(() => {
            winnerResult.innerHTML = `Você GANHOU!!`
        }, 2200);
    }
}




