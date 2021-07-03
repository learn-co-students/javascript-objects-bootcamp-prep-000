var playlist = {"linkin park": "good goodbye"};
function updatePlaylist(playlist, artist, title) {
   Object.assign({}, playlist, {artist: title});
  return playlist;
};
updatePlaylist({}, 'Phil Ochs', "Here's to the State of Mississippi");
function removeFromPlaylist(playlist, artist) {
  return delete playlist.artist;
  //return playlist;
};
removeFromPlaylist({ Kanye: "Gold Digger" }, "Kanye");
