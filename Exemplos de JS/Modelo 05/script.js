alert('Olá!')

var num = document.getElementById('numero')
var list = document.getElementById(list)
var res = document.getElementById('res')
var valores = []


function fnum(n){
    if( Number(n) >= 1 && Number(n) <= 100){
    return true
}else{
    return false
    }
}



function flist(n, 1){
    if(l.indexOf(Number(n)) != -1){
    return true
}else{
    return false
    }
}



function adicionar(){
if(fnum(num.value) && flist(num.value, valores) ){

}else{
    window.alert('Valor invalido ou já encontrado na lista!')
}
}
