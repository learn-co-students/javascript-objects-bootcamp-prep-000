var playlist={Michael: "man in the mirror ",Rihanna:"umbrella"}
function updatePlaylist(obj, artistName, songTitle){
   obj[artistName]=songTitle
   return playlist
}

function removeFromPlaylist(obj, artistName){
delete obj[artistName]
return obj
}
removeFromPlaylist(playlist, "Michael")
delete playlist.Michael

