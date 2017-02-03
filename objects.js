var playlist = {XX: "VCR", Kanye: "Gold Digger", Biggie: "Juicy"}

function updatePlaylist(obj, artistName, songTitle) {

  return Object.assign({}, obj, { [artistName]: songTitle})

}
updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")

function removeFromPlaylist(playlist, artistName) {

  delete playlist.Kanye;

  return playlist 

}
