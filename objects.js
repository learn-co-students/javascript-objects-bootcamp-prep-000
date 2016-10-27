var playlist = {'artistName':'songTitle'};                                //create an object called playlist and put something in it

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;                                       //add key of artistName and value of songTitle to playlist
  return playlist;                                                        //return what's in playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];                                            //delete the artistName key from the object playlist
  return playlist;                                                        //return what's in playlist
}
