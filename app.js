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

const createSongList = function() {
    const list = document.createElement("ol");
    for (let i = 0; i < songs.length; i++) {
        const item = document.createElement("li");
        item.appendChild(document.createTextNode(songs[i]));
        list.appendChild(item);
    }
    return list;
}

songList.appendChild(createSongList());

songList.addEventListener('click', (e) => {
    const source = document.getElementById('source');
    source.src = "songs/" + e.target.innerText;

    document.querySelector('#currentSong').innerText = `Now playing: 
        ${e.target.innerText}`;

    player.load();
    player.play();
})

playAudio.addEventListener('click', () => {
    if (player.readyState) {
        player.play();
    }
})

pauseAudio.addEventListener('click', () => {
        player.pause();
})