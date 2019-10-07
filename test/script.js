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
        document.body.style.backgroundColor ="#111";
        document.getElementById("text").style.color ="#fff";
        document.getElementById("content1").style.backgroundColor="#333";
        nightmode_enable = true;
    }
    else{
        document.body.style.backgroundColor ="#b5bdc5";
        document.getElementById("text").style.color ="#111";
        nightmode_enable = false;
    }
}


function changeback(){
    img = document.getElementById("background");
    img.onclick = "https://google.com";
    
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

function background_link(){ 
    if(change_count == 0){
        alert('1');
        window.location.href = 'https://facebook.com';
    }
    else if(change_count == 1){
        alert('2');
        window.open("https://www.youtube.com");
    }
    else if(change_count == 2){
        alert('3');
        window.open("https://www.google.com");
    }
    else if(change_count == 3){
        alert('4');
        window.open("https://www.instagram.com");
    }

}