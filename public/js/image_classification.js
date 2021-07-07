function preload() {
    font = loadFont('./fonts/Montserrat-Light.otf');
    img = createImg(image_path, imageReady);


}

function setup() {
    img.hide(); 
}

function imageReady(){
    canvas = createCanvas(img.elt.width, img.elt.height);
    canvas.parent('image-canvas')
    mobilenet.load().then(model => {
        // detect objects in the image.
        image(img, 0, 0, img.elt.width, img.elt.height);
        model.classify(img.elt).then(predictions => {
            console.log(predictions)
            prediction = predictions[0].className + ':' + predictions[0].probability.toFixed(3) + '%'
            let spanText = select('#prediction');
            spanText.html('<h2>' + prediction + '</h2>')
        });
  });
}
