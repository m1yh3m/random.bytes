"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const random_bytes_1 = require("./random.bytes");
describe('random.bytes', () => {
    it('hex() returns a string', () => {
        const actual = (0, random_bytes_1.hex)();
        expect(typeof actual).toEqual('string');
        expect(actual.length).toBeGreaterThan(0);
    });
    it('base64() returns a string', () => {
        const actual = (0, random_bytes_1.base64)();
        expect(typeof actual).toEqual('string');
        expect(actual.length).toBeGreaterThan(0);
    });
    it('utf8() returns a string', () => {
        const actual = (0, random_bytes_1.utf8)();
        expect(typeof actual).toEqual('string');
        expect(actual.length).toBeGreaterThan(0);
    });
    it('ascii() returns a string', () => {
        const actual = (0, random_bytes_1.ascii)();
        expect(typeof actual).toEqual('string');
        expect(actual.length).toBeGreaterThan(0);
    });
    describe('generate', () => {
        it('is a function of arity 1', () => {
            expect(typeof random_bytes_1.generate).toEqual('function');
            expect(random_bytes_1.generate.length).toBe(0); // since it has an optional param
        });
        it('generates random strings with each invocation', () => {
            const actual = (0, random_bytes_1.generate)();
            const expected = (0, random_bytes_1.generate)();
            expect(actual).not.toEqual(expected);
        });
        it('generates random string of length 16', () => {
            const actual = (0, random_bytes_1.generate)().hex().length;
            const expected = 16;
            expect(actual).not.toEqual(expected);
        });
    });
});
//# sourceMappingURL=random.bytes.spec.js.map