var playlist = new Object({ artistName : 'songTitle'});

function updatePlaylist (playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}updatePlaylist(playlist, 'Phil Ochs', 'Here\'s to the State of Mississippi');

function removeFromPlaylist(playlist, artistName){
  delete playlist.Kanye;
  return playlist;
}removeFromPlaylist(playlist, artistName);