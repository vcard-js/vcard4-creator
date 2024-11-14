import XmlProperty, { type XmlRestConfig } from '../../src/properties/XmlProperty.js';
import { EOL } from '@vcard/vcard4-meta';
import { expect } from 'chai';
import { describe, it } from 'vitest';

describe('XmlProperty', () => {
    it('is a class', () => {
        expect(XmlProperty).to.be.a('class');
    });

    describe('#toString()', () => {
        it('is a method', () => {
            expect(XmlProperty.prototype.toString).to.be.a('function');
        });

        it('returns a string', () => {
            const value = [
                '<a xmlns="http://www.w3.org/1999/xhtml"',
                '   href="http://www.example.com">My web page!</a>'
            ].join('\n');
            const xml = new XmlProperty(value);

            expect(xml.toString()).to.be.a('string');
        });

        it('returns the proper string format', () => {
            const value = [
                '<a xmlns="http://www.w3.org/1999/xhtml"',
                '   href="http://www.example.com">My web page!</a>'
            ].join('\n');
            const xml = new XmlProperty(value);
            const actual = xml.toString();
            const expected = [
                'XML:<a xmlns="http://www.w3.org/1999/xhtml"\\n   href="http://www.example.co',
                ' m">My web page!</a>'
            ].join(EOL);

            expect(actual).to.equal(expected);
        });

        it('correctly returns parameters', () => {
            const parameters = { value: 'text' as const };
            const value = [
                '<a xmlns="http://www.w3.org/1999/xhtml"',
                '   href="http://www.example.com">My web page!</a>'
            ].join('\n');
            const xml = new XmlProperty(value, parameters);
            const actual = xml.toString();
            const expected = [
                'XML;VALUE=text:<a xmlns="http://www.w3.org/1999/xhtml"\\n   href="http://www',
                ' .example.com">My web page!</a>'
            ].join(EOL);

            expect(actual).to.equal(expected);
        });

        it('correctly groups the property', () => {
            const parameters = undefined;
            const value = [
                '<a xmlns="http://www.w3.org/1999/xhtml"',
                '   href="http://www.example.com">My web page!</a>'
            ].join('\n');
            const options = { group: 1 };
            const xml = new XmlProperty(value, parameters, options);
            const actual = xml.toString();
            const expected = [
                '1.XML:<a xmlns="http://www.w3.org/1999/xhtml"\\n   href="http://www.example.',
                ' com">My web page!</a>'
            ].join(EOL);

            expect(actual).to.equal(expected);
        });
    });

    describe('#valueOf()', () => {
        it('is a method', () => {
            expect(XmlProperty.prototype.valueOf).to.be.a('function');
        });

        it('returns a string', () => {
            const value = [
                '<a xmlns="http://www.w3.org/1999/xhtml"',
                '   href="http://www.example.com">My web page!</a>'
            ].join('\n');
            const xml = new XmlProperty(value);

            expect(xml.valueOf()).to.be.a('string');
        });

        it('returns the same value passed to it', () => {
            const value = [
                '<a xmlns="http://www.w3.org/1999/xhtml"',
                '   href="http://www.example.com">My web page!</a>'
            ].join('\n');
            const xml = new XmlProperty(value);

            expect(xml.valueOf()).to.equal(value);
        });
    });

    describe('.from()', () => {
        it('is a static method', () => {
            expect(XmlProperty.from).to.be.a('function');
        });

        it('returns an instance of `XmlProperty`', () => {
            const value = [
                '<a xmlns="http://www.w3.org/1999/xhtml"',
                '   href="http://www.example.com">My web page!</a>'
            ].join('\n');
            const xml = XmlProperty.from(value);

            expect(xml instanceof XmlProperty).to.equal(true);
        });

        it('returns an instance if provided one as an argument', () => {
            const value = [
                '<a xmlns="http://www.w3.org/1999/xhtml"',
                '   href="http://www.example.com">My web page!</a>'
            ].join('\n');
            const xml = new XmlProperty(value);

            expect(XmlProperty.from(xml)).to.equal(xml);
        });

        it('creates an instance from a string value argument', () => {
            const value = [
                '<a xmlns="http://www.w3.org/1999/xhtml"',
                '   href="http://www.example.com">My web page!</a>'
            ].join('\n');
            const xml = XmlProperty.from(value);

            expect(xml instanceof XmlProperty).to.equal(true);
        });

        it('creates an instance from an array argument', () => {
            const value = [
                '<a xmlns="http://www.w3.org/1999/xhtml"',
                '   href="http://www.example.com">My web page!</a>'
            ].join('\n');
            const config: XmlRestConfig = [value, { value: 'text' }];
            const xml = XmlProperty.from(config);

            expect(xml instanceof XmlProperty).to.equal(true);
        });
    });
});
