
const menu = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

if (menu && nav) {
    menu.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}

document.querySelectorAll('.year').forEach(el => {
    el.textContent = new Date().getFullYear();
});
