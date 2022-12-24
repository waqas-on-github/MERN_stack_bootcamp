// **Let's Try To  Know Why We Need Arrays In Programming.**

// let's try this scenario wee need to write a straightforward program average to five numbers.

// let  a=1 ,b=2 ,c=3 ,d=4 ,e=5;
// let avarage1= (a+b+c+d+e) /5
// console.log(avarage1 ) 


// more efficent way 
// **Soulution **

let numbers =[1,2,5,7,8]

// // check length of array 

console.log(numbers.length)


//  ways to acess data in array 


console.log(numbers[0])


// update data 

numbers[2] ='mydog';


console.log(numbers)

// delete data 

delete numbers[3]

console.log(numbers)


// problem solutuion

let avarage=0;

let total =0 ;
numbers =[1,2,3,4]

for(let i=0 ;i<numbers.length ;i++ ){
    total +=numbers[i]
}

avarage=total/numbers.length
console.log(avarage)







