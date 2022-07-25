
//toogle untuk toolbar kanan

const menuToggle = document.querySelector('.menu-toogle input');
const nav = document.querySelector('header ul');

menuToggle.addEventListener('click',function() {
    nav.classList.toggle('slide');
});