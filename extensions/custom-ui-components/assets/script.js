document.addEventListener("DOMContentLoaded", function() {
    const toggles = document.querySelectorAll(".db-toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.querySelector(".db-toggle-content");
            if (content) {
                content.style.display = content.style.display === "block" ? "none" : "block";
            }
        });
    });
});