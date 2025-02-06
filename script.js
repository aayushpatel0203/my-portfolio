// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ScrollReveal Animations
ScrollReveal().reveal('.hero-content', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px'
});

ScrollReveal().reveal('.education, .skills, .languages', {
    duration: 800,
    origin: 'left',
    distance: '30px',
    interval: 200
});

ScrollReveal().reveal('.experience-item', {
    duration: 800,
    origin: 'right',
    distance: '30px',
    interval: 200
});

ScrollReveal().reveal('.project', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px'
});