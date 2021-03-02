const imgImprovise = document.getElementById("img-improvise");
const popup = document.getElementById("pop-up");
let playOnce = true;

window.addEventListener("scroll", () => {
    scrollValue =
        ((window.innerHeight + window.scrollY) / document.body.offsetHeight) *
        100;

    // IMAGE APPEAR
    if (scrollValue > 45) {
        imgImprovise.style.opacity = "1";
        imgImprovise.style.transform = "none";
    }

    //  NEWSLETTER POPUP
    function playFunctionOnce() {
        if (scrollValue > 80 && playOnce) {
            this.setTimeout(() => {
                popup.style.opacity = "1";
                popup.style.transform = "none";
            }, 1500);
            playOnce = false;
        }
    }
    playFunctionOnce();
});

document.getElementById("close").addEventListener("click", () => {
    popup.style.opacity = "0";
    popup.style.transform = "translateX(500px)";
});
