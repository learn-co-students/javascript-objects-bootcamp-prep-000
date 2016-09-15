
var playlist = { 'artistNames' :  'songTitle' };

function updatePlaylist ( playlist, artistNames, songTitle){
    playlist[artistNames] = songTitle;
    return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
