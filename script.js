
//    view counter by kilo billion million trillion
function views_func(vc) {

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

    return vc;
}    




//      taking user input
function take_input(i) {
    document.querySelectorAll(".box")[i].querySelector(".title").innerText = prompt("Enter Title : ");
    // document.querySelectorAll(".box")[0].querySelector(".title").innerHTML = "Hello World";
    document.querySelectorAll(".box")[i].querySelector(".channel").innerText = prompt("Enter Channel name : ");
    document.querySelectorAll(".box")[i].querySelector(".months").innerText = `${prompt("Enter months : ")}months ago`;
    document.querySelectorAll(".box")[i].querySelector(".duration").innerText = prompt("Enter duration : ");
    document.querySelectorAll(".box")[i].querySelector(".image").setAttribute("src", prompt("Enter image link"));
    document.querySelectorAll(".box")[i].querySelector(".views").innerText = `${views_func(Number(prompt("Enter views : ")))} views ` ; //  view এর সংখ্যা ইনপুট নেবে (স্ট্রিং হিশেবে থাকবে ইনপুট) - স্ট্রিং কে নাম্বার বানাবে - views_func নামের function এ তা ইনপুট দেবে - সেখান থেকে K, M, B, T সহ লেখা ফিরে আসবে - innerText এ সেট হবে
}    









//     Declarations
const temp_box = (`

    <section class="thumbnail">
        <img src="" alt="Thumbnail" class="image">
        <div class="duration"></div>
    </section>

    <section class="text">
        <div class="title"></div>
        <div class="undertitle">
            <span class="channel"></span>•
            <span class="views"></span>•
            <span class="months"></span>
        </div>
    </section>

`)







// main function 
for(i=0;prompt("Stop ! [Y/N]") === "Y";i++){
    elem = document.createElement("div");
    elem.className = "box"
    elem.innerHTML = temp_box;
    document.querySelector(".container").append(elem);
    take_input(i); 

    // এইখানে অনেক্ষন আটকাইয়া ছিলাম 
    // কারন ঃ append করার আগে input নিতে চাইছিলাম
    // শিক্ষা ঃ input নেয়ার আগে element insert করতে হবে

}
