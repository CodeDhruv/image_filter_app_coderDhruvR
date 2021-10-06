noseX = 0;
noseY = 0;
mustacheX = 0;
mustacheY = 0;
leftEyeX = 0;
LeftEyeY = 0;
RightEyeX = 0;
RightEyeY = 0;


function preload() {
    clown_nose = loadImage("https://i.postimg.cc/PrqzBgmw/Clown-nose-large.webp");
    glasses = loadImage("https://i.postimg.cc/XY6sC2R1/51e-ONNu-WVk-L-AC-UL320-SR320-320-removebg-preview-min.png");
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
    
}


function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 80, 80);
    image(glasses, leftEyeX, LeftEyeY, 120, 120);
    image(mustache, mustacheX, mustacheY, 80, 50);
    
}

function modelLoaded() {
    console.log("modelLoaded");
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result);
        noseX = result[0].pose.nose.x - 40;
        noseY = result[0].pose.nose.y - 45;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);

        mustacheX = result[0].pose.nose.x - 40;
        mustacheY = result[0].pose.nose.y - 10;
        console.log("nose x (Used for mustache) = " + mustacheX);
        console.log("nose y (Used for mustache) = " + mustacheY);

        leftEyeX = result[0].pose.leftEye.x - 83;
        LeftEyeY = result[0].pose.leftEye.y - 50;
        
        console.log("leftEye x = " + leftEyeX);
        console.log("leftEye y = " + LeftEyeY);
    
    }
}

function take_snapshot() {
    save('yourImage.png');
}
 
function take_snapshot(){   
 save('student_name.png');
}
 
function filter_tint()
{
 tint_color = document.getElementById("color_name").value;
}
