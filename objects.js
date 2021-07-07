var playlist = {
  'Mariah Carey': 'Oh Holy Night',
  Rihanna: 'Take a bow',
  Kanye: "Gold Digger"
}

var artistName = 'Phil Ochs'
var songTitle  = "Here's to the State of Mississippi"

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function  removeFromPlaylist(playlist, artistName) {
  delete playlist.Kanye
  return playlist
}
