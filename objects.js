var playlist = new Object({artist:'song'});

//playlist = {kanye: "homecoming", taylor: "bad blood"}
//playlist[kanye]   ~> "homecoming"
//playlist[taylor]  ~> "shake it off"
//playlist[taylor] = "bad blood"
function updatePlaylist (playlist, artist, song){
  playlist[artist]=song
  return playlist
}

function removeFromPlaylist (playlist, artist, song){
  delete playlist [artist];
  return playlist
}
