const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const songTitle = document.getElementById('song-title');
const artist = document.getElementById('artist');

let isPlaying = false;

const songs = [
    {title: 'Song 1', artist: 'Artist 1', src: 'song1.m4a'},
    {title: 'Song 1', artist: 'Artist 1', src: 'song2.m4a'},
    {title: 'Song 1', artist: 'Artist 1', src: 'song3.m4a'},
    {title: 'Song 1', artist: 'Artist 1', src: 'song4.m4a'},
    {title: 'Song 1', artist: 'Artist 1', src: 'song4.m4a'},
    {title: 'Song 1', artist: 'Artist 1', src: 'song5.m4a'},
    {title: 'Song 1', artist: 'Artist 1', src: 'song6.m4a'},
    {title: 'Song 1', artist: 'Artist 1', src: 'song7.m4a'},
    {title: 'Song 1', artist: 'Artist 1', src: 'song8.m4a'},
    {title: 'Song 1', artist: 'Artist 1', src: 'song9.m4a'},
    {title: 'Song 1', artist: 'Artist 1', src: 'song10.m4a'},
    
    // Add more songs as needed
];

let currentSongIndex = 0;

function loadSong(song) {
    audio.src = song.src;
    songTitle.textContent = song.title;
    artist.textContent = song.artist;
}

function playPause() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.innerHTML = '&#9654;';
    } else {
        audio.play();
        playPauseBtn.innerHTML = '&#10074;&#10074;';
    }
    isPlaying = !isPlaying;
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    if (isPlaying) audio.play();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    if (isPlaying) audio.play();
}

// Load the first song
loadSong(songs[currentSongIndex]);
