let words = document.getElementById("words");
let time = document.getElementById("time");
let Fullbtn = document.getElementById("Full");
let Datebtn = document.getElementById("Date");
let Timebtn = document.getElementById("Time");

let mode = "time"

function Draw(name){
   return function(){
     mode = name
     update()
   }
}

Fullbtn.onclick = Draw("full")

Datebtn.onclick = Draw("date")

Timebtn.onclick = Draw("time")

update()
setInterval(update, 1000)


function update(){
     time.textContent = format(mode)
}

function format(formatmode) {
    const now = new Date()
    switch (formatmode) {
        case "time":
            return now.toLocaleTimeString()
        case "date":
            return now.toLocaleDateString()
        case "full":
            return now.toLocaleDateString() + " " + now.toLocaleTimeString()
    }
}
