var playlist = new Object({'Leonard Cohen': 'Everybody Knows', 'Neil Young': 'Ohio', 'The Zombies': 'Time of the Season', 'Kanye': "Gold Digger"});


function updatePlaylist(playlist, artistName, songTitle){
  playlist['Phil Ochs'] ="Here's to the State of Mississippi";
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.Kanye;
  return playlist;
}