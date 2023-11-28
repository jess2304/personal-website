// Intersection observer for the hidden items we show them by fading in (translation in css)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            if (entry.target.classList.contains('slide-in')) {
                entry.target.classList.add('show-slide-in');
            }
            if (entry.target.classList.contains('fade-in')) {
                entry.target.classList.add('show-fade-in');
            }
            if (entry.target.classList.contains('typewriter')) {
                entry.target.classList.add('typing-start');
                
            }
        } else {
            entry.target.classList.remove('show', 'show-slide-in', 'show-fade-in','typing-start');
        }
    });
});

const Elements = document.querySelectorAll('.hidden, .animated');
Elements.forEach((el)=> observer.observe(el));

