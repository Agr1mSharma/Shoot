
/*
chrome.runtime.onMessage.addListener(function(message, sender) {
    if(message.showVideo) showVideo();

    // Do your stuff
});

// // // do the thing *slightly* later than page load, because the notifs wouldn't have loaded yet
// // setTimeout(dothings(), 100);
function showVideo() {
var test = document.getElementsByClassName("boringless-vid-div");



// var div = document.createElement("div");
// div.classList.add("boringless-vid");
// document.body.appendChild(div);
var div = document.createElement("div");
div.classList.add("boringless-vid-div");

var move = document.createElement("div");
move.classList.add("boringless-movement");
dragElement(move, div);


var hidebutton = document.createElement("button");
move.appendChild(hidebutton);
hidebutton.innerHTML = "x";
hidebutton.classList.add("boringless-hidebutton");
hidebutton.addEventListener('click', hideVideo)

div.appendChild(move);



var video = document.createElement("iframe");
video.classList.add("boringless-vid");
video.src = "https://www.youtube.com/embed/BkWT66jE8Hs?start=60&autoplay=1&mute=1&controls=0&fs=0&modestbranding=1";
video.allow = "autoplay";
video.volume = 0.2;
// video.

div.appendChild(video);
document.body.appendChild(div);

}


function hideVideo() {
var test = document.getElementsByClassName("boringless-vid-div");

console.log(test);

if (test.length >= 1) {
  test[0].remove()
}

}




console.log('content loaded');

// showVideo()
*/