/* ---Scroll Effect Begin--- */

document.addEventListener("scroll", scrollMe);

function scrollMe() {
    let scrollEffImg = document.querySelectorAll(".scrollEffImg");
    for (let i = 0; i < scrollEffImg.length; i++) {
        let myWindow = window.innerHeight;

        let getItemHeight = scrollEffImg[i].getBoundingClientRect().top;

        if (getItemHeight < myWindow) {
            scrollEffImg[i].classList.add("imgScaleEff");
        } else {
            scrollEffImg[i].classList.remove("imgScaleEff");
        }
    }
}

/* ---Scroll Effect End--- */