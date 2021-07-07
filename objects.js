var playlist ={ "Blur": "Coffe ands TV", "Cerati": "Puente" }


function updatePlaylist(playlist,artistNames, songtitles){
playlist[artistNames]= songtitles
return  playlist
}


function removeFromPlaylist(playlist,artistNames){
delete playlist[artistNames]

return  playlist
}

