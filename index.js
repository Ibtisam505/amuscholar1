document.addEventListener('DOMContentLoaded', function() {
    const collapsibles = document.querySelectorAll('.collapsible');
    const searchInput = document.getElementById('searchInput');
    const sections = document.querySelectorAll('.section');
    
    // Set initial state - all collapsed with + symbol
    collapsibles.forEach(function(collapsible) {
        const toggle = collapsible.querySelector('.toggle');
        toggle.textContent = '🔺';
    });
    
    collapsibles.forEach(function(collapsible) {
        collapsible.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const toggle = this.querySelector('.toggle');
            
            if (content.classList.contains('expanded')) {
                content.classList.remove('expanded');
                toggle.textContent = '🔺';
            } else {
                content.classList.add('expanded');
                toggle.textContent = '🔻';
            }
        });
    });
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        sections.forEach(function(section) {
            const title = section.querySelector('h2').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
});