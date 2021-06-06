const $arena = document.querySelector('.arenas');
const $randomBtn = document.querySelector('.button');

let player1= {
    index: 1,
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: 'wind blade',
    attack: function () {
        console.log('Energy rings');
    },
};

let player2= {
    index: 2,
    name: 'Sub-Ziro',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: 'scythe',
    attack: function () {
        console.log('Ice ball');
    },
};



function playerLose(name) {
    const $loseTitle = createDomElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' wins.. In next life';

    return $loseTitle;
}

function random() {
    return Math.ceil(Math.random() * 10);
}


function changeHP(player) {
    const $playerLife = document.querySelector(".player" + player.index + " .life");

    player.hp -= random();

    if (player.hp <= 0) {
        player.hp = 0;
        $randomBtn.disabled = true;
        $arena.appendChild(playerLose(player.name));
    }

    $playerLife.style.width = player.hp + '%';
}

$randomBtn.addEventListener("click", function() {
    changeHP(player1);
    changeHP(player2);


});

function createDomElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}




function createPlayer(playerInfo) {
    const $player = createDomElement('div', 'player' + playerInfo.index);
    const $playerProgressbar = createDomElement('div', 'progressbar');
    const $playerCharacter = createDomElement('div', 'character');
    const $playerLife = createDomElement('div', 'life');
    const $playerName = createDomElement('div', 'name');
    const $playerImg = createDomElement('img');

    $playerLife.style.width = playerInfo.hp + '%';
    $playerName.innerText = playerInfo.name;
    $playerImg.src = playerInfo.img;


    $playerProgressbar.appendChild($playerLife);
    $playerProgressbar.appendChild($playerName);
    $playerCharacter.appendChild($playerImg);

    $player.appendChild($playerProgressbar);
    $player.appendChild($playerCharacter);

    return $player;
}

$arena.appendChild(createPlayer(player1));
$arena.appendChild(createPlayer(player2));