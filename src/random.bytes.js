"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utf8 = exports.ascii = exports.base64 = exports.hex = void 0;
exports.generate = generate;
const node_buffer_1 = require("node:buffer");
const node_crypto_1 = require("node:crypto");
const { alloc } = node_buffer_1.Buffer;
function generate(byteLength = 32) {
    /* create the buffer to store random bytes */
    const buffer = alloc(byteLength);
    /* fill with random data */
    (0, node_crypto_1.randomFillSync)(buffer);
    /* convert to string and return */
    return {
        hex: () => buffer.toString('hex'),
        base64: () => buffer.toString('base64'),
        ascii: () => buffer.toString('ascii'),
        utf8: () => buffer.toString('utf-8')
    };
}
const hex = () => generate().hex();
exports.hex = hex;
const base64 = () => generate().base64();
exports.base64 = base64;
const ascii = () => generate().ascii();
exports.ascii = ascii;
const utf8 = () => generate().utf8();
exports.utf8 = utf8;
//# sourceMappingURL=random.bytes.js.map