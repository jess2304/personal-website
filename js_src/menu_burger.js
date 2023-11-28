document.addEventListener('DOMContentLoaded', function() {
    var burger = document.querySelector('.burger-nav');
    var nav = document.querySelector('.main-nav ul');

    burger.addEventListener('click', function() {
        nav.classList.toggle('active'); 
    });
});
