// scroll bar progress
window.onscroll = () => {
    let currentScroll = document.documentElement.scrollTop;
    let contentHeight = document.documentElement.scrollHeight;
    let windowHeight = document.documentElement.clientHeight;
    let remainingScroll = contentHeight - windowHeight;
    let scrolled = (currentScroll / remainingScroll) * 100;

    let progressbarW = document.getElementById("page-progressbarW");

    progressbarW.style.width = `${scrolled}%`;

}


// Modal

// Stop video
$("#myModal").on('hidden.bs.modal', function(stopAudio) {
    $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));
});



// Tuner Buttons functions
function play_E() {
    var audio = document.getElementById("E-Sound");
    audio.currentTime = 0;
    audio.play();
}

function play_A() {
    var audio = document.getElementById("A-Sound");
    audio.currentTime = 0;
    audio.play();
}

function play_D() {
    var audio = document.getElementById("D-Sound");
    audio.currentTime = 0;
    audio.play();
}

function play_G() {
    var audio = document.getElementById("G-Sound");
    audio.currentTime = 0;
    audio.play();
}

function play_B() {
    var audio = document.getElementById("B-Sound");
    audio.currentTime = 0;
    audio.play();
}

function play_e() {
    var audio = document.getElementById("e-Sound");
    audio.currentTime = 0;
    audio.play();
}


// fretboard tuner function
let areaA = document.getElementById('click6');
areaA.onclick = function play_E() {
    var audio = document.getElementById("E-Sound");
    audio.currentTime = 0;
    audio.play();

}

let areaB = document.getElementById('click5');
areaB.onclick = function play_A() {
    var audio = document.getElementById("A-Sound");
    audio.currentTime = 0;
    audio.play();
}
let areaC = document.getElementById('click4');
areaC.onclick = function play_E() {
    var audio = document.getElementById("D-Sound");
    audio.currentTime = 0;
    audio.play();
}

let areaD = document.getElementById('click3');
areaD.onclick = function play_E() {
    var audio = document.getElementById("G-Sound");
    audio.currentTime = 0;
    audio.play();
}

let areaE = document.getElementById('click2');
areaE.onclick = function play_E() {
    var audio = document.getElementById("B-Sound");
    audio.currentTime = 0;
    audio.play();
}

let areaF = document.getElementById('click1');
areaF.onclick = function play_E() {
    var audio = document.getElementById("e-Sound");
    audio.currentTime = 0;
    audio.play();
}



// Remove and add tuner buttons or fretboard


let tunerButtons = document.getElementById('tunerbuttons')

let tunerFretboard = document.getElementById('tunerfretboard')

let elementFretboard = document.getElementById('fretboard');
let elementButton = document.getElementById('buttons');



tunerButtons.onclick = function insertButton() {

    // make buttons visible
    elementButton.classList.add("tunervisible");
    elementButton.classList.remove('tunerhidden');

    // hide fretboard
    elementFretboard.classList.add('tunerhidden');
    elementFretboard.classList.remove('tunervisible');

    //button color change
    tunerFretboard.classList.remove('buttonpressed');
    tunerButtons.classList.add('buttonpressed');

}


tunerFretboard.onclick = function insertFretboard() {

    // make fretboard visible
    elementFretboard.classList.add("tunervisible");
    elementFretboard.classList.remove('tunerhidden');

    // hide buttons
    elementButton.classList.add('tunerhidden');
    elementButton.classList.remove('tunervisible');

    //button color change
    tunerFretboard.classList.add('buttonpressed');
    tunerButtons.classList.remove('buttonpressed');
}