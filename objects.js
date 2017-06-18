var playlist = {
  artistName: "SongTitle"
}

function updatePlaylist(playlist, artistName, songTitle) {
	playlist[artistName] = songTitle
	return playlist
}

// console.log(playlist)
// updatePlaylist(playlist, 'J Cole', 'Love Yourz')
// updatePlaylist(playlist, 'BiggieSmalls', 'Hypnotize')
// console.log(playlist)

// Using this example, we can only have one song per artist. Otherwise,
// the key is overwritten with a different value.

// function updatePlaylist(playlist, artistName, songTitle) {
//   return Object.assign({}, playlist, { [artistName]: songTitle })
// }

// console.log("Adding Biggie Smalls to playlist:")
// console.log(updatePlaylist(playlist, "Biggie Smalls", "Hypnotize"))
// console.log("Adding Tupac to playlist:")
// console.log(updatePlaylist(playlist, "Tupac", "Better Dayz"))
// console.log("Non-destructive function, playlist remains unchanged:")
// console.log(playlist)

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}

// delete playlist.BiggieSmalls
// console.log(playlist)

// Note to self: you cannot remove keys from an Object if there is a space in
// in the keys. Delete playlist.Biggie Smalls will throw an error.
