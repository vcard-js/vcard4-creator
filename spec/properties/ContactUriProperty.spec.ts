import ContactUriProperty, { type ContactUriRestConfig } from '../../src/properties/ContactUriProperty.js';
import { expect } from 'chai';
import { describe, it } from 'vitest';

describe('ContactUriProperty', () => {
    it('is a class', () => {
        expect(ContactUriProperty).to.be.a('class');
    });

    describe('#toString()', () => {
        it('is a method', () => {
            expect(ContactUriProperty.prototype.toString).to.be.a('function');
        });

        it('returns a string', () => {
            const contactUri = new ContactUriProperty('https://contact.example.com');

            expect(contactUri.toString()).to.be.a('string');
        });

        it('returns the proper string format', () => {
            const value = 'https://contact.example.com';
            const contactUri = new ContactUriProperty(value);

            expect(contactUri.toString()).to.equal(`CONTACT-URI:${value}`);
        });

        it('correctly returns parameters', () => {
            const parameters = { pref: 1 } as const;
            const value = 'mailto:contact@example.com';
            const contactUri = new ContactUriProperty(value, parameters);
            const actual = contactUri.toString();
            const expected = `CONTACT-URI;PREF=1:${value}`;

            expect(actual).to.equal(expected);
        });

        it('correctly groups the property', () => {
            const parameters = undefined;
            const value = 'mailto:contact@example.com';
            const options = { group: 'office' };
            const contactUri = new ContactUriProperty(value, parameters, options);

            expect(contactUri.toString()).to.equal(`OFFICE.CONTACT-URI:${value}`);
        });
    });

    describe('#valueOf()', () => {
        it('is a method', () => {
            expect(ContactUriProperty.prototype.valueOf).to.be.a('function');
        });

        it('returns a string', () => {
            const contactUri = new ContactUriProperty('https://contact.example.com');

            expect(contactUri.valueOf()).to.be.a('string');
        });

        it('returns the same value passed to it', () => {
            const value = 'https://contact.example.com';
            const contactUri = new ContactUriProperty(value);

            expect(contactUri.valueOf()).to.equal(value);
        });
    });

    describe('.from()', () => {
        it('is a static method', () => {
            expect(ContactUriProperty.from).to.be.a('function');
        });

        it('returns an instance of `ContactUriProperty`', () => {
            const contactUri = ContactUriProperty.from('https://contact.example.com');

            expect(contactUri instanceof ContactUriProperty).to.equal(true);
        });

        it('returns an instance if provided one as an argument', () => {
            const contactUri = new ContactUriProperty('https://contact.example.com');

            expect(ContactUriProperty.from(contactUri)).to.equal(contactUri);
        });

        it('creates an instance from a string value argument', () => {
            const contactUri = ContactUriProperty.from('https://contact.example.com');

            expect(contactUri instanceof ContactUriProperty).to.equal(true);
        });

        it('creates an instance from an array argument', () => {
            const value = 'mailto:contact@example.com';
            const config: ContactUriRestConfig = [value, { pref: 1 }];
            const contactUri = ContactUriProperty.from(config);

            expect(contactUri instanceof ContactUriProperty).to.equal(true);
        });
    });
});
