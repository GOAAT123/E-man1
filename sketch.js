const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var emanImg, eman;
var ground;

function preload(){
  emanImg=loadImage("PNG/running (1).png", "PNG/running (2).png", "PNG/running (3).png", "PNG/running (4).png", "PNG/running (5).png", "PNG/running (6).png", "PNG/running (7).png", "PNG/running (8).png");
  backgroundImg=loadImage("PNG/city.png");
  copImg=loadImage("PNG/cop.png");
}

function setup() {
  createCanvas(1300,500);
  eman=createSprite(60, 390, 50, 50);
  eman.addImage(emanImg);
  eman.scale=1.4;

  cop=createSprite(1000, 390, 50, 50);
  cop.addImage(copImg);
  cop.scale=0.16;

  ground=createSprite(10, 480, 3000, 15);
}

function draw() {
  background(backgroundImg);  
  drawSprites();
}