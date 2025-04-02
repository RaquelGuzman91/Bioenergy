
    document.addEventListener("DOMContentLoaded", function () {
        // Obtén el hash de la URL (#seccion2, por ejemplo)
        const hash = window.location.hash;

        // Oculta todas las secciones
        document.querySelectorAll(".bomba-1, .bomba-2").forEach(seccion => {
            seccion.style.display = "none";
        });

        // Muestra la sección específica según el hash
        if (hash) {
            const target = document.querySelector(hash);
            if (target) {
                target.style.display = "flex";
            }
        }
    });
