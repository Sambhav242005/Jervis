
window.SpeechRecognition = window.SpeechRecognition
    || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

recognition.lang = 'en-US';
recognition.interimResults = true;
recognition.addEventListener('result', e => {
    try {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');
        if (e.results[0].isFinal) {
            console.log(transcript);
            let utter = new SpeechSynthesisUtterance();
            utter.lang = 'en-US';
            utter.volume = 0.75;
            utter.rate = 1;
            utter.pitch = 1;
            var result;
            document.getElementById('word').innerHTML = transcript;

            var words = transcript.split(" ");

            if (transcript.includes('hello')) { result = 'Hello, how are you?'; }
            else if (transcript.includes('how are you')) { result = 'I am fine, thank you'; }
            else if (transcript.includes('what is your name')) { result = 'My name is Jarvis'; }
            else if (transcript.includes('what is your job')) { result = 'I am a chatbot'; }
            else if (transcript.includes('what is your favourite colour')) { result = 'My favorite color is blue'; }
            else if (transcript.includes('what is your favourite food')) { result = 'My favorite food is pizza'; }
            else if (transcript.includes('what is your favourite movie')) { result = 'My favorite movie is Star Wars'; }
            else if (transcript.includes('what is your favourite song')) { result = 'My favorite song is "Enemy" by Imagine Dragons'; }
            else if (transcript.includes('what is your favourite sport')) { result = 'My favorite sport is soccer'; }
            else if (transcript.includes('what is your favourite animal')) { result = 'My favorite animal is a dog'; }
            else if (transcript.includes('what is your favourite book')) { result = 'My favorite book is "The Hunger Games" by Suzanne Collins'; }
            else if (transcript.includes('what is your favourite game')) { result = 'My favorite game is "Grand Theft Auto V" by Rockstar Games'; }
            else if (transcript.includes('I am fine')) { result = 'Thank you'; }
            else if (transcript.includes('thank you')) { result = 'You are welcome'; }
            else if (transcript.includes('you are welcome')) { result = 'ok'; }
            else if (transcript.includes('goodbye')) { result = 'Goodbye'; }
            else if (transcript.includes('bye')) { result = 'Goodbye'; }
            else if (transcript.includes('good bye')) { result = 'Goodbye'; }
            else if (transcript.includes('my name')) {
                var index = words.indexOf('name');
                result = 'Your name is ' + words[index + 2];
            }
            else if (transcript.includes('hi')) { result = 'Hello'; }
            else if (transcript.includes('hai')) { result = 'Hello'; }
            else if (transcript.includes('your age')) { result = 'My age is 2 days'; }
            else { result = 'I do not understand'; }
            utter.text = result;
            document.getElementById('result').innerHTML = result;
            window.speechSynthesis.speak(utter);
            utter.onend = function () {
            }
        }
    }
    catch (e) {
        console.log(e);
    }
});


$(document).ready(function () {

    setInterval(function () {
        document.getElementById("time").innerHTML = Date();

        $("#click_speak").on("click", function (e) {
            recognition.start();
        });

    }, 1000);
});