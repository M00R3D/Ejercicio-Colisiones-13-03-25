let rect_a = {};
let rect_b = {};

function setup() {
    createCanvas(500, 500); 
    rect_a = {
        x: 220,
        y: 230,
        w: 30,
        h: 20
    };
    rect_b = {
        x: mouseX,
        y: mouseY,
        w: 20,
        h: 30
    };
}

function draw() {
    background(0, 0, 0  );
    rect_b.x = mouseX;
    rect_b.y = mouseY;

    if (rectsCollide(rect_a.x, rect_a.y, rect_a.w, rect_a.h, rect_b.x, rect_b.y, rect_b.w, rect_b.h)) 
    {
        fill('blue'); 
    } else {fill('green');}
    rect(rect_a.x, rect_a.y, rect_a.w, rect_a.h);
    rect(rect_b.x, rect_b.y, rect_b.w, rect_b.h);

    fill(255);
    textSize(20);
    text("Mueve el rectángulo", 10, 30);
}

function rectsCollide(x1, y1, w1, h1, x2, y2, w2, h2) {
    return (
        x1 < x2 + w2 &&
        x1 + w1 > x2 &&
        y1 < y2 + h2 &&
        y1 + h1 > y2
    );
}
