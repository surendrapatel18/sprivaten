
// Toggle-Function & Mobile-Menu
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('mobileMenu').classList.toggle('active');
});

document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('mobileMenu').classList.remove('active');
    });
});

// Youtube Video iframe Custom Play-Button

document.getElementById('playButton').addEventListener('click', function() {
    var iframe = document.getElementById('youtubeIframe');
    iframe.src += "&autoplay=1";
    this.style.display = 'none';
});


// Get the Current Year

const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;