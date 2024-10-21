// Scroll Animation for Sections
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const triggerPoint = window.innerHeight / 1.2;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerPoint) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});