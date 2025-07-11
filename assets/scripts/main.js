// Calculate and display my age
document.addEventListener('DOMContentLoaded', () => {
  const birthDate = new Date('2002-03-28');
  const age = Math.floor((Date.now() - birthDate) / (365.25 * 24 * 60 * 60 * 1000));

  const ageElement = document.getElementById('dynamic-age');
  if (ageElement) ageElement.textContent = age;
});

// Smooth scrolling for internal links
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll("a[href^='#']");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault(); // stop default jump
        const navHeight = navbar.offsetHeight;
        const elementTop = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetTop = elementTop - navHeight - 3;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    });
  });
});

// Download CV functionality
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('resume-toggle');
  const optionsBox = document.getElementById('resume-options');

  if (toggleButton && optionsBox) {
    toggleButton.addEventListener('click', () => {
      toggleButton.classList.add('hidden');
      optionsBox.classList.remove('hidden');
      optionsBox.classList.add('flex');
    });
  }
});