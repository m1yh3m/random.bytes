import { generate, hex, base64, ascii, utf8 } from './random.bytes';

describe('random.bytes', () => {
    it('hex() returns a string', () => {
        const actual = hex()
        expect(typeof actual).toEqual('string')
        expect(actual.length).toBeGreaterThan(0)
    })
    it('base64() returns a string', () => {
        const actual = base64()
        expect(typeof actual).toEqual('string')
        expect(actual.length).toBeGreaterThan(0)
    })
    it('utf8() returns a string', () => {
        const actual = utf8()
        expect(typeof actual).toEqual('string')
        expect(actual.length).toBeGreaterThan(0)
    })
    it('ascii() returns a string', () => {
        const actual = ascii()
        expect(typeof actual).toEqual('string')
        expect(actual.length).toBeGreaterThan(0)
    })
    describe('generate', () => {
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
            const actual = generate().hex().length;
            const expected = 16
            expect(actual).not.toEqual(expected)
        })
    })
})
