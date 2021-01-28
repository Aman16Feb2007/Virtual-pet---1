var database;
var foodS, foodStock;
var dog, happyDog;
var writeStock;
function preload(){
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();

  createCanvas(600, 600);
  
  dog = createSprite(405,415,20,20);
  dog.addImage(dogImg);
  dog.scale = 0.5
}
function draw(){
  background(rgb(46, 139, 87));

  if(keyWentDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(dogImg1);
  }



  drawSprites();
}



