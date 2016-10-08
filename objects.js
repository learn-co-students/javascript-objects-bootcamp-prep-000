var playlist = new Object({Yaya : "hello"});
function updatePlaylist(playlists , artistName , song){
  playlists[artistName] = song
  return playlists

}
 function removeFromPlaylist(playlists, artistName){
   delete playlists[artistName]
  return  playlists
 }
