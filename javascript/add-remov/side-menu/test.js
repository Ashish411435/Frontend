let btn = document.getElementsByClassName('btn');
let clname = document.getElementsByClassName('disNone');

for(let i = 0; i <= btn.length; i++)
{
    btn[i].addEventListener('click', val);
}
function val(){
    let items = this.nextElementSibling.className;
    for(let j = 0; j < clname.length; j++)
    {
        clname[j].className = 'disNone';
    }

    if(items == 'disNone')
    {
        this.nextElementSibling.classList.add('disShow');
    }
}