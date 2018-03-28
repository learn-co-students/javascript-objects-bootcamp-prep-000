var playlist = new Object({ Radiohead: "There, There", SufjanStevens: "Impossible Soul", StVincent: "Marrow"});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.Slowdive = "Alison";
  playlist['My Bloody Valentine'] = "Sometimes";
  playlist['Phil Ochs'] = "Here's to the State of Mississippi";
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.Slowdive;
}