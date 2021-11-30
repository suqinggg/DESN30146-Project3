// Learn from https://www.youtube.com/watch?v=QYu9VZybBDc&list=LL&index=1&t=3062s
// Base code from https://editor.p5js.org/ambikajo/sketches/Xib0zWz1x


let vid;
let font;



function preload(){
    
//    Downloaded font from:https://www.1001freefonts.com/modern-fonts-14.php
    
  font = loadFont("Typolino.otf")
}


function setup() {
  createCanvas(650, 1050, WEBGL);
    
  vid = createCapture(VIDEO)
  vid.hide()
  // vid.side()
  angleMode(DEGREES)
  textFont(font)
  textSize(50)
}

function draw() {
  background(255, 179, 7);
  // noStroke()
  // translate(width / 2, height / 2)
  for (angle = 0; angle < 360; angle += 45) {
    textureMode(NORMAL);
      
    let r = 270
    x = r * cos(angle)
    y = r * sin(angle)
    x2 = r * cos(45 + angle)
    y2 =r * sin(45 + angle)
    texture(vid)
    beginShape(TRIANGLES);
    vertex(0, 0, 0, 0);
    vertex(x, y, 0, 1);
    vertex(x2, y2, 1, 1);
    endShape()
      
      
//    push()
//    noStroke()
//    fill(angle/2,angle) 
//    text("",-50,-angle/3-300,250)
//    pop()
      
      
//  Upper text 
  
    push()
    fill(255,255,255)
    text("Kaleidoscope",-165,-400)
    pop()
      
      
//   Bottom Text
   
    push()
    fill(255,255,255)
    text("QUEEN STREET STATION",-270,450)
    pop()
      
      

  }
}