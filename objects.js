var playlist = {artist: 'song'}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]= songTitle;
  return playlist;

}

function removeFromPlaylist(playlist, artistName){
  playlist.artistName = [];
  playlist;
}
