var playlist = {
  DMX: 'Up In Here',
  Nas: "If I Ruled The World",
  Biggie: "Ten Crack Commandments"
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
}