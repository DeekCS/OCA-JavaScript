let add = document.getElementById('addBtn');

let playlist = document.getElementById('playlist');

add.addEventListener('click', function() {
    let newSong = document.createElement('h3');
        let songName=document.getElementById("songName");
    playlist.style.display = 'block';
    playlist.appendChild(newSong);
    newSong.innerHTML = songName.value;

    
});