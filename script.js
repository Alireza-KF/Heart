function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.getElementById('menu');

    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
}
