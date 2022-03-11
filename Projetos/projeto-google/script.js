// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function abrirModal() {
    if (modal.classList.contains("aberto")){
        modal.classList.replace("aberto", "fechado"); 
    }else{
        modal.classList.replace("fechado", "aberto");
    } 
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.replace("aberto", "fechado"); 
  }
}