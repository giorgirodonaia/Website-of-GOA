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
    }else {
        hakParentDiv.style.display = "none"
        
    }
    isVisible= !isVisible
})

const academies = [
    {
        logo: "./408864179_342479481868687_2724919989645877908_n.jpg",
        students: 1500,
        color: "green"
    },
    {
        logo: "./academysLogo/ITstep.png",
        students: 700,
        color: "cyan"
    },
    {
        logo: "./academysLogo/Mziuri.png",
        students: 1900,
        color: "yellow"
    },
    {
        logo: "./acdemysLogo/BitCamp.png",
        students: 1300,
        color: "red"
    }
] 

function statisticsRender(arr){
    let main = document.getElementById("academiesStatistics")

    for(let i = 0; i < academies.length; i++) {
        main.append(finalStatistics(arr[i]))
    }
}

statisticsRender(academies)

const statisticsBtn = document.getElementById("statisticsBtn");

 function finalStatistics(academy){
    let div = document.createElement("div");
    let img = document.createElement("img");
    let imgRes = img.src = academy.logo

    
 } 
    
