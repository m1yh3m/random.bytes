const lib = require('../index')

describe('random.bytes library', () => {
  it('is a function of arity 2', () => {
    expect(typeof lib).toEqual('function')
    expect(lib.length).toBe(2)
  })
  it('returns an object that contains generate key', () => {
    const obj = lib()
    const keys = Object.keys(obj)
    expect(keys.includes('generate')).toBeTrue()
  })
  it('returns an object that has hex(), base64(), ascii() and utf8()', () => {
    const obj = lib()
    const keys = Object.keys(obj)
    const fns = ['hex', 'base64', 'ascii', 'utf8']
    expect(fns.every(i => keys.includes(i))).toBeTrue()
    expect(fns.every(i => typeof obj[i] === 'function')).toBeTrue()
  })
  it('hex() returns a string', () => {
    const actual = lib().hex()
    expect(typeof actual).toEqual('string')
    expect(actual.length).toBeGreaterThan(0)
  })
  it('base64() returns a string', () => {
    const actual = lib().base64()
    expect(typeof actual).toEqual('string')
    expect(actual.length).toBeGreaterThan(0)
  })
  it('utf8() returns a string', () => {
    const actual = lib().utf8()
    expect(typeof actual).toEqual('string')
    expect(actual.length).toBeGreaterThan(0)
  })
  it('ascii() returns a string', () => {
    const actual = lib().ascii()
    expect(typeof actual).toEqual('string')
    expect(actual.length).toBeGreaterThan(0)
  })
  describe('lib().generate', () => {
    const generate = lib().generate
    it('is a function of arity 1', () => {
      expect(typeof generate).toEqual('function')
      expect(generate.length).toBe(0) // since it has an optional param
    })
    it('generates random strings with each invocation', () => {
      const actual = generate()
      const expected = generate()
      expect(actual).not.toEqual(expected)
    })
    it('generates random string of length 16', () => {
      const actual = generate().length
      const expected = 16
      expect(actual).not.toEqual(expected)
    })
  })
})
