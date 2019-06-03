/*jshint esversion: 6 */

let xOffset, yOffset;
let xOffsetStart, yOffsetStart;
let xInc, yInc;
let time = 0;
let rad = 100;

let currentX, currentY;



function setup(){
    createCanvas(floor(window.innerWidth*0.95), floor(window.innerHeight*0.95));
    position = createVector(width/2, height/2);
    xInc = 0.01;
    yInc = 0.01;
    xOffset = xOffsetStart = 0;
    yOffset = yOffsetStart = 0;
    currentX = 0;
    currentY = height/2;
    noiseDetail(16);
}

function draw(){
    background(0, 0, 0);
    stroke(255);
    noFill();
    let points = [];
    for(let k = 450; k < 500; k+= 50){    
        points.push([]);
        for(let i = 0; i <= 360; i += 0.5){
            let noiseX = cos(radians(i));
            let noiseY = sin(radians(i));
            let r = noise(noiseX+xOffsetStart+mouseX/width,noiseY+yOffsetStart+mouseY/height,k/500+time)*k;
            points[points.length-1].push(p5.Vector.fromAngle(radians(i)).mult(r));
        }
    }

    points.forEach((row) => {
        beginShape();
        row.forEach((point) =>{
            vertex(point.x + width/2, point.y + height/2);
        });
        endShape();
    })
    points = [];
    time += 0.01;
    xOffsetStart += 0.001;
    yOffsetStart += 0.001;
}