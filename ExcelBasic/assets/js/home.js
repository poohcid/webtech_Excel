//import Cookies from '/js-cookie-3.0.0-beta.0/src/js.cookie.mjs';

let nightmode_enable = false;
let isOverside = 0;
let sidebar_status = false;
let isFlexSlide = 0;
let switch1 = document.getElementById('switch');
let btotop = document.getElementsByClassName('bottom_to_top')[0];
let flex2 = document.getElementsByClassName('flex_container')[1];
flex2.style = "opacity: 0; transition: 0.5s";
let flex3 = document.getElementsByClassName('flex_container')[2];
if (window.scrollY == 0) {
    btotop.style = "opacity: 0; width: 0; height: 0;";
}

//จัดการคุกกี้
function setCookie(name, value, expires, path, domain, secure) {
    document.cookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    } else {
        begin += 2;
    }
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
        end = dc.length;
    }
    return unescape(dc.substring(begin + prefix.length, end));
}

function deleteCookie(name, path, domain) {
    if (getCookie(name)) {
        document.cookie = name + "=" +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            "; expires=Thu, 01-Jan-70 00:00:01 GMT";

    }
}
//จบฟังก์ชัน

function start() {
    if (window.innerWidth <= 1860) {
        isOverside = 0;
        sidebar_status = false;
    }
    flex2.style = "opacity: 0; transition: 0.5s";
    flex3.style = "opacity: 0; transition: 0.5s";
    //nightmode_enable = (Cookies.get('nightMode') == 'true');
    nightmode_enable = (getCookie('nightMode') == 'true');
    switch1.checked = nightmode_enable;
    nightModeStart();
}

function setOverside(a) {
    if (document.getElementById("mySidebar").style.width == "0") {
        sidebar_status = false;
    }

    isOverside = a;
}

document.addEventListener("click", function () {
    if (isOverside == 2 && window.innerWidth <= 1860) {
        document.getElementById("mySidebar").style.width = "0";
        isOverside = 0;
        sidebar_status = false;
    }
});

function flexSlide() {
    let flex2 = document.getElementsByClassName('flex_container')[1];
    let flex3 = document.getElementsByClassName('flex_container')[2];

    if (isFlexSlide >= 1) {
        return
    }

    if (window.scrollY >= 450) {
        flex2.style = "opacity: 1; transition: 0.5s";
    }
    else {
        flex2.style = "opacity: 0; transition: 0.5s";
    }

    if (window.scrollY >= 940) {
        flex3.style = "opacity: 1; transition: 0.5s";
        isFlexSlide = true;
    }
    else {
        flex3.style = "opacity: 0; transition: 0.5s"
    }
}

function hideButtonTop() {
    let btotop = document.getElementsByClassName('bottom_to_top')[0];
    if (window.scrollY == 0) {
        btotop.style = "opacity: 0; width: 0; height: 0;";
    }
    else {
        btotop.style = "width: 65px; height: 65px;"
    }
}

function changeCardScale() {
    card1 = document.getElementsByClassName("content1")[0];
    card2 = document.getElementsByClassName("content1")[1];
    if (isFlexSlide >= 2) { }
    else if (window.scrollY >= 1463) {
        card1.style = "transform: scale(1); transition: 0.5s;";
        isFlexSlide = 2;
    }
    else {
        card1.style = "transform: scale(0); transition: 0.5s;";
    }

    if (isFlexSlide >= 3) { }

    else if (window.scrollY >= 1850) {
        card2.style = "transform: scale(1); transition: 0.5s;";
        isFlexSlide = 3;
    }
    else {
        card2.style = "transform: scale(0); transition: 0.5s;";
    }
}

document.addEventListener('scroll', function () {
    flexSlide();
    hideButtonTop();
    changeCardScale();
});


function openNav() {
    isOverside = 0;

    if (window.screen.width >= 1860) {
        if (document.getElementById("mySidebar").style.width == "0px" || sidebar_status == false) {
            document.getElementById("mySidebar").style.width = "250px";
            sidebar_status = true;
            console.log("1");
        }
        else if (document.getElementById("mySidebar").style.width == "250px" || sidebar_status == true) {
            document.getElementById("mySidebar").style.width = "0";
            sidebar_status = false;
            console.log("2");
        }
    }
    else if (window.screen.width < 1860) {
        if (document.getElementById("mySidebar").style.width == "" || sidebar_status == false) {
            document.getElementById("mySidebar").style.width = "250px";
            sidebar_status = true;
            console.log("3");
        }
        else if (document.getElementById("mySidebar").style.width == "250px" || sidebar_status == true) {
            document.getElementById("mySidebar").style.width = "0";
            sidebar_status = false;
            console.log("4");
        }
    }


}


function nightmode() {
    if (nightmode_enable == false) {
        document.body.style.backgroundColor = "#222";
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
    else {
        document.body.style.backgroundColor = "#b5bdc5";
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
    switch1.checked = nightmode_enable;
    setCookie('nightMode', nightmode_enable);
}

function nightModeStart() {
    if (nightmode_enable == true) {
        document.body.style.backgroundColor = "#222";
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
    else {
        document.body.style.backgroundColor = "#b5bdc5";
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
    setCookie('nightMode', nightmode_enable);
}

start();