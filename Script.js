
var position = 0;
var rotation = 0;
var tickCounter = 0;
var imageObj = new Image();

function main()
{
    var canvasElement = document.getElementById('canvas');
    var canvas = canvasElement.getContext('2d');

    var audio = new Audio('http://freedownloads.last.fm/download/252730071/Cosmic%2BMorning.mp3');
    audio.play();

    imageObj.src = 'http://www.orangedonkey.net/wp-content/uploads/2012/04/I-Have-No-Idea-What-I-am-Doing-17.jpg';

    var timerId = window.setInterval(function () { tick(canvas) }, 50);
}

function tick(canvas)
{
    tickCounter++;

    canvas.clearRect(0, 0, 1300, 1000);

    position = position + 0.01;
    rotation = rotation + 0.001;

    canvas.save();

    for (i = 0; i < 1000; i = i + 10)
    {
        canvas.translate(200 + i, 200);
        canvas.rotate(rotation * Math.PI);

        canvas.fillStyle=getRandomColor();

        canvas.strokeRect(-50, -50, 100, 100);
        canvas.fillRect(-48, -48, 96, 96);
        canvas.clearRect(-46, -46, 90, 90);
    }

    canvas.restore();

    canvas.font="50px Georgia";

    if (tickCounter % 20 == 0)
    {
        canvas.fillStyle = getRandomColor();
    }   

    canvas.fillText("I have no idea what I'm doing!", 50, 200);

    if (tickCounter > 500) {
        canvas.drawImage(imageObj, 800, 20);
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

addEventListener("load", main);