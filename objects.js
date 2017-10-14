var playlist = {Future: ['stick talk', 'monster'], pharrel: "Happy", Gucci: 'breakfast', Kanye: "Gold Digger"}

//function updatePlaylist(){
  //Object.assign({}, playlist, { Jay-z: ['blueprint']})
//return(playlist)}

function updatePlaylist(playlist, artistName, songTitle){
  //var artistName = 'Ja'
  var songTitle = "Here's to the State of Mississippi"
  playlist["Phil Ochs"] = songTitle
  return (playlist)
}

function removeFromPlaylist(playlist, Kanye) {
delete playlist.Kanye
return (playlist) }
