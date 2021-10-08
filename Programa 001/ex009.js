var idade = 75
console.log(`Você tem ${idade}, anos `)
if( idade < 16) {
    console.log( 'Não pode votar')
}
else{
    if( idade >= 16 || idade > 67) 
    {console.log('Voto opcional')}
    else{
        console.log('Voto obrigatorio!')
    }
}
