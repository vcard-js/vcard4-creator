import TitleProperty, { type TitleRestConfig } from '../../src/properties/TitleProperty.js';
import { expect } from 'chai';
import { describe, it } from 'vitest';

describe('TitleProperty', () => {
    it('is a class', () => {
        expect(TitleProperty).to.be.a('class');
    });

    describe('#toString()', () => {
        it('is a method', () => {
            expect(TitleProperty.prototype.toString).to.be.a('function');
        });

        it('returns a string', () => {
            const title = new TitleProperty('Research Scientist');

            expect(title.toString()).to.be.a('string');
        });

        it('returns the proper string format', () => {
            const value = 'Research Scientist';
            const title = new TitleProperty(value);

            expect(title.toString()).to.equal(`TITLE:${value}`);
        });

        it('correctly returns parameters', () => {
            const parameters = { pref: 1 } as const;
            const value = 'Research Scientist';
            const title = new TitleProperty(value, parameters);

            expect(title.toString()).to.equal(`TITLE;PREF=1:${value}`);
        });

        it('correctly groups the property', () => {
            const parameters = undefined;
            const value = 'Research Scientist';
            const options = { group: 3 };
            const title = new TitleProperty(value, parameters, options);

            expect(title.toString()).to.equal(`3.TITLE:${value}`);
        });

        it('accepts a "text" value parameter', () => {
            const parameters = { value: 'text' as const };
            const value = 'Research Scientist';
            const title = new TitleProperty(value, parameters);

            expect(title.toString()).to.equal(`TITLE;VALUE=text:${value}`);
        });
    });

    describe('#valueOf()', () => {
        it('is a method', () => {
            expect(TitleProperty.prototype.valueOf).to.be.a('function');
        });

        it('returns a string', () => {
            const title = new TitleProperty('Champion');

            expect(title.valueOf()).to.be.a('string');
        });

        it('returns the same value passed to it', () => {
            const value = 'Champion';
            const title = new TitleProperty(value);

            expect(title.valueOf()).to.equal(value);
        });
    });

    describe('.from()', () => {
        it('is a static method', () => {
            expect(TitleProperty.from).to.be.a('function');
        });

        it('returns an instance of `TitleProperty`', () => {
            const title = TitleProperty.from('Research Scientist');

            expect(title instanceof TitleProperty).to.equal(true);
        });

        it('returns an instance if provided one as an argument', () => {
            const title = new TitleProperty('Research Scientist');

            expect(TitleProperty.from(title)).to.equal(title);
        });

        it('creates an instance from a string value argument', () => {
            const title = TitleProperty.from('Research Scientist');

            expect(title instanceof TitleProperty).to.equal(true);
        });

        it('creates an instance from an array argument', () => {
            const value = 'Research Scientist';
            const config: TitleRestConfig = [value, { value: 'text' }];
            const title = TitleProperty.from(config);

            expect(title instanceof TitleProperty).to.equal(true);
        });
    });
});
