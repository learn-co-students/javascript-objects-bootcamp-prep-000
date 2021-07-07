var playlist = {
  Deangelo: 'The Root',
  Tupac: 'To Live and Die in LA',
  Big: 'One More Chance',
  Kendrick: 'To Pimp A Butterfly'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return Object.assign({},playlist,{[artist]:song})
}

function removeFromPlaylist (playlist, artist){
  return delete playlist.artist;
}