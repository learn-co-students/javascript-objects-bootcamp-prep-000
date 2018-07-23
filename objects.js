var playlist = {artistName: 'songTitle'}
console.log(playlist)

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}
 function removeFromPlaylist(playlist, artistName){
   delete playlist.artistName;
 }
