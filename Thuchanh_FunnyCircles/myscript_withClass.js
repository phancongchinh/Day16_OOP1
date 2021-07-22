function getRandomX() {
    return Math.random() * innerWidth;
}

function getRandomY() {
    return Math.random() * innerHeight;
}

function getRandomHex() {
    return Math.floor(Math.random()*255);
}

function getRandomColor() {
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}

function getRandomRadius () {
    return Math.floor(Math.random()*80);
}

class Circle {
    x;
    y;
    color;
    radius;
    
    constructor (x,y,color,radius) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = radius;
    }
    
    drawCircle() {
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

function drawMultipleCircle(num) {
    for (let i = 0; i < num; i++) {
        let x = getRandomX();
        let y = getRandomY();
        let radius = getRandomRadius();
        let color = getRandomColor();
        let circle = new Circle(x,y,color,radius)
        circle.drawCircle();
    }
}

drawMultipleCircle(100);