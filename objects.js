/*
describe('objects', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'objects.js'), 'utf-8')
  })

  it('defines an object called `playlist`', () => {
    expect(typeof playlist).to.equal('object')
    expect(Object.keys(playlist).length).to.be.greaterThan(0)
  })
*/

var playlist = {
  theBeatles: "Love",
  eltonJohn: "Goodbye Yellow Brick Road",
  aTribeCalledQuest: "The Low End Theory"
};


/*
  describe('updatePlaylist(playlist, artistName, songTitle)', () => {
    it('adds the `artistName: songTitle` key-value pair to `playlist`', () => {
      expect(updatePlaylist({}, 'Phil Ochs', "Here's to the State of Mississippi")).
        to.eql({ 'Phil Ochs': "Here's to the State of Mississippi" })
    })
  })
*/

function updatePlaylist(playlist, name, song) {
   return Object.assign({}, playlist,{ [name]: song})
}


/*
  describe('removeFromPlaylist(playlist, artistName)', () => {
    it('removes `artistName` from `playlist`', () => {
      expect(removeFromPlaylist({ Kanye: "Gold Digger" }, "Kanye")).
        to.eql({})
    })
  })
})
*/

function removeFromPlaylist(playlist, name) {
  delete playlist[name];
  return playlist;
}
