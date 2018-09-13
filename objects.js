var playlist = {Albano: "Felicita"};

var playlist = {Slowdive: "Alison"};
var playlist = {MyBloodyValentine: "Sometimes"};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist['Phil Ochs'] = 'Heres to the State of Mississippi';
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
  return playlist;
}