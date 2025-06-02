document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
  });

  const projectCards = document.querySelectorAll(".project-cards > div");
  projectCards.forEach(card => {
    observer.observe(card);
  });
});