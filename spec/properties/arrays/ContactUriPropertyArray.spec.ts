import ContactUriPropertyArray from '../../../src/properties/arrays/ContactUriPropertyArray.js';
import ContactUriProperty from '../../../src/properties/ContactUriProperty.js';
import { expect } from 'chai';
import { describe, it } from 'vitest';

describe('ContactUriPropertyArray', () => {
    it('is a class', () => {
        expect(ContactUriPropertyArray).to.be.a('class');
    });

    describe('#push()', () => {
        it('is a method', () => {
            expect(ContactUriPropertyArray.prototype.push).to.be.a('function');
        });

        it('returns a number', () => {
            const value = 'https://contact.example.com';
            const contactUriProperties = new ContactUriPropertyArray();

            expect(contactUriProperties.push(value)).to.be.a('number');
        });

        it('returns the length of the array', () => {
            const value = 'https://contact.example.com';
            const contactUriProperties = new ContactUriPropertyArray();

            expect(contactUriProperties.push(value)).to.equal(1);
        });

        it('creates an `ContactUriProperty` object in the array', () => {
            const value = 'https://contact.example.com';
            const contactUriProperties = new ContactUriPropertyArray();

            contactUriProperties.push(value);

            expect(contactUriProperties.at(0) instanceof ContactUriProperty).to.equal(true);
        });

        it('creates an `ContactUriProperty` object in the array with the proper value', () => {
            const value = 'https://contact.example.com';
            const contactUriProperties = new ContactUriPropertyArray();

            contactUriProperties.push(value);

            expect(contactUriProperties.at(0).valueOf()).to.equal(value);
        });
    });
});
