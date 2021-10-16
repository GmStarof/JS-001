alert('Olá!')
function verificar(){
var inu = window.document.getElementById('inum')
var fnu = window.document.getElementById('fnum')
var pnu = window.document.getElementById('pnum')
var res = window.document.getElementById('res')

if(inu.value.length == 0 || fnu.value.length == 0 || pnu.value.length  == 0){
   window.alert('[ERRO] Faltam dados')
}else{
   res.innerHTML = 'Contando:'
   var i = Number(inu.value)
   var f = Number(fnu.value)
   var p = Number(pnu.value)
      for(var c= i; c <= f; c += p){
      res.innerHTML += `${c} `
      }
   
   }
}
