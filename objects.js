var playlist = {
  MyBloodyValentine: 'Sometimes',
  Slowdive: 'Alison'
};
function updatePlaylist(playlist, artistname, songTitle) {
  return Object.assign(playlist, {['Phil Ochs']:"Here's to the State of Missippi"});
}
function removeFromPlaylist(playlist, artistname) {
 return delete playlist.Slowdive;
}