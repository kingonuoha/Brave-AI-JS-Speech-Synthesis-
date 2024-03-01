const section = document.querySelector('section');
const texts = document.querySelector('.texts');
const btn = document.querySelector('#spk');
let speechEng = speechSynthesis ;
let isListening;
// some random replies
let whatIsYourName = ['many call me Mr brave',
                      'my name is Mr brave', 
                      'my inbuilt name is Mr brave, \n do you have an inbuilt name', 
                      'it would be fine if you called me Mr brave'];

let Hello =         ['Hi There.', 
                     'Hello Mate.', 
                     'you Called?', 
                     'Howdy there Mister!', 
                     'Hi,\n what would you like to do today?', 
                     'Good day to you', 'Hi its good to hear your Voice,\n how can i help?'];

let whoCreatedYou = ['At first i was just an idea then, Kingsley sat Down and took Action, And now here i am', 
                     'i was made by Kingsley', 
                     'i was design by Kingsley']
let whatCanYouDo = ['you can say "hello"',
                    'you can say "open Google"', 
                    'you can say "open my YouTube Channel"', 
                    'you can say "What is Your name"', 
                    'you can say "how old are you"', 
                    'you can say "who created you"', 
                    'you can say "search for {:searchWord}"\n e.g("search for the tallest man in the world")', 
                    'you can say "show me the picture of a {::SEARCH WORD}"\n e.g("show me the picture of a dog")'];
let aiNameCall = ["Sup, what can i do for you", 
                  "am so glad you remembered my name", 
                  "Yes..", 
                  "ohh, hi there, how may i help you", 
                  "Yes..., i was about to get some fresh Vegtables Before you called, \n how may i be of Assistance?.."]

let whoAmI = {
    G : "Chidiebere Gift, \n You are currently Learning Front-End web Development at Uru,\n How's your course going?",
    E : "Onuoha Excellent, \n you are the brother of the one who created me \n would you like to like to have a nick name instead? \n how about i call you ' Master's Brother' :)",
    U:"Sorry, I cant Tell, looks like Your Face Id has not been uploaded to my Database, \n would you like me to mannually add you to my Database?"
}
// speech recognition functions and paremeters 
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;
// recognition.continuous = true;

let p = document.createElement('p');
function speechN(){
    alert("hi");
    // textToSpeech("Speech Enabled");
    
}

//always making the page  view at the bottom 

    setInterval(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, 1000)

function textToSpeech(text){
    stopRecog();
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.7;
    utterance.pitch = 1;
    utterance.voice = window.speechSynthesis.getVoices()[1];
    console.log(window.speechSynthesis.getVoices());
    // isListening = false;
    window.speechSynthesis.speak(utterance);//speak the text
    utterance.onend = () =>{
        startRecog();
    }
    // window.recognition.stop();
    // window.speechSynthesis.cancel(utterance);
    // if (speechSynthesis.cancel) {
    //     alert('speech cancelled')
        
    // }
}
function stopRecog() {
    recognition.stop();
    isListening = false;
}

function startRecog() {
    isListening = true;
    recognition.start();
}
btn.addEventListener('click', () =>{
    startRecog();
});

// to toggle that is listening button 
setInterval(() =>{
    if(isListening){
        btn.classList.add('startAnim');
        
    }else{
        btn.classList.remove('startAnim');  
    }
}, 1000)

// when you press the l key it enables the listening process
document.onkeydown = (e) => {
    // console.log(e);
    // console.log(e.keyCode);
    if (e.keyCode === 76 ) {
        startRecog();
    }
}
// if (isListening) {
    
