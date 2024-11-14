import XmlPropertyArray from '../../../src/properties/arrays/XmlPropertyArray.js';
import XmlProperty from '../../../src/properties/XmlProperty.js';
import { expect } from 'chai';
import { describe, it } from 'vitest';

describe('XmlPropertyArray', () => {
    it('is a class', () => {
        expect(XmlPropertyArray).to.be.a('class');
    });

    describe('#push()', () => {
        it('is a method', () => {
            expect(XmlPropertyArray.prototype.push).to.be.a('function');
        });

        it('returns a number', () => {
            const value = [
                '<a xmlns="http://www.w3.org/1999/xhtml"',
                '   href="http://www.example.com">My web page!</a>'
            ].join('\n');
            const xmlProperties = new XmlPropertyArray();

            expect(xmlProperties.push(value)).to.be.a('number');
        });

        it('returns the length of the array', () => {
            const value = [
                '<a xmlns="http://www.w3.org/1999/xhtml"',
                '   href="http://www.example.com">My web page!</a>'
            ].join('\n');
            const xmlProperties = new XmlPropertyArray();

            expect(xmlProperties.push(value)).to.equal(1);
        });

        it('creates an `XmlProperty` object in the array', () => {
            const value = [
                '<a xmlns="http://www.w3.org/1999/xhtml"',
                '   href="http://www.example.com">My web page!</a>'
            ].join('\n');
            const xmlProperties = new XmlPropertyArray();

            xmlProperties.push(value);

            expect(xmlProperties.at(0) instanceof XmlProperty).to.equal(true);
        });

        it('creates an `XmlProperty` object in the array with the proper value', () => {
            const value = [
                '<a xmlns="http://www.w3.org/1999/xhtml"',
                '   href="http://www.example.com">My web page!</a>'
            ].join('\n');
            const xmlProperties = new XmlPropertyArray();

            xmlProperties.push(value);

            expect(xmlProperties.at(0).valueOf()).to.equal(value);
        });
    });
});
