var iss, spacecraft
var bgImg, issImg, scImg1, scImg2, scImg3, scImg4
var hasDocked = false

function preload() {
  bgImg = loadImage("spacebg.jpg")
  issImg = loadImage("iss.png")
  scImg1 = loadImage("spacecraft1.png")
  scImg2 = loadImage("spacecraft2.png")
  scImg3 = loadImage("spacecraft3.png")
  scImg4 = loadImage("spacecraft4.png")
}

function setup() {
  createCanvas(600,350);
  iss = createSprite(330, 130)
  iss.addImage(issImg)
  iss.scale = 0.25
  spacecraft = createSprite(285, 240)
  spacecraft.addImage(scImg1)
  spacecraft.scale = 0.15
}

function draw() {
  background(bgImg);  
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1, 1)
    if(keyDown("DOWN_ARROW")){
      spacecraft.y+=2
      spacecraft.addImage(scImg2)
    }
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(scImg4)
      spacecraft.x-=1
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(scImg3)
      spacecraft.x+=1
    }
    if(keyDown("UP_ARROW")){
      spacecraft.addImage(scImg2)
      spacecraft.y-=2
    }
  }
  if(spacecraft.y<=(iss.y+10)& spacecraft.x<=(iss.x+30)){
    hasDocked = true
    textSize(25)
    fill("white")
    text("Docking Successful", 200, 300)
  }
  drawSprites();
}