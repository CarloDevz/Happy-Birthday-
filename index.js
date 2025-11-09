const button = document.getElementById("link");
const popupContainer1 = document.getElementById("popup-container");
button.addEventListener("click", function() {
    popupContainer1.style.display = "flex";
});

const close = document.getElementById("close");
const popupContainer = document.getElementById("popup-container");

close.addEventListener("click", function() {
    popupContainer.style.display = "none";
});
