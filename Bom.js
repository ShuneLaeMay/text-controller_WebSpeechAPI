// const { Modal } = require("bootstrap");

// console.log(window);

//BOM properties
//Browser width and height
// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(window.outerHeight);
// console.log(window.outerWidth);

//Modal
// const exampleModal = new bootstrap.Modal("#exampleModal");

//User use 75% open model
// const h75 = 0.75*document.body.getBoundingClientRect().height - window.innerHeight;
// window.addEventListener("scroll" , () => {
//     console.log(window.scrollY);
//     if(window.scrollY > h75){
//         exampleModal.show()
//     }
// }); 
 
//resize
// window.addEventListener("resize", () => {
//     console.log("this is resize");
// })

//online
window.addEventListener("online", () => {
    console.log("this is online");
})

//offline
// window.addEventListener("offline", () => {
//     console.log("this is offline");
//  })

//time-out
// const run = () => console.log("I'm run");
// setTimeout(run,3000);

//interval
// const run = () => {
//     const d = new Date();
//     console.log(d.getHours(),":",d.getMinutes(),":",d.getSeconds());
// }
//setInterval(run,3000);

const clock = document.querySelector("#clock");
const run = () => {
    const d = new Date();
    //const h1 = document.createElement("h1");
    console.log(d.getHours(),":",d.getMinutes(),":",d.getSeconds())
    //clock.innerText = "d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()";
    // document.body.append(h1);
    // console.log(d.getSeconds());
    clock.innerText = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    // document.body.append(h1);
    //clock.classList.add("m-3");
    clock.classList.add("border","border-dark","d-inline");
    //clock.classList.add("d-flex","justify-content-space-between","align-items-center");
}
//setInterval(run,1000);

//clearInterval
const clockStart = document.querySelector("#clockStart");
const clockEnd = document.querySelector("#clockEnd");
let runClock;
// const stopRunClock = clearInterval(runClock);
clockStart.addEventListener("click",() => {
    runClock = setInterval(run,1000);
})
clockEnd.addEventListener("click",() => {
    clearInterval(runClock);
})










