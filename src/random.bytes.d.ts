declare function generate(byteLength?: number): {
    hex: () => string;
    base64: () => string;
    ascii: () => string;
    utf8: () => string;
};
declare const hex: () => string;
declare const base64: () => string;
declare const ascii: () => string;
declare const utf8: () => string;
export { generate, hex, base64, ascii, utf8 };
//# sourceMappingURL=random.bytes.d.ts.map