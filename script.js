
//Watch Start
function watchTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
        h + ":" + m;
    var t = setTimeout(watchTime, 500);

}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}
watchTime();
checkTime();
//Watch End


//Var APPS
var mainScreen = document.getElementById("firstScreen"); //Main Screen
var notificationBar = document.getElementById("notBar"); //Notification Bar
var gmailApp = document.getElementById("gmailScreen"); //Gmail Screen
var settingsApp = document.getElementById("settingsScreen"); //Settings Screen
var bgChange = document.getElementById("bgChangeScreen"); //Settings Background Change Screen
var bgImg = document.getElementsByClassName("background"); //Background change function
var projectsApp = document.getElementById("projectsScreen"); //Projects Screen
var aboutMeApp = document.getElementById("aboutMeScreen"); //About Me Screen


//Gmail OPEN
function openGmail() {
    gmailApp.style.display = "flex";
    mainScreen.style.display = "none";
    notificationBar.style.background = "#bb4331";
}
function sendMail() {
    alert('Email enviado! Obrigado pelo contato, retornarei o mais rápido possivel.');

}
//Gmail END

/* //AboutMe OPEN
function openAboutMe() {
    aboutMeApp.style.display = "flex";
    mainScreen.style.display = "none";
}
//AboutMe END */

//Projects OPEN
function openProjects() {
    projectsApp.style.display = "flex";
    mainScreen.style.display = "none";
}

//Settings OPEN
function openSettings() {
    mainScreen.style.display = "none";
    settingsApp.style.display = "flex";

}
function openBgChange() {
    settingsApp.style.display = "none";
    bgChange.style.display = "flex";

}
function closeBgChange() {
    bgChange.style.display = "none";
    settingsApp.style.display = "flex";

}
function bgOne() {
    for (var i = 0; i < bgImg.length; i++) {
        bgImg[i].style.background = 'url(' + "images/bg-cellphone-1.jpg" + ')';
        bgImg[i].style.backgroundSize = "cover";
        bgImg[i].style.backgroundPosition = "center";
        bgImg[i].style.backgroundRepeat = "no-repeat";
    }

}
function bgTwo() {
    for (var i = 0; i < bgImg.length; i++) {
        bgImg[i].style.background = 'url(' + "images/bg-cellphone-2.jpg" + ')';
        bgImg[i].style.backgroundSize = "cover";
        bgImg[i].style.backgroundPosition = "center";
        bgImg[i].style.backgroundRepeat = "no-repeat";
    }

}
function bgThree() {
    for (var i = 0; i < bgImg.length; i++) {
        bgImg[i].style.background = 'url(' + "images/bg-cellphone-3.jpg" + ')';
        bgImg[i].style.backgroundSize = "cover";
        bgImg[i].style.backgroundPosition = "center";
        bgImg[i].style.backgroundRepeat = "no-repeat";
    }

}
function bgFour() {
    for (var i = 0; i < bgImg.length; i++) {
        bgImg[i].style.background = 'url(' + "images/bg-cellphone-4.jpg" + ')';
        bgImg[i].style.backgroundSize = "cover";
        bgImg[i].style.backgroundPosition = "center";
        bgImg[i].style.backgroundRepeat = "no-repeat";
    }

}
function bgFive() {
    for (var i = 0; i < bgImg.length; i++) {
        bgImg[i].style.background = 'url(' + "images/bg-cellphone-5.jpg" + ')';
        bgImg[i].style.backgroundSize = "cover";
        bgImg[i].style.backgroundPosition = "center";
        bgImg[i].style.backgroundRepeat = "no-repeat";
    }

}
//Settings END


//Mobile BUTTON
function backFirstScreen() {
    gmailApp.style.display = "none";
    notificationBar.style.background = "#191919"; //Cause GMAIL changes the color
    settingsApp.style.display = "none";
    bgChange.style.display = "none"; //Subscreen from settings
    projectsApp.style.display = "none";

    mainScreen.style.display = "flex";
}
