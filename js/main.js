// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const wrapper = document.querySelector('.wrapper');
const mainH1 = document.getElementById('main-h1');
const mainH2 = document.getElementById('main-h2');

document.getElementById('login-btn').addEventListener('click', () => {
    mainH1.style.opacity = '0';
    mainH2.style.opacity = '0';
    wrapper.style.display = 'block';
    setTimeout(() => { wrapper.style.opacity = '1'; }, 200);
});

document.getElementById('logo-btn').addEventListener('click', () => {
    mainH1.style.opacity = '1';
    mainH2.style.opacity = '1';
    wrapper.style.opacity = '0';
    setTimeout(() => {
        wrapper.style.display = 'none';
    }, 700);
});