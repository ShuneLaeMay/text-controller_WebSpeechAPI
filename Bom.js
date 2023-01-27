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
 
//resize (event)
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
// let runClock;
// const stopRunClock = clearInterval(runClock);
// clockStart.addEventListener("click",() => {
//     runClock = setInterval(run,1000);
// })
// clockEnd.addEventListener("click",() => {
//     clearInterval(runClock);
// })

// let clT;

// clockStart.addEventListener("click" , () => {
//     clT = setTimeout( () => console.log("hello"),1000);
// })
// clockEnd.addEventListener("click" , () => {
//      clearTimeout(clT);   
// })

//one seconds long time add one(use setInterval)

//  let i = 0;
// // setInterval(()=>{console.log("Coin",++i)},1000);
// const runInter = setInterval(() => {
//     console.log("hello" ,++i);
//     if(i===10){
//         clearInterval(runInter);
//     }
// },1000);

// function test(start,stop){
    
//  let i = start;
//  // setInterval(()=>{console.log("Coin",++i)},1000);
//  const runInter = setInterval(() => {
//      console.log("hello" ,++i);
//      if(i===stop){
//          clearInterval(runInter);
//      }
//  },1000);
 
// }

//open() (Methods)
// clockStart.addEventListener("click" , () => {
//     open("https://mms-it.com")
// })
// clockStart.addEventListener("click" , () => {
//     const windowFeatures = "left=100,top=100,width=320,height=320";
// const handle = window.open(
//   "https://mms-it.com",
//   "mozillaWindow",
//   windowFeatures
// );
    
// })

//close() 
// clockEnd.addEventListener("click" , () => {
//     close();
// })

//resizeTo() 
// resizeTo(200,200);

//scrollTo() 
// clockStart.addEventListener("click" , () => {
//     scrollTo(0,1500);
// })
clockStart.addEventListener("click" , () => {
    scrollTo(0,document.querySelector("#to").getBoundingClientRect().y);
})













