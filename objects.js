var playlist = new Object({ name: "titles" });

function updatePlaylist(playlist, name, titles) {

  return Object.assign({}, playlist, { [name]: titles })
}

function removeFromPlaylist(playlist, name) {
  delete playlist[name]
  return playlist
}

/*function removeFromPlaylist(playlist, name) {

  delete.playlist name;
  playlist
}
*/
/*
//var playlist = { name: "titles" };

//Object.assign({}, { name: 'titles' })

function updatePlaylist(playlist, name, titles) {

  return Object.assign({}, playlist, { [name]: titles })
}

/*function removeFromPlaylist(playlist, name) {

  delete playlist.titles;
  playlist;
}

/*
function destructivelyDeleteFromObjectByKey(object, key) {
 +  delete object[key];
 +  return object
 */
