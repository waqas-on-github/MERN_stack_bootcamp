
class Animale {
  constructor (name ,age ) {
    this.name =name,
    this.age=age 
  }

  speak() {
    return `your ${this.name} has age ${this.age}`
  }
  
}


let dog = new  Animale('mypet' ,10)
console.log(dog.speak()); 



// point to be noted implementaion of classed is classical constructor and prtotypical way so class are just syntahic suger under 
// the hood they are 



