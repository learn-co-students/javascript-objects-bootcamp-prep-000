var playlist = {['Casting Crowns']: 'Voice of Truth'};

function updatePlaylist(playListOBJ, artist, songTitle){
  playListOBJ[artist] = songTitle;
  return playListOBJ;
}

function removeFromPlaylist(playListOBJ, artist){
  delete playListOBJ.artist;
  return playListOBJ;
}