alert('Olá!')
function gerar(){
    var n = window.document.getElementById('txtnum')
    var tab = window.document.getElementById('seltab')
    if(n.value.length == 0){ 
        window.alert('Por favor, Digite um numero.')
      
    }else{
        tab.innerHTML = '' 
        var num = Number(n.value)
        for(var c = 1; c <= 10; c++ ){
            var item = window.document.createElement('option')
            item.text = `${num} x ${c} = ${c*num}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}