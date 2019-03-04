//creates an object called "playlist" with one Artist (key) and song (value)
var playlist = {
  "Rick Astley" : "Never Gonna Give You Up"
};

//adds "artist" and "song title" key-value pair to "playlist"
function updatePlaylist(playlist,artistName,songTitle) {
  return Object.assign(playlist,{
    [artistName]: songTitle
  });
}

//remove an artist and song from "playlist"
function removeFromPlaylist(playlist,artistName) {
  delete playlist[artistName];
  return playlist;
}