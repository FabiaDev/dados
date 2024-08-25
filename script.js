function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var frano= document.getElementById('txtano')
    var res= document.querySelector('div#res')
    if(frano.value.lenght == 0 || Number (frano.value)>ano ){
            window.alert('[ANO] Verifique os dados e tente novamente!' )

    }else {
        var fsex = document.getElementsByName('sex')
        var idade = ano -Number(frano.value)
        var gênero = ""
        var img =document.createElement( 'img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            document.body.style.background ='#66ccff'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src','img/menino.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','img/hjovem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'img/homem.png')
            }else{
                //idoso
                img.setAttribute('src', 'img/idoso.png')
            }
        
        }else if( fsex[1].checked){
            gênero = 'Mulher'
            document.body.style.background ='#9999ff'
            if(idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', 'img/menina.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'img/mulherjovem.png')
            }else if( idade < 50){
                //adulto
                img.setAttribute('src', 'img/mulher.png')
            }else{
                //idosa
                img.setAttribute('src', 'img/idosa.png')
            }
        }
        res.style.textAlign ="center"
        res.innerHTML =`Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)

    }
}   