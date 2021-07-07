var playlist = new Object({artistName:"Jon Bellion" , songTitle:"Goosebumps" })

function updatePlaylist(playlist, artistName, songTitle){
    playlist[artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName){
  var prop = artistName;
   delete playlist[prop];
 }
