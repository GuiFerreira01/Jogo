   

window.onload = function () {
               
    var minute = 01
    var sec = 59

    setInterval(function () {

        document.getElementById("timer").innerHTML = minute + " : " + sec;
        minute = parseInt(minute)
        sec = parseInt(sec)
        sec--;

        if (sec == -1) {
            minute--;
            sec = 59;
        }
        if (sec == 0 && minute == 0) {
            window.location.href = "perdeu.html";
        } 

        minute = minute < 10 ? "0" + minute : minute;
        sec = sec < 10 ? "0" + sec : sec;

    }
  , 1000);
  
    


}


    const FioVermelho = document.querySelector("#vermelho")
    const FioVerde = document.querySelector("#verde")
    const FioAmarelo = document.querySelector("#amarelo")
    const FioBranco = document.querySelector("#branco")
    const FioAzul = document.querySelector("#azul")
    const FioMarrom = document.querySelector("#marrom")


    function Corte() {
        const random = (min, max) => Math.random() * (max - min) + min

        const branco = Math.floor(random(1, 10))
        const amarelo = Math.floor(random(1, 10))
        const vermelho = Math.floor(random(1, 10))
        const verde = Math.floor(random(1, 10))
        const marrom = Math.floor(random(1, 10))

        if(vermelho == 1 && vermelho <= 5 ) {
            window.location.assign("ganhou.html")
        } else if (vermelho > 5){
            window.location.assign("perdeu.html")
        } else if( vermelho > 5 && branco > 5) {
            window.location.assign("ganhou.html")
        }  else if(branco == 1 && branco <= 5 ) {
            window.location.assign("ganhou.html")
        } else if (branco > 5) {
            window.location.assign("perdeu.html")
        } 
    }