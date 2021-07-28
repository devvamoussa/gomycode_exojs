let btn = document.querySelector(".logo_center-bot");
let navbar = document.querySelector(".navbar")
btn.onclick = function() {
    navbar.classList.toggle("active");
}
let logCenter = document.querySelectorAll(".logo_center")

logCenter.forEach(btn => btn.addEventListener("click", toggleclass))


function toggleclass()
{
let previousLogo = document.querySelectorAll(".logo_center")
console.log(this)
previousLogo.forEach(log => log.classList.remove("logo-hover"))
this.classList.add("logo-hover")
console.log(this)
}
