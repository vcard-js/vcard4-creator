import ProdidProperty, { type ProdidRestConfig } from '../../src/properties/ProdidProperty.js';
import { expect } from 'chai';
import { describe, it } from 'vitest';

describe('ProdidProperty', () => {
    it('is a class', () => {
        expect(ProdidProperty).to.be.a('class');
    });

    describe('#toString()', () => {
        it('is a method', () => {
            expect(ProdidProperty.prototype.toString).to.be.a('function');
        });

        it('returns a string', () => {
            const prodid = new ProdidProperty('-//ONLINE DIRECTORY//NONSGML Version 1//EN');

            expect(prodid.toString()).to.be.a('string');
        });

        it('returns the proper string format', () => {
            const value = '-//ONLINE DIRECTORY//NONSGML Version 1//EN';
            const prodid = new ProdidProperty(value);

            expect(prodid.toString()).to.equal(`PRODID:${value}`);
        });

        it('correctly groups the property', () => {
            const parameters = undefined;
            const value = '-//ONLINE DIRECTORY//NONSGML Version 1//EN';
            const options = { group: 1 };
            const prodid = new ProdidProperty(value, parameters, options);

            expect(prodid.toString()).to.equal(`1.PRODID:${value}`);
        });

        it('accepts a "text" value parameter', () => {
            const parameters = { value: 'text' as const };
            const value = '-//ONLINE DIRECTORY//NONSGML Version 1//EN';
            const prodid = new ProdidProperty(value, parameters);

            expect(prodid.toString()).to.equal(`PRODID;VALUE=text:${value}`);
        });
    });

    describe('#valueOf()', () => {
        it('is a method', () => {
            expect(ProdidProperty.prototype.valueOf).to.be.a('function');
        });

        it('returns a string', () => {
            const prodid = new ProdidProperty('-//ONLINE DIRECTORY//NONSGML Version 1//EN');

            expect(prodid.valueOf()).to.be.a('string');
        });

        it('returns the same value passed to it', () => {
            const value = '-//ONLINE DIRECTORY//NONSGML Version 1//EN';
            const prodid = new ProdidProperty(value);

            expect(prodid.valueOf()).to.equal(value);
        });
    });

    describe('.from()', () => {
        it('is a static method', () => {
            expect(ProdidProperty.from).to.be.a('function');
        });

        it('returns an instance of `ProdidProperty`', () => {
            const prodid = ProdidProperty.from('-//ONLINE DIRECTORY//NONSGML Version 1//EN');

            expect(prodid instanceof ProdidProperty).to.equal(true);
        });

        it('returns an instance if provided one as an argument', () => {
            const prodid = new ProdidProperty('-//ONLINE DIRECTORY//NONSGML Version 1//EN');

            expect(ProdidProperty.from(prodid)).to.equal(prodid);
        });

        it('creates an instance from a string value argument', () => {
            const prodid = ProdidProperty.from('-//ONLINE DIRECTORY//NONSGML Version 1//EN');

            expect(prodid instanceof ProdidProperty).to.equal(true);
        });

        it('creates an instance from an array argument', () => {
            const value = '-//ONLINE DIRECTORY//NONSGML Version 1//EN';
            const config: ProdidRestConfig = [value, { value: 'text' }];
            const prodid = ProdidProperty.from(config);

            expect(prodid instanceof ProdidProperty).to.equal(true);
        });
    });
});
