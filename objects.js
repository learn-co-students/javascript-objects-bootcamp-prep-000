var playlist = {
  JohnWilliams: 'Star Wars',
  JohnPowell: 'How to Train Your Dragon',
  MichaelGiacchino: 'Ratatouille'
}

function updatePlaylist (playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
