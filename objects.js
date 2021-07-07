var playlist = { songTitle: 'Here\'s to the State of Mississippi' }
function updatePlaylist(playlist, artistName, songTitle){
  var artistName = "Phil Ochs"
  playlist[artistName] = songTitle
  return playlist
}
var playlist = {kanye:"Gold Digger"}
var artistName = "Kanye"
var songTitle = "Gold Digger"
playlist[artistName] = songTitle

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  return playlist
}

removeFromPlaylist(playlist, "kanye");
echo "--timeout 5000" >> test/mocha.opts
