// Project filters: show only the cards tagged with the chosen category.
const filterButtons = document.querySelectorAll(".work-filters button");
const cards = document.querySelectorAll(".work-card");
const count = document.querySelector(".work-count");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    let shown = 0;

    filterButtons.forEach((other) => other.setAttribute("aria-pressed", String(other === button)));

    cards.forEach((card) => {
      const match = filter === "all" || card.dataset.tags.split(" ").includes(filter);
      card.hidden = !match;
      if (match) {
        card.style.setProperty("--n", shown);
        card.classList.remove("is-entering");
        void card.offsetWidth; // restart the entrance animation
        card.classList.add("is-entering");
        shown += 1;
      }
    });

    count.textContent = `${shown} ${shown === 1 ? "project" : "projects"}`;
  });
});
