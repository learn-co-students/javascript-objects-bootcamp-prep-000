var playlist = {'Phil Ochs' : "Here's to the State of Mississippi"}
function updatePlaylist (obj, key, value) {
		   obj[key] = value
		   return obj
   }

function removeFromPlaylist (playlist, artistName)
  { delete playlist[artistName]
    return playlist }
