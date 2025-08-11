document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");

    // botón hamburguesa
    const toggle = document.createElement("div");
    toggle.id = "nav-toggle";
    toggle.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    nav.prepend(toggle);

    toggle.addEventListener("click", function () {
        nav.classList.toggle("nav-open");
        toggle.classList.toggle("open"); // activa animación
    });

    function toggleButtonVisibility() {
        if (window.innerWidth <= 768) {
            toggle.style.display = "flex";
        } else {
            toggle.style.display = "none";
        }
    }

    toggleButtonVisibility();
    window.addEventListener("resize", toggleButtonVisibility);
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#Contacto form");
    const modal = document.querySelector("#modal-exito");
    const cerrarBtn = document.querySelector(".cerrar");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita envío por defecto

        const nombre = document.querySelector("#nombre").value.trim();
        const email = document.querySelector("#email").value.trim();
        const telefono = document.querySelector("#telefono").value.trim();
        const mensaje = document.querySelector("#mensaje").value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const telefonoRegex = /^\+?\d{7,15}$/;

        if (nombre.length < 3) {
            alert("Por favor, ingresa un nombre válido (mínimo 3 caracteres).");
            return;
        }
        if (!emailRegex.test(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }
        if (!telefonoRegex.test(telefono)) {
            alert("Por favor, ingresa un número de teléfono válido (7-15 dígitos).");
            return;
        }
        if (mensaje.length < 10) {
            alert("Por favor, escribe un mensaje más detallado (mínimo 10 caracteres).");
            return;
        }

        // Mostrar modal
        modal.style.display = "flex";
        form.reset();
    });

    // Cerrar modal
    cerrarBtn.addEventListener("click", () => modal.style.display = "none");
    document.getElementById("ok-btn").addEventListener("click", () => {
    modal.style.display = "none";
    location.reload();
    });
    window.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
    });
});
