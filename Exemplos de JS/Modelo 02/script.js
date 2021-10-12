alert('Olá!')
function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = window.document.getElementById('txtano')
var res = window.document.getElementById('res')

if (fano.value.length == 0 || fano.value > ano || fano.value < 1900)
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
    gênero = 'Criança'
    img.setAttribute('src','foto-homem criança.png')
}
    else if( idade < 21){
    gênero = 'Jovem'
    img.setAttribute('src','foto-homem jovem.png')
}
    else if(idade < 50){
    gênero = 'Adulto'
    img.setAttribute('src', 'foto-homem adulto.png')
}
    else if( idade >50){
    gênero = 'Idoso'
    img.setAttribute('src','foto-homem idoso.png')
}
}
else{
    gênero = 'Mulher'
    if ( idade >= 0 && idade < 10){
        gênero = 'Criança'
        img.setAttribute('src', 'foto-mulher criança.png')
    }
        else if( idade < 21){
        gênero = 'Jovem'
        img.setAttribute('src','foto-mulher jovem.png')
    }
        else if(idade < 50){
        gênero = 'Adulta'
        img.setAttribute('src','foto-mulher adulta.png')
    }
        else if( idade >50){
        gênero = 'Idosa'
        img.setAttribute('src','foto-mulher idosa.png')
    }
}
res.style.textAlign= 'center'
res.innerHTML = `Detectamos, ${gênero} com ${idade} anos.`
res.appendChild(img)
}
}