
const numbers = [3,4,5,5,6,6,7,];
// const output = [];
// for(let i=0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// function square (element){
//     return element*element;

// }
// const result = numbers.map(function(element){
//     return element * element;
// })
// const result = numbers.map(x => x*x);
// console.log(result);

const result = numbers.filter(x => x < 5);
const result2 = numbers.find(x => x >5);
console.log(result2);