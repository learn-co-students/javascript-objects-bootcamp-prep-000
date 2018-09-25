var playlist = {
  artist: "song"
};


function updatePlaylist(playlist, artistName, songTitle) {
  playlist['Phil Ochs'] = 'My Bloody Valentine';

return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
}