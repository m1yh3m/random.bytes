
function setup (bufferLib, cryptoLib) {
  bufferLib = bufferLib || require('buffer')
  cryptoLib = cryptoLib || require('crypto')

  const { alloc } = bufferLib.Buffer
  const { randomFillSync } = cryptoLib

  /* function for generating random bytes, of byte length 32 by default */
  function generate (idLength = 32) {
    /* create the block to store random bytes */
    const block = alloc(idLength / 2)

    /* fill with random data */
    randomFillSync(block)

    /* convert to string and return */
    return block.toString('hex').slice(0, idLength)
  }
  return {
    generate,
    bufferLib,
    cryptoLib
  }
}

module.exports = setup
