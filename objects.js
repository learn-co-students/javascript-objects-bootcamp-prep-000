var playlist = {
  emimen: "GOd Rap"

};

//function updatePlaylist(playlist, artisName, songTitles) {
  //Object.assign({}, playlist{ elB: "cubalibre"});//
  //playlist[] = "sometimes";
  //return playlist;
  playlist[artisName] = songTitles;
  //playlist['My Bloody Valentine'] = 'Sometimes';
 // return playlist;
//}

//function removeFromPlaylist(playlist, artisName) {
  //delete playlist.artisName;
  //return playlist;
//}



 function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

 function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}