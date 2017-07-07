var playlist = {artistName: 'songTitle'}; //creats the playlist object

function updatePlaylist(playlist, artistName, songName) {
  playlist[artistName] = songName; //adds passed key pair
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]; //deletes passed key pair
  return playlist
}
