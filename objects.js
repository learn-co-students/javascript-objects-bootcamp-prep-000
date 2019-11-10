// var playlist = {};
var playlist = {
  'Jennifer Hudson': 'life',
  'Fun': 'Love'
}

function updatePlaylist (playlist, artistName, songTitle){
  playlist [artistName]=songTitle;
}

function removeFromPlaylist(playlist, artisName) {
  delete playlist ['Fun', 'MyBloody Valinetine', 'Slowdive']
}