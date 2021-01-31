var database;
var foodStock;
var dog;
var p;
var dogImg,dogImg1;

function preload(){
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();

  createCanvas(600, 600);
  
  p = new Food();

  dog = createSprite(405,415,20,20);
  dog.addImage(dogImg);
  dog.scale = 0.5

  
}
function draw(){
  background(rgb(46, 139, 87));

  p.getCount();
  
  console.log(foodStock);
  
  //if(foodStock!==undefined){
    if(keyWentDown(UP_ARROW)){
      
      foodStock = foodStock-1
      p.updateCount(222);
      dog.addImage(dogImg1);
    }
  //}



  drawSprites();


  
}



