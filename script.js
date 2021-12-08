let order = [];
let clikedOrder = [];
let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Cria ordem aleatória de cores.
let shuffleOrder = () => {
    //Variável que vai guardar um número aleatório a cada rodada.
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder; //Atribui o index a cor que sair da função de sorteio.
    clikedOrder = [];

    //Acender a cor que corresponde ao número sorteado.
    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}
//Acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected')
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}
//Checa se os botões clicados são os mesmos da ordem gerada no jogo.
let checkedOrder = () => {
    for (let i in clikedOrder) {
        if (clikedOrder[i] != order[i]) {
            lose();
            break;
        }
    }
    if (clikedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível`);
        nextLevel()
    }
}

//Função para o clique do usuário.
let click = (color) => {
    clikedOrder[clikedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkedOrder();
    }, 250);

}

//Função que retorna a cor.
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//Função para próximo nível do jogo.
let nextLevel = () => {
    score++
    shuffleOrder();
}

//Função para Game Over.
let gameOver = () => {
    alert(`Pontuação:${score}!\nVocê perdeu o jogo!\nClique em "ok" para iniciar um novo jogo.`);
    order = [];
    clikedOrder = [];

    playGame();
}
//Função de início do jogo.
let playGame = () => {
    alert('Bem vindo ao Gênisis !Iniciando um novo jogo!');
    score = 0;

    nextLevel();
}

// green.addEventListener('click', click(0));
// red.addEventListener('click', click(1));
// yellow.addEventListener('click', click(2));
// blue.addEventListener('click', click(3));

//Evento de clique para as cores.
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(3);
blue.onclick = () => click(4);

//Início do jogo. 
playGame();