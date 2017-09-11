var meals = {};
var meals = new Object();
var meals = { breakfast: "oatmeal" };

// or, equivalently

var meals = new Object({ breakfast: 'oatmeal' })

function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}

playlist = {};
playlist.sting = "StingSong";

function updatePlaylist(playlist,artist,song){
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist,artist){
    delete playlist[artist]
    return playlist;
}
