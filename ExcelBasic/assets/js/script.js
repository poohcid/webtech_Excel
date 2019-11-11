let nightmode_enable = false;
let isOverside = 0;
let sidebar_status = true;
let isFlexSlide = 0;
let switch1  = document.getElementById('switch');
let btotop = document.getElementsByClassName('bottom_to_top')[0];
if (window.scrollY == 0){
    btotop.style = "opacity: 0; width: 0; height: 0;";
}

function start(){
    if (window.innerWidth <= 1860){
        isOverside = 0;
        sidebar_status = false;
    }
    nightmode_enable = (Cookies.get('nightMode') == 'true');
    switch1.checked = nightmode_enable;
    //console.log(typeof nightmode_enable);
    nightModeStart();
}

function setOverside(a){
    if (document.getElementById("mySidebar").style.width == "0"){
        sidebar_status = false;
    }

    isOverside = a;
}

document.addEventListener("click", function(){
    if (isOverside == 2 && window.innerWidth <= 1860){
        document.getElementById("mySidebar").style.width = "0";
        isOverside = 0;
        sidebar_status = false;
    }
});

function hideButtonTop(){
    let btotop = document.getElementsByClassName('bottom_to_top')[0];
    if (window.scrollY == 0){
        btotop.style = "opacity: 0; width: 0; height: 0;";
    }
    else{
        btotop.style = "width: 65px; height: 65px;"
    }
}


document.addEventListener('scroll', function(){
    hideButtonTop();
});


function openNav() {
    isOverside = 0;

    if(window.screen.width >= 1860){
        if(document.getElementById("mySidebar").style.width == "0px" || sidebar_status == false){
            document.getElementById("mySidebar").style.width = "250px";
            sidebar_status = true;
        }
        else if(document.getElementById("mySidebar").style.width == "250px" || sidebar_status == true){
            document.getElementById("mySidebar").style.width = "0";
            sidebar_status = false;
        }
    }
    else if(window.screen.width < 1860){
        if(document.getElementById("mySidebar").style.width == "" || sidebar_status == false){
            document.getElementById("mySidebar").style.width = "250px";
            sidebar_status = true;
        }
        else if(document.getElementById("mySidebar").style.width == "250px" || sidebar_status == true){
            document.getElementById("mySidebar").style.width = "0";
            sidebar_status = false;
        }
    }
    
    
}


function nightmode(){
    var x = document.getElementById("switch");
    if(nightmode_enable == false){
        document.body.style.backgroundColor ="#222";
        var text = document.querySelectorAll("#text");
        var line = document.querySelectorAll(".underline");
       
        document.getElementById("head").style.background = "#555";
        for (i = 0; i < text.length; i++) {
            text[i].style.color = "#FFF";
          }  
        for (i = 0; i < line.length; i++) {
            line[i].style.backgroundColor = "rgb(255, 191, 118)";
          }
        nightmode_enable = true;
        x.checked = true;
    }
    else{
        document.body.style.backgroundColor ="#b5bdc5";
        var text = document.querySelectorAll("#text");
        var line = document.querySelectorAll(".underline");
        document.getElementById("head").style.background = "#e0e0e0";

        for (i = 0; i < text.length; i++) {
            text[i].style.color = "#000";
          }      
        for (i = 0; i < line.length; i++) {
            line[i].style.backgroundColor = "#111";
          }
        nightmode_enable = false;
        x.checked = false;
    }
    switch1.checked = nightmode_enable;
    Cookies.set('nightMode', nightmode_enable, {expires: 2});
}

function nightModeStart(){
    if(nightmode_enable == true){
        document.body.style.backgroundColor ="#222";
        var text = document.querySelectorAll("#text");
        var line = document.querySelectorAll(".underline");
        document.getElementById("head").style.background = "#555";
        for (i = 0; i < text.length; i++) {
            text[i].style.color = "#FFF";
          }  
        for (i = 0; i < line.length; i++) {
            line[i].style.backgroundColor = "rgb(255, 191, 118)";
          }
    }
    else{
        document.body.style.backgroundColor ="#b5bdc5";
        var text = document.querySelectorAll("#text");
        var line = document.querySelectorAll(".underline");
        document.getElementById("head").style.background = "#e0e0e0";

        for (i = 0; i < text.length; i++) {
            text[i].style.color = "#000";
          }      
        for (i = 0; i < line.length; i++) {
            line[i].style.backgroundColor = "#111";
          }
    }
    Cookies.set('nightMode', nightmode_enable, {expires: 2});
}

start();
