var playlist = {
  drake: "Jumpman",
  future: "Percocet & Stripper Joint"
};

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist){
  delete playlist[artist]
  return playlist
}

