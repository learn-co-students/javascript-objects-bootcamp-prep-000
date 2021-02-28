var playlist = {
  artistName: "songTitle",
  Miyuki:"Billy",
};



function updatePlaylist (playlist, Name, Title){
  playlist[Name] = 'Title'
}

function removeFromPlaylist (playlist, Name) {
  delete playlist[Name]
  return playlist
  
}