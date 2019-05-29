var playlist = {'kanye west': "Power"};


function updatePlaylist(object,key, value){
   playlist['Slowdive'] = "Allison"
  playlist['My Bloody Valentine'] = 'Sometimes'
playlist['Phil Ochs']= "Here's to the State of Mississippi"
  return playlist
 }


function removeFromPlaylist(object, key){
  delete playlist.Slowdive;
  return playlist
}