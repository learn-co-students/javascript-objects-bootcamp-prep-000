var playlist = new Object({artistName: 'Rise Against'});
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  Object.assign({}, playlist, {artistName: ['My Bloody Valentine', 'Phil Ochs', 'Slowdive'] });
  return Object.assign({}, playlist, { [artistName]: songTitle});
}
function removeFromPlaylist(playlist, artistName) { playlist[artistName];
delete playlist.Slowdive;
}