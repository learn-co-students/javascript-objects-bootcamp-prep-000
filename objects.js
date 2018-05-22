var playlist = {
  artistNames: 'song titles'
};

function updatePlaylist(playlist, artistNames, songtitle){
playlist[artistNames] = 'songtitle';
return playlist
}
function removeFromPlaylist(playlist, artistNames){
delete playlist[artistNames];
return playlist
}
