var  playlist= new Object({artistName:'songTitle'});
function updatePlaylist(playlist,artistName, songTitle) {
        return Object.assign({}, playlist, { [artistName]: songTitle})
  }
function removeFromPlaylist(playlist, artistName) {
  var playlist={};
  delete playlist.artistName;
  return playlist;
    }
