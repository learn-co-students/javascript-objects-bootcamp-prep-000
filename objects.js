var playlist = new Object({ artistName: 'songTitle' });
Object.assign({}, playlist, { artistName: ['songTitle'] });
function updatePlaylist(playlist, artistName, songTitle) {
//var updatedArtistSong =  Object.assign({}, artistName, {songTitle})
//var updatedPlaylist = Object.assign({}, playlist, { updatedArtistSong});
//const artistName = 'artistName'
//var updatedArtistSong = artistName.songTitle
//var updatedPlaylist = Object.assign({}, playlist, updatedArtistSong);
var updatedPlaylist = Object.assign({}, playlist, { [artistName]: songTitle });
return updatedPlaylist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}
