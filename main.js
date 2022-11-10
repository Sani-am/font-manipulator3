leftWristX=0;
rightWristX=0;
difference=0;


function setup(){
video= createCapture(VIDEO);
video.size(500,550);

canvas = createCanvas(500,550);
canvas.position(560,150);

poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log("PoseNet is initialized");
    
}

function gotPoses(results){


if (results.length >0){
console.log(results);

leftWristX= results[0].pose.leftWrist.x;
rightWristX= results[0].pose.rightWrist.x;
difference= floor(leftWristX-rightWristX);

console.log("leftWristX = "+ leftWristX + "rightWristX = "+ rightWristX + "difference = " + difference);

}
}

function draw() {
    background('#6C91C2');
    document.getElementById("font-size").innerHTML= "font size of the text will be = " + difference + "px";
    textSize(difference);
    fill('#FFE787');
    text('sani',50,400);
}