
var position = 0;
var increment = 1;
var rotation = 0;
var tickCounter = 0;

function main()
{
    var canvasElement = document.getElementById('canvas');
    var canvas = canvasElement.getContext('2d');

    var timerId = window.setInterval(function () { tick(canvas) }, 50);
}

function tick(canvas)
{
    tickCounter++;

    canvas.clearRect(0, 0, 1300, 1000);

    rotation = rotation + 0.01;
	position = (position + increment);
	if (position == 100 || position == 0){
		increment =- increment;
	}
	canvas.fillStyle = 'red';

	for (var q = 0; q < 3000; q = q + 10)
    {
        for (var w = 0; w < 1000; w = w + 10)
        {
            canvas.save();
            canvas.translate(position, 0);
            canvas.strokeRect(q, w, 10, 10);
            canvas.fillRect(q-2, w-2, 8, 8);

            canvas.restore();
        }
    }


	    for (var i = 0; i < 5; i++) {
	        canvas.save();
	        canvas.translate(100 + (200 * i), 200 + position);
	        canvas.rotate(rotation * Math.PI);

	        canvas.strokeRect(-50, -50, 100, 100);
	        canvas.fillRect(-48, -48, 96, 96);
	        canvas.clearRect(-46, -46, 90, 90);

	        canvas.restore();
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