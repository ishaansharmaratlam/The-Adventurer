var player,playerWalk,playersWalk
var w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,ins
var inv1,inv2,inv3,inv4,inv5,inv6,inv7,inv8,inv9,blk,blk2,ci,blk3,blk4
var war,warImg
var txt,txtImg
var ground, groundImg
var hwall,vwall
var tunnel,tunnelImg,t2,t3
var bg,bgImg,bg2,bg3,bg4,bgImg2,wbg,wbgImg
var wd,wdImg
var gt
var boy,girl,bimg,gimg,stp,stp2
var cyc,cycImg,by,byImg,gl,glImg
var door,doorImg
var winsound,wooshsound,outsound,loseSound
var wc,wcImg
var gender

function preload() {
 playerWalk = loadAnimation("walk1.png","walk2.png");
 hwall = loadImage("Hbush.png")  
 vwall = loadImage("Vbush.png") 
 warImg = loadImage("war.png")
 txtImg = loadImage("warnnn.png")
 tunnelImg = loadImage("cave.png")
 bgImg = loadImage("caveinside.png")
 bgImg2 = loadImage("caveinside_2.png")
 wdImg = loadImage("welldone.png")
 bimg = loadImage("adventurer_stand.png")
 gimg = loadImage("female_stand.png")
 cycImg = loadImage("cyc.png")
 glImg = loadImage("gl.png")
 byImg = loadImage("by.png") 
 stp = loadImage("female_stand.png")
 stp2 = loadAnimation("ad_walk","ad_walk2")
 playersWalk = loadAnimation("female_walk1.png","female_walk2.png")
 doorImg = loadImage("door.png")
 wbgImg = loadImage("winbg.jpg")
 winsound = loadSound("winner.mp3")
 wooshsound = loadSound("woosh.mp3")
 wcImg = loadImage("wc.png")
 outsound = loadSound("out.mp3")
 loseSound = loadSound("lose.mp3")

}

function setup(){

createCanvas(1200,800)

l = createSprite(-360,420,10,150)
l.shapeColor = "cyan"

boy = createSprite(-300,400,50,50)
boy.addImage("boy",bimg)

by = createSprite(-280,510,50,50)
by.addImage("by",byImg)
by.scale = 0.6

girl = createSprite(-450,400,50,50)
girl.addImage("girl",gimg)

gl = createSprite(-450,500,50,50)
gl.addImage("gl",glImg)
gl.scale = 0.6

player = createSprite(20,400,50,50)
player.shapeColor ="yellow"
player.scale = 0.8

gt = createSprite(650,300,50,150)
gt.shapeColor = "indigo"
gt.visible = false;

cyc = createSprite(-400,330,50,50)
cyc.addImage("cyc",cycImg)
cyc.scale = 0.8

wd = createSprite(719,200,50,50)
wd.addImage("wd",wdImg)
wd.scale = 0.2
wd.visible = false;

bg = createSprite(4409,512,50,50)
bg.addImage("bg",bgImg)
bg.scale = 1.5

bg2 = createSprite(5775,512,50,50)
bg2.addImage("bg",bgImg)
bg2.scale = 1.5

tunnel = createSprite(1930,514,50,50)
tunnel.addImage("tunnel",tunnelImg)
tunnel.setCollider("circle",100,35,120)

wc = createSprite(2428,314,50,50)
wc.addImage("wc",wcImg)

t2 = createSprite(2219,514,50,50)
t2.setCollider("circle",100,35,120)
t2.addImage("t2",tunnelImg)

t3 = createSprite(2520,514,50,50)
t3.setCollider("circle",100,35,120)
t3.addImage("t3",tunnelImg)

inv1 = createSprite(1200,800,10200,10)

inv2 = createSprite(1200,1,10,920)

inv3 = createSprite(-1,800,10,10200)

inv4 = createSprite(10,3,10200,10)

inv5 = createSprite(1200,500,50,150)

inv6 = createSprite(1200,1250,10,1350)

inv7 = createSprite(1200,749,50,50)

inv8 = createSprite(1260,510,50,50)

inv9 = createSprite(1200,400,50,50)

txt = createSprite(235,150,50,50)
txt.addImage("txt",txtImg)
txt.scale = 0.1

txt.depth = 1
war = createSprite(170,100,50,50)
war.addImage("war",warImg)
war.depth = 0.5
war.scale = 0.6

w1 = createSprite(350,500,50,50)
w1.scale = 0.5
w1.addImage("wall1",hwall)
w1.shapeColor = "green"

w2 = createSprite(350,300,50,50)
w2.scale = 0.5
w2.addImage("w2",hwall)
w2.shapeColor = "green"

w3 = createSprite(500,190,1000,50)
w3.addImage("w3",vwall)
w3.scale = 0.5
w3.shapeColor = "green"

w4 = createSprite(615,50,1000,50)
w4.addImage("w4",hwall)
w4.scale = 0.5
w4.shapeColor = "green"

w5 = createSprite(750,200,50,50)
w5.addImage("w5",hwall)
w5.scale = 0.5
w5.shapeColor = "green"

w6 = createSprite(860,50,50,50)
w6.addImage("w6",hwall)
w6.scale = 0.5
w6.shapeColor = "green"

w7 = createSprite(870,290,50,50)
w7.addImage("w7",vwall)
w7.scale = 0.5
w7.shapeColor = "green"

w8 = createSprite(1000,165,50,50)
w8.scale = 0.5
w8.addImage("w8",vwall)
w8.shapeColor = "green"

w9 = createSprite(500,615,50,50)
w9.scale = 0.5
w9.addImage("w9",vwall)
w9.shapeColor = "green"

w10 = createSprite(650,727,50,50)
w10.shapeColor = "green"
w10.addImage("w10",hwall)
w10.scale = 0.5

w11 = createSprite(900,727,50,50)
w11.addImage("w11",hwall)
w11.scale = 0.5

w12 = createSprite(900,580,50,50)
w12.addImage("w12",hwall)
w12.scale = 0.5

w13 = createSprite(750,390,50,50)
w13.addImage("w13",hwall)
w13.scale = 0.5

w14 = createSprite(1000,430,50,50)
w14.addImage("w14",vwall)
w14.scale = 0.5

blk = createSprite(2800,570,20,11150)
blk2 = createSprite(4360,770,20,11150)
blk2.visible = false;

ci = createSprite(7570,953,50,50)
ci.addImage("ci",bgImg2)
ci.scale = 1.2

blk3 = createSprite(6320,800,5050,20)

blk4 = createSprite(6320,700,5050,20)

door = createSprite(8050,750,50,50)
door.addImage("door",doorImg)
door.scale = 0.2
door.setCollider("rectangle",10,10,600,1000)

wbg = createSprite(15000,770,50,50)
wbg.addImage("wbg",wbgImg)







}

