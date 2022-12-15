let banner = document.querySelector("#banner");
let button = banner.lastChild;
let widthElem = parseInt(window.getComputedStyle(banner)["width"]) + parseInt(window.getComputedStyle(banner)["padding-left"]) * 2;
let heightElem = parseInt(window.getComputedStyle(banner)["height"]) + parseInt(window.getComputedStyle(banner)["padding-top"]) * 2;;
let widthWindow = innerWidth, heightWindow = innerHeight, paramLeft, paramTop, counterX = 0, counterY = 0;

banner.addEventListener("mouseover", (e) => {
    
    let right = parseInt(window.getComputedStyle(banner)["right"])
    let bottom = parseInt(window.getComputedStyle(banner)["bottom"])
    
    const moveX = (x) => {
        banner.style.zIndex = 1000;
        banner.style.right = right + x + "px";
    }
    const moveY = (y) => {
        banner.style.zIndex = 1000;
        banner.style.bottom = bottom + y + "px";
    }
    
    if (e.offsetX < widthElem / 2) {
        if (e.clientX < (widthWindow - (widthElem + 50))) {
            moveX(-50);
        } else {
            moveX(50);
        }
    } else if (e.offsetX > widthElem / 2) {
        if (e.clientX > (widthElem + 50)) {
            moveX(50);
        } else {
            moveX(-50);
        }
    }

    if (e.offsetY < heightElem / 2) {
        if (e.clientY < heightWindow - (heightElem + 50)) {
            moveY(-50);
        } else {
            moveY(50);
        }
    } else if (e.offsetY > heightElem / 2) {
        if (e.clientY > (heightElem + 50)) {
            moveY(50);
        } else {
            moveY(-50)
        }
    }
})