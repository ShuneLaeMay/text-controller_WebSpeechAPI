const textToSpeech = document.querySelector("#textToSpeech");
const speechToText = document.querySelector("#speechToText");
const text = document.querySelector("#text");

//Speech To Text
const listen = () =>{
    //Set the language and start recognizing
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    //loading
    recognition.addEventListener("start",() => {
        speechToText.classList.add("active");
        speechToText.innerHTML = `
        <div class="spinner-border text-white spinner-border-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;
    });

    recognition.addEventListener("end" ,() => {
        speechToText.classList.remove("active");
        recognition.innerHTML = ` 
        <i class="bi bi-mic"></i>
        `
    })

    //When a speech result is returned 
    recognition.onresult = function (event) {
    //Get the transcript of the spoken words
    console.log(event.results);
    var transcript = event.results[0][0].transcript;
    text.value += transcript; //for multiple speech
    //console.log(transcript);
    }
};

//Text To Speech
const synth = window.speechSynthesis;   //web speak
const speak = (text) => {
   // const utterThis = new SpeechSynthesisUtterance(text); //config user text speak
   const utterThis = new SpeechSynthesisUtterance();
   utterThis.rate = 0.8;
   utterThis.text = text;
   utterThis.voice = synth.getVoices()[5];

   utterThis.addEventListener("start" , () => {
    textToSpeech.classList.add("active");
   })
   utterThis.addEventListener("end" , () => {
    textToSpeech.classList.remove("active");
   })

    synth.speak(utterThis);
}

//speak("hello I am here");
textToSpeech.addEventListener("click",() => {
    speak(text.value);
    console.log("i love you")
} );
speechToText.addEventListener("click",listen);