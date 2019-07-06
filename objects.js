const playlist = {
  "Slowdive": "Alison",
  "My Bloody Valentine": "Sometimes"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")
/*
{ Slowdive: 'Alison', 'My Bloody Valentine': 'Sometimes', 'Phil Ochs': 'Here\'s to the State of Mississippi' }
*/
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
removeFromPlaylist(playlist, 'Slowdive')
/*
{ 'My Bloody Valentine': 'Sometimes', 'Phil Ochs': 'Here\'s to the State of Mississippi' }
*/

/*
preset: ES2015(ES6)
const playlist = {
  "Slowdive": "Alison",
  "My Bloody Valentine": "Sometimes"
}

const updatePlaylist = (playlist, artistName, songTitle) => {
  playlist[artistName] = songTitle
  return playlist
}
console.log(updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi"))

const removeFromPlaylist = (playlist, artistName) => {
  delete playlist[artistName]
  return playlist
}
console.log(removeFromPlaylist(playlist, 'Slowdive'))
*/
