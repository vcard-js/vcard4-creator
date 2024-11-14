import FnProperty, { FnRestConfig } from '../../src/properties/FnProperty.js';
import { expect } from 'chai';
import { describe, it } from 'vitest';

describe('FnProperty', () => {
    it('is a class', () => {
        expect(FnProperty).to.be.a('class');
    });

    describe('#toString()', () => {
        it('is a method', () => {
            expect(FnProperty.prototype.toString).to.be.a('function');
        });

        it('returns a string', () => {
            const fn = new FnProperty('Zaxxon');

            expect(fn.toString()).to.be.a('string');
        });

        it('returns the proper string format', () => {
            const escapedValue = 'Mr. John Q. Public\\, Esq.';
            const unescapedValue = 'Mr. John Q. Public, Esq.';
            const fn = new FnProperty(unescapedValue);

            expect(fn.toString()).to.equal(`FN:${escapedValue}`);
        });

        it('correctly returns parameters', () => {
            const parameters = { language: 'en', type: 'home' as const };
            const value = 'Mr. John Q. Public, Esq.';
            const fn = new FnProperty(value, parameters);
            const actual = fn.toString();
            const expected = 'FN;LANGUAGE=en;TYPE=home:Mr. John Q. Public\\, Esq.';

            expect(actual).to.equal(expected);
        });

        it('correctly groups the property', () => {
            const parameters = undefined;
            const value = 'Mr. John Q. Public, Esq.';
            const options = { group: 1 };
            const fn = new FnProperty(value, parameters, options);

            expect(fn.toString()).to.equal('1.FN:Mr. John Q. Public\\, Esq.');
        });

        it('accepts a "text" value parameter', () => {
            const parameters = { value: 'text' as const };
            const value = 'Mr. John Q. Public, Esq.';
            const fn = new FnProperty(value, parameters);

            expect(fn.toString()).to.equal('FN;VALUE=text:Mr. John Q. Public\\, Esq.');
        });
    });

    describe('#valueOf()', () => {
        it('is a method', () => {
            expect(FnProperty.prototype.valueOf).to.be.a('function');
        });

        it('returns a string', () => {
            const fn = new FnProperty('Mr. John Q. Public, Esq.');

            expect(fn.valueOf()).to.be.a('string');
        });

        it('returns the same value passed to it', () => {
            const value = 'Mr. John Q. Public, Esq.';
            const fn = new FnProperty(value);

            expect(fn.valueOf()).to.equal(value);
        });
    });

    describe('.from()', () => {
        it('is a static method', () => {
            expect(FnProperty.from).to.be.a('function');
        });

        it('returns an instance of `FnProperty`', () => {
            const fn = FnProperty.from('Mr. John Q. Public, Esq.');

            expect(fn instanceof FnProperty).to.equal(true);
        });

        it('returns an instance if provided one as an argument', () => {
            const fn = new FnProperty('Mr. John Q. Public, Esq.');

            expect(FnProperty.from(fn) instanceof FnProperty).to.equal(true);
        });

        it('creates an instance from a string value argument', () => {
            const fn = FnProperty.from('Mr. John Q. Public, Esq.');

            expect(fn instanceof FnProperty).to.equal(true);
        });

        it('creates an instance from an array argument', () => {
            const value = 'Mr. John Q. Public, Esq.';
            const config: FnRestConfig = [value, { type: 'work' }];
            const fn = FnProperty.from(config);

            expect(fn instanceof FnProperty).to.equal(true);
        });
    });
});
