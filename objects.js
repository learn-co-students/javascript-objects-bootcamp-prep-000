var playlist = {
  artist: 'songTitle',
};

function updatePlaylist(obj, key, value){
  obj[key] = value
  return obj
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  return {}
}
