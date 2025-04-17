import { Buffer } from 'node:buffer';
import { randomFillSync } from 'node:crypto';

const { alloc } = Buffer

function generate(byteLength: number = 32) {
    /* create the buffer to store random bytes */
    const buffer: Buffer<ArrayBuffer> = alloc(byteLength)

    /* fill with random data */
    randomFillSync(buffer)

    /* convert to string and return */
    return {
        hex: () => buffer.toString('hex'),
        base64: () => buffer.toString('base64'),
        ascii: () => buffer.toString('ascii'),
        utf8: () => buffer.toString('utf-8')
    }
}

const hex = () => generate().hex();
const base64 = () => generate().base64();
const ascii = () => generate().ascii();
const utf8 = () => generate().utf8();

export { generate, hex, base64, ascii, utf8 };
