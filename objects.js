var playlist = { poloAndPan: "Nana" }


function updatePlaylist (playlist, artist, song) {
playlist[artist] = song;
return playlist;
}

function removeFromPlaylist (playlist, artist) {
delete playlist[artist];
console.log(playlist)
return playlist;
}
