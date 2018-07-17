var playlist = {'Slowdive': 'song', 'My Bloody Valentine': 'song', 'Phil Ochs': 'song'};
function updatePlaylist(object, artistName, songTitle){
  return Object.assign({}, playlist, {
   [artistName]: songTitle
  });
}
function removeFromPlaylist(object, artistName){
  delete playlist.Slowdive; return playlist
}