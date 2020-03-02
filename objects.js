var playlist = {
  Radiohead: "Talk Show Host",
  Nine_Inch_Nails: "Head Like A Hole"
}

function updatePlaylist(playlist, Moderat, New_Error){
  playlist[Moderat] = New_Error
  return playlist
}

function removeFromPlaylist(playlist, Nine_Inch_Nails){
  delete playlist[Nine_Inch_Nails]
  return playlist
}
//
