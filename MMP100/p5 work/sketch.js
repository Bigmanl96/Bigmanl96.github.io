//let blinkAmount = 0;

let angle;


function setup() {
  createCanvas(400, 400);

}

function draw() {
  
  console.log(mouseX + ", " + mouseY);
  
  background(220);
  stroke(0);
 
  fill(255,204,0);  //face
  rect(157, 130, 85, 155, 120, 105, 100, 105);
  fill(255,204,0)
  ellipse(width/2-50,height/2+15, 15, 25, -15)//right ear
  ellipse(width/2+50,height/2+15, 15, 25, -15)//left ear
  noFill();
  arc(width/2 -1,height/2 -59, 60, 45, PI,2*PI, OPEN);//hair one
  arc(width/2-1,height/2 -62, 60, 45, PI,2*PI, OPEN);//hair two
  beginShape();
  vertex(154,200);  // right line hair coordinate
  vertex(158,190);  // right line hair coordinate stops
  vertex(162,200);  // right line hair coordinate ends
  endShape();
  beginShape();
  vertex(154 +85,200); //left line hair coordinate
  vertex(158 +85,190); //left line hair coordinate stops
  vertex(162 +85,200); //left line hair coordinate ends
  endShape();
   blinkAmount = map (mouseX, 0, width, 0, 1.5, 1.5);
   blinkAmount = map (mouseY, 0, width, 0, 1.5, 1.5);
  
  fill(255); //eyeballs
  ellipse(width/2 - 20, height/2 - 15, 40);
  ellipse(width/2 + 20, height/2 - 15, 40);
   angle= map(mouseY, 0, height, 0, PI/2, 1)
  fill(255,204,0)
    arc(width/2 - 20, height/2 - 15, 40,40, 3*PI/2 -angle, 3*PI/2 +angle , CHORD);
  arc( width/2 + 20, height/2 - 15, 40,40, 3*PI/2 -angle, 3*PI/2 +angle , CHORD);
  noStroke();

  fill(0);//corneas
  ellipse(width/2 - 10, height/2 -10, 10,10);
  ellipse(width/2 + 15, height/2 -10, 10,10);
  
  noFill();//nose
  stroke(0);
  circle(width/2, height/2 +3, 15);
  
  
  fill(0);//mouth
  ellipse(width/2 , height/2 +45, 65);
  fill(139,0,0)
  ellipse(width/2, height/2 +60, 28,-35)
  fill(210, 180, 140);//muzzle
  arc(width/2, height/2 +45, 65, 65, 3*PI/2 -angle, 3*PI/2 +angle , CHORD);//mouth up
  arc(width/2, height/2 +45, 65, 65, PI/2 -angle, PI/2 +angle , CHORD);//mouth down
  
  
  textSize(15);
  textAlign(CENTER);
  fill(100, 100,0,0);
  text("Marge, I'm going to Moe's. Won't be home until I'm drunk",200, 300);

  
  
  
  
  
  
  
  
  
  
  
}