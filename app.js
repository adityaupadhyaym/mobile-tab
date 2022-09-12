const iconDiv = document.querySelectorAll(".icon-box > div");
const bgImg = document.querySelector("img");

const imgData = [
    "./Assets/bg-img/home.jpg",
    "./Assets/bg-img/pexels-julius-silver-753626.jpg",
    "./Assets/bg-img/pexels-lisa-1438248.jpg",
    "./Assets/bg-img/pexels-pixabay-459203.jpg"
];

iconDiv.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        iconDiv.forEach((i) => {
            i.classList.remove("active");
        })
        let bgSrc = bgImg.setAttribute(`src`, imgData[index]);
        item.classList.add("active");
    });
})

