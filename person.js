
class Person {
    constructor() {
      this.x = 200
      this.y = 200
      this.width = 200 / 7
    }
  
    show(img){
      fill('#FF00FF')
      image(img, this.x - this.width/2,this.y- this.width/2,this.width, this.width)
      noFill()
    }
  
    move(){
      
    }
  }