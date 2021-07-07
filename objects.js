var playlist = {

  ACDC: 'Back In Black'
}

function updatePlaylist(playlist, artistName, songTitle) {

  playlist[artistName] = songTitle

  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]

  return playlist
}

updatePlaylist(playlist,"ACDC","Highway to Hell");
removeFromPlaylist(playlist,'')
