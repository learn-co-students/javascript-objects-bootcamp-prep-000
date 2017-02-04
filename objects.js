var playList = {artistName: 'songTitle'};
function updatePlaylist(playList, artist, song){
  playList[artist] = song;
  return playList;
}


function removeFromPlayList(playList, artist) {
  delete playlist[artist];

  return playList;
}
