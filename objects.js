var playlist = {abc: "1234",bcd:"bncld",cde:'This is a song'}

var updatePlaylist = function(playlist,artist,song) {
  playlist[artist] = song
  return playlist
}
var removeFromPlaylist = function(playlist,artistName) {
  delete playlist[artistName];
  return playlist
}
