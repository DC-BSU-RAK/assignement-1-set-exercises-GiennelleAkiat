function textToAudio() {
    let msg = document.getElementById("text-to-speech").value;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

function play_sound(clicked_id) {
    var audio = new Audio("Audio Sampler/Audio" + clicked_id + ".mp3");
    audio.play();
  }