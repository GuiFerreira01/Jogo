// const btn = document.querySelector('#submit');
// const sb = document.querySelector('#difficult')
// btn.onclick = (event) => {

//     //  event.preventDefault(); 
//      alert(sb.selectedIndex);
// };


function Teste() {
    if(select.selectedIndex == 0){
        window.location.href = "../../Pages/bomba_facil.html";
    } if(select.selectedIndex == 1){
        window.location.href ="../../Pages/bomba_medio.html"
    } if(select.selectedIndex == 2){
        window.location.href = "../../Pages/bomba_dificil.html"
    } if(select.selectedIndex == 3){
        window.location.href = "../../Pages/bomba_imposivel.html"
    }
}
