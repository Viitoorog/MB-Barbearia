function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/menu.png";
    }
}

let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})


document.getElementById('"Botão de Login').addEventListener('click', function() {
    var logoutBox = document.getElementById('logout-box');
    logoutBox.style.display = 'block';
});


