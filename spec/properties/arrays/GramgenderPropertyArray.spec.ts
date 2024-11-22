import GramgenderPropertyArray from '../../../src/properties/arrays/GramgenderPropertyArray.js';
import GramgenderProperty from '../../../src/properties/GramgenderProperty.js';
import { expect } from 'chai';
import { describe, it } from 'vitest';

describe('GramgenderPropertyArray', () => {
    it('is a class', () => {
        expect(GramgenderPropertyArray).to.be.a('class');
    });

    describe('#push()', () => {
        it('is a method', () => {
            expect(GramgenderPropertyArray.prototype.push).to.be.a('function');
        });

        it('returns a number', () => {
            const value = '...';
            const gramgenderProperties = new GramgenderPropertyArray();

            expect(gramgenderProperties.push(value)).to.be.a('number');
        });

        it('returns the length of the array', () => {
            const value = '...';
            const gramgenderProperties = new GramgenderPropertyArray();

            expect(gramgenderProperties.push(value)).to.equal(1);
        });

        it('creates an `GramgenderProperty` object in the array', () => {
            const value = '...';
            const gramgenderProperties = new GramgenderPropertyArray();

            gramgenderProperties.push(value);

            expect(gramgenderProperties.at(0) instanceof GramgenderProperty).to.equal(true);
        });

        it('creates an `GramgenderProperty` object in the array with the proper value', () => {
            const value = '...';
            const gramgenderProperties = new GramgenderPropertyArray();

            gramgenderProperties.push(value);

            expect(gramgenderProperties.at(0).valueOf()).to.equal(value);
        });
    });
});
