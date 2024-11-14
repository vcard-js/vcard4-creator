import ExpertiseProperty, { ExpertiseRestConfig } from '../../src/properties/ExpertiseProperty.js';
import { expect } from 'chai';
import { describe, it } from 'vitest';

describe('ExpertiseProperty', () => {
    it('is a class', () => {
        expect(ExpertiseProperty).to.be.a('class');
    });

    describe('#toString()', () => {
        it('is a method', () => {
            expect(ExpertiseProperty.prototype.toString).to.be.a('function');
        });

        it('returns a string', () => {
            const expertise = new ExpertiseProperty('chemistry');

            expect(expertise.toString()).to.be.a('string');
        });

        it('returns the proper string format', () => {
            const value = 'chemistry';
            const expertise = new ExpertiseProperty(value);

            expect(expertise.toString()).to.equal(`EXPERTISE:${value}`);
        });

        it('correctly returns parameters', () => {
            const parameters = { level: 'expert' as const };
            const value = 'chemistry';
            const expertise = new ExpertiseProperty(value, parameters);
            const actual = expertise.toString();
            const expected = `EXPERTISE;LEVEL=expert:${value}`;

            expect(actual).to.equal(expected);
        });

        it('correctly groups the property', () => {
            const parameters = { level: 'expert' as const };
            const value = 'chemistry';
            const options = { group: 'office' };
            const expertise = new ExpertiseProperty(value, parameters, options);

            expect(expertise.toString()).to.equal(`OFFICE.EXPERTISE;LEVEL=expert:${value}`);
        });
    });

    describe('#valueOf()', () => {
        it('is a method', () => {
            expect(ExpertiseProperty.prototype.valueOf).to.be.a('function');
        });

        it('returns a string', () => {
            const expertise = new ExpertiseProperty('chinese literature');

            expect(expertise.valueOf()).to.be.a('string');
        });

        it('returns the same value passed to it', () => {
            const value = 'chinese literature';
            const expertise = new ExpertiseProperty(value);

            expect(expertise.valueOf()).to.equal(value);
        });
    });

    describe('.from()', () => {
        it('is a static method', () => {
            expect(ExpertiseProperty.from).to.be.a('function');
        });

        it('returns an instance of `ExpertiseProperty`', () => {
            const expertise = ExpertiseProperty.from('chinese literature');

            expect(expertise instanceof ExpertiseProperty).to.equal(true);
        });

        it('returns an instance if provided one as an argument', () => {
            const expertise = new ExpertiseProperty('chinese literature');

            expect(ExpertiseProperty.from(expertise)).to.equal(expertise);
        });

        it('creates an instance from a string value argument', () => {
            const expertise = ExpertiseProperty.from('chinese literature');

            expect(expertise instanceof ExpertiseProperty).to.equal(true);
        });

        it('creates an instance from an array argument', () => {
            const value = 'chinese literature';
            const config: ExpertiseRestConfig = [value, { index: 1, level: 'expert' }];
            const expertise = ExpertiseProperty.from(config);

            expect(expertise instanceof ExpertiseProperty).to.equal(true);
        });
    });
});
