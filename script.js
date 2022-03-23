//Global variables
const startBtn = document.getElementById('start')
const pauseBtn = document.getElementById('pause')
const resetBtn = document.getElementById('reset')

let tens = `00` 
let secs = `00`
let mins = `00`
let hr = `00`
let startTimer

//Event listeners
startBtn.addEventListener("click", start)
pauseBtn.addEventListener("click", pause)
resetBtn.addEventListener("click", reset)

resetBtn.addEventListener("mousedown", () => {
    resetBtn.style.fontWeight = "bold"
    resetBtn.style.opacity = 0.8
})

resetBtn.addEventListener("mouseup", () => {
    resetBtn.style.fontWeight = "normal"
    resetBtn.style.opacity = 1
})

//Interval functions
function start() {
    startBtn.classList.add("active")
    pauseBtn.classList.remove("pauseActive")

    startTimer = setInterval(() => {
        tens++
        tens = tens < 10 ? "0" + tens : tens

        if (tens == 100) {
            secs++
            secs = secs < 10 ? "0" + secs : secs
            tens = `00`        
        }

        if (secs == 60) {
            mins++
            mins = mins < 10 ? "0" + mins : mins
            secs = `00`        
        }

        if (mins == 60) {
            hr++
            hr = hr < 10 ? "0" + hr : hr
            mins = `00`        
        }

        putValue()
    }, 10)
}

function pause() {
    startBtn.classList.remove("active")
    pauseBtn.classList.add("pauseActive")
    clearInterval(startTimer)
}

function reset() {
    startBtn.classList.remove("active")
    pauseBtn.classList.remove("pauseActive")

    clearInterval(startTimer)
    tens = `00` 
    secs = `00`
    mins = `00`
    hr = `00`

    putValue()
}

//Time display function
function putValue() {
    document.getElementById("tenths").innerText = tens
    document.getElementById("seconds").innerText = secs
    document.getElementById("minutes").innerText = mins
    document.getElementById("hours").innerText = hr
}

