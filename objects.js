var playlist = {
  firstArtist: "First_song",
  secondArtist: "Second_song"
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName){
  delete playlist['firstArtist']
  return {};
}
