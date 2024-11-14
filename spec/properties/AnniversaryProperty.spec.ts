import AnniversaryProperty, { type AnniversaryRestConfig } from '../../src/properties/AnniversaryProperty.js';
import { expect } from 'chai';
import { describe, it } from 'vitest';

describe('AnniversaryProperty', () => {
    it('is a class', () => {
        expect(AnniversaryProperty).to.be.a('class');
    });

    describe('#toString()', () => {
        it('is a method', () => {
            expect(AnniversaryProperty.prototype.toString).to.be.a('function');
        });

        it('returns a string', () => {
            const anniversary = new AnniversaryProperty('19960415');

            expect(anniversary.toString()).to.be.a('string');
        });

        it('returns the proper string format', () => {
            const value = '19960415';
            const anniversary = new AnniversaryProperty(value);

            expect(anniversary.toString()).to.equal(`ANNIVERSARY:${value}`);
        });

        it('correctly returns parameters', () => {
            const parameters = { calscale: 'gregorian' as const };
            const value = '19960415';
            const anniversary = new AnniversaryProperty(value, parameters);
            const actual = anniversary.toString();
            const expected = 'ANNIVERSARY;CALSCALE=gregorian:19960415';

            expect(actual).to.equal(expected);
        });

        it('correctly groups the property', () => {
            const parameters = undefined;
            const value = '19960415';
            const options = { group: 1 };
            const anniversary = new AnniversaryProperty(value, parameters, options);

            expect(anniversary.toString()).to.equal(`1.ANNIVERSARY:${value}`);
        });

        it('accepts a "date-and-or-time" value parameter', () => {
            const parameters = { value: 'date-and-or-time' as const };
            const value = '19960415';
            const anniversary = new AnniversaryProperty(value, parameters);

            expect(anniversary.toString()).to.equal(`ANNIVERSARY;VALUE=date-and-or-time:${value}`);
        });

        it('accepts a "text" value parameter', () => {
            const parameters = { value: 'text' as const };
            const value = 'circa 2000';
            const anniversary = new AnniversaryProperty(value, parameters);

            expect(anniversary.toString()).to.equal(`ANNIVERSARY;VALUE=text:${value}`);
        });
    });

    describe('#valueOf()', () => {
        it('is a method', () => {
            expect(AnniversaryProperty.prototype.valueOf).to.be.a('function');
        });

        it('returns a string', () => {
            const anniversary = new AnniversaryProperty('19960415');

            expect(anniversary.valueOf()).to.be.a('string');
        });

        it('returns the same value passed to it', () => {
            const value = '19960415';
            const anniversary = new AnniversaryProperty(value);

            expect(anniversary.valueOf()).to.equal(value);
        });
    });

    describe('.from()', () => {
        it('is a static method', () => {
            expect(AnniversaryProperty.from).to.be.a('function');
        });

        it('returns an instance of `AnniversaryProperty`', () => {
            const anniversary = AnniversaryProperty.from('19960415');

            expect(anniversary instanceof AnniversaryProperty).to.equal(true);
        });

        it('returns an instance if provided one as an argument', () => {
            const anniversary = new AnniversaryProperty('19960415');

            expect(AnniversaryProperty.from(anniversary)).to.equal(anniversary);
        });

        it('creates an instance from a string value argument', () => {
            const anniversary = AnniversaryProperty.from('19960415');

            expect(anniversary instanceof AnniversaryProperty).to.equal(true);
        });

        it('creates an instance from an array argument', () => {
            const config: AnniversaryRestConfig = ['19960415', { calscale: 'gregorian' }];
            const anniversary = AnniversaryProperty.from(config);

            expect(anniversary instanceof AnniversaryProperty).to.equal(true);
        });
    });
});
