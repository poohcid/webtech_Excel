let nightmode_enable = false;
let isOverside = 0;
let sidebar_status = true;
function setOverside(a){
    isOverside = a;
    console.log(isOverside);
}

document.addEventListener("click", function(){
    if (isOverside == 2 && window.innerWidth <= 1860){
        document.getElementById("mySidebar").style.width = "0";
        isOverside = 0;
    }
});


function openNav() {
    isOverside = 0;

    if(window.screen.width >= 1860){
        if(document.getElementById("mySidebar").style.width == "0px" || sidebar_status == false){
            document.getElementById("mySidebar").style.width = "250px";
            sidebar_status = true;
            alert("1");
            console.log(sidebar_status);
        }
        else if(document.getElementById("mySidebar").style.width == "250px" || sidebar_status == true){
            document.getElementById("mySidebar").style.width = "0";
            sidebar_status = false;
            alert("2");
            console.log(sidebar_status);
        }
    }
    else if(window.screen.width < 1860){
        if(document.getElementById("mySidebar").style.width == "" || sidebar_status == false){
            document.getElementById("mySidebar").style.width = "250px";
            sidebar_status = true;
            alert("3");
            console.log(sidebar_status);
        }
        else if(document.getElementById("mySidebar").style.width == "250px" || sidebar_status == true){
            document.getElementById("mySidebar").style.width = "0";
            sidebar_status = false;
            alert("4");
            console.log(sidebar_status);
        }
    }
    
    
}


function nightmode(){
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
    }
}
