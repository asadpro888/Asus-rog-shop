let link = document.querySelector('.link');
let link2 = document.querySelector('.link2');
let link3 = document.querySelector('.link3');
let link4 = document.querySelector('.link4');
let link5 = document.querySelector('.link5');

link.addEventListener('click' , function(){
    link.classList.add('link');
})
link2.addEventListener('click' , function(){
    link.classList.add('link2');
    link.classList.remove('link');
})
link3.addEventListener('click' , function(){
    link.classList.add('link3');
    link.classList.remove('link2');
})
link4.addEventListener('click' , function(){
    link.classList.add('link4');
    link.classList.remove('link3');
})
link5.addEventListener('click' , function(){
    link.classList.add('link5');
    link.classList.remove('link4');
})