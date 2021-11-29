const images = document.querySelectorAll(".img-gallery");
const imageLight = document.querySelector(".add-image");
const divLight = document.querySelector(".image-light");
const menu1 = document.querySelector(".menu");

images.forEach(image =>{
    image.addEventListener("click", ()=>{
        viewImage(image.getAttribute("src"))
    })
})

divLight.addEventListener("click", (e)=>{
    if(e.target !== imageLight){
        divLight.classList.toggle("show")
        imageLight.classList.toggle("showImage")
        menu1.style.opacity = "1"
    }
})

const viewImage = (image)=>{
    imageLight.src = image;
    divLight.classList.toggle("show")
    imageLight.classList.toggle("showImage")
    menu1.style.opacity = "0"
}