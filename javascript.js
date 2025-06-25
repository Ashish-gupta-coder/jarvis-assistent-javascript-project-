let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 1;
  text_speak.lang = "hi-GB";
  window.speechSynthesis.speak(text_speak);
}

function wishme(){
    let day=new Date()
    let hours= day.getHours()
    if(hours>=0 && hours<12){
        speak("Good morning Ashishsir")
    } else if(hours>=12 && hours <16){
        speak("Good afternoon Aashish sir")
    }
    else{
        speak("Good evening Aashish sir")
    }
}
window.addEventListener('load',()=>{
    wishme()
})
let spedchRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new spedchRecognition();
recognition.onresult = (event) => {
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript;
  content.innerHTML = transcript;
  takeCommand(transcript.toLowerCase());
};
btn.addEventListener("click", () => {
  recognition.start();
  btn.style.display = "none";
  h1.style.display="none";
  voice.style.display = "block";
});

function takeCommand(message) {
  btn.style.display = "flex";
  h1.style.display="flex";
  voice.style.display = "none";
  if (
    message.includes("hello") ||
    message.includes("hi") ||
    message.includes("hey")
  ) {
    speak("hello Ashish sir,what can i help you?");
  } else if (message.includes("who are you")) {
    speak("i am virtual assistant ,created by Aashish sir");
  } else if (message.includes("open youtube")) {
    speak("opening youtube");
    window.open("https://www.youtube.com", "_blank");
  } else if (message.includes("open google")) {
    speak("opening google");
    window.open("https://www.google.com", "_blank");
  } else if (message.includes("open instagram")) {
    speak("opening instagram");
    window.open("https://www.instagram.com", "_blank");
  } else if (message.includes("open facebook")) {
    speak("opening facebook");
    window.open("https://www.facebook.com", "_blank");
  } 
  else if (message.includes("open calculator")) {
    speak("opening claculator...");
    window.open("calculator://");
  } 
  else if (message.includes("open whatsapp")) {
    speak("opening whatsapp...");
    window.open("whatsapp://");
  } 
  else if (message.includes("open vs code")) {
    speak("opening vs code...");
    window.open("vs code://");
  } 
  else if (message.includes("time")) {
    let time=new Date().toLocaleDateString(undefined,{hour:"numeric",minute:"numeric"})
    speak(time);
   
  } 
  else if (message.includes("date")) {
    let date=new Date().toLocaleDateString(undefined,{day:"numeric",month:"short"})
    speak(date);
   
  } 
  
  
  
  
  else {
    let finalText="this is what i found on internet regarding" + message.replace("jarvis","") || message.replace("jarvis","")
    speak(finalText)
    window.open(`https://www.google.com/search?q=${message.replace("jarvis","")}`,"_blank");
  }
}
