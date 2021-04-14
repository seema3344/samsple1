var Bgsound ,gunsound;
var bg ,bgImg;
var bullet ,bulletImg ,bulletGroup;
var heartImg ,heart1 ,heart2 ,heart3;
var lose ,loseImg;
var police ,policeImg;
var winner ,winnerImg;
var zombie ,zombie1Img ,zombie2Img ,zombie3Img ,zombieGroup;

function preload() {
Bgsound = loadSound("bass.mp3");
gunsound = loadSound("gun_shoot_msg_tone.mp3");

bgImg = loadImage("bg.jpg");
bulletImg  =loadImage("bullet.png");

policeImg = loadImage("police.png");
heartImg = loadImage("heart.png");
loseImg = loadImage("lose.png");
winnerImg = loadImage("winner.png");

zombie1Img = loadImage("zombie1.png");
zombie2Img = loadImage("zombie2.png");
zombie3Img = loadImage("zombie3.png");


}


function setup() {
    createCanvas(1536, 720);
    bg = createSprite(768,360,0,0);
    bg.addImage(heartImg);
    
    bg.debug = true;
}

function draw() {
    background(180);
  drawSprites();
}