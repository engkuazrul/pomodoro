var time_id = document.getElementById('time');
var break_id = document.getElementById('break');
var time_min = document.getElementById('time_min');
var time_sec = document.getElementById('time_sec');
var break_min = document.getElementById('break_min');
var break_sec = document.getElementById('break_sec');
var session_id = document.getElementById('session');

var startTimer;
var breakTimer;

var sessionTimer = 'timer';

var audio = new Audio('meow_sound.wav');

function start() {
    if (sessionTimer == 'timer') {
        if (startTimer === undefined) {
            startTimer = setInterval(pomodo_time, 1000);
        } else {
            alert('Already Running');
        }
    } else {
        if (breakTimer === undefined) {
            breakTimer = setInterval(pomodo_break, 1000);
        } else {
            alert('Already Running');
        }
    }
}

function reset() {
    time_min.innerText = '25';
    time_sec.innerText = '00';

    break_min.innerText = '05';
    break_sec.innerText = '00';

    stopInterval();

    startTimer = undefined;
    breakTimer = undefined;
}

function stop() {
    stopInterval();

    startTimer = undefined;
    breakTimer = undefined;
}

function next(){
    reset();

    if(sessionTimer == 'timer'){
        time_id.style.display = 'none';
        break_id.style.display = 'flex';

        session_id.innerText = 'Break';
        session_id.style.color = 'green';
        break_id.style.border = '5px solid green';

        reset();

        sessionTimer = 'break';
        
    } else if (sessionTimer == 'break'){
        time_id.style.display = 'flex';
        break_id.style.display = 'none';

        session_id.innerText = 'Work';
        session_id.style.color = 'rgb(7, 186, 186)';
        time_id.style.border = '5px solid rgb(7, 186, 186)';

        reset();

        sessionTimer = 'timer';
    }
}

function pomodo_time() {
    var min = time_min.innerText;
    var sec = time_sec.innerText;

    if (sec != 0) {
        sec--;
        time_sec.innerText = String(sec).padStart(2, '0');
    } else if (min != 0 && sec == 0) {
        time_sec.innerText = String(59).padStart(2, '0');
        min--;
        time_min.innerText = String(min).padStart(2, '0');
    } else if (min == 0 && sec == 0) {
        time_id.style.display = 'none';
        break_id.style.display = 'flex';

        sessionTimer = 'break';

        session_id.innerText = 'Break';
        session_id.style.color = 'green';
        break_id.style.border = '5px solid green';

        stopInterval();

        audio.play();
    }
}

function pomodo_break() {
    var min = break_min.innerText;
    var sec = break_sec.innerText;

    if (sec != 0) {
        sec--;
        break_sec.innerText = String(sec).padStart(2, '0');
    } else if (min != 0 && sec == 0) {
        break_sec.innerText = String(59).padStart(2, '0');
        min--;
        break_min.innerText = String(min).padStart(2, '0');
    } else if (min == 0 && sec == 0) {
        time_id.style.display = 'flex';
        break_id.style.display = 'none';

        sessionTimer = 'timer';

        session_id.innerText = 'Work';
        session_id.style.color = 'rgb(7, 186, 186)';
        time_id.style.border = '5px solid rgb(7, 186, 186)';

        reset();

        audio.play();
    }
}

function stopInterval() {
    clearInterval(startTimer);
    clearInterval(breakTimer);
}