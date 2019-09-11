var playlist = {artistName:'songTitle'}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}

/*global describe, it 

const expect = require('chai').expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')


  describe('removeFromPlaylist(playlist, artistName)', () => {
    it('removes `artistName` from `playlist`', () => {
      expect(removeFromPlaylist({ Kanye: "Gold Digger" }, "Kanye")).
        to.eql({})
    })
  })
})

*/
