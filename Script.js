

function main()
{
    var canvasElement = document.getElementById('canvas');
    var canvas = canvasElement.getContext('2d');

    canvas.strokeRect(100, 100, 120, 120);
}

addEventListener("load", main);