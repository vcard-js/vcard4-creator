import GramgenderProperty, { type GramgenderRestConfig } from '../../src/properties/GramgenderProperty.js';
import { expect } from 'chai';
import { describe, it } from 'vitest';

describe('GramgenderProperty', () => {
    it('is a class', () => {
        expect(GramgenderProperty).to.be.a('class');
    });

    describe('#toString()', () => {
        it('is a method', () => {
            expect(GramgenderProperty.prototype.toString).to.be.a('function');
        });

        it('returns a string', () => {
            const gramgender = new GramgenderProperty('animate');

            expect(gramgender.toString()).to.be.a('string');
        });

        it('returns the proper string format', () => {
            const value = 'common';
            const gramgender = new GramgenderProperty(value);

            expect(gramgender.toString()).to.equal(`GRAMGENDER:${value}`);
        });

        it('correctly returns parameters', () => {
            const parameters = { language: 'de' };
            const value = 'feminine';
            const gramgender = new GramgenderProperty(value, parameters);
            const actual = gramgender.toString();
            const expected = `GRAMGENDER;LANGUAGE=de:${value}`;

            expect(actual).to.equal(expected);
        });
    });

    describe('#valueOf()', () => {
        it('is a method', () => {
            expect(GramgenderProperty.prototype.valueOf).to.be.a('function');
        });

        it('returns a string', () => {
            const gramgender = new GramgenderProperty('inanimate');

            expect(gramgender.valueOf()).to.be.a('string');
        });

        it('returns the same value passed to it', () => {
            const value = 'masculine';
            const gramgender = new GramgenderProperty(value);

            expect(gramgender.valueOf()).to.equal(value);
        });
    });

    describe('.from()', () => {
        it('is a static method', () => {
            expect(GramgenderProperty.from).to.be.a('function');
        });

        it('returns an instance of `GramgenderProperty`', () => {
            const gramgender = GramgenderProperty.from('neuter');

            expect(gramgender instanceof GramgenderProperty).to.equal(true);
        });

        it('returns an instance if provided one as an argument', () => {
            const gramgender = new GramgenderProperty('animate');

            expect(GramgenderProperty.from(gramgender)).to.equal(gramgender);
        });

        it('creates an instance from a string value argument', () => {
            const gramgender = GramgenderProperty.from('common');

            expect(gramgender instanceof GramgenderProperty).to.equal(true);
        });

        it('creates an instance from an array argument', () => {
            const value = 'feminine';
            const config: GramgenderRestConfig = [value, { language: 'de' }];
            const gramgender = GramgenderProperty.from(config);

            expect(gramgender instanceof GramgenderProperty).to.equal(true);
        });
    });
});
