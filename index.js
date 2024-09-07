let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = document.getElementsByClassName("songItem");
let songs = [
  {
    songName: "Salaam-e-Ishq",
    filePath: "spotify clone/1.mp3 ",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "salaam-e-ishq",
    filePath: "spotify clone/2.mp3 ",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "salaam-e-ishq",
    filePath: "spotify clone/3.mp3 ",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "salaam-e-ishq",
    filePath: "spotify clone/4.mp3 ",
    coverPath: "covers/4.jpg",
  },
];

// songItems.forEach((element, i) => {
//     console.log(element, i)
//     element.getElementsByTagName("img")[1].src=songs[i].coverPath;
//     element.getElementsByClassName("songName")[1].innerText=songs[i].songName;
// });
//Handel play/ pause functions.....
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

//listen to events....
audioElement.addEventListener("timeupdate", () => {
  //update SeekBar...
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemsPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};
Array.from(document.getElementsByClassName("songItemsPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      // console.log(e.target)
      makeAllPlays();
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      songIndex = parseInt(e.target.id);
      //   audioElement.src = "songs/${songIndex+1}.mp3";
      // masterSongName.innerText=songs[songIndex].songName
      //   audioElement.currentTime = 0;
      //   audioElement.play();
     //    gif.style.opacity = 1;
      //   masterPlay.classList.remove("fa-play-circle")
      //   masterPlay.classList.add("fa-pause-circle")
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 4) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = "songs/${songIndex+1}.mp3";
  masterSongName.innerText=songs[songIndex].songName
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 4) {
      songIndex = 0;
    } else {
      songIndex -= 1;
    }
    audioElement.src = "songs/${songIndex+1}.mp3";
    masterSongName.innerText=songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  });