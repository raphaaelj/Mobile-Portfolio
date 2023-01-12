
//Watch
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
//End


//VAR APPS
var mainScreen = document.getElementById("firstScreen"); //Main Screen
var notificationBar = document.getElementById("notBar"); //Notification Bar
var gmailApp = document.getElementById("gmailScreen"); //Gmail Screen
var settingsApp = document.getElementById("settingsScreen"); //Settings Screen
var bgChange = document.getElementById("bgChangeScreen"); //Settings Background Change Screen
var bgImg = document.getElementsByClassName("background"); //Background change function


//App GMAIL OPEN
function openGmail() {
    gmailApp.style.display = "flex";
    mainScreen.style.display = "none";
    notificationBar.style.background = "#bb4331";
}
function sendMail() {
    alert('Email enviado! Obrigado pelo contato, retornarei o mais rápido possivel.');
}
//GMAIL END

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
    for(var i = 0; i < bgImg.length; i++) {
        bgImg[i].style.background = 'url(' + "images/bg-cellphone-1.jpg" + ')';
        bgImg[i].style.backgroundSize = "cover";
        bgImg[i].style.backgroundPosition = "center";
        bgImg[i].style.backgroundRepeat = "no-repeat";
    }
}
function bgTwo() {
    for(var i = 0; i < bgImg.length; i++) {
        bgImg[i].style.background = 'url(' + "images/bg-cellphone-2.jpg" + ')';
        bgImg[i].style.backgroundSize = "cover";
        bgImg[i].style.backgroundPosition = "center";
        bgImg[i].style.backgroundRepeat = "no-repeat";
    }
}
function bgThree() {
    for(var i = 0; i < bgImg.length; i++) {
        bgImg[i].style.background = 'url(' + "images/bg-cellphone-3.jpg" + ')';
        bgImg[i].style.backgroundSize = "cover";
        bgImg[i].style.backgroundPosition = "center";
        bgImg[i].style.backgroundRepeat = "no-repeat";
    }
}
function bgFour() {
    for(var i = 0; i < bgImg.length; i++) {
        bgImg[i].style.background = 'url(' + "images/bg-cellphone-4.jpg" + ')';
        bgImg[i].style.backgroundSize = "cover";
        bgImg[i].style.backgroundPosition = "center";
        bgImg[i].style.backgroundRepeat = "no-repeat";
    }
}
function bgFive() {
    for(var i = 0; i < bgImg.length; i++) {
        bgImg[i].style.background = 'url(' + "images/bg-cellphone-5.jpg" + ')';
        bgImg[i].style.backgroundSize = "cover";
        bgImg[i].style.backgroundPosition = "center";
        bgImg[i].style.backgroundRepeat = "no-repeat";
    }
}



//CELLPOHNE BUTTON CLOSE APPS AND SHOW FIRST SCREEN
function backFirstScreen() { 
    //GMAIL
    if (gmailApp.style.display == "flex") {
        gmailApp.style.display = "none";
        mainScreen.style.display = "flex";
        notificationBar.style.background = "#191919";
    } //END

    //SETTINGS
    else if (settingsApp.style.display || bgChange.style.display == "flex") {
        settingsApp.style.display = "none";
        bgChange.style.display = "none";
        mainScreen.style.display = "flex";
    } //END
}