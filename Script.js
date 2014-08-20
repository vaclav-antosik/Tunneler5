
var position = 0;

function main()
{
    var canvasElement = document.getElementById('canvas');
    var canvas = canvasElement.getContext('2d');

    var timerId = window.setInterval(function () { tick(canvas) }, 1000);
}

function tick(canvas)
{
    canvas.clearRect(0, 0, 500, 500);

    position = position + 5;
    canvas.fillText(position, 10, 10, 500);

    canvas.save();
    
    canvas.translate(position, 0);
    canvas.strokeRect(100, 100, 150, 150);

    canvas.restore();
}

addEventListener("load", main);