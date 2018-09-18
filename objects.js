var playlist = { 'artist': 'song'};

function updatePlaylist(playlist, artistName, songTitle){
 playlist.assign({}, playlist,{[artistName]:songTitle})
  return playlist
}