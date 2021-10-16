function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('fotodia')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
if( hora >= 0 && hora < 12){
   msg.innerHTML = 'Bom dia!'
    img.scr = 'Manhã.png'
    document.body.style.background= '#f2caac'
}
else if(hora >= 12 && hora <= 18){ 
    
    img.src = 'Tarde.png'
    document.body.style.background= '#e46600'
}
else{
    //BOA NOITE!
    img.src = 'Noite.png'
    document.body.style.background= '#2b4449'
}
}