document.querySelectorAll('.main-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



//----------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    
    var navHeight = document.querySelector('.main-nav').offsetHeight;


    var profilePhotoSection = document.getElementById('profile-photo-section');
    profilePhotoSection.style.marginTop = navHeight + 'px';
});


//----------------------------------------------------------------------





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
    var segments = text.split('<br>'); 
    element.innerHTML = ''; 
    typeWriter(element, segments, 0, 0, function() {
    });
});





//------------------------------------------------------------------------------------------------



document.addEventListener('DOMContentLoaded', function() {

    var isimaSubjects = [
        "- Langues et Communication (Anglais, Allemand, Expression et Communication)",
        "- Gestion et Management (Organisation des entreprises, Gestion de projet, Management RH)",
        "- Informatique Fondamentale (Algorithmique, Structures de données, Automates, Langage C, UNIX, Java, C++, UML)",
        "- Développement et Programmation (Programmation fonctionnelle, Programmation linéaire, IOT)",
        "- Systèmes et Réseaux (Architecture des processeurs, Systèmes d'exploitation, Réseaux)",
        "- Science des Données (Base de données, Apprentissage statistique, Analyse de données, Big Data, Apprentissage profond)",
        "- Calcul et Modélisation (Analyse numérique, Probabilités, Calcul différentiel, Modélisation mathématique, Optimisation, Python, MATLAB)",
        "- Ingénierie et Technologie (Physique, Traitement du signal, Mécanique du solide, Eléments finis, CAO)",
        "- Cybersécurité et Éthique (Sensibilisation à la cybersécurité, Éthique, déontologie)",
        "- Projets (Projets de 2ème année)",
        "- Stage et Alternance (2ème année et 3ème année)"
      ];
    var ipestSubjects = [
        "- Mathématiques (Analyse et Algèbre)",
        "- Sciences Physiques",
        "- Sciences de l'ingénieur (SI)",
        "- Informatique",
        "- Philosophie en Français",
        "- Anglais"
    ];
    var lyceeSubjects = [
        "- Mathématiques (Analyse, Algèbre, Géométrie)",
        "- Sciences Physiques",
        "- Sciences humaines",
        "- Français",
        "- Anglais",
        "- Arabe",
        "- Philosophie",
        "- Informatique",
        "- Education Physique"
    ];


    function showSubjects(subjects, containerId) {
        var container = document.getElementById(containerId);
        container.style.position = 'absolute';
        container.innerHTML = '<button class="close-btn">X</button>' + 
            subjects.map(function(subject) {
                return '<div class="subject">' + subject + '</div>';
            }).join('');
        
        container.querySelector('.close-btn').addEventListener('click', function() {
            container.classList.remove('show');
        });
    
        container.classList.toggle('show');
    }
    


    document.getElementById('isima-photo').addEventListener('click', function() {
        showSubjects(isimaSubjects, 'isima-subjects');
    });

    document.getElementById('ipest-photo').addEventListener('click', function() {
        showSubjects(ipestSubjects, 'ipest-subjects');
    });

    document.getElementById('lycee-photo').addEventListener('click', function() {
        showSubjects(lyceeSubjects, 'lycee-subjects');
    });
});








//-------------------------------------------------------------------------------------------------


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
    items.forEach((item) => observer.observe(item));
});


//-------------------------------------------------------------------------------------------------


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

    const animatedItems = document.querySelectorAll('.animated');
    animatedItems.forEach((item) => observer.observe(item));
});
