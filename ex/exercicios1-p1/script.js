function carregar(){
var msg= window.document.getElementById('msg')
var img= window.document.getElementById('imagem')
var data = new Date()
var hora =data.getHours()
msg.innerHTML = `agora são ${hora} horas.`


if(hora >= 0 && hora < 12){

//bom dia!
img.src = 'manha.png'

document.body.style.background ='#aaa67a'

}else if (hora >= 12 && hora <= 18){

//boa tarde!
img.src = 'tarde.png'

document.body.style.background ='#c28e77'

}else{

    //boa noite!
    img.src ='noite.png'

    document.body.style.background ='#3e3e3e'
}
}
