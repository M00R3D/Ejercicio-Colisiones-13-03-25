let rect_a = {};
let rect_b = {};
let useCircles = false;

function setup() {
    createCanvas(500, 500); 
    rect_a = { x: 220, y: 230, w: 30, h: 20, r: 15 };
    rect_b = { x: mouseX, y: mouseY, w: 20, h: 30, r: 10 };
}

function draw() {
    background(0, 0, 0);
    rect_b.x = mouseX;
    rect_b.y = mouseY;
    let collision;
    if (useCircles) {
        collision = circlesCollide(rect_a.x, rect_a.y, rect_a.r, rect_b.x, rect_b.y, rect_b.r);
    } else {
        collision = rectsCollide(rect_a.x, rect_a.y, rect_a.w, rect_a.h, rect_b.x, rect_b.y, rect_b.w, rect_b.h);
    }
    
    if (collision) {
        fill('blue');
    } else {
        fill('green');
    }
    
    if (useCircles) {
        ellipse(rect_a.x, rect_a.y, rect_a.r * 2);
        ellipse(rect_b.x, rect_b.y, rect_b.r * 2);
    } else {
        rect(rect_a.x, rect_a.y, rect_a.w, rect_a.h);
        rect(rect_b.x, rect_b.y, rect_b.w, rect_b.h);
    }
    
    fill(255);
    textSize(20);
    if (useCircles) {
        text("Clic para cambiar a rectángulos", 10, 30);
    } else {
        text("Clic para cambiar a círculos", 10, 30);
    }
}

function mousePressed() {
    useCircles = !useCircles;
}

function rectsCollide(x1, y1, w1, h1, x2, y2, w2, h2) {
    return x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2;
}

function circlesCollide(x1, y1, r1, x2, y2, r2) {
    let distSq = (x1 - x2) ** 2 + (y1 - y2) ** 2;
    let radiusSumSq = (r1 + r2) ** 2;
    return distSq <= radiusSumSq;
}
