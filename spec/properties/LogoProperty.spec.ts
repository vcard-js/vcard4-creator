import LogoProperty, { type LogoRestConfig } from '../../src/properties/LogoProperty.js';
import { expect } from 'chai';
import { describe, it } from 'vitest';

describe('LogoProperty', () => {
    it('is a class', () => {
        expect(LogoProperty).to.be.a('class');
    });

    describe('#toString()', () => {
        it('is a method', () => {
            expect(LogoProperty.prototype.toString).to.be.a('function');
        });

        it('returns a string', () => {
            const logo = new LogoProperty('http://www.example.com/pub/logos/abccorp.jpg');

            expect(logo.toString()).to.be.a('string');
        });

        it('returns the proper string format', () => {
            const value = 'http://www.example.com/pub/logos/abccorp.jpg';
            const logo = new LogoProperty(value);

            expect(logo.toString()).to.equal(`LOGO:${value}`);
        });

        it('correctly returns parameters', () => {
            const parameters = { pref: 1, type: 'work' } as const;
            const value = 'http://www.example.com/pub/logos/abccorp.jpg';
            const logo = new LogoProperty(value, parameters);
            const actual = logo.toString();
            const expected = `LOGO;PREF=1;TYPE=work:${value}`;

            expect(actual).to.equal(expected);
        });

        it('correctly groups the property', () => {
            const parameters = undefined;
            const value = 'http://www.example.com/pub/logos/abccorp.jpg';
            const options = { group: 1 };
            const logo = new LogoProperty(value, parameters, options);

            expect(logo.toString()).to.equal(`1.LOGO:${value}`);
        });

        it('accepts a "uri" value parameter', () => {
            const parameters = { value: 'uri' as const };
            const value = 'http://www.example.com/pub/logos/abccorp.jpg';
            const logo = new LogoProperty(value, parameters);

            expect(logo.toString()).to.equal(`LOGO;VALUE=uri:${value}`);
        });
    });

    describe('#valueOf()', () => {
        it('is a method', () => {
            expect(LogoProperty.prototype.valueOf).to.be.a('function');
        });

        it('returns a string', () => {
            const logo = new LogoProperty('http://www.example.com/pub/logos/abccorp.jpg');

            expect(logo.valueOf()).to.be.a('string');
        });

        it('returns the same value passed to it', () => {
            const value = 'http://www.example.com/pub/logos/abccorp.jpg';
            const logo = new LogoProperty(value);

            expect(logo.valueOf()).to.equal(value);
        });
    });

    describe('.from()', () => {
        it('is a static method', () => {
            expect(LogoProperty.from).to.be.a('function');
        });

        it('returns an instance of `LogoProperty`', () => {
            const logo = LogoProperty.from('http://www.example.com/pub/logos/abccorp.jpg');

            expect(logo instanceof LogoProperty).to.equal(true);
        });

        it('returns an instance if provided one as an argument', () => {
            const logo = new LogoProperty('http://www.example.com/pub/logos/abccorp.jpg');

            expect(LogoProperty.from(logo)).to.equal(logo);
        });

        it('creates an instance from a string value argument', () => {
            const logo = LogoProperty.from('http://www.example.com/pub/logos/abccorp.jpg');

            expect(logo instanceof LogoProperty).to.equal(true);
        });

        it('creates an instance from an array argument', () => {
            const value = 'http://www.example.com/pub/logos/abccorp.jpg';
            const config: LogoRestConfig = [value, { type: 'work' }];
            const logo = LogoProperty.from(config);

            expect(logo instanceof LogoProperty).to.equal(true);
        });
    });
});
