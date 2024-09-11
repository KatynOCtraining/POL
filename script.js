// Script pour ouvrir et fermer la modale de contact
document.getElementById("contact-button").addEventListener("click", function() {
    document.getElementById("contact-modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("contact-modal").style.display = "none";
});

// Fermer la modale lorsqu'on clique en dehors de la fenêtre
window.addEventListener("click", function(event) {
    const modal = document.getElementById("contact-modal");
    const modalContent = document.querySelector(".modal-content");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
