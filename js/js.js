// let toggle = document.getElementById('toggle-menu');
//     nav = document.getElementById('nav');

// toggle.addEventListener('click', () => {
//     nav.classList.toggle('show');
// })

var toggleMenu = $('#toggle-menu');
    navegation = $('#nav');

toggleMenu.click('on', function(){
    navegation.slideToggle();
});