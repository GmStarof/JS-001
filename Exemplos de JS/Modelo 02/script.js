alert('Olá!')
function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = window.document.getElementById('txtano')
var res = window.document.getElementById('res')

if (fano.value.length == 0 || fano.value > ano )
    window.alert('verifique os dados e tente novavemente!')

else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
if(fsex[0].checked){
    gênero =  'Homem'
    if ( idade >= 0 && idade < 10){
    //Criança
}
    else if( idade < 21){
    //Jovem
}
    else if(idade < 50){
    //adulto
}
    else if( idade >50){
    //Idoso
}
}
else{
    gênero = 'Mulher'
    if ( idade >= 0 && idade < 10){
        //Criança
    }
        else if( idade < 21){
        //Jovem
    }
        else if(idade < 50){
        //adulta
    }
        else if( idade >50){
        //Idosa
    }
}
res.style.textAlign= 'center'
res.innerHTML = `Detectamos, ${gênero} com ${idade} anos.`
}
}