const a=10
function MyFn(){
    function innerFn(){
        console.log(a)
    }
    innerFn()
}
MyFn()
