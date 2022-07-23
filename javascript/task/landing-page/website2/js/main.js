/* Begin RESPONSIVE MENU BAR*/
var i = 0;
function resBarMenu(){
    let navigationMenu = document.getElementById('navigationMenu');

    if(i == 0)
    {
        navigationMenu.classList.add('menu-open');
        navigationMenu.classList.remove('menu-close');
        i = 1;
    }
    else{
        navigationMenu.classList.add('menu-close');
        navigationMenu.classList.remove('menu-add');
        i = 0;
    }
}
/* End RESPONSIVE MENU BAR*/



/* ---Begin Scroll Effects--- */
document.addEventListener("scroll", scrollme);
function scrollme(){
    
    /* Begin Scroll-Effect Left */
    let scrollEffLeft = document.querySelectorAll(".scroll-eff-left"); 

    for(let i = 0; i < scrollEffLeft.length; i++){
        let myWindow = window.innerHeight; 
        let getSize = scrollEffLeft[i].getBoundingClientRect().top;
        if(getSize < myWindow)
        {
            scrollEffLeft[i].classList.add('eff-left');
        }
        else{
            scrollEffLeft[i].classList.remove('eff-left');
        }
    }
    /* End Scroll-Effect Left */

    /* Begin Scroll-Effect Right */
    let scrollEffRight = document.querySelectorAll(".scroll-eff-right");
    for(let i = 0; i < scrollEffRight.length; i++)
    {
        let myWindow = window.innerHeight;
        let getSize = scrollEffRight[i].getBoundingClientRect().top;
        if(getSize < myWindow)
        {
            scrollEffRight[i].classList.add('eff-right');
        }
        else{
            scrollEffRight[i].classList.remove('eff-right');
        }
    }
    /* End Scroll-Effect Right */

    /* Begin Scroll Pop-Effect */
    let scrollEffPop = document.querySelector('.contact-form-section');
    let myWindow  = window.innerHeight;
    let getPopSize = scrollEffPop.getBoundingClientRect().top;
    if(getPopSize < myWindow)
    {
        scrollEffPop.classList.add('contactPopEff');
    }
    else{
        scrollEffPop.classList.remove('contactPopEff');
    }
    /* End Scroll Pop-Effect */

}
/* ---End Scroll Effects--- */



