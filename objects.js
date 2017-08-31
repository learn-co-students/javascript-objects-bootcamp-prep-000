var playlist = {jayZ: 'Bam', yeezy: 'amazing', Kanye: 'Gold Digger'}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName, songTitle){
  delete playlist.Kanye
  return playlist
}
