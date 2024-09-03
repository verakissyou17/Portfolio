
let theme = localStorage.getItem('theme');

const header = document.querySelector('.header');
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelectorAll('.navbar');
const navLinks = document.querySelectorAll('.nav-list li a');
const toggleBtn = document.querySelector('.toggle-btn');
const ball = document.querySelector('.ball');
const myForm = document.getElementById('myForm');
const labels = document.querySelectorAll('.inputBox label');
const aboutMe = document.querySelector('.about-me__text');
const projectsList = document.getElementById('projects-list');
console.log(projectsList);


function darkTheme() {
    document.body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    ball.classList.add('dark-mode'); 
    myForm.classList.add('dark-mode');
    toggleBtn.classList.add('dark-mode');
    aboutMe.classList.add('dark-mode');
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
    myForm.classList.remove('dark-mode');
    toggleBtn.classList.remove('dark-mode');
    aboutMe.classList.remove('dark-mode');
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

projectsList.addEventListener('change', function () {
    let userOption = this.options[this.selectedIndex];
    if(userOption.value!== "") {
        window.open(userOption.value, '_blank', '');
    }
});


