var playlist = new Object({
  artistName: "song titles"
});
function updatePlaylist(obj, artistName, songTitle){
  return Object.assign({}, {'Phil Ochs':'Here\'s to the State of Mississippi'})
}
function removeFromPlaylist(playlist){
  delete playlist.Kanye;
  return playlist
}