let lastScroll = 0;
const bound = 100;

const header = document.querySelector('.header');
const navLi = document.querySelectorAll('.navLi');

const scrollPosition = () => document.documentElement.scrollTop;
const beActiveHeader = () => header.classList.contains('.activ__header');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && scrollPosition() > bound && !beActiveHeader()) {
        header.classList.add('activ__header')
    } 
    else if(scrollPosition() < lastScroll && !beActiveHeader()) {
        header.classList.remove('activ__header')
    }
    lastScroll = scrollPosition();
})


header.addEventListener('mouseover', () => {
    if(header.classList.contains('activ__header')) {
        header.classList.remove('activ__header');
    }
})