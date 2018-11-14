it('defines an object called `playlist`', () => {
    expect(typeof playlist).to.equal('object')
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