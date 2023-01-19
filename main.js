Webcam.set({
    width:300,
    height:250,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+"'>";
    });
}
console.log("ml5version",ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/DNY6VjGJw/model.json",modelloaded);
function modelloaded(){
    console.log("modelloaded");
}
prediction_1="";
prediction_2="";
function speak(){
    var synth= window.speechSynthesis;
    speakdata1="The Prediction Is "+prediction_1;
    var utterthis=new SpeechSynthesisUtterance(speakdata1);
    synth.speak(utterthis)
}
function check(){
    img=document.getElementById("capture_image");
    classifier.classify(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        
        prediction_1=results[0].label;
    
        speak();
        if(prediction_1=="Victory"){
            document.getElementById("update_emoji").innerHTML="&#9996;";
        }
        if(prediction_1=="Awesome"){
            document.getElementById("update_emoji").innerHTML="&#128076;";
        }
        if(prediction_1=="Best"){
            document.getElementById("update_emoji").innerHTML="&#128077;";
        }
        if(prediction_2=="Victory"){
            document.getElementById("update_emoji").innerHTML="&#9996;";
        }
        if(prediction_2=="Awesome"){
            document.getElementById("update_emoji").innerHTML="&#128076;";
        }
        if(prediction_2=="Best"){
            document.getElementById("update_emoji").innerHTML="&#128077;";
        }
        
    }
}
