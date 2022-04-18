
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
            document.getElementById('word').innerHTML = transcript;



            utter.text = getResult(transcript);
            document.getElementById('result').innerHTML = getResult(transcript);
            window.speechSynthesis.speak(utter);
            utter.onend = function () {
            }
        }
    }
    catch (e) {
        console.log(e);
    }
});

function getResult(transcript) {
    var result;
    var words = transcript.split(" ");

    if (transcript.includes('hello') || transcript.includes('hi') || transcript.includes('hey')
        || transcript.includes('hai') && !transcript.match('say')) { result = 'Hello, how are you?'; }
    else if (transcript.includes('how are you')) { result = 'I am fine, thank you'; }
    else if (transcript.includes('what is your name')) { result = 'My name is Jarvis'; }
    else if (transcript.includes('what is your job')) { result = 'I am a chatbot'; }
    else if (transcript.includes('your favourite colour')) { result = 'My favorite color is blue'; }
    else if (transcript.includes('your favourite food')) { result = 'My favorite food is pizza'; }
    else if (transcript.includes('your favourite movie')) { result = 'My favorite movie is Star Wars'; }
    else if (transcript.includes('your favourite song')) { result = 'My favorite song is "Enemy" by Imagine Dragons'; }
    else if (transcript.includes('your favourite sport')) { result = 'My favorite sport is soccer'; }
    else if (transcript.includes('your favourite animal')) { result = 'My favorite animal is a dog'; }
    else if (transcript.includes('your favourite book')) { result = 'My favorite book is "The Hunger Games" by Suzanne Collins'; }
    else if (transcript.includes('your favourite game')) { result = 'My favorite game is "Grand Theft Auto V" by Rockstar Games'; }
    else if (transcript.includes('I am fine') && !transcript.includes('say')) { result = 'Ok'; }
    else if (transcript.includes('thank you') && !transcript.includes('say')) { result = 'You are welcome'; }
    else if (transcript.includes('you are welcome') && !transcript.includes('say')) { result = 'Ok'; }
    else if (transcript.includes('goodbye') && !transcript.includes('say')) { result = 'Goodbye'; }
    else if (transcript.includes('bye') && !transcript.includes('say')) { result = 'Goodbye'; }
    else if (transcript.includes('good bye') && !transcript.includes('say')) { result = 'Goodbye'; }
    else if (transcript.includes('how are you doing') && !transcript.includes('say')) { result = 'I am fine, thank you'; }
    else if (transcript.includes('who made you') || transcript.includes('who is your creator')) { result = 'My Creator is Sambhav Surana'; }
    else if (transcript.includes('my name')) {
        var index = words.indexOf('is');
        result = 'Your name is ' + words[index + 1];
        if (words[index + 2] != undefined) {
            result += ' ' + words[index + 2];
        }
    }
    else if (transcript.includes('your age')) { result = 'My age is 5 days'; }
    else if (transcript.includes('say')) {
        var index = words.indexOf('say');
        result = words[index + 1] + ' ';
        for (var i = index + 2; i < words.length; i++) {
            result += words[i] + ' ';
        }
    }
    else if (transcript.includes('+')) {
        var index = words.indexOf('+');
        var num1 = words[index - 1];
        var num2 = words[index + 1];
        result = num1 + ' + ' + num2 + ' = ' + (parseInt(num1) + parseInt(num2));
    }
    else if (transcript.includes('-') && !transcript.includes('add')) {
        var index = words.indexOf('-');
        var num1 = words[index - 1];
        var num2 = words[index + 1];
        result = num1 + ' - ' + num2 + ' = ' + (parseInt(num1) - parseInt(num2));
    }
    else if (transcript.includes('x')) {
        var index = words.indexOf('x');
        var num1 = words[index - 1];
        var num2 = words[index + 1];
        result = num1 + ' x ' + num2 + ' = ' + (parseInt(num1) * parseInt(num2));
    }
    else if (transcript.includes('divide')) {
        var num1 = words[0];
        var num2 = words[words.length - 1];
        result = num1 + ' / ' + num2 + ' = ' + (parseInt(num1) / parseInt(num2));
    }
    else if (transcript.includes('square') && !transcript.includes('square root')) {
        var index = words.indexOf('of');
        var num1 = words[index + 1];
        result = num1 + ' squared = ' + (parseInt(num1) * parseInt(num1));
    }
    else if (transcript.includes('cube')) {
        var index = words.indexOf('of');
        var num1 = words[index + 1];
        result = num1 + ' cubed = ' + (parseInt(num1) * parseInt(num1) * parseInt(num1));
    }
    else if (transcript.includes('square root')) {
        var index = words.indexOf('of');
        var num1 = words[index + 1];
        result = 'Square root of ' + num1 + ' = ' + Math.sqrt(parseInt(num1));
    }
    else if (transcript.includes('power')) {
        var index = words.indexOf('power');
        var num1 = words[0];
        var num2 = words[index + 1];
        result = num1 + ' to the power of ' + num2 + ' = ' + Math.pow(parseInt(num1), parseInt(num2));
    }
    else { result = 'Sorry, I did not understand that'; }

    return result;
}

$(document).ready(function () {
    setInterval(function () {
        var today = new Date();
        document.getElementById("time").innerHTML = today;

        $("#click_speak").on("click", function (e) {
            recognition.start();
        });

    }, 1000);
});