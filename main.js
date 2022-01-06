object_name="";
 
 function setup(){
     canvas = createCanvas(480,380);
     canvas.center();

     video = createCapture(VIDEO);
     video.hide();
 }

 function start(){
     document.getElementById("status").innerHTML = "Status = Detecting Objects";
     objectDetector = ml5.objectdetector("cocossd", modelLoaded);
     document.getElementById(object_name).innerHTML="input";
 }

 function modelLoaded(){
     console.log("model loaded");
     status=true;

 }

 function draw(){
     image(video, 0, 0, 480, 380);
 }