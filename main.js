let player1= {
    name: 'Sonya',
    hp: 500,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: 'wind blade',
    attack: function () {
        console.log('Energy rings');
    },
};

let player2= {
    name: 'Sub-Ziro',
    hp: 500,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: 'scythe',
    attack: function () {
        console.log('Ice ball');
    },
};

function createPlayer(playerClass, playerInfo) {
    const $player = document.createElement('div');
    $player.classList.add(playerClass);

    const $playerProgressbar = document.createElement('div');
    $playerProgressbar.classList.add('progressbar');
    const $playerCharacter = document.createElement('div');
    $playerCharacter.classList.add('character');
    $player.appendChild($playerProgressbar);
    $player.appendChild($playerCharacter);

    const $playerLife = document.createElement('div');
    $playerLife.classList.add('life');
    $playerLife.style.width = '100%';
    const $playerName = document.createElement('div');
    $playerName.classList.add('name');
    $playerName.innerText = playerInfo.name;
    $playerProgressbar.appendChild($playerLife);
    $playerProgressbar.appendChild($playerName);

    const $playerImg = document.createElement('img');
    $playerImg.src = playerInfo.img;
    $playerCharacter.appendChild($playerImg);



    const $arena = document.querySelector('.arenas');
    $arena.appendChild($player);
}

createPlayer('player1', player1);
createPlayer('player2', player2);