var agora = new Date()
var hora = agora.getHours()
console.log(`Olá, são exatamrente ${hora} horas.`)
if( hora <= 12 ) {
    console.log('Bom dia!')
}
    else if ( hora <= 18) {
        console.log('Boa tarde!')
    }
    else {
        console.log('Boa noite!')
    }