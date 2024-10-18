$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.dropdown-btn').forEach(button => {
        button.addEventListener('click', function() {
            const target = document.querySelector(this.getAttribute('data-target'));
    
            // Toggle l'affichage de l'élément ciblé
            if (target.classList.contains('show')) {
                target.classList.remove('show');
            } else {
                document.querySelectorAll('.dropdown-content').forEach(content => content.classList.remove('show'));
                target.classList.add('show');
            }
        });
    });
    
});

