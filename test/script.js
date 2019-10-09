let nightmode_enable = false;

let change = setInterval(changeback, 4000);
let change_count = 0;


function openNav() {
    if(document.getElementById("mySidebar").style.width == "250px"){
        document.getElementById("mySidebar").style.width = "0";
    }
    else{
        document.getElementById("mySidebar").style.width = "250px";
    }
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";

}

function nightmode(){
    if(nightmode_enable == false){
        document.body.style.backgroundColor ="#111";
        document.getElementById("text").style.color ="#fff";
        nightmode_enable = true;
    }
    else{
        document.body.style.backgroundColor ="#b5bdc5";
        document.getElementById("text").style.color ="#111";
        nightmode_enable = false;
    }
}


function changeback(x){
    img = document.getElementById("background");
    num = 0;
    if(x == 1) num = change_count+x;
    else  num = change_count-x;
    
    if(change_count == 0 || num == 0){
        img.style.backgroundImage = "url('image/back1.png')";
        change_count = 1;
    }
    else if(change_count == 1 || num == 1){
        img.style.backgroundImage = "url('image/back2.png')";

        change_count = 2;
    }
    else if(change_count == 2 || num == 2){
        img.style.backgroundImage = "url('image/back3.png')";
        change_count = 3;
    }
    else if(change_count == 3 || num == 3){
        img.style.backgroundImage = "url('image/back.png')";
        change_count = 0;
    }
    
}

function background_link(){ 
    
    if(change_count == 0){
        document.getElementById("background_link").href= 'https://facebook.com';
    }
    else if(change_count == 1){
        document.getElementById("background_link").href= 'https://google.com';
    }
    else if(change_count == 2){
        document.getElementById("background_link").href= 'https://youtube.com';
    }
    else if(change_count == 3){
        document.getElementById("background_link").href= 'https://instagram.com';
    }

}
