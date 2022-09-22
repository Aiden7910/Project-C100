var SpeechRecognition = window.webkitSpeechRecognition;

var Content;

var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 

recognition.onresult = function(event) 
{
    console.log(event);
    
    var Content = event.results[0][0].transcript;
    
    console.log(Content);
    
    if(Content == "selfie")
    {
    console.log("taking selfie --- ");
    speak();
    }
}

function speak()
{
    var synth = window.speechSynthesis;

    speak_data = "taking your selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    {
        img_id = "selfie1";
        take_snapshot();
        Say();
    }, 5000);

    
}

function Say()
{
    var synth = window.speechSynthesis;

    say_data = "taking your next selfie in 10 seconds";

    var oneutterThis = new SpeechSynthesisUtterance(say_data);

    synth.speak(oneutterThis);

    Webcam.attach(camera);

    setTimeout(function()
    {
        img_id = "selfie2"
        take_one_snaphshot();
        speaking();
    }, 10000);
}

function speaking()
{
    var synth = window.speechSynthesis;

    speaking_data = "taking your next selfie in 15 seconds";

    var two_utterThis = new SpeechSynthesisUtterance(speaking_data);

    synth.speak(two_utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    {
        img_id = "selfie3"
        take_two_snaphshot();
    }, 15000);
}

Webcam.set({
    width:400,
    height:300,
    image_format : 'jpeg',
    jpeg_quality:90
});

camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
    document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
    });
}

function take_one_snaphshot()
{
    Webcam.snap(function(data_uri) {
    document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
    });
}

function take_two_snaphshot()
{
    Webcam.snap(function(data_uri) {
    document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
    });
}