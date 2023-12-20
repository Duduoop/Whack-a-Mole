let currmoleTile;
let currPlantTile;
let score = 0;
let GameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    //set up the grid or canvas by making a fuction called onload so that when we loa dour web / game everithing will load! in html
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 500); //miliseconds (Half a second)
    setInterval(setPlant, 500); //2000 milisecond = (Half asecond)
}

function getRamdomTile() {
    // math.ramdom -->(0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random()* 9);
    return num.toString();
}

function setMole() {
    if (GameOver) {
        return;
    }

    if (currmoleTile) {
        currmoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    let num = getRamdomTile();
    if (currPlantTile && currPlantTile.id == num) {
        return;
    }
    currmoleTile = document.getElementById(num);
    currmoleTile.appendChild(mole);
}

function setPlant() {
    if (GameOver) {
        return;
    }

    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";

    let num = getRamdomTile();
    if (currmoleTile && currmoleTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {
    if (GameOver) {
        return;
    }

    if (this == currmoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score
    }
    else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER:" + score.toString();
        GameOver = true;
    }
}
