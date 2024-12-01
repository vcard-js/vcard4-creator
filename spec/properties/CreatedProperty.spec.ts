import CreatedProperty, { type CreatedRestConfig } from '../../src/properties/CreatedProperty.js';
import { expect } from 'chai';
import { describe, it } from 'vitest';

describe('CreatedProperty', () => {
    it('is a class', () => {
        expect(CreatedProperty).to.be.a('class');
    });

    describe('#toString()', () => {
        it('is a method', () => {
            expect(CreatedProperty.prototype.toString).to.be.a('function');
        });

        it('returns a string', () => {
            const created = new CreatedProperty('20220705T093412Z');

            expect(created.toString()).to.be.a('string');
        });

        it('returns the proper string format', () => {
            const value = '20220705T093412Z';
            const created = new CreatedProperty(value);

            expect(created.toString()).to.equal(`CREATED:${value}`);
        });

        it('correctly returns parameters', () => {
            const parameters = { value: 'timestamp' } as const;
            const value = '20211022T140000-05';
            const created = new CreatedProperty(value, parameters);
            const actual = created.toString();
            const expected = `CREATED;VALUE=timestamp:${value}`;

            expect(actual).to.equal(expected);
        });
    });

    describe('#valueOf()', () => {
        it('is a method', () => {
            expect(CreatedProperty.prototype.valueOf).to.be.a('function');
        });

        it('returns a string', () => {
            const created = new CreatedProperty('20220705T093412Z');

            expect(created.valueOf()).to.be.a('string');
        });

        it('returns the same value passed to it', () => {
            const value = '20220705T093412Z';
            const created = new CreatedProperty(value);

            expect(created.valueOf()).to.equal(value);
        });
    });

    describe('.from()', () => {
        it('is a static method', () => {
            expect(CreatedProperty.from).to.be.a('function');
        });

        it('returns an instance of `CreatedProperty`', () => {
            const created = CreatedProperty.from('20220705T093412Z');

            expect(created instanceof CreatedProperty).to.equal(true);
        });

        it('returns an instance if provided one as an argument', () => {
            const created = new CreatedProperty('20220705T093412Z');

            expect(CreatedProperty.from(created)).to.equal(created);
        });

        it('creates an instance from a string value argument', () => {
            const created = CreatedProperty.from('20220705T093412Z');

            expect(created instanceof CreatedProperty).to.equal(true);
        });

        it('creates an instance from an array argument', () => {
            const value = '20211022T140000-05';
            const config: CreatedRestConfig = [value, { value: 'timestamp' }] as const;
            const created = CreatedProperty.from(config);

            expect(created instanceof CreatedProperty).to.equal(true);
        });
    });
});
