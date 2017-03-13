// Javascript Object Practice

// An object named playlist
var playlist = {'Phil Ochs': "Here's to the State of Mississippi"};

// Adds the artistName: songTitle key-value pair to playlist
function updatePlaylist(list, artistName, songTitle) {
   list[artistName] = songTitle;
   return list;
}

// Removes artistName from playlist
function removeFromPlaylist(list, artistName) {
  delete list[artistName];
  return list;
}