import TzProperty, { type TzRestConfig } from '../../src/properties/TzProperty.js';
import { expect } from 'chai';
import { describe, it } from 'vitest';

describe('TzProperty', () => {
    it('is a class', () => {
        expect(TzProperty).to.be.a('class');
    });

    describe('#toString()', () => {
        it('is a method', () => {
            expect(TzProperty.prototype.toString).to.be.a('function');
        });

        it('returns a string', () => {
            const tz = new TzProperty('Raleigh/North America');

            expect(tz.toString()).to.be.a('string');
        });

        it('returns the proper string format', () => {
            const value = 'Raleigh/North America';
            const tz = new TzProperty(value);

            expect(tz.toString()).to.equal(`TZ:${value}`);
        });

        it('correctly returns parameters', () => {
            const parameters = { pref: 1 } as const;
            const value = 'Raleigh/North America';
            const tz = new TzProperty(value, parameters);
            const actual = tz.toString();
            const expected = 'TZ;PREF=1:Raleigh/North America';

            expect(actual).to.equal(expected);
        });

        it('correctly groups the property', () => {
            const parameters = undefined;
            const value = 'Raleigh/North America';
            const options = { group: 3 };
            const tz = new TzProperty(value, parameters, options);

            expect(tz.toString()).to.equal(`3.TZ:${value}`);
        });

        it('accepts a "text" value parameter', () => {
            const parameters = { value: 'text' as const };
            const value = 'Raleigh/North America';
            const tz = new TzProperty(value, parameters);

            expect(tz.toString()).to.equal(`TZ;VALUE=text:${value}`);
        });

        it('accepts a "uri" value parameter', () => {
            const parameters = { value: 'uri' as const };
            const value = 'http://timezones.example.com/America/New_York'; // TODO: Find formal example to test!
            const tz = new TzProperty(value, parameters);

            expect(tz.toString()).to.equal(`TZ;VALUE=uri:${value}`);
        });

        it('accepts a "utc-offset" value parameter', () => {
            const parameters = { value: 'utc-offset' as const };
            const value = '-0500';
            const tz = new TzProperty(value, parameters);

            expect(tz.toString()).to.equal(`TZ;VALUE=utc-offset:${value}`);
        });
    });

    describe('#valueOf()', () => {
        it('is a method', () => {
            expect(TzProperty.prototype.valueOf).to.be.a('function');
        });

        it('returns a string', () => {
            const tz = new TzProperty('Raleigh/North America');

            expect(tz.valueOf()).to.be.a('string');
        });

        it('returns the same value passed to it', () => {
            const value = 'Raleigh/North America';
            const tz = new TzProperty(value);

            expect(tz.valueOf()).to.equal(value);
        });
    });

    describe('.from()', () => {
        it('is a static method', () => {
            expect(TzProperty.from).to.be.a('function');
        });

        it('returns an instance of `TzProperty`', () => {
            const tz = TzProperty.from('Raleigh/North America');

            expect(tz instanceof TzProperty).to.equal(true);
        });

        it('returns an instance if provided one as an argument', () => {
            const tz = new TzProperty('Raleigh/North America');

            expect(TzProperty.from(tz)).to.equal(tz);
        });

        it('creates an instance from a string value argument', () => {
            const tz = TzProperty.from('Raleigh/North America');

            expect(tz instanceof TzProperty).to.equal(true);
        });

        it('creates an instance from an array argument', () => {
            const value = 'Raleigh/North America';
            const config: TzRestConfig = [value, { type: 'home' }];
            const tz = TzProperty.from(config);

            expect(tz instanceof TzProperty).to.equal(true);
        });
    });
});
