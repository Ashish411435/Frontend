let i = 0;
function resmenu(){
    var a = document.getElementById('resmenu');
    if(i==0){
        a.classList.add('eff');
        a.classList.remove('eff2');
        i=1;
    }else{
        a.classList.add('eff2');
        a.classList.remove('eff');
        i=0;
    }
}