document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('ul').classList.toggle('show');
});
document.querySelectorAll('.dropdown > a').forEach(dropdown => {
    dropdown.addEventListener('click', function(event) {
        event.preventDefault();
        this.parentElement.classList.toggle('active');
    });
});
