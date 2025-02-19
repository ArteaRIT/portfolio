document.addEventListener('DOMContentLoaded', function() {
    const galleryBtns = document.querySelectorAll('.gallery-btn');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('img');
    
    galleryBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const galleryId = this.dataset.gallery;
            const gallery = document.getElementById(galleryId);
            
            // Hide all galleries first
            document.querySelectorAll('.gallery').forEach(g => {
                g.classList.remove('active');
            });
            
            // Toggle clicked gallery
            gallery.classList.toggle('active');
            
            // Scroll to gallery
            if (gallery.classList.contains('active')) {
                gallery.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });
    });

    // Add lightbox functionality
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', function() {
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
            lightbox.classList.add('active');
        });
    });

    // Close lightbox when clicking anywhere
    lightbox.addEventListener('click', function() {
        this.classList.remove('active');
    });
}); 