const person={
    name:'Alex',
    age:22
}
const person2={...person}
person2.name='Dima'
console.log(person2.name)
console.log(person.name)
