var playlist = {
  lionelRichie: "Hello",
  marieCarie: "One sweet day"
  };

function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

updatePlaylist(playlist, 'celionDion', 'Titanic');
playlist;

function removeFromPlaylist(obj, key) {
   var playlist = new Object();
   return playlist;

}

removeFromPlaylist();
