// Navbar Scroll Effect
const nav = document.querySelector('nav');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    // Add box shadow when scrolled past top
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }

    // Hide navbar on scroll down, show on scroll up
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        nav.classList.add('nav-hidden');
    } else {
        nav.classList.remove('nav-hidden');
    }
    lastScrollY = window.scrollY;
});

// Reveal Animations using Intersection Observer
const revealElements = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});

// Typewriter Effect for Hero Name
const nameText = "Manish Kumar Patel.";
const typewriterElement = document.getElementById("typewriter");
let i = 0;

function typeWriter() {
    if (i < nameText.length) {
        typewriterElement.innerHTML += nameText.charAt(i);
        i++;
        setTimeout(typeWriter, 120); // Typing speed in ms
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Start typing after a short delay for effect
    setTimeout(typeWriter, 500);
});
