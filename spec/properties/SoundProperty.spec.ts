import SoundProperty, { type SoundRestConfig } from '../../src/properties/SoundProperty.js';
import { expect } from 'chai';
import { describe, it } from 'vitest';

describe('SoundProperty', () => {
    it('is a class', () => {
        expect(SoundProperty).to.be.a('class');
    });

    describe('#toString()', () => {
        it('is a method', () => {
            expect(SoundProperty.prototype.toString).to.be.a('function');
        });

        it('returns a string', () => {
            const value = 'CID:JOHNQPUBLIC.part8.19960229T080000.xyzMail@example.com';
            const sound = new SoundProperty(value);

            expect(sound.toString()).to.be.a('string');
        });

        it('returns the proper string format', () => {
            const value = 'CID:JOHNQPUBLIC.part8.19960229T080000.xyzMail@example.com';
            const sound = new SoundProperty(value);

            expect(sound.toString()).to.equal(`SOUND:${value}`);
        });

        it('correctly returns parameters', () => {
            const parameters = { type: 'home' as const };
            const value = 'CID:JOHNQPUBLIC.part8.19960229T080000.xyzMail@example.com';
            const sound = new SoundProperty(value, parameters);
            const actual = sound.toString();
            const expected = `SOUND;TYPE=home:${value}`;

            expect(actual).to.equal(expected);
        });

        it('correctly groups the property', () => {
            const parameters = undefined;
            const value = 'CID:JOHNQPUBLIC.part8.19960229T080000.xyzMail@example.com';
            const options = { group: 1 };
            const sound = new SoundProperty(value, parameters, options);

            expect(sound.toString()).to.equal(`1.SOUND:${value}`);
        });

        it('accepts a "uri" value parameter', () => {
            const parameters = { value: 'uri' as const };
            const value = 'CID:JOHNQPUBLIC.part8.19960229T080000.xyzMail@example.com';
            const sound = new SoundProperty(value, parameters);

            expect(sound.toString()).to.equal(`SOUND;VALUE=uri:${value}`);
        });
    });

    describe('#valueOf()', () => {
        it('is a method', () => {
            expect(SoundProperty.prototype.valueOf).to.be.a('function');
        });

        it('returns a string', () => {
            const value = 'CID:JOHNQPUBLIC.part8.19960229T080000.xyzMail@example.com';
            const sound = new SoundProperty(value);

            expect(sound.valueOf()).to.be.a('string');
        });

        it('returns the same value passed to it', () => {
            const value = 'CID:JOHNQPUBLIC.part8.19960229T080000.xyzMail@example.com';
            const sound = new SoundProperty(value);

            expect(sound.valueOf()).to.equal(value);
        });
    });

    describe('.from()', () => {
        it('is a static method', () => {
            expect(SoundProperty.from).to.be.a('function');
        });

        it('returns an instance of `SoundProperty`', () => {
            const value = 'CID:JOHNQPUBLIC.part8.19960229T080000.xyzMail@example.com';
            const sound = SoundProperty.from(value);

            expect(sound instanceof SoundProperty).to.equal(true);
        });

        it('returns an instance if provided one as an argument', () => {
            const value = 'CID:JOHNQPUBLIC.part8.19960229T080000.xyzMail@example.com';
            const sound = new SoundProperty(value);

            expect(SoundProperty.from(sound)).to.equal(sound);
        });

        it('creates an instance from a string value argument', () => {
            const value = 'CID:JOHNQPUBLIC.part8.19960229T080000.xyzMail@example.com';
            const sound = SoundProperty.from(value);

            expect(sound instanceof SoundProperty).to.equal(true);
        });

        it('creates an instance from an array argument', () => {
            const value = 'CID:JOHNQPUBLIC.part8.19960229T080000.xyzMail@example.com';
            const config: SoundRestConfig = [value, { type: 'home' }];
            const sound = SoundProperty.from(config);

            expect(sound instanceof SoundProperty).to.equal(true);
        });
    });
});
