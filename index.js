let hamburger = document.getElementById("hamburger");
let nav = document.querySelector("#wall-navbar")
let main_page = document.querySelector("#main")

hamburger.addEventListener("click", (event)=>{
  event.stopPropagation()
  toggleMenu()
})

function toggleMenu() {
  hamburger.classList.toggle("closed")
  nav.classList.toggle("active")
}

document.addEventListener('click', function(event) {
  // If the user clicks outside the navbar and the navbar is open, close it
  if (!nav.contains(event.target) && nav.classList.contains('active')) {
    nav.classList.remove('active');
    nav.classList.add('inactive');
    hamburger.classList.remove("closed")
  }
});