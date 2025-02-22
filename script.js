document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add active class to nav links on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Function to handle redirection
    function redirectTo(url) {
        window.location.href = url;
    }

    // Event listener for the "DOWNLOAD" button
    document.getElementById('downloadButton').addEventListener('click', function() {
        const redirectUrl = 'https://hqlauncher.github.io/download/';
        redirectTo(redirectUrl);
    });

    // Event listener for the "DOWNLOAD NOW" button
    document.getElementById('downloadNowButton').addEventListener('click', function() {
        const redirectUrl = 'https://hqlauncher.github.io/download/';
        redirectTo(redirectUrl);
    });
});
