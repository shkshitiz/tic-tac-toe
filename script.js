
var pBoxes = document.querySelectorAll('section');
// var boxes = pBoxes[i].querySelectorAll('div');

var counter = 0;

var win = false;

var boxPosition = []

var winColor;

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
            checkX('red');
            checkX('blue');

            checkY('red');
            checkY('blue');

            checkD('red');
            checkD('blue');

            if (winColor == 'red' || winColor == 'blue') {
                alert(winColor + ' wins');
            } else if (counter >= 9) {
                alert('tie');
            }
        }
    })
}


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
