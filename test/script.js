let nightmode_enable = false;

let change = setInterval(changeback, 3000);
let change_count = 0;


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


function changeback(){
    img = document.getElementById("img");
    document.getElementById("img").style.transition = "0.3s";
    
    if(change_count == 0){
        img.src ="image/back1.png"
        change_count = 1;
    }
    else if(change_count == 1){
        img.src ="image/back2.png"
        change_count = 2;
    }
    else if(change_count == 2){
        img.src ="image/back3.png"
        change_count = 3;
    }
    else if(change_count == 3){
        img.src ="image/back.png"
        change_count = 0;
    }
    
}