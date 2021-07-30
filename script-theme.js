const theme1 = document.querySelector(".theme1");
const theme2 = document.querySelector(".theme2");
const theme3 = document.querySelector(".theme3");
const select = document.querySelector(".selector");

theme1.addEventListener("click", ()=>{
    document.body.className = "";
    document.body.classList.add("theme-1");
})
theme2.addEventListener("click", ()=>{
    document.body.className = "";
    document.body.classList.add("theme-2");

})
theme3.addEventListener("click", ()=>{
    document.body.className = "";
    document.body.classList.add("theme-3");
})