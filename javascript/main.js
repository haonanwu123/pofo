const modal = document.querySelector("#modal");
const bgImg = document.getElementById("beImg");
const project1 = document.querySelector("#project-js")

function showBgImg(e) {
    modal.style.display = "block";
    bgImg.src = e.src;
}

project1.addEventListener("click", showBgImg)