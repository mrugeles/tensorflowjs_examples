let img;

let classifier;
// Model URL

function preload() {
    font = loadFont('./fonts/Montserrat-Light.otf');
    img = createImg(image_path, imageReady);
}
 
function setup() {
    img.hide(); // hide the image in the browser
    frameRate(1); // set the frameRate to 1 since we don't need it to be running quickly in this case
}

function imageReady(){
    canvas = createCanvas(img.elt.width, img.elt.height);
    canvas.parent('image-canvas')
    cocoSsd.load().then(model => {
        // detect objects in the image.
        image(img, 0, 0, img.elt.width, img.elt.height);
        model.detect(img.elt).then(predictions => {
            for(i = 0; i < predictions.length; i++){
                let prediction = predictions[i]
                draw_object_box(prediction)
            }
        });
  });
}

function draw_object_box(prediction){
    section_img =  get(prediction.bbox[0], prediction.bbox[1], prediction.bbox[2], prediction.bbox[3])
    fill('rgba(0,255,0, 0.25)');
    rect(prediction.bbox[0], prediction.bbox[1], prediction.bbox[2], prediction.bbox[3]);
    textSize(20);
    prediction_text = prediction.class + ': ' + prediction.score.toFixed(3) + '%'
    let bbox = font.textBounds(prediction_text, prediction.bbox[0] + 10, prediction.bbox[1] - 10, 20);
    fill('white');
    rect(bbox.x, bbox.y, bbox.w, bbox.h);
    fill('black');
    text(prediction_text, prediction.bbox[0] + 10, prediction.bbox[1] - 10);
}