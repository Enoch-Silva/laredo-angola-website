// Adiciona classe ativa ao menu atual
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    document.querySelectorAll(".nav-link").forEach((el) => {
      el.classList.remove("active");
    });
    this.classList.add("active");
  });
});

// Funcionalidade de pesquisa
document
  .querySelector(".search-box button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const searchTerm = document.querySelector(".search-box input").value;
    // Implementar lógica de pesquisa aqui
    console.log("Pesquisando por:", searchTerm);
  });

// Funcionalidade do dropdown em dispositivos móveis
document.querySelectorAll(".dropdown").forEach((dropdown) => {
  dropdown.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      this.classList.toggle("active");

      // Fecha outros dropdowns abertos
      document.querySelectorAll(".dropdown").forEach((other) => {
        if (other !== this) {
          other.classList.remove("active");
        }
      });
    }
  });
});

// Fecha o menu ao redimensionar a janela
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
  }
});
