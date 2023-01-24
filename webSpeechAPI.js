const textToSpeech = document.querySelector("#textToSpeech");
const text = document.querySelector("#text");
const synth = window.speechSynthesis;

const speak = (text) => {
    const utterThis = new SpeechSynthesisUtterance(text);
    synth.speak(utterThis);
}

speak("hello I am here");


textToSpeech.addEventListener("click",() => {
    speak(text.value);
    console.log("i love you")
} )