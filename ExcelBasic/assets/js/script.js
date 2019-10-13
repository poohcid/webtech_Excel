let nightmode_enable = false;



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
        document.body.style.backgroundColor ="#222";
        document.getElementById("text").style.color ="#fff";
        document.getElementById("content1").style.color ="#fff";
        var line = document.querySelectorAll(".underline");
        for (i = 0; i < line.length; i++) {
            line[i].style.backgroundColor = "rgb(255, 191, 118)";
          }
        nightmode_enable = true;
    }
    else{
        document.body.style.backgroundColor ="#b5bdc5";
        document.getElementById("text").style.color ="#000";
        document.getElementById("content1").style.color ="#000";
        var line = document.querySelectorAll(".underline");
        for (i = 0; i < line.length; i++) {
            line[i].style.backgroundColor = "#111";
          }
        nightmode_enable = false;
    }
}
