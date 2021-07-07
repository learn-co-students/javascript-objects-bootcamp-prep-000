var playlist = { Drake: "The Motto"
};

function updatePlaylist(obj, key, value) { 
  playlist[key] = value
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive
  return playlist
}