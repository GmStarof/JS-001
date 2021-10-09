function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('fotodia')
var data = new Date()
//var hora = data.getHours()
var hora = 19
msg.innerHTML = `Agora são ${hora} horas.`
if( hora >= 0 && < 12) {
    //BOM DIA!
    img.src = 'Manhã.png'
}
else if(hora >= 12 && < 18 ) {
    //BOA TARDE!
    img.src = 'Tarde.png'
}
else{
    //BOA NOITE
    img.src= 'Noite.png'
}

}