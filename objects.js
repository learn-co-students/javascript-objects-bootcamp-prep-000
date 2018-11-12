var playlist = {
  artistOne: "songOne",
  artistTwo: "songTwo"
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

updatePlaylist(playlist, "Eagles", "Hotel California")
console.log(playlist)


function removeFromPlaylist (playlist, artistName) {
  delete playlist [artistName]
  return playlist
}
