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


// Attendre que la page soit complètement chargée
window.onload = function() {
    // Afficher le loader pendant 2.5 secondes
    setTimeout(function() {
      // Sélectionner l'élément du loader
      const loaderWrapper = document.querySelector('.loader-wrapper');
      
      // Ajouter une classe pour déclencher une transition ou simplement le masquer
      loaderWrapper.style.opacity = '0'; // Option pour une transition douce
      
      // Après 0.5s (le temps que l'opacité tombe à zéro), on cache totalement le loader
      setTimeout(function() {
        loaderWrapper.style.display = 'none';
      }, 500); // Délai correspondant à la durée de la transition d'opacité
    }, 2500); // Le loader reste visible pendant 2.5 secondes
  };
  