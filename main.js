song ="";
function preload()
{
song = loadSound("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.js");
}
function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,500);
    }