let navbar = document.querySelector('nav');
window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        navbar.style.backgroundColor = '#fff'
    }
    else{
        navbar.style.background = 'transparent'
    }
}

let headerScene = document.querySelector('header');
let headerParalax = new Parallax(headerScene);
let welcomeScene = document.querySelector('.welcome');
let welcomeParalax = new Parallax(welcomeScene);
let teachersScene = document.querySelector('.teachers');
let teachersParalax = new Parallax(teachersScene);
let contactsGirlScene = document.querySelector('.contacts_girl_scene');
let contactsGirlParalax = new Parallax(contactsGirlScene);
let contactsTriangleScene = document.querySelector('.contacts_triangle_scene');
let contactsTriangleParalax = new Parallax(contactsTriangleScene);