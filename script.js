// Burger menu
const header = document.querySelector(".header");
const burgerBtn = document.querySelector(".burger-menu");
const body = document.querySelector("body");

burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("burger-menu--active");
    header.classList.toggle("header-mobile");
    body.classList.toggle("no-scroll");

})

//Modal

const modal = document.querySelector(".modal-wrapper");
const btnsModalOpen = document.querySelectorAll('.btn[type="button"]');

btnsModalOpen.forEach((btn) => {
    btn.addEventListener('click', () => {
        modal.classList.remove('none');
        body.classList.toggle('no-scroll');
    });
});


const btnModalExit = document.querySelector(".modal__exit");

// console.log(btnModalExit);

btnModalExit.addEventListener("click", () =>{
    modal.classList.add('none');
    body.classList.remove('no-scroll');
})

// Video

const playVideoBtn = document.querySelector(".video__play-btn");
const video = document.querySelector(".vidio__media");
const playVideoIcon = document.querySelector(".video__play-btn svg");
const playVideoIconCircle = document.querySelector(".video__play-btn svg circle");
const playVideoIconPath = document.querySelector(".video__play-btn svg path");

playVideoBtn.addEventListener("click", () =>{
    if (video.paused){
        video.play();
        playVideoIconCircle.style.fill = "#FF427F";
        playVideoIconPath.style.fill = "white"
    }

    else{
        video.pause();
        playVideoIconCircle.style.fill = "white";
        playVideoIconPath.style.fill = "#FF427F"
    }
});