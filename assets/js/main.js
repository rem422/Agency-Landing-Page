/*MOBILE MENU*/
const hamburger = document.querySelector('.navbar .menu-btn i')

const mobile_menu = document.querySelector('.navbar .menu');

const menu_items = document.querySelectorAll('.navbar .menu li a');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

menu_items.forEach(item =>{
    item.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});
/*END OF MOBILE MENU*/

/*FEATURE READ MORE, READ LESS BUTTON*/
const btns = document.querySelectorAll('.feature-btn');

btns.forEach(btn => {
    btn.addEventListener('click', () =>{
        btn.parentNode.classList.toggle('activated');
    });
});

btns.forEach(btn =>{
    btn.addEventListener('click', () =>{
        if(btn.parentNode.classList.contains('activated')){
            btn.innerHTML = 'read less';
        }else{
            btn.innerHTML = 'read more';
        }
    });
});
/*END OF FEATURE READ MORE, READ LESS BUTTON*/

/*SCROLL TO TOP BTN*/
const scrollUpBtn = document.querySelector('.scroll-up-btn');

document.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY;
    
    if(scrolled > 300){
        scrollUpBtn.classList.add('show');
    }else{
        scrollUpBtn.classList.remove('show');
    }
})

scrollUpBtn.addEventListener('click', ()=>{
    document.documentElement.scrollTop = 0;
})
/*END OF SCROLL TO TOP BTN*/

/*FOOTER CURRENT YEAR AUTO UPDATE*/
const year = document.getElementById('year');
currentYear = new Date().getFullYear();
newYear = new Date(`january 01 ${currentYear +1} 00:00:00`);
year.innerText = currentYear;
/*END OF FOOTER CURRENT YEAR AUTO UPDATE*/

/* DARK & LIGHT MODE */
const dark_Mode_Btn = document.querySelector('.dark');
const element = document.body;

dark_Mode_Btn.addEventListener('click', () =>{
    element.classList.toggle('night');
});

// dark mode turn on automatically
if(new Date().getHours() > 18){
    element.classList.add('night');
}else if(new Date().getHours() <= 06){
    element.classList.add('night');
}else{
    element.classList.remove('night');
}
/* END OF DARK & LIGHT MODE */
