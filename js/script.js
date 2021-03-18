let navbar = document.querySelector('nav');
window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        navbar.style.backgroundColor = '#fff'
    }
    else{
        navbar.style.background = 'transparent'
    }
}