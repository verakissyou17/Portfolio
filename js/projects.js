
let theme = localStorage.getItem('theme');

const header = document.querySelector('.header');
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelectorAll('.navbar');
const navLinks = document.querySelectorAll('.nav-list li a');
const toggleBtn = document.querySelector('.toggle-btn');
const ball = document.querySelector('.ball');
const labels = document.querySelectorAll('.inputBox label');

function darkTheme() {
    document.body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    ball.classList.add('dark-mode'); 
    toggleBtn.classList.add('dark-mode');
    navLinks.forEach(link => {
        link.classList.add('dark-mode');
    }); 
    labels.forEach(label => {
        label.classList.add('dark-mode');
    });

    localStorage.setItem('theme', 'dark');
};

function lightTheme() {
    document.body.classList.remove('dark-mode');
    header.classList.remove('dark-mode');
    ball.classList.remove('dark-mode'); 
    toggleBtn.classList.remove('dark-mode');
    navLinks.forEach(link => {
        link.classList.remove('dark-mode');
    });
    labels.forEach(label => {
        label.classList.remove('dark-mode');
    });
    
    localStorage.setItem('theme', 'light');
};

if(theme === 'dark') {
    darkTheme();
}

toggleBtn.addEventListener('click', () => {
    theme = localStorage.getItem('theme')
    if(theme !== 'dark') {
        darkTheme();
    } else {
        lightTheme();
    }
});

const navList  = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('closed');
    hamburger.classList.toggle('closed');
});


 const articles = document.querySelectorAll('.main-article');

    articles.forEach(article => { 
        function rotateElement (e, elem) {

            const x = e.clientX;
            const y = e.clientY;

            const middleX = window.innerWidth / 2;
            const middleY = window.innerHeight / 2;

            const offsetX = ((x - middleX) / middleX) * 45;
            const offsetY = ((y - middleY) / middleY) * 45;

            console.log(offsetX, offsetY);

            elem.style.setProperty("--rotateX", -1 * offsetY + "deg");
            elem.style.setProperty("--rotateY", offsetX + "deg");
        };   

    article.addEventListener('mousemove',(e) => {
        e.preventDefault();
        rotateElement(e, article);
    });
});


articles.forEach((article) => {
    article.addEventListener('click', () => {
        const hue = Math.floor(Math.random() * 360);
        const saturation = Math.floor(Math.random() * 80);
        const lightness = Math.floor(Math.random() * 35);      
        article.style.background = `hsla(${hue}, ${saturation}%, ${lightness}%)`;
    });
});


