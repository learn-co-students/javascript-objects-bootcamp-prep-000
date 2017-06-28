var playlist = {
  "Marvin Gaye" : "What's Going On",
  "Jimmy Eat World" : "The Middle",
  "Jimi Hendrix" : "Purple Haze"
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
  //playlist.artistName = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}
