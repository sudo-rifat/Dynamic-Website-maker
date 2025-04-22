let box = document.querySelector(".box").children

let thumbnail = document.querySelector(".image")
let title = document.querySelector(".title")
let channel = document.querySelector(".channel")
let views = document.querySelector(".views")
let months = document.querySelector(".months") 
let duration = document.querySelector(".duration")


title.innerText = prompt("Enter Title : ")
channel.innerText = prompt("Enter Channel name : ")
let views_counter = prompt("Enter views : ");
months.innerText = prompt("Enter months : ")
duration.innerText = prompt("Enter duration : ")
thumbnail.setAttribute("src",prompt("Enter image link"))











let vc = views_counter;
vc = + vc;


if ((vc >= 1000) && (vc < 1000000)) {
    vc = vc / 1000;
    vc = vc.toFixed(2);
    vc = String(`${vc}K`);
    console.log(vc);
} 
else if ((vc >= 1000000) && (vc < 1000000000)) {
    vc = vc / 1000000;
    vc = vc.toFixed(2);
    vc = String(`${vc}M`);
    console.log(vc);
} 
else if ((vc >= 1000000000) && (vc < 1000000000000)) {
    vc = vc / 1000000000;
    vc = vc.toFixed(2);
    vc = String(`${vc}B`);
    console.log(vc);
} 
else if (vc >= 1000000000000) {
    vc = vc / 1000000000000;
    vc = vc.toFixed(2);
    vc = String(`${vc}T`);
    console.log(vc);
} 

views.innerText = vc