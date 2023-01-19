
//Relógio
function relogio() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checarRelogio(h);
    m = checarRelogio(m);
    s = checarRelogio(s);
    document.getElementById('txt').innerHTML =
        h + ":" + m;
    var t = setTimeout(relogio, 500);

}
function checarRelogio(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}
relogio();
checarRelogio();

//Agregação de elementos para variáveis
var mainScreen = document.getElementById("telaPrincipal"); //Main Screen
var mobileCase = document.getElementById("celular"); //Celular
var notificationBar = document.getElementById("notBar"); //Notification Bar
var gmailApp = document.getElementById("gmailScreen"); //Gmail Screen
var settingsApp = document.getElementById("settingsScreen"); //Settings Screen
var bgChange = document.getElementById("bgChangeScreen"); //Settings Background Change Screen
var bgImg = document.getElementsByClassName("background"); //Background change function
var projectsApp = document.getElementById("projectsScreen"); //Projects Screen
var aboutMeApp = document.getElementById("telaSobreMim"); //About Me Screen


//Abrir GMAIL
function openGmail() {
    gmailApp.style.display = "flex";
    mainScreen.style.display = "none";
    notificationBar.style.background = "#bb4331";
}
function sendMail() {
    alert('Email enviado! Obrigado pelo contato, retornarei o mais rápido possivel.');

}

//Abrir SOBRE MIM
function openAboutMe() {
    aboutMeApp.style.display = "flex";
    mainScreen.style.display = "none";
}

//Abri PROJETOS
function openProjects() {
    projectsApp.style.display = "flex";
    mainScreen.style.display = "none";
}

//Abrir AJUSTES
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


//Funções para alterar o PLANO DE FUNDO
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


//Mobile BUTTON
function voltarTelaPrincipal() {
    gmailApp.style.display = "none";
    notificationBar.style.background = "#191919"; //Cause GMAIL changes the color
    settingsApp.style.display = "none";
    bgChange.style.display = "none"; //Subscreen from settings
    projectsApp.style.display = "none";
    aboutMeApp.style.display = "none";

    mainScreen.style.display = "flex";
}

function changeBorder(color) {
    mobileCase.style.border = "5px ridge " + color;
}

function openColorOption() {
    var menu = document.getElementsByTagName('a')[3];
    var mBorder = document.getElementById('celularCapa');

    menu.addEventListener('click', function () {
        mBorder.classList.toggle('show');
    });
}
