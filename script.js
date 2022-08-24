
var pBoxes = document.querySelectorAll('section');
// var boxes = pBoxes[i].querySelectorAll('div');

var counter = 0;

var win = false;


var boxPosition = []

for (let i = 0; i < pBoxes.length; i++) { 
    var boxes = pBoxes[i].querySelectorAll('div');
    boxPosition.push(boxes);      // 
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
        }
    })
}

// x check
checkX();
    
// y check
checkY();

// diagonal check
checkD();

if (win == true) {
    alert('win');
}

function checkX() {
    for (let a = 0; a < boxPosition.length; a++) {
        if (boxPosition[a][0].className.includes('red') && boxPosition[a][1].className.includes('red') && boxPosition[a][2].className.includes('red')) {
            return (win = true);
        }
    }
}

function checkY() {
    for (let b = 0; b < boxPosition.length; b++) {
        if (boxPosition[0][b].className.includes('red') && boxPosition[1][b].className.includes('red') && boxPosition[2][b].className.includes('red')) {
            return (win = true);
        }
    }
}

function checkD() {
    if ((boxPosition[0][0].className.includes('red') && boxPosition[1][1].className.includes('red') && boxPosition[2][2].className.includes('red')) || (boxPosition[0][2].className.includes('red') && boxPosition[1][1].className.includes('red') && boxPosition[2][0].className.includes('red'))) {
        return (win = true);
    }
}



// if (boxPosition[0][0].className.includes('red') && boxPosition[0][1].className.includes('red') && boxPosition[0][2].className.includes('red')) {
//     result = 'red win';
// } else if (boxPosition[0][0] && boxPosition[0][1] && boxPosition[0][2].className.includes('blue')){
//     result = 'blue win';
// }
// console.log(result);

// function clickBlue() {
//     event.target
// }

// function clickRed() {

// }