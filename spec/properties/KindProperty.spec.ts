import KindProperty, { type KindRestConfig } from '../../src/properties/KindProperty.js';
import { expect } from 'chai';
import { describe, it } from 'vitest';

describe('KindProperty', () => {
    it('is a class', () => {
        expect(KindProperty).to.be.a('class');
    });

    describe('#toString()', () => {
        it('is a method', () => {
            expect(KindProperty.prototype.toString).to.be.a('function');
        });

        it('returns a string', () => {
            const kind = new KindProperty('individual');

            expect(kind.toString()).to.be.a('string');
        });

        it('returns the proper string format', () => {
            const kind = new KindProperty('individual');

            expect(kind.toString()).to.equal('KIND:individual');
        });

        it('correctly groups the property', () => {
            const parameters = undefined;
            const value = 'application';
            const options = { group: 1 };
            const kind = new KindProperty(value, parameters, options);

            expect(kind.toString()).to.equal(`1.KIND:${value}`);
        });

        it('accepts a "text" value parameter', () => {
            const parameters = { value: 'text' as const };
            const value = 'application';
            const kind = new KindProperty(value, parameters);

            expect(kind.toString()).to.equal(`KIND;VALUE=text:${value}`);
        });
    });

    describe('#valueOf()', () => {
        it('is a method', () => {
            expect(KindProperty.prototype.valueOf).to.be.a('function');
        });

        it('returns a string', () => {
            const kind = new KindProperty('individual');

            expect(kind.valueOf()).to.be.a('string');
        });

        it('returns the same value passed to it', () => {
            const value = 'individual';
            const kind = new KindProperty(value);

            expect(kind.valueOf()).to.equal(value);
        });
    });

    describe('.from()', () => {
        it('is a static method', () => {
            expect(KindProperty.from).to.be.a('function');
        });

        it('returns an instance of `KindProperty`', () => {
            const kind = KindProperty.from('application');

            expect(kind instanceof KindProperty).to.equal(true);
        });

        it('returns an instance if provided one as an argument', () => {
            const kind = new KindProperty('application');

            expect(KindProperty.from(kind) instanceof KindProperty).to.equal(true);
        });

        it('creates an instance from a string value argument', () => {
            const kind = KindProperty.from('application');

            expect(kind instanceof KindProperty).to.equal(true);
        });

        it('creates an instance from an array argument', () => {
            const value = 'application';
            const config: KindRestConfig = [value, { value: 'text' }];
            const kind = KindProperty.from(config);

            expect(kind instanceof KindProperty).to.equal(true);
        });
    });
});
