
class Animale {
  constructor (name ,age ) {
    this.name =name,
    this.age=age 
  }

  speak() {
      console.log(this)
     const shareef= () =>  {
        console.log(this)
      }

      shareef()
    return `your ${this.name} has age ${this.age}`
  }
  

}


let dog = new  Animale('mypet' ,10)
console.log(dog.speak()); 

