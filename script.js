console.log("Welcome to Tic Tac Toe");

let music = new Audio("ting.mp3");
let move = new Audio("ting.mp3");
let gameover = new Audio("ting.mp3");
let turn = "X";
let overgame = false;

const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 0, 10, 0],
        [3, 4, 5, 0, 30, 0],
        [6, 7, 8, 0, 50, 0],
        [0, 3, 6, -10, 30, 90],
        [1, 4, 7, 0, 30, 90],
        [2, 5, 8, 10, 30, 90],
        [0, 4, 8, 0, 30, 45],
        [2, 4, 6, 0, 30, 135]
    ];

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won";
            overgame = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "100px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = "30vw";
            gameover.play();
        }
    });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !overgame) {
            boxtext.innerText = turn;
            turn = changeTurn();
            move.play();
            checkWin();
            if (!overgame) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});

document.getElementById("reset").addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    overgame = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
});
