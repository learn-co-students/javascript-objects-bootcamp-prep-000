playlist = {
  mustafa:'Onun Arabasi var',
  tarkan:'gel gel',
  sezen:'remix',
};

function updatePlaylist(playlist,artist,song){
playlist.artist = song;

}

function removeFromPlaylist(playlist, artistName) {

delete playlist.artistName;

}
