var playlist = {
  ["John Lennon"]: "Imagine",
  ["Von Wegen Lisbeth"]: "Meine Kneipe",
  ["Jack Johnson"]: "Radiate",
  ["Nathaniel Rateliff"]: "I Need Never get Old"
}
function updatePlaylist(object,artistName,songTitle){
  playlist [artistName] = songTitle
    return playlist
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
