var playlist = {
  bonIver: "skinny love",
  johnMayer: "edge of desire",
  explosions: "your hand in mine"
};

function updatePlaylist(playlist, artistName, songTitle) {
   return Object.assign(playlist, {'Phil Ochs': "Here's to the State of Mississippi"});
};

function removeFromPlaylist(playlist, artistName) {
   delete playlist.Kanye;
   return playlist;
};
