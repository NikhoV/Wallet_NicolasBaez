const menuButton = document.getElementById('menu-button');
const overlay = document.getElementById('overlay');
const themeBtn = document.getElementById('theme-toggler');
const langBtn = document.getElementById('language-toggler');
const sideBar = document.getElementById('side-bar');

menuButton.addEventListener('click', () => {
    if (sideBar.classList.contains('active')) {
        sideBar.classList.remove('active');
        overlay.classList.remove('active');
        menuButton.classList.remove('active');
    } else {
        sideBar.classList.add('active');
        overlay.classList.add('active');
        menuButton.classList.add('active');
    }   
});

overlay.addEventListener('click', () => {
    sideBar.classList.remove('active');
    overlay.classList.remove('active');
    menuButton.classList.remove('active');
});

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Cambia l'icona (opzionale se usi FontAwesome)
    const icon = themeBtn.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Carica preferenza tema
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}