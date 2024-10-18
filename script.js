document.addEventListener("DOMContentLoaded", function () {
  const carouselItems = document.querySelectorAll(".carousel-item");
  const prevButton = document.querySelector(".carousel-control.prev");
  const nextButton = document.querySelector(".carousel-control.next");
  const indicators = document.querySelectorAll(".indicator");
  let currentIndex = 0;
  const intervalTime = 5000; // Temps d'affichage de chaque image

  function updateCarousel() {
    const offset = -currentIndex * 100; // -100 pour passer à la prochaine image
    document.querySelector(
      ".carousel"
    ).style.transform = `translateX(${offset}%)`; // Appliquer la translation
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentIndex); // Mettre à jour les indicateurs
    });
  }

  function showNextItem() {
    currentIndex = (currentIndex + 1) % carouselItems.length; // Incrémenter l'index
    updateCarousel(); // Mettre à jour le carousel
  }

  function showPrevItem() {
    currentIndex =
      (currentIndex - 1 + carouselItems.length) % carouselItems.length; // Décrémenter l'index
    updateCarousel(); // Mettre à jour le carousel
  }

  nextButton.addEventListener("click", showNextItem);
  prevButton.addEventListener("click", showPrevItem);

  // Démarrage de l'auto-play du carousel
  const autoPlay = setInterval(showNextItem, intervalTime);

  // Gestion des clics sur les indicateurs
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      if (currentIndex !== index) {
        currentIndex = index; // Mettre à jour l'index courant
        updateCarousel(); // Mettre à jour le carousel
        clearInterval(autoPlay); // Stopper l'auto-play
      }
    });
  });
});

// Navbar

document.addEventListener("DOMContentLoaded", function () {
  const gammeLink = document.querySelector(".navbar-links li:nth-child(2)");
  const dropdownMenu = gammeLink.querySelector(".dropdown-menu");

  let menuTimer; // Variable pour stocker le timeout

  function showDropdown() {
    clearTimeout(menuTimer); // Empêche la fermeture si la souris entre de nouveau
    dropdownMenu.style.display = "block";
  }

  function hideDropdown() {
    menuTimer = setTimeout(function () {
      dropdownMenu.style.display = "none"; // Cache le menu après un délai si la souris quitte les zones
    }, 200);
  }

  // Garde le menu affiché tant que la souris est sur le lien ou le menu
  gammeLink.addEventListener("mouseenter", showDropdown);
  gammeLink.addEventListener("mouseleave", hideDropdown);
  dropdownMenu.addEventListener("mouseenter", showDropdown);
  dropdownMenu.addEventListener("mouseleave", hideDropdown);
});
