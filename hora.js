function carregar() { // função 

    var msg = window.document.getElementById('msg')
    var img=  window.document.getElementById('imagem')
    var data = new Date() // função que pode pegar hora, data, dia ...
    var horaatual = data.getHours() //  getHours pega a hora do PC do  usuário.//
    var data2 = new Date()
    var minutoatual = data2.getMinutes()
    msg.innerHTML = ` Agora são ${horaatual}:${minutoatual} ` 

    if (horaatual >= 0 && horaatual < 12 ) {

    // Bom dia 
    img.src = 'manha.png'
 document.body.style.background = ' #e2cd9f'

    }

  else if ( horaatual >= 12 && horaatual < 18  ) {


    // Boa Tarde
    img.src = 'tarde.png'
   document.body.style.background = ' #b9846f' 

  } else {

    // Boa Noite
    img.src = 'noite.png'
    document.body.style.background = '#515154'

}




} 

