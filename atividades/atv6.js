let data = [1,2,3,4,5,6,7,8,9,10]
let par = []
let impar = []

data.map(e=>{
    if(e%2==0){
        par.push(e)
    }else{
        impar.push(e)}
    })


console.log(par)
console.log(impar)
