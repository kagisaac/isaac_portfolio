// typing animation

var typed = new Typed(".typing",{
    strings: [" ","Web Designer", "Web Developer","IOT Engineer","System Administrator"],
    typeSpeed: 100,
    BackSpeed:60,
    loop: true
})

const toggler = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside")

toggler.addEventListener("click", ()=>{
    toggler.classList.toggle("active");
    aside.classList.toggle("active")
})
document.addEventListener('click', (event) => {
    if (!aside.contains(event.target) && !toggler.contains(event.target)) {
        aside.classList.remove('active');
    }
});