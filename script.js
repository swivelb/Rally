// script.js

// Smooth scrolling for anchors
const smoothScroll = (target) => {
    const scrollTo = document.querySelector(target);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
};

// Fade-in animations on scroll
const fadeInOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            element.classList.add('visible');
        }
    });
};

// Mobile menu toggle
const mobileMenuToggle = () => {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.mobile-menu');

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
};

// Contact form submission handling
const handleContactForm = () => {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Logic for form submission
        console.log('Form submitted!');
        // Add additional AJAX logic as needed
    });
};

// Dynamic content loading
const loadDynamicContent = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    document.querySelector('.dynamic-content').innerHTML = data.content;
};

// Event listeners
window.addEventListener('scroll', fadeInOnScroll);

// Initialize the functionalities
mobileMenuToggle();
handleContactForm();
// You can call loadDynamicContent with a specific URL
// loadDynamicContent('path/to/content');