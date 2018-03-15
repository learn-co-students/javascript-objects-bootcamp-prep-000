var playlist = {artist: 'song title'};

//var playlist = new Object({artist: 'song title'});

function updatePlaylist(playlist, artistName, songTitle) {
  //return Object.assign(playlist, { artistName: songTitle });
  playlist[artistName] = songTitle;
  return playlist
};


function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

//console.log(updatePlaylist(playlist, 'yolo', 'yala'))

/*
describe('objects', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'objects.js'), 'utf-8')
  })

  it('defines an object called `playlist`', () => {
    expect(typeof playlist).to.equal('object')
    expect(Object.keys(playlist).length).to.be.greaterThan(0)
  })

  describe('updatePlaylist(playlist, artistName, songTitle)', () => {
    it('adds the `artistName: songTitle` key-value pair to `playlist`', () => {
      expect(updatePlaylist({}, 'Phil Ochs', "Here's to the State of Mississippi")).
        to.eql({ 'Phil Ochs': "Here's to the State of Mississippi" })
    })
  })

  describe('removeFromPlaylist(playlist, artistName)', () => {
    it('removes `artistName` from `playlist`', () => {
      expect(removeFromPlaylist({ Kanye: "Gold Digger" }, "Kanye")).
        to.eql({})
    })
  })
})
*/