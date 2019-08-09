// Assign an object to the variable `playlist` and initialize the object with a key-value pair — the keys will be artist names and the values will be song titles. (What limitation does this impose on our `playlist`?) //


var playlist = {
  "Slowdive": "Alison",
  "My Bloody Valentine" : "Sometimes"
};

var artistName = "Phil Ochs"
var songTitle = "Here\'s to the State of Mississippi"

function updatePlaylist(playlist , artistName , songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist , artistName){
  delete playlist[artistName]
  return playlist
}






