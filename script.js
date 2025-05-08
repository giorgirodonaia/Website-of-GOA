const hakImg = [
    "./ImagesHak/img1.jfif",
    "./ImagesHak/img2.jfif",
    "./ImagesHak/img3.jfif",
    "./ImagesHak/img4.jfif",
    "./ImagesHak/img5.jfif",
    "./ImagesHak/img6.jfif",
    "./ImagesHak/img7.jfif",
    "./ImagesHak/img8.jfif",
    "./ImagesHak/img9.jfif"
]

let index = 0


const imgSlide = document.getElementById("imgSlide");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");


nextBtn.addEventListener("click", () => {
    index = (index + 1) % hakImg.length
    imgSlide.src = hakImg[index]
})

backBtn.addEventListener("click", () => {
    index = (index - 1 + hakImg.length) % hakImg.length
    imgSlide.src = hakImg[index]
})





const hakAnchor = document.getElementById("hakAnchor");
    let  isVisible = true

hakAnchor.addEventListener("click", () => {
    const hakParentDiv = document.getElementById("hacathon_parent_div")

    if(isVisible){
        hakParentDiv.style.display = "block"
        // isVisible = !isVisible
    }else {
        hakParentDiv.style.display = "none"
        
    }
    isVisible= !isVisible
})