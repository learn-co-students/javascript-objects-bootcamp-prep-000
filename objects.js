var playlist = { "Slowdive": "Alison", "My Bloody Valentine": "Sometimes"};

function updatePlaylist(){
  playlist["Phil Ochs"] = "Here's to the State of Mississippi"
  return updatePlaylist
}

function removeFromPlaylist(){
  delete playlist.Slowdive;
}