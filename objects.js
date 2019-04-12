var playlist = {artistName:'songTitle'};

//var playlist=new object();

var updatePlaylist=(playlist, artistName, songTitle)=>{
  //var playlist = {};
  playlist[artistName] = songTitle
  return playlist
}

var removeFromPlaylist = (playlist, artistName)=>{
delete playlist[artistName]
  return playlist
}

//removeFromPlaylist();
