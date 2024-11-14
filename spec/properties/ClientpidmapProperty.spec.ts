import ClientpidmapProperty, {
    type ClientpidmapRestConfig
} from '../../src/properties/ClientpidmapProperty.js';
import { expect } from 'chai';
import { describe, it } from 'vitest';

describe('ClientpidmapProperty', () => {
    it('is a class', () => {
        expect(ClientpidmapProperty).to.be.a('class');
    });

    describe('#toString()', () => {
        it('is a method', () => {
            expect(ClientpidmapProperty.prototype.toString).to.be.a('function');
        });

        it('returns a string', () => {
            const clientpidmap = new ClientpidmapProperty('1;urn:uuid:3df403f4-5924-4bb7-b077-3c711d9eb34b');

            expect(clientpidmap.toString()).to.be.a('string');
        });

        it('returns the proper string format', () => {
            const value = '1;urn:uuid:3df403f4-5924-4bb7-b077-3c711d9eb34b';
            const clientpidmap = new ClientpidmapProperty(value);

            expect(clientpidmap.toString()).to.equal(`CLIENTPIDMAP:${value}`);
        });

        it('accepts an object argument to the constructor', () => {
            const value = '1;urn:uuid:3df403f4-5924-4bb7-b077-3c711d9eb34b';
            const clientpidmap = new ClientpidmapProperty(value);
            const actual = clientpidmap.toString();
            const expected = `CLIENTPIDMAP:${value}`;

            expect(actual).to.equal(expected);
        });

        it('correctly groups the property', () => {
            const parameters = undefined;
            const value = '1;urn:uuid:3df403f4-5924-4bb7-b077-3c711d9eb34b';
            const options = { group: 1 };
            const clientpidmap = new ClientpidmapProperty(value, parameters, options);

            expect(clientpidmap.toString()).to.equal(`1.CLIENTPIDMAP:${value}`);
        });
    });

    describe('#valueOf()', () => {
        it('is a method', () => {
            expect(ClientpidmapProperty.prototype.valueOf).to.be.a('function');
        });

        it('returns a string', () => {
            const clientpidmap = new ClientpidmapProperty('...');

            expect(clientpidmap.valueOf()).to.be.a('string');
        });

        it('returns the same value passed to it', () => {
            const value = '...';
            const clientpidmap = new ClientpidmapProperty(value);

            expect(clientpidmap.valueOf()).to.equal(value);
        });
    });

    describe('.from()', () => {
        it('is a static method', () => {
            expect(ClientpidmapProperty.from).to.be.a('function');
        });

        it('returns an instance of `ClientpidmapProperty`', () => {
            const clientpidmap = ClientpidmapProperty.from('1;urn:uuid:3df403f4-5924-4bb7-b077-3c711d9eb34b');

            expect(clientpidmap instanceof ClientpidmapProperty).to.equal(true);
        });

        it('returns an instance if provided one as an argument', () => {
            const clientpidmap = new ClientpidmapProperty('1;urn:uuid:3df403f4-5924-4bb7-b077-3c711d9eb34b');

            expect(ClientpidmapProperty.from(clientpidmap) instanceof ClientpidmapProperty).to.equal(true);
        });

        it('creates an instance from a string value argument', () => {
            const clientpidmap = ClientpidmapProperty.from('1;urn:uuid:3df403f4-5924-4bb7-b077-3c711d9eb34b');

            expect(clientpidmap instanceof ClientpidmapProperty).to.equal(true);
        });

        it('creates an instance from an array argument', () => {
            const value = '1;urn:uuid:3df403f4-5924-4bb7-b077-3c711d9eb34b';
            const config: ClientpidmapRestConfig = [value, {}];
            const clientpidmap = ClientpidmapProperty.from(config);

            expect(clientpidmap instanceof ClientpidmapProperty).to.equal(true);
        });
    });
});
