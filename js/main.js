'use strict'

// hamburger ///////////////////////////////////////////////

const navWrapper = document.querySelector('.nav-wrapper');
document.querySelector('.nav-wrapper').addEventListener('click', () => {
    navWrapper.classList.remove('show');
    document.body.style.overflowY = 'visible'
});
function burger(e) {
    e.stopPropagation();
    navWrapper.classList.add('show');
    document.body.style.overflowY = 'hidden'
}
