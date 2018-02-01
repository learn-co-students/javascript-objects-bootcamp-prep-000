var playlist = {
  artistName: "kanye",
  songTitle: "gold digger"
}; 

var updatePlaylist = function(playlist, artistName, songTitle){
  playlist[artistName] = songTitle; 
  return playlist; 
}

var removeFromPlaylist = function(playlist, artistName){
  
  delete playlist[artistName]; 
  return playlist; 
}