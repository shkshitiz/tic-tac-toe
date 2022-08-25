
var pBoxes = document.querySelectorAll('section');
// var boxes = pBoxes[i].querySelectorAll('div');
var boxPosition = []

var counter = 0;

var winSplat = new Audio('zapsplat_cartoon_splat_fart_squelch_80667.mp3');

var win = false;

var winColor;

var redScore = 0;
var blueScore = 0;

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
                    document.querySelector('.p1').textContent = ('Player 1 Score: ' + redScore)
                } else if (winColor == 'blue') {
                    blueScore++;
                    document.querySelector('.p2').textContent = ('Player 2 Score: ' + blueScore)
                }
                winColor = null;
            } else if (counter >= 9) {
                alert('tie');
                resetBox();
                counter = 0;
            }
            
            winGame();

            turnChange();
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
    if (redScore == 3 || blueScore == 3) {
        if (redScore == 3) {
            alert('red wins');
        } else {
            alert('blue wins');
        }
    }
}

function splat() {
    var splat = [new Audio('zapsplat_cartoon_squelch_wet_drop_003_47586.mp3'),new Audio('zapsplat_cartoon_squish_squelch_wet_005_14504.mp3'),new Audio('zapsplat_cartoon_squish_squelch_wet_004_14503.mp3')]

    var randomSplat = Math.floor(Math.random() * splat.length);
    splat[randomSplat].play();
} 