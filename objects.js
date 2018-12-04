 var playlist = {
   theShins: "Phantom Limb",
}

function updatePlaylist(playlist, artistName, songTitle) {
   playlist[artistName] = songTitle
   return playlist
}