// }else{
//     recognition.abort()
// }
recognition.addEventListener('result', (e) =>{
    // console.log(e);
    let text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    p.innerText = text;
    texts.appendChild(p);









//  speechEng.addEventListener("voiceschanged", voices);



// creating new sentences in new paragraph tags
    if (e.results[0].isFinal) {

      
// making replys to some certain questions asked
        if (text.includes('hello')) {
            p = document.createElement('p');
            p.classList.add('reply');
            let _reply = Hello[Math.floor(Math.random() * Hello.length)];
            textToSpeech(_reply);
            p.innerText = _reply;
            texts.appendChild(p);
        }



        if (text.includes('what is your name') || text.includes("what's your name")) {
            p = document.createElement('p');
            p.classList.add('reply');
            let _reply = whatIsYourName[Math.floor(Math.random() * whatIsYourName.length)];
            p.innerText = _reply;
            textToSpeech(_reply);
            texts.appendChild(p);
        }



        if (text.includes('open Google')) {
            p = document.createElement('p');
            p.classList.add('reply');
            let _reply = 'sure, Opening Google..';
            p.innerText =_reply ;
            textToSpeech(_reply);
            texts.appendChild(p);
    // just to delay the openning process so one can see the reply...
           setTimeout(() => {
            window.open('https://google.com');
           }, 1200);
        }

//      search by voice

    //     if (text.includes('search ')) {
    //         p = document.createElement('p');
    //         p.classList.add('reply');
    //         p.innerText = 'sure, Opening YouTube channel..';
    //         texts.appendChild(p);
    // // just to delay the openning process so one can see the reply...
    //        setTimeout(() => {
    //         window.open('https://www.google.com/search?q=hh');
    //        }, 1200);
    //     }



        if (text.includes('open my YouTube channel')) {
            p = document.createElement('p');
            p.classList.add('reply');
            let _reply = 'sure, Opening YouTube channel..'
            p.innerText =_reply ;
            texts.appendChild(p);
            textToSpeech(_reply);
    // just to delay the openning process so one can see the reply...
           setTimeout(() => {
            window.open('https://www.youtube.com/channel/UCaxl0WiVL70ma_XWTIJ8f0g');
           }, 1200);
        }



        if (text.includes('who created you')) {
            p = document.createElement('p');
            p.classList.add('reply');
            let _reply = whoCreatedYou[Math.floor(Math.random() * whoCreatedYou.length)];
            p.innerText = _reply ;
            texts.appendChild(p);
            textToSpeech(_reply);
        }

// reload

        if (text.includes('reload') || text.includes('refresh')) {
            p = document.createElement('p');
            p.classList.add('reply');
            let _reply ="Ok, Attempting to reload Chat!!";
            p.innerText = _reply ;
            texts.appendChild(p);
            textToSpeech(_reply);
             // // just to delay the reloading process so one can see the reply...
           setTimeout(() => {
            location.reload();
           }, 1500);
        }



        if (text.includes('what can you do') || text.includes("what else can you do")) {
            p = document.createElement('p');
            p.classList.add('reply');
            let _reply = whatCanYouDo[Math.floor(Math.random() * whatCanYouDo.length)];
            p.innerText = _reply ;
            texts.appendChild(p);
            textToSpeech(_reply);
        }
// this is the "who am i section"


        if (text.includes('who am i') || text.includes("what's my name")|| text.includes("what is my name")) {
            p = document.createElement('p');
            p.classList.add('reply');
            let _reply = whoAmI['G'];
            p.innerText = _reply ;
            texts.appendChild(p);
            textToSpeech(_reply);
        }
// this is the "who am i section"


        if (text === "Mr brave" ) {
            p = document.createElement('p');
            p.classList.add('reply');
            let _reply = aiNameCall[Math.floor(Math.random() * aiNameCall.length)];
            p.innerText = _reply ;
            texts.appendChild(p);
            textToSpeech(_reply);
        }

// searching section of my A.I.

        if (text.includes('search')) {

            let pos = text.search('search for');
            let searchWord = text.slice(pos+10);
            p = document.createElement('p');
            p.classList.add('reply');
            let _reply = `ok, searching google for (" ${searchWord} ")`;
            p.innerText = _reply ;
            texts.appendChild(p);
            textToSpeech(_reply);
            // // just to delay the openning process so one can see the reply...
           setTimeout(() => {
            window.open(`https://www.google.com/search?q=${searchWord}`);
           }, 3000);
        }

// searching Picture section of my A.I.

        if (text.includes('picture of')) {

            let pos = text.search('picture of');
            let searchWord = text.slice(pos+11);
            p = document.createElement('p');
            p.classList.add('reply');
            let _reply = `ok, searching the web for pictures of (" ${searchWord} ")`;
            p.innerText = _reply ;
            texts.appendChild(p);
            textToSpeech(_reply);
            // // just to delay the openning process so one can see the reply...
           setTimeout(() => {
            window.open(`https://www.google.com/search?q=${searchWord}&tbm=isch`);
           }, 5000);
        }



        if (text.includes('how old are you')) {
            p = document.createElement('p');
            p.classList.add('reply');
            let _reply = "am not more than 4 days old, what about you?";
            textToSpeech(_reply);
            p.innerText = _reply ;
            texts.appendChild(p);
            
            
        }
        p = document.createElement('p');
    }

 console.log(text);
isListening = false;

// setInterval(stopRecog(), 10000)
})

// recognition.addEventListener('end', () =>{
    
// })


