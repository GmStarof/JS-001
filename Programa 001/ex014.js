var num = [ 1, 2, 3, ]
var num1 = 2
var num2 = num.indexOf(4)
num.length
num[3] = 4
num.push(5)
console.log(num)
for(var c = 0; c < num.length; c++){
    console.log(`${c} ${num[c] }`)
}
for( num1 in num){
    console.log(`${num1} ${num[num1]}`)
}
if( num2 == -1){
    console.log(`O valor não foi encontrado.`)
}else{
    console.log(`${num2}`)
}