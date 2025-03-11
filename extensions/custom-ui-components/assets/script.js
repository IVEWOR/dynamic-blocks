document.addEventListener("DOMContentLoaded", function () {
  const db_toggles = document.querySelectorAll(".db-toggle");

  db_toggles.forEach((toggle) => {
    const db_header = toggle.querySelector(".db-toggle__header");
    const db_content = toggle.querySelector(".db-toggle__content");
    const db_icon = toggle.querySelector(".db-toggle__icon");

    db_header.addEventListener("click", function () {
      console.log("clicked");
      // Toggle active class on the specific content
      db_content.classList.toggle("active");

      // Toggle icon
      db_icon.classList.toggle("active");
    });
  });
});
