var song1= ""
var song2= ""

function preload() {
    song1= loadSong("Can't Catch Me Now.mp3")
    song2= loadSong("My Heart Will Go On.mp3")
}

function setup() {
    canvas= createCanvas(550,400)
    canvas.center()
    webcam= createCapture(VIDEO)
    webcam.hide()
}

function draw() {
    image(webcam, 0, 0, 550, 400)
}