function draw(){
  background(0)

  camera.x = player.x
  camera.y = player.y

console.log(player.x)
console.log(player.y)



  inv9.depth = 0
  inv8.depth = 0
  player.depth = 50

  inv1.visible = false;

  inv2.shapeColor = "brown"

  inv3.visible = false;

  inv4.visible = false;

  inv5.shapeColor = "white"

  inv6.shapeColor = "brown"

  inv7.shapeColor = "red"

  inv8.visible = false;

  inv9.visible = false;

  blk.visible = false;

  blk3.visible = false;

  blk4.visible = false;

  wc.visible = false;




  player.collide(inv1);

  player.collide(inv2);

  player.collide(inv3);

  player.collide(inv4);

  player.collide(inv6);

  player.collide(inv5);

  player.collide(txt);

  player.collide(blk);

  player.collide(blk2);

  player.collide(blk3);

  player.collide(blk4);

 

  //player.collide(door);


  inv5.depth = 30
  wd.depth = 30
  //tunnel.debug = true;
  //t2.debug = true;
  //t3.debug = true;
  //door.debug = true;

  
  
  


  
 
  if(keyDown("b")){
  
    gender = 1
    player.addAnimation("boy",bimg)
    player.addAnimation("walking", playerWalk);
    wooshsound.play()
   
  
  }

  if(keyDown("g")){

    gender = 2
    player.addAnimation("girl",gimg)
    player.addAnimation("walking",playersWalk)
    wooshsound.play()
  
  }

  if(keyWentDown("left") && gender===1){
    player.velocityX = -10
    player.changeAnimation("walking",playerWalk)
 }

  if(keyWentUp("left") && gender===1){
    player.velocityX = 0
    player.changeAnimation("boy",bimg)
 }

 if(keyWentDown("right") && gender===1){
  player.velocityX = 10
  player.changeAnimation("walking",playerWalk)

 }

 if(keyWentUp("right") && gender===1){
   player.velocityX = 0
   player.changeAnimation("boy",bimg)
 }



   if(keyWentDown("up") && gender===1){
    player.velocityY = -10
    player.changeAnimation("walking",playerWalk)
  }

   if(keyWentUp("up") && gender===1){
     player.velocityY = 0
     player.changeAnimation("boy",bimg)
   }
 
   if(keyWentDown("down") && gender===1){
    player.velocityY = 10
    player.changeAnimation("walking",playerWalk)
}

   if (keyWentUp("down") && gender===1){
    player.velocityY = 0
    player.changeAnimation("boy",bimg)
   }




   if(keyWentDown("left") && gender===2){
    player.velocityX = -10
    player.changeAnimation("walking",playersWalk)
 }

  if(keyWentUp("left") && gender===2){
    player.velocityX = 0
    player.changeAnimation("girl",gimg)
 }

 if(keyWentDown("right") && gender===2){
  player.velocityX = 10
  player.changeAnimation("walking",playersWalk)

 }

 if(keyWentUp("right") && gender===2){
   player.velocityX = 0
   player.changeAnimation("girl",gimg)
 }



   if(keyWentDown("up") && gender===2){
    player.velocityY = -10
    player.changeAnimation("walking",playersWalk)
  }

   if(keyWentUp("up") && gender===2){
     player.velocityY = 0
     player.changeAnimation("girl",gimg)
   }
 
   if(keyWentDown("down") && gender===2){
    player.velocityY = 10
    player.changeAnimation("walking",playersWalk)
}

   if (keyWentUp("down") && gender===2){
    player.velocityY = 0
    player.changeAnimation("girl",gimg)
   }


   if(keyDown("space")){
    player.velocityX = 0
    player.velocityY = 0
 }

  if(player.isTouching(w1)){
    player.x = 20
    player.y = 400
    player.velocityX = 0
    player.velocityY = 0
    outsound.play()
    
  }

  if(player.isTouching(w2)){
    player.x = 20
    player.y = 400
    player.velocityX = 0
    player.velocityY = 0
    outsound.play()   

  }

  if(player.isTouching(w3)){
    player.x = 20
    player.y = 400
    player.velocityX = 0
    player.velocityY = 0
    outsound.play()

  }

  if(player.isTouching(w4)){
    player.x = 20
    player.y = 400
    player.velocityX = 0
    player.velocityY = 0
    outsound.play()
   
  }

  if(player.isTouching(w5)){
    player.x = 20
    player.y = 400
    player.velocityX = 0
    player.velocityY = 0
    outsound.play()
    
  }

  if(player.isTouching(w6)){
    player.x = 20
    player.y = 400
    player.velocityX = 0
    player.velocityY = 0
    outsound.play()
    
  }

  if(player.isTouching(w7)){
    player.x = 20
    player.y = 400
    player.velocityX = 0
    player.velocityY = 0
    outsound.play()
    
  }

  if(player.isTouching(w8)){
    player.x = 20
    player.y = 400
    player.velocityX = 0
    player.velocityY = 0
    outsound.play()
    
  }

  if(player.isTouching(w9)){
    player.x = 20
    player.y = 400
    player.velocityX = 0
    player.velocityY = 0
    outsound.play()
   
  }

  if(player.isTouching(w10)){
    player.x = 20
    player.y = 400
    player.velocityX = 0
    player.velocityY = 0
    outsound.play()
    
  }
  if(player.isTouching(w11)){
    player.x = 20
    player.y = 400
    player.velocityX = 0
    player.velocityY = 0
    outsound.play()
    
  }
  if(player.isTouching(w12)){
    player.x = 20
    player.y = 400
    player.velocityX = 0
    player.velocityY = 0
    outsound.play()
    
  }
  if(player.isTouching(inv7)){
    inv5.velocityY = 1
    player.changeAnimation("player",stp2)
    
  }
   if(inv5.isTouching(inv7)){
    inv5.velocityY = 0
    inv5.shapeColor = "red"
  }
   if(player.isTouching(w13)){
    player.x = 20
    player.y = 400
    player.velocityX = 0
    player.velocityY = 0
    outsound.play()
    
  }
   if(player.isTouching(inv8)){
    inv5.velocityY = -1
  }
   if(inv5.isTouching(inv9)){
     inv5.velocityY = 0
  }
   if(player.isTouching(w14)){
    player.x = 20
    player.y = 400
    player.velocityX = 0
    player.velocityY = 0
    outsound.play()
    
  }
  if(player.isTouching(tunnel)){
    player.x = 4459
    player.y = 770

  }
  if(player.isTouching(t2)){
     
    wc.visible = true;
   

  }
  if(player.isTouching(t3)){
     
    wc.visible = true;
    

  }
  if(player.isTouching(door)){
    player.x = 15000
    player.y = 770
    player.velocityX = 0
    player.velocityY = 0
    wd.x = player.x
    wd.y = player.y-100
   
    wd.visible = true;   
    winsound.play()

  }


  drawSprites()  
 
}

function mouseDragged(){
    
}


function mouseReleased(){

}

function keyPressed(){
   
}

