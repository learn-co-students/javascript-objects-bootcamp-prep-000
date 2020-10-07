var playlist = {
  stoneBoy: 'Putuu',
  sarkordie: 'Ofekgyor'
};


function updatePlaylist(playlist, artist, songTitle) {
  playlist[artist] = songTitle;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist;
  
}

console.log(playlist);
updatePlaylist(playlist, 'MzVee', 'Davi');

console.log(playlist);

removeFromPlaylist(playlist, 'sarkordie');
console.log(playlist);