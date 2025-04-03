function dibujarObjetos(){
    
}
function setup() {
    createCanvas(500, 500); 
    background(blue);        
    dibujarObjetos();

}

function draw(){
    //Dibujar todo
    background(blue);
    dibujarObjetos();
    fill(255);      
    textSize(20);
    
    
}

function keyPressed(){
    console.log(key);

    switch (key) {
        case 'w':
            break;
    }

}