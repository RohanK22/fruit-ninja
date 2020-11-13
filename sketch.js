let rows = 7
let cols = 7
let dx = 0
let dy = 0
let person = null
let ghost = null
let ghosts = []
let ghostCount = 0
let c = 0
let imgGhost;
let imgGhostBuster;

function preload() {
  imgGhost = loadImage('https://images.app.goo.gl/dw6fjTZiQECe6EJe6')
  
  imgGhostBuster = loadImage('https://images.app.goo.gl/iSC4oHuZpyFn9Aij9')
}

function setup() {
  cnv = createCanvas(400, 400);
  background(150);
  frameRate(30);
  
  dx = 400 / rows
  dy = 400 / cols
  
  person = new Person(dx * rows/2, dy * cols, dx)
  
  
  
  
  console.log(dx + "  "  + dy)

}

function draw() {
  background(150)
  
  drawGridLines(rows , cols)
  
  if(c % 90 == 0){
    ghosts [ghostCount++] = new Ghost(floor(random(0, cols)))
  }
  
  person.show(imgGhostBuster)
  
  for( let i = 0; i< ghostCount; i++){
    ghosts[i].show(imgGhost)
    ghosts[i].moveDown()
  }
  
  if(checkCollision()){
    noLoop()
  }  
  c++
}

function checkCollision(){
  for(let i = 0; i< ghostCount; i++){
    if(((person.x - ghosts[i].xPos) <= 200/7) &&
      (abs(person.y - ghosts[i].yPos) <= 200/7)){
      console.log("Game Over")
      return true
      
    }
  }
}

function keyPressed() {
 if (keyIsPressed === true) {
    if (keyCode === LEFT_ARROW) {
      person.x = person.x - dx
    } else if (keyCode === RIGHT_ARROW) {
      person.x = person.x + dx
    } else if (keyCode === UP_ARROW) {
      person.y = person.y - dy
    } else if (keyCode === DOWN_ARROW) {
      person.y = person.y + dy
    }
  }
}



function drawGridLines(rows,cols){
  stroke(0)
  for(let i = 0; i<rows ; i++){
    line( i * dx , 0 , i * dx ,  400 )
  }
  
  for( i = 0; i<cols ; i++){
    line( 0 , i * dx ,400 ,  i * dx )
  }
}
