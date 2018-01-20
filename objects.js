var playlist = {artistName: "songTitle"}

function updatePlaylist(){
  delete playlist.artistName
  return Object.assign({}, playlist, { 'Phil Ochs': "Here's to the State of Mississippi"})
}

function removeFromPlaylist(){
  delete playlist.artistName
  Object.assign({}, playlist, { Kanye: "Gold Digger" })
  delete playlist.Kanye
  return playlist
}