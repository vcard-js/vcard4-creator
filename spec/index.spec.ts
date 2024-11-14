import Vcard4Generator from '../src/index.js';
import type { EmailRestConfig } from '../src/properties/EmailProperty.js';
import { EOL } from '@vcard/vcard4-meta';
import { expect } from 'chai';
import { describe, it } from 'vitest';

describe('Vcard4Generator', () => {
    it('is a class', () => {
        expect(Vcard4Generator).to.be.a('class');
    });

    describe('#toString()', () => {
        it('is a method', () => {
            expect(Vcard4Generator.prototype.toString).to.be.a('function');
        });

        it('returns the proper string format', () => {
            const fn = 'Bella';
            const vcard = new Vcard4Generator({ fn });
            const actual = vcard.toString();
            const expected = [
                'BEGIN:VCARD',
                'VERSION:4.0',
                `FN:${fn}`,
                'END:VCARD'
            ].join(EOL);

            expect(actual).to.equal(expected);
        });

        describe('when passed a minimal vCard with a ADR property', () => {
            it('returns the proper string format', () => {
                const fn = 'Example McExampleton';
                const adr = ';;1234 Acme Rd.;Sometown;OH;43204;United States of America';
                const vcard = new Vcard4Generator({ adr, fn });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `ADR:${adr}`,
                    `FN:${fn}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a ANNIVERSARY property', () => {
            it('returns the proper string format', () => {
                const fn = 'Example McExampleton';
                const anniversary = '19960415';
                const vcard = new Vcard4Generator({ anniversary, fn });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `ANNIVERSARY:${anniversary}`,
                    `FN:${fn}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a BDAY property', () => {
            it('returns the proper string format', () => {
                const fn = 'Example McExampleton';
                const bday = '19960415';
                const vcard = new Vcard4Generator({ bday, fn });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `BDAY:${bday}`,
                    `FN:${fn}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a BIRTHPLACE property', () => {
            it('returns the proper string format', () => {
                const fn = 'Example McExampleton';
                const birthplace = `Babies'R'Us Hospital`;
                const vcard = new Vcard4Generator({ birthplace, fn });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `BIRTHPLACE:${birthplace}`,
                    `FN:${fn}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a CALURI property', () => {
            it('returns the proper string format', () => {
                const fn = 'Example McExampleton';
                const caluri = 'http://cal.example.com/calA';
                const vcard = new Vcard4Generator({ caluri, fn });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `CALURI:${caluri}`,
                    `FN:${fn}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a CALADRURI property', () => {
            it('returns the proper string format', () => {
                const fn = 'J. Doe';
                const caladruri = 'http://example.com/calendar/jdoe';
                const vcard = new Vcard4Generator({ caladruri, fn });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `CALADRURI:${caladruri}`,
                    `FN:${fn}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a CATEGORIES property', () => {
            it('returns the proper string format', () => {
                const fn = 'J. Doe';
                const categories = 'INTERNET,IETF,INDUSTRY,INFORMATION TECHNOLOGY';
                const vcard = new Vcard4Generator({ categories, fn });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    'CATEGORIES:INTERNET\\,IETF\\,INDUSTRY\\,INFORMATION TECHNOLOGY',
                    `FN:${fn}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a CLIENTPIDMAP property', () => {
            it('returns the proper string format', () => {
                const fn = 'J. Doe';
                const email: EmailRestConfig = ['jdoe@example.com', { pid: [4.1, 5.2] }];
                const clientpidmap = '2;urn:uuid:d89c9c7a-2e1b-4832-82de-7e992d95faa5';
                const vcard = new Vcard4Generator({ clientpidmap, email, fn });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `CLIENTPIDMAP:${clientpidmap}`,
                    `EMAIL;PID="4.1,5.2":${email.at(0)}`,
                    `FN:${fn}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a CONTACT-URI property', () => {
            it('returns the proper string format', () => {
                const fn = 'J. Doe';
                const contactUri = 'https://contact.example.com';
                const vcard = new Vcard4Generator({ contactUri, fn });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `CONTACT-URI:${contactUri}`,
                    `FN:${fn}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a DEATHDATE property', () => {
            it('returns the proper string format', () => {
                const fn = 'J. Doe';
                const deathdate = '19960415';
                const vcard = new Vcard4Generator({ deathdate, fn });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `DEATHDATE:${deathdate}`,
                    `FN:${fn}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a DEATHPLACE property', () => {
            it('returns the proper string format', () => {
                const fn = 'J. Doe';
                const deathplace = 'Aboard the Titanic, near Newfoundland';
                const escapedDeathplace = 'Aboard the Titanic\\, near Newfoundland';
                const vcard = new Vcard4Generator({ deathplace, fn });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `DEATHPLACE:${escapedDeathplace}`,
                    `FN:${fn}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a EMAIL property', () => {
            it('returns the proper string format', () => {
                const fn = 'Example McExampleton';
                const email = 'hello@example.com';
                const vcard = new Vcard4Generator({ email, fn });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `EMAIL:${email}`,
                    `FN:${fn}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a EXPERTISE property', () => {
            it('returns the proper string format', () => {
                const fn = 'Example McExampleton';
                const expertise = 'video games';
                const vcard = new Vcard4Generator({ expertise, fn });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `EXPERTISE:${expertise}`,
                    `FN:${fn}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a FBURL property', () => {
            it('returns the proper string format', () => {
                const fn = 'Jane Doe';
                const fburl = 'http://www.example.com/busy/janedoe';
                const vcard = new Vcard4Generator({ fburl, fn });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FBURL:${fburl}`,
                    `FN:${fn}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a GEO property', () => {
            it('returns the proper string format', () => {
                const geo = 'geo:37.386013,-122.082932';
                const fn = 'Jane Doe';
                const vcard = new Vcard4Generator({ fn, geo });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FN:${fn}`,
                    `GEO:geo:37.386013\\,-122.082932`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a HOBBY property', () => {
            it('returns the proper string format', () => {
                const hobby = 'reading';
                const fn = 'Jane Doe';
                const vcard = new Vcard4Generator({ fn, hobby });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FN:${fn}`,
                    `HOBBY:${hobby}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a IMPP property', () => {
            it('returns the proper string format', () => {
                const impp = 'xmpp:alice@example.com';
                const fn = 'Alice Example';
                const vcard = new Vcard4Generator({ fn, impp });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FN:${fn}`,
                    `IMPP:${impp}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a INTEREST property', () => {
            it('returns the proper string format', () => {
                const interest = `rock 'n' roll music`;
                const fn = 'Alice Example';
                const vcard = new Vcard4Generator({ fn, interest });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FN:${fn}`,
                    `INTEREST:${interest}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a KEY property', () => {
            it('returns the proper string format', () => {
                const fn = 'J. Doe';
                const key = 'http://www.example.com/keys/jdoe.cer';
                const vcard = new Vcard4Generator({ fn, key });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FN:${fn}`,
                    `KEY:${key}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a LANG property', () => {
            it('returns the proper string format', () => {
                const fn = 'J. Doe';
                const lang = 'en';
                const vcard = new Vcard4Generator({ fn, lang });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FN:${fn}`,
                    `LANG:${lang}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a LOGO property', () => {
            it('returns the proper string format', () => {
                const fn = 'J. Doe';
                const logo = 'http://www.example.com/pub/logos/abccorp.jpg';
                const vcard = new Vcard4Generator({ fn, logo });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FN:${fn}`,
                    `LOGO:${logo}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a MEMBER property', () => {
            it('returns the proper string format', () => {
                const fn = 'Funky distribution list';
                const kind = 'group';
                const member = 'mailto:subscriber1@example.com';
                const vcard = new Vcard4Generator({ fn, kind, member });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FN:${fn}`,
                    `KIND:${kind}`,
                    `MEMBER:${member}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a NICKNAME property', () => {
            it('returns the proper string format', () => {
                const fn = 'Bobby Tables';
                const nickname = 'Little Bobby Tables';
                const vcard = new Vcard4Generator({ fn, nickname });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FN:${fn}`,
                    `NICKNAME:${nickname}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a NOTE property', () => {
            it('returns the proper string format', () => {
                const fn = 'J. Doe';
                const note = 'Available Mon-Fri.';
                const vcard = new Vcard4Generator({ fn, note });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FN:${fn}`,
                    `NOTE:${note}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a ORG property', () => {
            it('returns the proper string format', () => {
                const fn = 'J. Doe';
                const org = 'Acme Inc.';
                const vcard = new Vcard4Generator({ fn, org });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FN:${fn}`,
                    `ORG:${org}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a ORG-DIRECTORY property', () => {
            it('returns the proper string format', () => {
                const fn = 'J. Doe';
                const orgDirectory = 'http://directory.mycompany.example.com';
                const vcard = new Vcard4Generator({ fn, orgDirectory });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FN:${fn}`,
                    `ORG-DIRECTORY:${orgDirectory}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a PHOTO property', () => {
            it('returns the proper string format', () => {
                const fn = 'J. Q. Public';
                const photo = 'http://www.example.com/pub/photos/jqpublic.gif';
                const vcard = new Vcard4Generator({ fn, photo });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FN:${fn}`,
                    `PHOTO:${photo}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a PRODID property', () => {
            it('returns the proper string format', () => {
                const fn = 'J. Doe';
                const prodid = '-//ONLINE DIRECTORY//NONSGML Version 1//EN';
                const vcard = new Vcard4Generator({ fn, prodid });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FN:${fn}`,
                    `PRODID:${prodid}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a RELATED property', () => {
            it('returns the proper string format', () => {
                const fn = 'J. Doe';
                const related = 'urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6';
                const vcard = new Vcard4Generator({ fn, related });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FN:${fn}`,
                    `RELATED:${related}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a REV property', () => {
            it('returns the proper string format', () => {
                const fn = 'J. Doe';
                const rev = '19951031T222710Z';
                const vcard = new Vcard4Generator({ fn, rev });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FN:${fn}`,
                    `REV:${rev}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a ROLE property', () => {
            it('returns the proper string format', () => {
                const fn = 'J. Doe';
                const role = 'Project Leader';
                const vcard = new Vcard4Generator({ fn, role });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FN:${fn}`,
                    `ROLE:${role}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a SOUND property', () => {
            it('returns the proper string format', () => {
                const fn = 'John Q. Public';
                const sound = 'CID:JOHNQPUBLIC.part8.19960229T080000.xyzMail@example.com';
                const vcard = new Vcard4Generator({ fn, sound });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FN:${fn}`,
                    `SOUND:${sound}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a SOURCE property', () => {
            it('returns the proper string format', () => {
                const fn = 'Babs Jensen';
                const source = 'ldap://ldap.example.com/cn=Babs%20Jensen,%20o=Babsco,%20c=US';
                const vcard = new Vcard4Generator({ fn, source });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FN:${fn}`,
                    'SOURCE:ldap://ldap.example.com/cn=Babs%20Jensen\\,%20o=Babsco\\,%20c=US',
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a TEL property', () => {
            it('returns the proper string format', () => {
                const fn = 'J. Doe';
                const tel = '+1-555-555-5555';
                const vcard = new Vcard4Generator({ fn, tel });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FN:${fn}`,
                    `TEL:${tel}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a TITLE property', () => {
            it('returns the proper string format', () => {
                const fn = 'Captain Awesome';
                const title = 'Rockstar';
                const vcard = new Vcard4Generator({ fn, title });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FN:${fn}`,
                    `TITLE:${title}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a TZ property', () => {
            it('returns the proper string format', () => {
                const fn = 'Captain Awesome';
                const tz = 'Raleigh/North America';
                const vcard = new Vcard4Generator({ fn, tz });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FN:${fn}`,
                    `TZ:${tz}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a UID property', () => {
            it('returns the proper string format', () => {
                const fn = 'J. Doe';
                const uid = 'urn:uuid:f81d4fae-7dec-11d0-a765-00a0c91e6bf6';
                const vcard = new Vcard4Generator({ fn, uid });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FN:${fn}`,
                    `UID:${uid}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a URL property', () => {
            it('returns the proper string format', () => {
                const fn = 'Captain Awesome';
                const url = 'http://www.example.com/';
                const vcard = new Vcard4Generator({ fn, url });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FN:${fn}`,
                    `URL:${url}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });

        describe('when passed a minimal vCard with a XML property', () => {
            it('returns the proper string format', () => {
                const fn = 'Captain Awesome';
                const xml = '<a xmlns="http://www.w3.org/1999/xhtml" href="http://www.example.com">My web page!</a>';
                const foldedXml = [
                    '<a xmlns="http://www.w3.org/1999/xhtml" href="http://www.example.com">M',
                    ' y web page!</a>'
                ].join(EOL);
                const vcard = new Vcard4Generator({ fn, xml });
                const actual = vcard.toString();
                const expected = [
                    'BEGIN:VCARD',
                    'VERSION:4.0',
                    `FN:${fn}`,
                    `XML:${foldedXml}`,
                    'END:VCARD'
                ].join(EOL);

                expect(actual).to.equal(expected);
            });
        });
    });
});
