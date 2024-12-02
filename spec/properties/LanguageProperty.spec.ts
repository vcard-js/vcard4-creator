import LanguageProperty, { type LanguageRestConfig } from '../../src/properties/LanguageProperty.js';
import { expect } from 'chai';
import { describe, it } from 'vitest';

describe('LanguageProperty', () => {
    it('is a class', () => {
        expect(LanguageProperty).to.be.a('class');
    });

    describe('#toString()', () => {
        it('is a method', () => {
            expect(LanguageProperty.prototype.toString).to.be.a('function');
        });

        it('returns a string', () => {
            const language = new LanguageProperty('de-AT');

            expect(language.toString()).to.be.a('string');
        });

        it('returns the proper string format', () => {
            const value = 'en-US';
            const language = new LanguageProperty(value);

            expect(language.toString()).to.equal(`LANGUAGE:${value}`);
        });

        it('does not accept parameters', () => {
            const parameters = {};
            const value = 'ja-JP';
            const language = new LanguageProperty(value, parameters);
            const actual = language.toString();
            const expected = `LANGUAGE:${value}`;

            expect(actual).to.equal(expected);
        });
    });

    describe('#valueOf()', () => {
        it('is a method', () => {
            expect(LanguageProperty.prototype.valueOf).to.be.a('function');
        });

        it('returns a string', () => {
            const language = new LanguageProperty('it-IT');

            expect(language.valueOf()).to.be.a('string');
        });

        it('returns the same value passed to it', () => {
            const value = 'de-DE';
            const language = new LanguageProperty(value);

            expect(language.valueOf()).to.equal(value);
        });
    });

    describe('.from()', () => {
        it('is a static method', () => {
            expect(LanguageProperty.from).to.be.a('function');
        });

        it('returns an instance of `LanguageProperty`', () => {
            const language = LanguageProperty.from('en-US');

            expect(language instanceof LanguageProperty).to.equal(true);
        });

        it('returns an instance if provided one as an argument', () => {
            const language = new LanguageProperty('ja-JP');

            expect(LanguageProperty.from(language)).to.equal(language);
        });

        it('creates an instance from a string value argument', () => {
            const language = LanguageProperty.from('it-IT');

            expect(language instanceof LanguageProperty).to.equal(true);
        });

        it('creates an instance from an array argument', () => {
            const value = 'de-DE';
            const config: LanguageRestConfig = [value];
            const language = LanguageProperty.from(config);

            expect(language instanceof LanguageProperty).to.equal(true);
        });
    });
});
