// Intersection observer
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





//------------------------------------------------------------------------------------------------



function typeWriter(element, segments, segmentIndex, charIndex, callback) {
    if (segmentIndex < segments.length) {
        if (charIndex < segments[segmentIndex].length) {
            element.innerHTML += segments[segmentIndex].charAt(charIndex);
            setTimeout(function() {
                typeWriter(element, segments, segmentIndex, charIndex + 1, callback);
            }, 30);
        } else {
            // Ajoutez un saut de ligne si ce n'est pas le dernier segment
            if (segmentIndex < segments.length - 1) {
                element.innerHTML += '<br>';
            }
            setTimeout(function() {
                typeWriter(element, segments, segmentIndex + 1, 0, callback);
            }, 100);
        }
    } else if (typeof callback == 'function') {
        callback();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var element = document.getElementById('typewriter');
    var text = element.innerHTML;
    var segments = text.split('<br>'); // Découpez le texte en segments
    element.innerHTML = ''; // Effacez le contenu initial
    typeWriter(element, segments, 0, 0, function() {
        // Callback après la fin de l'animation
    });
});
