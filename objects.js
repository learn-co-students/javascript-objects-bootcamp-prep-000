var playlist = {
  artistName: 'songTitle'
};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle}
  playlist = {Slowdive: Alison,
    'My Bloody Valentine': Sometimes,
    'Phil Ochs': 'Here\'s to you Mississippi'
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
  return playlist;
}