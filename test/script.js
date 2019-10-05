let nightmode_enable = false;

function white_excel(x){
    x.src = "image/white_excel.png";

}


function green_excel(x){
    x.src = "image/excel.png";

}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";

}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";

}

function nightmode(){
    if(nightmode_enable == false){
        document.body.style.backgroundColor ="#333";
        document.getElementById("text").style.color ="#fff";
        nightmode_enable = true;
    }
    else{
        document.body.style.backgroundColor ="#b5bdc5";
        document.getElementById("text").style.color ="#333";
        nightmode_enable = false;
    }
   
}