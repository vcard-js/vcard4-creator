import HobbyPropertyArray from '../../../src/properties/arrays/HobbyPropertyArray.js';
import HobbyProperty from '../../../src/properties/HobbyProperty.js';
import { expect } from 'chai';
import { describe, it } from 'vitest';

describe('HobbyPropertyArray', () => {
    it('is a class', () => {
        expect(HobbyPropertyArray).to.be.a('class');
    });

    describe('#push()', () => {
        it('is a method', () => {
            expect(HobbyPropertyArray.prototype.push).to.be.a('function');
        });

        it('returns a number', () => {
            const value = 'reading';
            const hobbyProperties = new HobbyPropertyArray();

            expect(hobbyProperties.push(value)).to.be.a('number');
        });

        it('returns the length of the array', () => {
            const value = 'reading';
            const hobbyProperties = new HobbyPropertyArray();

            expect(hobbyProperties.push(value)).to.equal(1);
        });

        it('creates an `HobbyProperty` object in the array', () => {
            const value = 'reading';
            const hobbyProperties = new HobbyPropertyArray();

            hobbyProperties.push(value);

            expect(hobbyProperties.at(0) instanceof HobbyProperty).to.equal(true);
        });

        it('creates an `HobbyProperty` object in the array with the proper value', () => {
            const value = 'reading';
            const hobbyProperties = new HobbyPropertyArray();

            hobbyProperties.push(value);

            expect(hobbyProperties.at(0).valueOf()).to.equal(value);
        });
    });
});
