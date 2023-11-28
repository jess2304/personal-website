
// Animated appearance for some classes named animated or inherits from animated.

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0.1 });

    const items = document.querySelectorAll('.competence-item');
    const animatedItems = document.querySelectorAll('.animated');
    items.forEach((item) => observer.observe(item));
    animatedItems.forEach((item) => observer.observe(item));
});








