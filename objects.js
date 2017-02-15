var playlist = {name: "Song"};
function updatePlaylist (playlist, artistName, songTitle) {
  playlist[name] = songTitle;
   return playlist;
     updatePlaylist ({}, 'Phil Ochs', "Here's to the State of Mississippi") // {'Phil Ochs': "Here's to the State of Mississippi"}
}

function removeFromPlaylist (playlist, artistName) {
   delete playlist[name];
      return playlist;
      removeFromPlaylist ({ Kanye: "Gold Digger" }, "Kanye") // {}
}
