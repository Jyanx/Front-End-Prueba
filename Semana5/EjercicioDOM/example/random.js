const colors = ["green","red","#f15025","rgba(133,122,200)"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors.length

});

function getRandomNumber(){
    return Math.floor(Math.random()* colors.length)
}