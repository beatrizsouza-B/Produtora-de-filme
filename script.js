// MENU MOBILE

const menuToggle = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("#nav-menu");

menuToggle.addEventListener("click", () => {

    const isOpen = navMenu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// FECHAR MENU AO CLICAR EM UM LINK

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});

// ANO AUTOMÁTICO

document.querySelector("#year").textContent =
    new Date().getFullYear();


// FORMULÁRIO DE CONTATO

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.querySelector("#name").value.trim();

    const email = document.querySelector("#email").value.trim();

    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !message) {

        alert("Preencha todos os campos!");

        return;

    }

    // SUBSTITUA PELO NÚMERO REAL DA PRODUTORA
    // Use código do país + DDD + telefone.

    const phone = "5561995259019";

    const text = `Olá! Meu nome é ${name}.
E-mail: ${email}

Gostaria de conversar sobre um projeto:

${message}`;

    const whatsappURL =
        `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");

});