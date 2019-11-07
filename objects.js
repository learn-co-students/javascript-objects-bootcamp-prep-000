var playlist = {Biggie: "machine gun funk"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist["Phil Ochs"] = "Here's to the State of Mississippi"
  playlist["My Bloody Valentine"] = "Sometimes"
  playlist["Slowdive"] = "Allison"
  
  return playlist
}

function removeFromPlaylist(playlist,artistName){
  delete playlist.Slowdive
  return playlist
}