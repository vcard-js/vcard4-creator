import FburlProperty, { FburlRestConfig } from '../../src/properties/FburlProperty.js';
import { expect } from 'chai';
import { describe, it } from 'vitest';

describe('FburlProperty', () => {
    it('is a class', () => {
        expect(FburlProperty).to.be.a('class');
    });

    describe('#toString()', () => {
        it('is a method', () => {
            expect(FburlProperty.prototype.toString).to.be.a('function');
        });

        it('returns a string', () => {
            const fburl = new FburlProperty('http://www.example.com/busy/janedoe');

            expect(fburl.toString()).to.be.a('string');
        });

        it('returns the proper string format', () => {
            const value = 'http://www.example.com/busy/janedoe';
            const fburl = new FburlProperty(value);

            expect(fburl.toString()).to.equal(`FBURL:${value}`);
        });

        it('correctly returns parameters', () => {
            const parameters = { type: 'work' as const };
            const value = 'http://www.example.com/busy/janedoe';
            const fburl = new FburlProperty(value, parameters);
            const actual = fburl.toString();
            const expected = `FBURL;TYPE=work:${value}`;

            expect(actual).to.equal(expected);
        });

        it('correctly groups the property', () => {
            const parameters = undefined;
            const value = 'http://www.example.com/busy/janedoe';
            const options = { group: 1 };
            const fburl = new FburlProperty(value, parameters, options);

            expect(fburl.toString()).to.equal(`1.FBURL:${value}`);
        });

        it('accepts a "uri" value parameter', () => {
            const parameters = { value: 'uri' as const };
            const value = 'http://www.example.com/busy/janedoe';
            const fburl = new FburlProperty(value, parameters);

            expect(fburl.toString()).to.equal(`FBURL;VALUE=uri:${value}`);
        });
    });

    describe('#valueOf()', () => {
        it('is a method', () => {
            expect(FburlProperty.prototype.valueOf).to.be.a('function');
        });

        it('returns a string', () => {
            const fburl = new FburlProperty('http://www.example.com/busy/janedoe');

            expect(fburl.valueOf()).to.be.a('string');
        });

        it('returns the same value passed to it', () => {
            const value = 'http://www.example.com/busy/janedoe';
            const fburl = new FburlProperty(value);

            expect(fburl.valueOf()).to.equal(value);
        });
    });

    describe('.from()', () => {
        it('is a static method', () => {
            expect(FburlProperty.from).to.be.a('function');
        });

        it('returns an instance of `FburlProperty`', () => {
            const fburl = FburlProperty.from('http://www.example.com/busy/janedoe');

            expect(fburl instanceof FburlProperty).to.equal(true);
        });

        it('returns an instance if provided one as an argument', () => {
            const fburl = new FburlProperty('http://www.example.com/busy/janedoe');

            expect(FburlProperty.from(fburl) instanceof FburlProperty).to.equal(true);
        });

        it('creates an instance from a string value argument', () => {
            const fburl = FburlProperty.from('http://www.example.com/busy/janedoe');

            expect(fburl instanceof FburlProperty).to.equal(true);
        });

        it('creates an instance from an array argument', () => {
            const value = 'http://www.example.com/busy/janedoe';
            const config: FburlRestConfig = [value, { type: 'work' }];
            const fburl = FburlProperty.from(config);

            expect(fburl instanceof FburlProperty).to.equal(true);
        });
    });
});
