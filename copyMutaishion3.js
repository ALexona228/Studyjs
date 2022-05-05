const person={
    name:'Alex',
    age:22
}
const person2=JSON.parse(JSON.stringify(person))
person2.name='Dima'
console.log(person2.name)
console.log(person.name)
