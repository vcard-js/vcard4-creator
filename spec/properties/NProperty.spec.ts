import NProperty, { type NRestConfig } from '../../src/properties/NProperty.js';
import { expect } from 'chai';
import { describe, it } from 'vitest';

describe('NProperty', () => {
    it('is a class', () => {
        expect(NProperty).to.be.a('class');
    });

    describe('#familyName', () => {
        const value = 'Benner;Bella;;;';

        it('is a string property', () => {
            const n = new NProperty(value);

            expect(n.familyName).to.be.a('string');
        });

        it('returns the family name component', () => {
            const n = new NProperty(value);

            expect(n.familyName).to.equal('Benner');
        });
    });

    describe('#givenName', () => {
        const value = 'Benner;Daisy;;;';

        it('is a string property', () => {
            const n = new NProperty(value);

            expect(n.givenName).to.be.a('string');
        });

        it('returns the given name component', () => {
            const n = new NProperty(value);

            expect(n.givenName).to.equal('Daisy');
        });
    });

    describe('#additionalName', () => {
        const value = 'Public;John;Quinlan;Mr.;Esq.';

        it('is a string property', () => {
            const n = new NProperty(value);

            expect(n.additionalName).to.be.a('string');
        });

        it('returns the additional name component', () => {
            const n = new NProperty(value);

            expect(n.additionalName).to.equal('Quinlan');
        });
    });

    describe('#honorificPrefix', () => {
        const value = 'Public;John;Quinlan;Mr.;Esq.';

        it('is a string property', () => {
            const n = new NProperty(value);

            expect(n.honorificPrefix).to.be.a('string');
        });

        it('returns the honorific prefix component', () => {
            const n = new NProperty(value);

            expect(n.honorificPrefix).to.equal('Mr.');
        });
    });

    describe('#honorificSuffix', () => {
        const value = 'Public;John;Quinlan;Mr.;Esq.';

        it('is a string property', () => {
            const n = new NProperty(value);

            expect(n.honorificSuffix).to.be.a('string');
        });

        it('returns the honorific suffix component', () => {
            const n = new NProperty(value);

            expect(n.honorificSuffix).to.equal('Esq.');
        });
    });

    describe('#secondarySurname', () => {
        const value = 'Public;John;Quinlan;Mr.;Esq.;Pishner;';

        it('is a string property', () => {
            const n = new NProperty(value);

            expect(n.secondarySurname).to.be.a('string');
        });

        it('returns the secondary surname component', () => {
            const n = new NProperty(value);

            expect(n.secondarySurname).to.equal('Pishner');
        });
    });

    describe('#generation', () => {
        const value = 'Stevenson;John;Philip,Paul;Dr.;Jr.,M.D.,A.C.P.;;Jr.';

        it('is a string property', () => {
            const n = new NProperty(value);

            expect(n.generation).to.be.a('string');
        });

        it('returns the generation component', () => {
            const n = new NProperty(value);

            expect(n.generation).to.equal('Jr.');
        });
    });

    describe('#toString()', () => {
        it('is a method', () => {
            expect(NProperty.prototype.toString).to.be.a('function');
        });

        it('returns a string', () => {
            const n = new NProperty('Doe;Jane;;;');

            expect(n.toString()).to.be.a('string');
        });

        it('returns the proper string format', () => {
            const value = 'Public;John;Quinlan;Mr.;Esq.';
            const n = new NProperty(value);

            expect(n.toString()).to.equal(`N:${value}`);
        });

        it('correctly returns parameters', () => {
            const parameters = { sortAs: 'John' };
            const value = 'Public;John;Quinlan;Mr.;Esq.';
            const n = new NProperty(value, parameters);
            const actual = n.toString();
            const expected = 'N;SORT-AS=John:Public;John;Quinlan;Mr.;Esq.';

            expect(actual).to.equal(expected);
        });

        it('correctly groups the property', () => {
            const parameters = undefined;
            const value = 'Public;John;Quinlan;Mr.;Esq.';
            const options = { group: 1 };
            const n = new NProperty(value, parameters, options);

            expect(n.toString()).to.equal(`1.N:${value}`);
        });

        it('accepts a "text" value parameter', () => {
            const parameters = { value: 'text' as const };
            const value = 'Public;John;Quinlan;Mr.;Esq.';
            const n = new NProperty(value, parameters);

            expect(n.toString()).to.equal(`N;VALUE=text:${value}`);
        });
    });

    describe('#valueOf()', () => {
        it('is a method', () => {
            expect(NProperty.prototype.valueOf).to.be.a('function');
        });

        it('returns a string', () => {
            const n = new NProperty('Public;John;Quinlan;Mr.;Esq.');

            expect(n.valueOf()).to.be.a('string');
        });

        it('returns the same value passed to it', () => {
            const value = 'Public;John;Quinlan;Mr.;Esq.';
            const n = new NProperty(value);

            expect(n.valueOf()).to.equal(value);
        });
    });

    describe('.from()', () => {
        it('is a static method', () => {
            expect(NProperty.from).to.be.a('function');
        });

        it('returns an instance of `NProperty`', () => {
            const n = NProperty.from('Public;John;Quinlan;Mr.;Esq.');

            expect(n instanceof NProperty).to.equal(true);
        });

        it('returns an instance if provided one as an argument', () => {
            const n = new NProperty('Public;John;Quinlan;Mr.;Esq.');

            expect(NProperty.from(n)).to.equal(n);
        });

        it('creates an instance from a string value argument', () => {
            const n = NProperty.from('Public;John;Quinlan;Mr.;Esq.');

            expect(n instanceof NProperty).to.equal(true);
        });

        it('creates an instance from an array argument', () => {
            const value = 'Public;John;Quinlan;Mr.;Esq.';
            const config: NRestConfig = [value, { value: 'text' }];
            const n = NProperty.from(config);

            expect(n instanceof NProperty).to.equal(true);
        });
    });
});
