var playlist = {};

/*Object({
  Kanye West: "Gold Digger",
  Beyonce: "Halo",
  Adelle: "Hello"});*/

function updatePlaylist(playlist, artistName, songTitle) {
   playlist[artistName]= songTitle
   return playlist
}

updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi");

/*var playlist = {
  Kanye: 'Gold Digger'
};*/

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}

removeFromPlaylist(playlist, 'Kanye');
