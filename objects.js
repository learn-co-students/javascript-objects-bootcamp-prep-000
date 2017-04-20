
var playlist = new Object();
playlist = {"bob":"the wind in my heart"};


function updatePlaylist(playlist,artistName,songTitle) {
  playlist[artistName]=[songTitle];
}

function updatePlaylist(playlist,artistName) {
      delete playlist[artistName]
}
