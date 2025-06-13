document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  // Animate sections
  const sections = document.querySelectorAll("section, .project");
  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });

  // Bouncing effect for skills
  const skills = document.querySelectorAll(".skills-list li");
  skills.forEach((skill, index) => {
    skill.style.animationDelay = `${index * 0.1}s`;
    skill.classList.add("bounce-in");
  });
});
