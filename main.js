let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let intro = ["Hello, I am Xion", "Hi, I am a Robo", "Hello, My name is Xion"];
let help = ["How may I assist you?","How can i help you?","What I can do for you?"];
let greetings = ["I am good, you little piece of love", "I am fine, what about you?", "Don't want to talk right now.", "I am good."];
let hobbies = ["I love to talk with humans", "I like to make friends like you", "I like reading."];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..'];
let info = ["You can talk to me here and play brain teasers."];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Sorry, I can't answer that" ;
    if(message.includes('hello')){
        speech.text = "Hi, welcome to Creative Minds";
    }
    if(message.includes('talk')){
        speech.text = "Sure";
    }
    if(message.includes('who are you')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('fine')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('how are you' || 'how are you doing today' )){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('about you' || 'like' || 'hobby')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if(message.includes('thank you' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('talk to you')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    if(message.includes('like')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if(message.includes('hobbies')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if(message.includes('can I do here')){
        let finalresult = info[Math.floor(Math.random() * info.length)];
        speech.text = finalresult;
    }
    if(message.includes('website')){
       speech.text = "This website is awesome, fun and creative.";
    }
    if(message.includes('How do you do')){
        speech.text = "How do you do";
     }
    if(message.includes('bye')){
        speech.text = "Bye, have a good day.";
     }
     if(message.includes('play games here')){
       speech.text = "Tic tac toe, memory game and word scramble are fun and nostalgic games. Please enjoy them.";
    }
     if(message.includes('were you built')){
       speech.text = "Using Javascript and API";
    }
      if(message.includes('read')){
       speech.text = "I read books like Guliver Travels and Treasure Island";
    }
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})
