//const audio = document.createElement("audio");
//OR
// const audio = new Audio("./sound/C4.mp3");
// audio.play();
// audio.addEventListener("ended", () => {
//     audio.play();
// })

const row = document.querySelector(".row");
const sounds = [
    {
        id:1,
        name:"C4"
    },
    {
        id:2,
        name:"D4"
    },
    {
        id:3,
        name:"E4"
    },
    {
        id:4,
        name:"F4"
    },
    {
        id:5,
        name:"G4"
    },
    {
        id:6,
        name:"A4"
    },
    {
        id:7,
        name:"B4"
    },
    {
        id:8,
        name:"C5"
    }
];


//function
const createKey = ({name}) => {
    const div = document.createElement("div");
    div.classList.add("col","key","border","border-dark","py-5","d-flex","justify-content-center","align-items-center");
    div.setAttribute("sound",name);
    div.innerText = name;
    return div;
};
sounds.forEach((sound) => {
    row.append(createKey(sound));


})
//const keys = document.querySelectorAll(".key");
//console.log(keys);

row.addEventListener("click" , (event) => {
    //console.log(event.target);
    if(event.target.classList.contains("key")) {
        const currentSound = event.target.getAttribute("sound");
        console.log(currentSound);
        const a = new Audio("./sound/"+currentSound+".mp3");
        a.play();
    }
})