var playlist = new Object({
  artistName: "song titles"
});
function updatePlaylist(obj, artistName, songTitle){
  return Object.assign({}, {'Phil Ochs':'Here\'s to the State of Mississippi'})
}
function removeFromPlaylist(playlist, artistName, songTitle){
  delete playlist.Kanye;
  return playlist
}