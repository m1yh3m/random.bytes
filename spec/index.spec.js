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
