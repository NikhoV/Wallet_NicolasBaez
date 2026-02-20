const menuButton = document.getElementById('menu-button');
const overlay = document.getElementById('overlay');
const themeBtn = document.getElementById('theme-toggler');
const langBtn = document.getElementById('language-toggler');
const sideBar = document.getElementById('side-bar');
const navLinks = document.querySelectorAll('a[href^="#"]'); // Prende tutti i link che iniziano con #
const pages = document.querySelectorAll('.page');

function showPage(pageId) {
    // Nascondi tutte le pagine
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    // Mostra quella selezionata
    document.getElementById(pageId).classList.add('active');
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Impedisce il salto brusco
        
        const targetId = link.getAttribute('href').substring(1); // Es: "contatti"
        const targetPage = document.getElementById(targetId);

        if (targetPage) {
            // 1. Nascondi tutte le pagine
            pages.forEach(page => page.classList.remove('active'));
            
            // 2. Mostra la pagina selezionata
            targetPage.classList.add('active');

            // 3. Chiudi la sidebar e l'overlay (se erano aperti)
            sideBar.classList.remove('active');
            overlay.classList.remove('active');
            menuButton.classList.remove('active');
            
            // 4. Opzionale: scrolla verso l'alto
            window.scrollTo(0, 0);
        }
    });
});

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