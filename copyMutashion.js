const person={
    name:'Alex',
    age:22
}
const person2=Object.assign({},person)
person2.age=23
console.log(person2.age)
console.log(person.age)