// Icon change

const icons = document.querySelectorAll(".hero__icons i");
let iconOrder = 0;

setInterval(() => {
    iconOrder++;
    const icon = document.querySelector(".hero__icons--active");
    icon.classList.remove("hero__icons--active");
    if (iconOrder >= icons.length) {
        icons[0].classList.add("hero__icons--active");
        iconOrder = 0;
    } else {
        icon.nextElementSibling.classList.add("hero__icons--active");
    }
}, 2000);
