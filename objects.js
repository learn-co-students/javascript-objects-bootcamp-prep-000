playlist = { camrone: "Hey Ma", Kanye: "Gold Digger"};

function updatePlaylist(playlist, artist, song){
 playlist['Phil Ochs'] = "Here's to the State of Mississippi";
 return playlist;
}

function removeFromPlaylist(playlist, camrone){
  delete playlist.Kanye;
  return playlist;
}