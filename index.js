const image_content = document.querySelector(".image_content");
const count = document.querySelector(".count");
const clickSound = document.getElementById("clickSound");
let count_click = localStorage.getItem("clickCount") ? parseInt(localStorage.getItem("clickCount")) : 0;

count.innerHTML = count_click;
image_content.addEventListener('click', () => {
    count_click += 1;
    image_content.src = "./images/cat_2.jpg";
    

    clickSound.currentTime = 0;
    clickSound.play();

    setTimeout(() => {
        image_content.src = "./images/cat_1.jpg";
    }, 100);
    
    count.innerHTML = count_click;
    localStorage.setItem("clickCount", count_click);
});
