noseX=0;
noseY=0;
function preload(){
    clownnose=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    
    poseNet=ml5.poseNet(video,modalLoaded);
    poseNet.on('pose',gotPoses);
}
function modalLoaded(){
    console.log('PoseNet is Initalized');
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x+40;
        noseY=results[0].pose.nose.y+90;
    }
}
function draw(){
    image(video,0,0,400,400);
    fill(250,0,0);
    stroke(250,0,0);
    image(clownnose,noseX,noseY,50,30);
}
function takeSnapshot(){
    save('MyPhoto.png')
}