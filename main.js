objectDetector = "";
obj_input = "";
function setup(){
    canvas = createCanvas(480, 380);
    canvas.position(650, 500);

    video= createCapture(VIDEO);
    video.hide();

    
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    document.getElementById("status").style.background = "linear-gradient(#ff5454 0%, #ff8754 50%, #fcff54 100%)";
    obj_input = document.getElementById("obj_input").value;
    console.log(obj_input);
}

function modelLoaded(){
    console.log("Model Loaded!1!1");
    
}
function draw(){
    image(video, 0, 0, 480, 380);
}