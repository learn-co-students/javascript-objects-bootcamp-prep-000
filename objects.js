var playlist = {
  Slowdive: "Alison"
};

function updatePlaylist(playlist, artistName, songTitle) {
//  return Object.assign({}, playlist, {artistName: songTitle}) - this is the non-destructive way to add
  playlist[artistName] = songTitle
}

updatePlaylist(playlist, 'My Bloody Valentine', 'Sometimes');
updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi");

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  //delete playlist.artistName - this is another way to delete
}

removeFromPlaylist(playlist, 'Slowdive');
