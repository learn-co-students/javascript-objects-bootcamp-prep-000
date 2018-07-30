const playlist = {
  samSmith: ["Nirvana", "Lay Me Down", "Stay with Me"],
  beyonce: ["Love on Top", "Halo"],
  edSheeran: ["Castle on the Hill", "Perfect", "Shape of You"],
  netta: "toy",
};

function updatePlaylist(playlistName, artistName, songTitle) {
  objects.assign({}, playlistName.artistName, songTitle);
  return playlistName;
}

function removeFromPlaylist(playlistName, artistName) {
  delete playListName.artistName;
  return playListName;
}
