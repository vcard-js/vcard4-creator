import LangProperty, { type LangRestConfig } from '../../src/properties/LangProperty.js';
import { expect } from 'chai';
import { describe, it } from 'vitest';

describe('LangProperty', () => {
    it('is a class', () => {
        expect(LangProperty).to.be.a('class');
    });

    describe('#toString()', () => {
        it('is a method', () => {
            expect(LangProperty.prototype.toString).to.be.a('function');
        });

        it('returns a string', () => {
            const lang = new LangProperty('en');

            expect(lang.toString()).to.be.a('string');
        });

        it('returns the proper string format', () => {
            const value = 'en';
            const lang = new LangProperty(value);

            expect(lang.toString()).to.equal(`LANG:${value}`);
        });

        it('correctly returns parameters', () => {
            const parameters = { pref: 1, type: 'work' } as const;
            const value = 'en';
            const lang = new LangProperty(value, parameters);
            const actual = lang.toString();
            const expected = 'LANG;PREF=1;TYPE=work:en';

            expect(actual).to.equal(expected);
        });

        it('correctly groups the property', () => {
            const parameters = undefined;
            const value = 'it';
            const options = { group: 1 };
            const lang = new LangProperty(value, parameters, options);

            expect(lang.toString()).to.equal(`1.LANG:${value}`);
        });

        it('accepts a "language-tag" value parameter', () => {
            const parameters = { value: 'language-tag' as const };
            const value = 'en';
            const lang = new LangProperty(value, parameters);

            expect(lang.toString()).to.equal(`LANG;VALUE=language-tag:${value}`);
        });
    });

    describe('#valueOf()', () => {
        it('is a method', () => {
            expect(LangProperty.prototype.valueOf).to.be.a('function');
        });

        it('returns a string', () => {
            const lang = new LangProperty('en');

            expect(lang.valueOf()).to.be.a('string');
        });

        it('returns the same value passed to it', () => {
            const value = 'en';
            const lang = new LangProperty(value);

            expect(lang.valueOf()).to.equal(value);
        });
    });

    describe('.from()', () => {
        it('is a static method', () => {
            expect(LangProperty.from).to.be.a('function');
        });

        it('returns an instance of `LangProperty`', () => {
            const lang = LangProperty.from('en');

            expect(lang instanceof LangProperty).to.equal(true);
        });

        it('returns an instance if provided one as an argument', () => {
            const lang = new LangProperty('en');

            expect(LangProperty.from(lang)).to.equal(lang);
        });

        it('creates an instance from a string value argument', () => {
            const lang = LangProperty.from('en');

            expect(lang instanceof LangProperty).to.equal(true);
        });

        it('creates an instance from an array argument', () => {
            const value = 'en';
            const config: LangRestConfig = [value, { type: 'home' }];
            const lang = LangProperty.from(config);

            expect(lang instanceof LangProperty).to.equal(true);
        });
    });
});
