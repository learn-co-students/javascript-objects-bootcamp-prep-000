var playList = {Drake: '6 God'};

function updatePlayList(playList, Nas, Either) {
  playList = {Nas: 'Either'};
  return playList;
}

function removeFromPlaylist(playlist, Drake) {
  delete playlist.Drake;
  return updatePlayList();
}
