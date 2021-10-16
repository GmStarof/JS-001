alert('Olá!')
function verificar(){
var i = window.document.getElementById('inum')
var f = window.document.getElementById('fnum')
var p = window.document.getElementById('pnum')
var res = window.document.getElementById('res')

if(i.value.length == 0 || f.value.length == 0 || p.value.length  == 0){
   window.alert('[ERRO] Faltam dados')
}else{
   res.innerHTML = 'Contando:'
   
  
}

}