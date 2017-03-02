var playlist = {artist: 'title'}

function updatePlaylist(playlist, newArtist, title){
  playlist[newArtist] = title
  return playlist
}

function removeFromPlaylist(playlist, oldArtist){
  delete playlist[oldArtist];
  return playlist
}