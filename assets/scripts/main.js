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

// Featured Articles Slideshow with Book-like Page Flip Effect
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('#featured-slideshow .slide');
  let currentSlide = 0;

  // Add required CSS for book-like page flip effect
  const style = document.createElement('style');
  style.textContent = `
    #featured-slideshow {
      perspective: 1200px;
      overflow: hidden;
    }
    #featured-slideshow .slide {
      transform-origin: left center;
      transform-style: preserve-3d;
      transition: transform 1.2s ease-in-out;
      backface-visibility: hidden;
      border-radius: 8px;
    }
    #featured-slideshow .slide.current {
      z-index: 3;
      transform: rotateY(0deg);
      opacity: 1;
    }
    #featured-slideshow .slide.flipping {
      z-index: 4;
      transform: rotateY(-180deg);
      opacity: 1;
    }
    #featured-slideshow .slide.next-ready {
      z-index: 2;
      transform: rotateY(0deg);
      opacity: 1;
    }
    #featured-slideshow .slide.hidden {
      z-index: 1;
      transform: rotateY(0deg);
      opacity: 0;
    }
  `;
  document.head.appendChild(style);

  function initializeSlides() {
    slides.forEach((slide, index) => {
      if (index === 0) {
        slide.classList.add('current');
      } else {
        slide.classList.add('hidden');
      }
    });
  }

  function flipToNext() {
    const currentSlideElement = slides[currentSlide];
    const nextIndex = (currentSlide + 1) % slides.length;
    const nextSlideElement = slides[nextIndex];

    if (currentSlideElement && nextSlideElement) {
      // Start the flip animation immediately
      currentSlideElement.classList.remove('current');
      currentSlideElement.classList.add('flipping');

      // Show the next page only when current page is halfway through flip
      setTimeout(() => {
        nextSlideElement.classList.remove('hidden');
        nextSlideElement.classList.add('next-ready');
      }, 600); // Halfway through the 1200ms flip

      // After flip animation completes
      setTimeout(() => {
        // Hide the flipped page
        currentSlideElement.classList.remove('flipping');
        currentSlideElement.classList.add('hidden');

        // Make next slide the current one
        nextSlideElement.classList.remove('next-ready');
        nextSlideElement.classList.add('current');

        currentSlide = nextIndex;
      }, 1200); // Match CSS transition duration
    }
  }

  // Initialize slideshow
  if (slides.length > 0) {
    initializeSlides();

    // Auto-advance every 4 seconds
    setInterval(flipToNext, 4000);
  }
});

// Add this to your existing main.js file