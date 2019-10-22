var playlist = {artistName: "songTitle"};

function updatePlaylist(playlist, artistName, songTitle){
playlist [artistName] = songTitle;
return playlist
}
function removeFromPlaylist(paylist, artistName){
  delete playlist.artistName;
 return playlist;
}
