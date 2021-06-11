// Opdracht 018: Function arguments

console.log('Hallo Winc Academy studenten');


const wallPaint = function (colorPaint) {
    console.log("The wall has been painted " + colorPaint);

};

wallPaint('red');


const wallColor = ['green', 'orange', 'grey'];

wallPaint(wallColor[0]);


const wallPaint2 = function (wallColor) {
    console.log("The north wall has been painted " + wallColor[1]);
    console.log("The south-east wall has been painted " + wallColor[2]);

};

wallPaint2(wallColor);