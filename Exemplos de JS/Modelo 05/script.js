alert('Olá!')

var num = document.getElementById('numero')
var list = document.getElementById('list')
var res = document.getElementById('res')
var valores = []


function fnum(n){
    if( Number(n) >= 1 && Number(n) <= 100){
    return true
}else{
    return false
    }
}
function flist(n, list){
    if(list.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}



function adicionar(){
if(fnum(num.value) && !flist(num.value, valores) ){
    valores.push(Number(num.value))
    var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
    list.appendChild(item)
    res.innerHTML = ''
}else{
    window.alert('Valor invalido ou já encontrado na lista!')
}
        num.value = ''
        num.focus()
}
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de continuar.')
     }else{
     var cont = valores.length
     var maior = valores[0]
     var menor = valores[0]
     var soma = 0
     var media = 0
    for(var pos in valores){
        soma += valores[pos]
        if( valores[pos] > maior)
            maior = valores[pos]
        if(valores[pos] < menor)
            menor = valores[pos]
    }
}
    media = soma / cont
    res.innerHTML = ''
    res.innerHTML += `<p>O total de valores adicionado foi ${cont}.</p>`
    res.innerHTML += `<p>O maior valor adicionado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor adicionado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos o total de ${soma}.</p>`
    res.innerHTML += `<p>A média de valores digitado é ${media}</p>`

}
