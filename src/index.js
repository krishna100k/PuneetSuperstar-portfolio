alert("Click Somewhere and Hover on my Picture");
var playBtn = document.getElementById("play"),
  hearbeat = document.getElementById("heartbeat");
var audios = document.querySelectorAll("audio");
console.log(audios);

playBtn.addEventListener(
  "mouseover",
  function () {
    [].forEach.call(audios, function (audio) {
      audio.play();
    });
  },
  false
);

playBtn.addEventListener(
  "mouseleave",
  function () {
    hearbeat.pause();
    hearbeat.currentTime = 0;
  },
  false
);
