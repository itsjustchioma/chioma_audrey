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

// Featured Articles Slideshow with Erase Effect and Typewriter
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('#featured-slideshow .slide');
  let currentSlide = 0;
  let isTransitioning = false;

  const style = document.createElement('style');
  style.textContent = `
    #featured-slideshow {
      border-radius: 8px;
    }

    #featured-slideshow .slide {
      opacity: 0;
      z-index: 1;
    }

    #featured-slideshow .slide.current {
      opacity: 1;
      z-index: 2;
    }

    #featured-slideshow .slide.transitioning {
      z-index: 3;
    }

    .erase-overlay {
      clip-path: polygon(100% 0%, 100% 0%, 100% 0%);
      transition: clip-path 1.5s ease-in-out;
      z-index: 10;
    }

    .erase-overlay.erasing {
      clip-path: polygon(100% 0%, 0% 100%, 100% 100%);
    }

    .slide-image img {
      transition: opacity 1.5s ease-out;
    }

    .slide-image.fading {
      opacity: 0;
    }

    .slide-title.typing::after {
      content: '|';
      animation: blink 1s infinite;
    }

    .slide-description.typing::after {
      content: '|';
      animation: blink 1s infinite;
    }

    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }

    .slide-image.fade-in img {
      opacity: 0;
      animation: fadeIn 2s ease-in forwards;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;
  document.head.appendChild(style);

  function typeWriter(element, text, speed = 50) {
    return new Promise((resolve) => {
      element.textContent = '';
      element.classList.add('typing');
      let i = 0;

      function type() {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(type, speed);
        } else {
          element.classList.remove('typing');
          resolve();
        }
      }
      type();
    });
  }

  function initializeSlides() {
    slides.forEach((slide, index) => {
      if (index === 0) {
        slide.classList.add('current');
      }
    });
  }

  // Transition to next slide
  async function transitionToNext() {
    if (isTransitioning) return;
    isTransitioning = true;

    const currentSlideElement = slides[currentSlide];
    const nextIndex = (currentSlide + 1) % slides.length;
    const nextSlideElement = slides[nextIndex];

    // Step 1: Start erase effect and image fade out
    const eraseOverlay = currentSlideElement.querySelector('.erase-overlay');
    const currentImage = currentSlideElement.querySelector('.slide-image');

    eraseOverlay.classList.add('erasing');
    currentImage.classList.add('fading');

    // Step 2: Wait for erase to complete, then immediately (0.0001s) show new content
    setTimeout(async () => {
      // Hide current slide and show next slide
      currentSlideElement.classList.remove('current');
      nextSlideElement.classList.add('current', 'transitioning');

      // Reset the erase overlay for current slide
      eraseOverlay.classList.remove('erasing');
      currentImage.classList.remove('fading');

      // Get next slide elements
      const nextTitle = nextSlideElement.querySelector('.slide-title');
      const nextDescription = nextSlideElement.querySelector('.slide-description');
      const nextImage = nextSlideElement.querySelector('.slide-image');

      // Store original text
      const titleText = nextTitle.textContent;
      const descriptionText = nextDescription.textContent;

      // Step 3: Type in title
      await typeWriter(nextTitle, titleText, 40);

      // Step 4: Fade in image while typing description
      nextImage.classList.add('fade-in');
      await typeWriter(nextDescription, descriptionText, 30);

      // Clean up
      nextSlideElement.classList.remove('transitioning');
      nextImage.classList.remove('fade-in');

      currentSlide = nextIndex;
      isTransitioning = false;

    }, 1500); // Wait for erase effect to complete (1.5s)
  }

  if (slides.length > 0) {
    initializeSlides();

    setInterval(transitionToNext, 14500);
  }
});
