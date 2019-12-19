
function setup (bufferLib, cryptoLib) {
  bufferLib = bufferLib || require('buffer')
  cryptoLib = cryptoLib || require('crypto')

  const { alloc } = bufferLib.Buffer
  const { randomFillSync } = cryptoLib

  function generate (byteLength = 32) {
    /* create the buffer to store random bytes */
    const buffer = alloc(byteLength)

    /* fill with random data */
    randomFillSync(buffer)

    /* convert to string and return */
    return {
      buffer,
      hex: buffer.toString('hex'),
      base64: buffer.toString('base64'),
      ascii: buffer.toString('ascii'),
      utf8: buffer.toString('utf-8')
    }
  }
  return {
    generate,
    hex: () => generate().hex,
    base64: () => generate().base64,
    ascii: () => generate().ascii,
    utf8: () => generate().utf8,
    bufferLib,
    cryptoLib
  }
}

module.exports = setup
