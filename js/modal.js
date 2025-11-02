const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");

// відкрити модального вікна
openBtn.onclick = function() {
    modal.style.display = "block";
}

// закрити модального вікна
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Закрити вікно 
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}