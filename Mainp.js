const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Create floating particles
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 10 + 5;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 5;
        const opacity = Math.random() * 0.5 + 0.1;
        
        // Apply properties
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.opacity = opacity;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.skill-card, .portfolio-item, .contact-info');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
}

// Project Modal functionality
const portfolioItems = document.querySelectorAll('.portfolio-item');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-modal');

portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const projectId = item.getAttribute('data-project');
        const modal = document.getElementById(`project${projectId}-modal`);
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});