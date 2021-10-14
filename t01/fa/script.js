function verificar() {
    var nome = document.getElementById ('txtnome')
    var res = document.getElementById('res')
    
    




    if (n == '') {
        window.alert('[ERROR] Verifique os dados e tente novamente')
     }else{
         var n = (nome.value) 
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')

    if (n == 'shirley') {
      //shirley
      img.setAttribute('src', 'shirley.png')
    }else if (n == 'karita') {
      //karita
      img.setAttribute('src', 'karita.png')
    }else if (n == 'vitor') {
        //vitor
        img.setAttribute('src', 'vitor.png')
    }else if (n == 'leninha') {
        //leninha
        img.setAttribute('src', 'leninha.png')
    }else if (n == 'ezequiel') {
        //ezequiel
        img.setAttribute('src', 'ezequiel.png')
    }else if (n == 'esther'){
        //esther
        img.setAttribute('src', 'esther.png')
    }else if (n == 'shirlei') {
        //shirlei
        img.setAttribute('src', 'bola.png')
    }else if (n == 'victor'){
        //victor
        img.setAttribute('src', 'burro.png')
    } 
    {    
    }
   
  

    
    

    res.style.textAlign= 'center'
    res.innerHTML= `Detectamos que você é: ${n}.`
    res.appendChild(img)
}  
}
