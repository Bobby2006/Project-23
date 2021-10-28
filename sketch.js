const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;

var playerArcher, archerImg;

var angle = 90;

var playerArrow;

function preload() {
  backgroundImg = loadImage("assets/background.png");
  baseimage = loadImage("assets/base.png");
  playerimage = loadImage("assets/player.png");

  archerImg = loadImage("assets/playerArcher.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, 190, 50, 180, options);
  World.add(world,player)

  playerArcher = new PlayerArcher(325, 250, 100, 80);

  playerArrow = new PlayerArrow(playerArcher.body.position.x, playerArcher.body.position.y, 100, 10);
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,50,180)
  
  /*push();
  imageMode(CENTER);
  //image(archerImg, playerArcher.body.position.x, playerArcher.body.position.y, 100, 80);
  pop();*/

  playerArcher.display();
  playerArrow.display();

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}




