const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-navigation");

menu.addEventListener("click", ()=>{
    menuNav.classList.toggle("spread");
})

window.addEventListener("click", e=>{
    if(menuNav.classList.contains("spread") && e.target != menu && e.target !=menuNav){
        menuNav.classList.toggle("spread");
    }
})