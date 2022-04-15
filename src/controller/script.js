
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


            switch (transcript) {
                case 'hello':
                    result = 'Hello, how are you?';
                    break;
                case 'how are you':
                    result = 'I am fine, thank you';
                    break;
                case 'what is your name':
                    result = 'My name is Jarvis';
                    break;
                case 'what is your job':
                    result = 'I am a chatbot';
                    break;
                case 'what is your favourite colour':
                    result = 'My favorite color is blue';
                    break;
                case 'what is your favourite food':
                    result = 'My favorite food is pizza';
                    break;
                case 'what is your favourite movie':
                    result = 'My favorite movie is Star Wars';
                    break;
                case 'what is your favourite song':
                    result = 'My favorite song is "The Sign" by Ace of Base';
                    break;
                case 'what is your favourite sport':
                    result = 'My favorite sport is soccer';
                    break;
                case 'what is your favourite animal':
                    result = 'My favorite animal is a dog';
                    break;
                case 'what is your favourite book':
                    result = 'My favorite book is "The Hunger Games" by Suzanne Collins';
                    break;
                case 'what is your favourite game':
                    result = 'My favorite game is "The Hunger Games" by Suzanne Collins';
                    break;
                default:
                    result = 'I do not understand';
                    break;
            }
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