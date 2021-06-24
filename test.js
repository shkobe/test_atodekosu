let imgList = [
    "images/img1.jpg",
    "images/img2.png",
    "images/img3.png",
    "images/img4.png",
    "images/img5.png",
]

for (let i = 0; i < imgList.length; i++) {
    let slide = document.createElement("li")
    slide.innerHTML = "<img src= '" + imgList[i] + "'>"
    document.getElementsByClassName("slider-inner")[0].appendChild(slide)
}

for (let i = 0; i < imgList.length; i++) {
    let nav = document.createElement("li")
    nav.setAttribute("data-nav-index", i)
    document.getElementsByClassName("nav")[0].appendChild(nav)
}

let imageSlide = document.getElementsByClassName("slider-inner")[0].getElementsByTagName("li")

let dotNavigation = document.getElementsByClassName("nav")[0].getElementsByTagName("li")

let nowIndex = 0

imageSlide[nowIndex].classList.add("show")
dotNavigation[nowIndex].classList.add("current")

let isChanging = false
let slideTimer

function sliderSlide(val) {
    imageSlide[nowIndex].classList.remove("show")
    dotNavigation[nowIndex].classList.remove("current")
    nowIndex = val

    imageSlide[nowIndex].classList.add("show")
    dotNavigation[nowIndex].classList.add("current")

    if (isChanging === true) {
        return false
    }
    isChanging = true

    slideTimer = setTimeout(
        function () {
            isChanging = false
        }, 600
    )
}




let length = imgList.length - 1

document.getElementById("arrow-prev").addEventListener("click", function () {
    let index = nowIndex - 1
    if (index < 0) {
        index = length
    }
    sliderSlide(index)
}, false)

for (let i = 0; i < dotNavigation.length; i++) {
    dotNavigation[i].addEventListener("click", function () {
        let index = Number(this.getAttribute("data-nav-index"))
        sliderSlide(index)
    }, false)
}
