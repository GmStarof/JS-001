var agora = new Date()
var diasem = agora.getDay()
console.log(`Hoje é ${diasem}`)
switch(diasem){
    case 0 :
        console.log('Domingo')
        break
    case 1 : 
    console.log('segunda')
        break
    case 2 : 
    console.log('terça-feira')
        break
    case 3 :
    console.log('quarta-feira')
        break
    case 5 : 
    console.log('sexta-feira')
        break
    case 6 :
        console.log('sabado')
        break
}