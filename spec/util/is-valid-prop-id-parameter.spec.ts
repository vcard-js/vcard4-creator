import isValidPropIdParameter from '../../src/util/is-valid-prop-id-parameter.js';
import { describe, expect, it } from 'vitest';

describe('isValidPropIdParameter', () => {
    it('is a function', () => {
        expect(isValidPropIdParameter).toBeTypeOf('function');
    });

    it('returns a boolean', () => {
        expect(isValidPropIdParameter('...')).toBeTypeOf('boolean');
    });

    it('returns false when passed undefined', () => {
        expect(isValidPropIdParameter(undefined)).toBe(false);
    });

    it('returns false when passed null', () => {
        expect(isValidPropIdParameter(null)).toBe(false);
    });

    it('returns false when passed true', () => {
        expect(isValidPropIdParameter(true)).toBe(false);
    });

    it('returns false when passed false', () => {
        expect(isValidPropIdParameter(false)).toBe(false);
    });

    it('returns false when passed NaN', () => {
        expect(isValidPropIdParameter(NaN)).toBe(false);
    });

    it('returns false when passed a float', () => {
        expect(isValidPropIdParameter(1.337)).toBe(false);
    });

    it('returns false when passed an empty string', () => {
        expect(isValidPropIdParameter('')).toBe(false);
    });

    it('returns false when passed a 256 octet string', () => {
        expect(isValidPropIdParameter('A'.repeat(256))).toBe(false);
    });

    it('returns false when passed an emoji', () => {
        expect(isValidPropIdParameter('🚀')).toBe(false);
    });

    it('returns true when passed a 255 octet string', () => {
        expect(isValidPropIdParameter('A'.repeat(255))).toBe(true);
    });

    it('returns true when passed a string containing valid characters which is less than 256 octets', () => {
        expect(isValidPropIdParameter('A-Za-z0-9_')).toBe(true);
    });
});
