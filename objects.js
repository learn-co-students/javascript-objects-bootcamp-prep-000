var playlist = {tool:"laterlaus"}

function updatePlaylist(playlist, artistName, songTitle){

  Object.assign(playlist, {[artistName]:songTitle})
  return playlist
}

updatePlaylist(playlist, "My Bloody Valentine", "Sometimes")

function removeFromPlaylist(playlist, artistName){

delete playlist[artistName]
return playlist



}

removeFromPlaylist(playlist, "Slowdive")
