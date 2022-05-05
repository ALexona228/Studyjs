const post={
    title:'My post',
    likesQty:5
}
console.log(post)
JSON.stringify(post)
const postStringified=JSON.stringify(post)
console.log(postStringified)
JSON.parse(postStringified)
