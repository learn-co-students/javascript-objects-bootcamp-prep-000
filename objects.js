var playlist = {sad : "sad"}

function updatePlaylist(playlist,name,title){
    playlist[name] = title
    playlist[name] = title
    return playlist
}

function removeFromPlaylist (play,name){
  delete play[name]
  return play
}
