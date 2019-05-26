var playlist = new Object({"Taylor Swift": "Over the clouds"})

function updatePlaylist(targetObj, artistName, songtitle){
  return Object.assign(targetObj, {[artistName]: songtitle})
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
