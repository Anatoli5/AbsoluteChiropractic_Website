import './style.css'

// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const mobileOverlay = document.querySelector('.mobile-menu-overlay');
const mobileCloseBtn = document.querySelector('.mobile-menu-close');
const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

function toggleMenu() {
  mobileOverlay.classList.toggle('active');
  document.body.style.overflow = mobileOverlay.classList.contains('active') ? 'hidden' : '';
}

if (mobileBtn) {
  mobileBtn.addEventListener('click', toggleMenu);
}

if (mobileCloseBtn) {
  mobileCloseBtn.addEventListener('click', toggleMenu);
}

mobileLinks.forEach(link => {
  link.addEventListener('click', toggleMenu);
});

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulate form submission
    const btn = contactForm.querySelector('button');
    const originalText = btn.innerText;

    btn.innerText = 'Message Sent!';
    btn.style.background = '#10b981'; // Success Green

    setTimeout(() => {
      contactForm.reset();
      btn.innerText = originalText;
      btn.style.background = '';
    }, 3000);
  });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// --- Scroll Reveal Animation ---
const revealElements = document.querySelectorAll('.reveal-up');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      revealObserver.unobserve(entry.target); // Only animate once
    }
  });
}, {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(el => revealObserver.observe(el));

// --- Parallax Effect Removed ---
// The user requested to remove the interactive animation.
// document.addEventListener('mousemove', (e) => {
//   const shapes = document.querySelectorAll('.bg-shape, .floating-shape, .gradient-orb');
//   const x = e.clientX / window.innerWidth;
//   const y = e.clientY / window.innerHeight;

//   shapes.forEach(shape => {
//     const speed = shape.getAttribute('data-speed') || 0.05;
//     const xOffset = (window.innerWidth - x * window.innerWidth) * speed;
//     const yOffset = (window.innerHeight - y * window.innerHeight) * speed;

//     shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
//   });
// });

// --- Bento Card Mouse Effect Removed ---
// const cards = document.querySelectorAll('.bento-card');

// cards.forEach(card => {
//   card.addEventListener('mousemove', (e) => {
//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     card.style.setProperty('--mouse-x', `${x}px`);
//     card.style.setProperty('--mouse-y', `${y}px`);
//   });
// });
// --- FAQ Accordion ---
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    const isActive = item.classList.contains('active');

    // Close all other items
    document.querySelectorAll('.faq-item').forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });

    // Toggle current item
    item.classList.toggle('active');
  });
});

// --- Section Indicators ---
const sections = document.querySelectorAll('section');
const indicators = document.querySelectorAll('.indicator');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      indicators.forEach(indicator => {
        indicator.classList.toggle('active', indicator.getAttribute('href') === `#${id}`);
      });
    }
  });
}, {
  threshold: 0.5
});

sections.forEach(section => sectionObserver.observe(section));
