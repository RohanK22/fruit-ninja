class Ghost{
  constructor(col){
    this.canvasWidth = 400
    this.numOfCol = 7
    this.halfBox = this.canvasWidth/(2*this.numOfCol)
   
    this.xPos = this.halfBox*(2*col + 1)
    this.yPos = this.halfBox
  }
 
  moveDown(){
    this.yPos += this.halfBox / 30
   
    if(this.yPos == this.canvasWidth - this.halfBox){
      return true
    }
  }
  
  show(img){
    fill(255)
    image(img, this.xPos-this.halfBox/2,this.yPos-this.halfBox/2, this.halfBox, this.halfBox)
    noFill()
  }
}