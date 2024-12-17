// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Highlight Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    let scrollPosition = window.pageYOffset;

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 70; // Adjust for fixed navbar
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`a[href="#${sectionId}"]`).classList.add('active');
        }
    });
});

// Interactive Card Flip Effect
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

//about animation

document.addEventListener("DOMContentLoaded", function () {
    const aboutText = document.getElementById("aboutText");

    window.addEventListener("scroll", function () {
        const textPosition = aboutText.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Trigger animation when text is about 80% visible
        if (textPosition < windowHeight * 0.8) {
            aboutText.classList.add("active");
        }
    });
});

// Initial Scroll Reveal on Page Load
document.addEventListener('DOMContentLoaded', () => {
    window.dispatchEvent(new Event('scroll'));
});
