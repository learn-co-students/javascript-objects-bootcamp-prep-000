var playlist = {};



function updatePlaylist({}, artistName, songTitle){
  var artist = artistName
  playlist[artist] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  var artist = artistName;
  delete playlist[artist];
  return playlist;
}

updatePlaylist(playlist, "Phil Ochs", "Here's to the State of Mississippi");
updatePlaylist(playlist, "Kanye", "Gold Digger");

removeFromPlaylist(playlist, "Kanye");
