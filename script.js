let time = document.querySelector('.time');


let [second,minute,hour] = [0,0,0];
let timer = null;
let timerHandler = () => {
    second++;
    if (second == 60) {
        second = 0;
        minute++;
        if (minute == 60) {
            minute = 0;
            hour++;
        }
    }
    let h = hour < 10 ? '0' + hour : hour;
    let m = minute < 10 ? '0' + minute : minute;
    let s = second < 10 ? '0' + second : second;
    time.innerHTML = `${h}:${m}:${s}`;
}

let startTimer = () => {
    if (timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(() => {
        timerHandler();
    },1000);
}


let stopTimer = () => {
    clearInterval(timer);
}
let resetTimer = () => {
    clearInterval(timer);
    second=0;
    hour=0;
    minute=0;
    time.innerHTML = `0${hour}:0${minute}:0${second}`;
    
}