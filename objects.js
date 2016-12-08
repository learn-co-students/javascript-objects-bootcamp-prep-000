var playlist = {
weezer: "Say It Ain't So",
petitBiscut: "Sunset Lover"
};

function updatePlaylist(playlist, artistName, songTitle)
{
  playlist['Phil Ochs'] = "Here's to the State of Mississippi"

  return playlist
}

function removeFromPlaylist(playlist, artistName)
{
  playlist.Kanye = "Gold Digger";
  delete playlist.Kanye;

  return playlist
}
