var playlist = {

  Beethoven: 'I am Beethoven',
  "Lil Wayne": 'Symphony No. 5'
}
//Showing can string keys

function updatePlaylist(playlist, artist, song) {
  //var playlist = {artist: song};
  playlist[artist] = song
  return
}
//no change for string
//originally used create object, and used artistName and songTitle without checking prior values

function removeFromPlaylist(playlist, artistName) {
//  delete playlist.artist;
  delete playlist[artistName];
  return
}
