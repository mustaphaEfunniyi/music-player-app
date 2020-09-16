const songs = [
    "Rema-Bad-Commando.mp3",
    "Rema-Lady.mp3",
    "Rema-Rewind.mp3",
    "Rema-Spaceship-Jocelyn.mp3"
];

const player = document.getElementById('player');
const songList = document.getElementById('songList');
const playAudio = document.getElementById('playAudio');
const pauseAudio = document.getElementById('pauseAudio');
const slider = document.getElementById('volumeSlider');

const createSongList = function() {
    const list = document.createElement("ol");
    for (let i = 0; i < songs.length; i++) {
        const item = document.createElement("li");
        item.appendChild(document.createTextNode(songs[i]));
        list.appendChild(item);
    }
    return list;
}

const links = document.querySelectorAll('li');
for (const link of links) {
    link.addEventListener('click', setSong)
}

songList.appendChild(createSongList());

songList.addEventListener('click', function setSong(e) {
    document.getElementById('headphones').classList.remove('pulse');

    const source = document.getElementById('source');
    source.src = "songs/" + e.target.innerText;

    document.querySelector('#currentSong').innerText = `Now playing: 
        ${e.target.innerText}`;

    player.load();
    player.play();
    document.getElementById('headphones').classList.add('pulse');
})

playAudio.addEventListener('click', () => {
    if (player.readyState) {
        player.play();
    }
})

pauseAudio.addEventListener('click', () => {
        player.pause();
})

slider.addEventListener('input', (e) => {
    const volume = e.target.value;
    player.volume = volume;
})

const updateProgress = function() {
    if (player.currentTime > 0) {
        const progressBar = document.getElementById('progress');
        progressBar.value = (player.currentTime / player.duration) * 100;
    }
}