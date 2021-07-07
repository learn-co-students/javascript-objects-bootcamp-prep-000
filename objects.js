/*playlist object*/
var playlist = {Silverchair: 'Israel\'s Son'}

/*updatePlaylist function
adds the 'artistName: songTitle' key-value pair to 'playlist'*/
function updatePlaylist(playlist, artistName, songTitle){
  playlist [artistName] = songTitle
  return playlist
}

/*removeFromPlaylist function
removes artistName from playlist*/
function removeFromPlaylist(playlist, artistName){
  delete playlist [artistName]
  return playlist
}
