
// Navigate over the items of the main-nav

document.querySelectorAll('.main-nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//----------------------------------------------------------------------

// Adjust the distance between the main-nav and profile photo


function adjustProfilePhotoMargin() {
    var navHeight = document.querySelector('.main-nav').offsetHeight;
    var profilePhoto = document.querySelector('.profile-photo');
    profilePhoto.style.marginTop = navHeight + 'px';
}

document.addEventListener('DOMContentLoaded', adjustProfilePhotoMargin);
window.addEventListener('resize', adjustProfilePhotoMargin);


