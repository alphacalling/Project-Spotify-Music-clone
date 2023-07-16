console.log("Spotify is here");

//Initilising the variables
let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('my-progress-bar');
let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('song-item'));

let songs = [
    {SongName:"In da club-50_Cent", filePath:"./songs/1.mp3", coverPath:"./covers/1.jpeg"},
    {SongName:"Daru_Badnam", filePath:"songs/2.mp3", coverPath:"./covers/2.jpeg"},
    {SongName:"Desires", filePath:"songs/3.mp3", coverPath:"./covers/3.jpeg"},
    {SongName:"In_Ankho_ki", filePath:"songs/4.mp3", coverPath:"./covers/4.jpeg"},
    {SongName:"Insane", filePath:"songs/5.mp3", coverPath:"./covers/5.jpeg"},
    {SongName:"kehndi_Hundi_Si", filePath:"songs/6.mp3", coverPath:"./covers/6.jpeg"},
    {SongName:"khayal", filePath:"songs/7.mp3", coverPath:"./covers/7.jpeg"},
    {SongName:"Khuda_Bhi_Jab_Tumhe_Dekhta", filePath:"songs/8.mp3", coverPath:"./covers/8.jpeg"},
    {SongName:"Meharama", filePath:"songs/9.mp3", coverPath:"covers/9.jpeg"},
    {SongName:"Mera_Dil_Ye_Pukare", filePath:"songs/10.mp3", coverPath:"./covers/10.jpeg"},
    {SongName:"Spaceship", filePath:"songs/11.mp3", coverPath:"./covers/11.jpeg"},
    {SongName:"Tod_Gayi", filePath:"songs/12.mp3", coverPath:"./covers/12.jpeg"},
    {SongName:"We_Rolling", filePath:"songs/13.mp3", coverPath:"./covers/13.jpeg"},
    {songName:"Mortals", filePath:"songs/14.mp3", coverPath: "./covers/14.jpeg"},
    {songName:"Mi-Amor", filePath:"songs/15.mp3", coverPath: "./covers/15.jpeg"},
    {SongName:"Yaar Ka Sataya Hua Hai", filePath:"songs/16.mp3", coverPath:"./covers/16.jpeg"},
    {SongName:"Levitating", filePath:"songs/17.mp3", coverPath:"./covers/17.jpeg"},





]

    songItems.forEach((element, i) => {
        // console.log(element, i);
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("songName")[0].innerText = songs[i].SongName; 

    });


// Handle play/pause click
masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', () => {

    // update seek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

//playing all music from the list
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('song-item-play')).forEach((element) =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('song-item-play')).forEach((element) =>{
    element.addEventListener('click', (e) =>{
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `./songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].SongName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () =>{
    if(songIndex >= 17){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
        audioElement.src = `./songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].SongName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () =>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
        audioElement.src = `./songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].SongName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

