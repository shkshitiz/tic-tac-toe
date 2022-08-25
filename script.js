
var pBoxes = document.querySelectorAll('section');
// var boxes = pBoxes[i].querySelectorAll('div');
var boxPosition = []

var counter = 0;

var winSplat = new Audio('sfx/zapsplat_cartoon_splat_fart_squelch_80667.mp3');

var win = false;

var winColor;

var redScore = 0;
var blueScore = 0;

var p1Score = document.querySelector('.p1');
var p2Score = document.querySelector('.p2');

// for(let rounds = 3; rounds < 3; rounds++) {} 

for (let i = 0; i < pBoxes.length; i++) { 
    var boxes = pBoxes[i].querySelectorAll('div');
    boxPosition.push(boxes);
    pBoxes[i].addEventListener('click', function(event) {
        let box = event.target;
        if (box.className.includes("null")) {
            if (counter % 2 == 0) {
                box.classList.add('red');
            } else { 
                box.classList.add('blue');
            }
            box.classList.remove('null');
            counter++;
            turnChange();
            splat();
            checkX('red');
            checkX('blue');

            checkY('red');
            checkY('blue');

            checkD('red');
            checkD('blue');

            if (winColor == 'red' || winColor == 'blue') {
                winSplat.play();
                resetBox();
                counter = 0;
                if (winColor == 'red') {
                    redScore++;
                    p1Score.textContent = ('Player 1 Score: ' + redScore)
                    listScore(winColor)
                } else if (winColor == 'blue') {
                    blueScore++;
                    p2Score.textContent = ('Player 2 Score: ' + blueScore)
                    listScore(winColor)
                }
                winColor = null;
            } else if (counter >= 9) {
                document.querySelector('h2').textContent = "It's a tie! Player 1's turn"
                resetBox();
                counter = 0;
            }
            
            winGame();
        }
    })
}

// function checkBox() {}
// x check
function checkX(color) {
    for (let a = 0; a < boxPosition.length; a++) {
        if (boxPosition[a][0].className.includes(color) && boxPosition[a][1].className.includes(color) && boxPosition[a][2].className.includes(color)) {
            return (winColor = color);
        }
    }
}
// y check
function checkY(color) {
    for (let b = 0; b < boxPosition.length; b++) {
        if (boxPosition[0][b].className.includes(color) && boxPosition[1][b].className.includes(color) && boxPosition[2][b].className.includes(color)) {
            return (winColor = color);
        }
    }
}
// diagonal check
function checkD(color) {
    if ((boxPosition[0][0].className.includes(color) && boxPosition[1][1].className.includes(color) && boxPosition[2][2].className.includes(color)) || (boxPosition[0][2].className.includes(color) && boxPosition[1][1].className.includes(color) && boxPosition[2][0].className.includes(color))) {
        return (winColor = color);
    }
}

// function roundEnd() {}

function resetBox() {
    for (let j = 0; j < 9; j++) {
        var box = document.getElementById(j + 1);
        box.classList.remove('red');
        box.classList.remove('blue');
        box.classList.add('null');
    }
}

function turnChange() {
    if (counter % 2 == 0) {
        document.querySelector('h2').textContent = "Player 1's turn"} else {
        document.querySelector('h2').textContent = "Player 2's turn"
    }
}

function winGame() {
    if (redScore >= 3 || blueScore >= 3) {
        if (redScore == 3) {
            document.querySelector('body').className = 'BGred';
            document.querySelector('h2').textContent = "Player 1 wins!";
        } else {
            document.querySelector('body').className = 'BGblue'
            document.querySelector('h2').textContent = "Player 2 wins!"
        }
        splat();
        splat();
        splat();
        splat();
    }
}

function splat() {
    var splat = [new Audio('sfx/zapsplat_cartoon_squelch_wet_drop_003_47586.mp3'),new Audio('sfx/zapsplat_cartoon_squish_squelch_wet_005_14504.mp3'),new Audio('sfx/zapsplat_cartoon_squish_squelch_wet_004_14503.mp3')]

    var randomSplat = Math.floor(Math.random() * splat.length);
    splat[randomSplat].play();
} 

function listScore(winColor) {
    var createList = document.createElement('li');
    var redList = document.querySelector('ul.p1');
    var blueList = document.querySelector('ul.p2');

    if (winColor == 'red') {
        redList.appendChild(createList).className = 'red';
        document.querySelector('h2').textContent = "Player 1 wins! Player 1's turn"
        // for (let r = 0; r < redList.children.length; r++) {
        //     redList.children[r].classList.add('red')
        // }
    } else if (winColor == 'blue') {
        blueList.appendChild(createList).className = 'blue';
        document.querySelector('h2').textContent = "Player 2 wins! Player 1's turn"
    }
}
// function sleep(miliseconds) {
//     var currentTime = new Date().getTime();
 
//     while (currentTime + miliseconds >= new Date().getTime()) {
//     }
//  }