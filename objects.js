var playlist = new Object({name: "songs"})

function updatePlaylist(object, name, song) {
  object[name] = song;
  return object
} 

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}

