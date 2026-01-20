//splice() = changes the contents of an array by removeing, replaceing, or adding elements.

//let myNumbers = [0,1,2,3,4,5,6,7,8]

//let myNewNumbers = myNumbers.splice(0, 5) // removeing elements fro array

//console.log(myNewNumbers);

//console.log(myNumbers) 




//let myNumbers = [0,1,2,3,4,5,6,7,8]

//let myNewNumbers = myNumbers.splice(0, 4, "adding commit in center") // replaceing elements from array

//console.log(myNewNumbers);

//console.log(myNumbers) 




//let myNumbers = [0,1,2,3,4,5,6,7,8]

//let myNewNumbers = myNumbers.splice(4 , 1, "stars at sky") // removeing elements from one single element from array

//console.log(myNewNumbers);

//console.log(myNumbers) 




let myNumbers = [0,1,2,3,4,5,6,7,8]

let myNewNumbers = myNumbers.splice(3, 0, "Added a value") // adding element inside array without effecting other elements

console.log(myNewNumbers);

console.log(myNumbers) 