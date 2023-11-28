// Show subjects of each image corresponding to each school.



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


