const students = [
    {id: 21, name:'omor sani'},
    {id: 25, name:'salman sah'},
    {id: 30, name:'opu bishas'},
    {id: 71, name:'Deepjol'},
];



// const names = students.map(s => s.name);
// console.log(names);
// const ids = students.map(s => s.id);
// console.log(ids);
// const bigger = students.filter(s => s.id>40);
// console.log(bigger);
const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);