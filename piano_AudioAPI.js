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
        name:"C4",
        keyCode:65
    },
    {
        id:2,
        name:"D4",
        keyCode:83
    },
    {
        id:3,
        name:"E4",
        keyCode:68
    },
    {
        id:4,
        name:"F4",
        keyCode:70

    },
    {
        id:5,
        name:"G4",
        keyCode:74

    },
    {
        id:6,
        name:"A4",
        keyCode:75

    },
    {
        id:7,
        name:"B4",
        keyCode:76

    },
    {
        id:8,
        name:"C5",
        keyCode:186

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

//Play function
const play = (name) => {
    const a = new Audio("./sound/"+name+".mp3");
    a.play();
    const el = document.querySelector("[sound="+name+"]");
    // console.log(el);
    el.classList.add("active");    //set in element in active class
    setTimeout(()=>el.classList.remove("active"),200);
}

row.addEventListener("click" , (event) => {
    //console.log(event.target);
    if(event.target.classList.contains("key")) {
        const currentSound = event.target.getAttribute("sound");
        //console.log(currentSound);
        // const a = new Audio("./sound/"+currentSound+".mp3");
        // a.play();
        play(currentSound);
    }
})

//For find key code
// document.addEventListener("keyup" , event => 
//     console.log(event.keyCode,event.key)
// );

//For keyup play
document.addEventListener("keyup", (event) => {
    const current = sounds.find(({keyCode}) => keyCode === event.keyCode);
    if(current){
        // const a = new Audio("./sound/"+current.name+".mp3");
        // a.play();
        play(current.name);
    }
})
