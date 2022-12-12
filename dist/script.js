// feather icon
feather.replace()



// navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed')
    }else{
        header.classList.remove('navbar-fixed')
    }
};


// hamburger
const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active')
    nav.classList.toggle('hidden');
});

// faq javascript
const utama = document.querySelector('#faq');
const tomb = document.querySelectorAll('#button-faq');
const deskripsi = document.querySelectorAll('#deskripsi-faq');

tomb.forEach(function(el){
    el.addEventListener('click', function(e){
    e.target.parentElement.nextSibling.classList.toggle('tampil');
    e.classList.toggle('putar');
    })
})


// prevent-default
let tombol = document.querySelectorAll('#lokasi li a');

tombol.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.preventDefault();
    })
});


