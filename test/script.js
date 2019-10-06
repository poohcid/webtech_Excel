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
    img = document.getElementById("background");

    
    if(change_count == 0){
        img.style.backgroundImage = "url('image/back1.png')";
        change_count = 1;
    }
    else if(change_count == 1){
        img.style.backgroundImage = "url('image/back2.png')";
        change_count = 2;
    }
    else if(change_count == 2){
        img.style.backgroundImage = "url('image/back3.png')";
        change_count = 3;
    }
    else if(change_count == 3){
        img.style.backgroundImage = "url('image/back.png')";
        change_count = 0;
    }
    
}