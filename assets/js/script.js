//Caso 1
function bordeimagen(){

    let imgBordeOri = document.getElementById('gundam')
    
    if(imgBordeOri.style.border != "2px solid red"){

        imgBordeOri.style.border = "2px solid red"

    }else if(imgBordeOri.style.border != "none"){

        imgBordeOri.style.border = "none"

    }
}
//Caso 2
function calcular(){

    gundam1 = document.querySelector("#cantidad-gun1")
    gundam2 = document.querySelector("#cantidad-gun2")
    gundam3 = document.querySelector("#cantidad-gun3")
    mensaje = document.querySelector("#mensaje")

    sumatoria = Number(gundam1.value) + Number(gundam2.value) + Number(gundam3.value)

    if(sumatoria <= 10){

        mensaje.innerHTML = "Llevas " + sumatoria + " Gundam👍"
    }else{

        mensaje.innerHTML = "Llevas demasiado Gundam ☠"
    }
}
//Caso 3
function password(){

    digito1 = document.getElementById("digitouno").value
    digito2 = document.getElementById("digitodos").value
    digito3 = document.getElementById("digitotres").value
    mensaje = document.querySelector("#mensaje")

    pass = digito1+digito2+digito3

    if(pass === "911"){

        mensaje.innerHTML = "Password 1 Correcto"

    }else if(pass === "714"){

        mensaje.innerHTML = "Password 2 Correcto"

    }else{

        mensaje.innerHTML = "Password Incorrecto"

    }

}