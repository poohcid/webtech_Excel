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
        document.getElementById("line").style.background ="rgb(255, 191, 118)";
        nightmode_enable = true;
    }
    else{
        document.body.style.backgroundColor ="#b5bdc5";
        document.getElementById("text").style.color ="#222";
        document.getElementById("content1").style.color ="#222";
        document.getElementById("line").style.background ="#222";
        nightmode_enable = false;
    }
}
