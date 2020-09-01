let canvas = document.createElement('canvas');
let context = canvas.getContext('2d');

let path = {
    start: {},
    movement: []
};
let color = '#fff';
let paths = [];
let isClicked = false;

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
context.fillStyle = '#000';
context.fillRect(0, 0, canvas.width, canvas.height);

let element = document.getElementById('canvas');
element.appendChild(canvas);


document.addEventListener('mousedown', (e) => {
    let x = e.clientX;
    let y = e.clientY;
    isClicked = true;
    context.beginPath();
    context.moveTo(x, y);
    path.start.x = x;
    path.start.y = y;
});

document.addEventListener('mousemove', (e) => {
    if (isClicked) {
        context.strokeStyle = color;
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        path.movement.push({
            x: e.clientX,
            y: e.clientY
        });
    }
})

document.addEventListener('mouseup', (e) => {
    isClicked = false;
})