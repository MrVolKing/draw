let slot__button = document.querySelector(".slot__button");
let slot__popap = document.querySelector(".slot__popap"); 
let bd = document.querySelector("body"); 
let slot__popapClose = document.querySelector(".slot__popapClose"); 

slot__button.addEventListener("click", open_popap);

function open_popap () {
    slot__popap.style.display = "flex";
    bd.style.overflow = "hidden";
}

slot__popapClose.addEventListener("click", function () {
    slot__popap.style.display = "none";
    bd.style.overflow = "visible";
});