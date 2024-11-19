import type { Altid, Cardinality, CommonParameters, Group, Options, Pid, Pref, PropId, Value } from '../types.js';
import {
    getInvalidPidParameterMessage,
    getInvalidPrefParameterMessage,
    getInvalidPropIdParameterMessage
} from '../util/error-messages.js';
import isString from '../util/is-string.js';
import isValidGroup from '../util/is-valid-group.js';
import isValidPidParameter from '../util/is-valid-pid-parameter.js';
import isValidPrefParameter from '../util/is-valid-pref-parameter.js';
import isValidPropIdParameter from '../util/is-valid-prop-id-parameter.js';
import Property from './Property.js';

export type MemberParameters = {
    value?: Extract<Value, 'uri'>;
    pid?: Pid;
    pref?: Pref;
    altid?: Altid;
    mediatype?: string;
    propId?: PropId;
} & CommonParameters;

export type MemberRestConfig = [value: string, parameters?: MemberParameters, options?: Options];

export type MemberConfig = MemberProperty | MemberRestConfig | string;

const VALUE: unique symbol = Symbol.for('value');

/**
 * > Purpose:  To include a member in the group this vCard represents.
 * >
 * > Value type:  A single URI. It MAY refer to something other than a
 * >   vCard object. For example, an email distribution list could
 * >   employ the "mailto" URI scheme [RFC6068] for efficiency.
 * >
 * > Special notes:  This property MUST NOT be present unless the value of
 * >   the KIND property is "group".
 * >
 * > ABNF:
 * >   MEMBER-param = "VALUE=uri" / pid-param / pref-param / altid-param
 * >                / mediatype-param / any-param
 * >   MEMBER-value = URI
 * >
 * > Examples:
 * >   BEGIN:VCARD
 * >   VERSION:4.0
 * >   KIND:group
 * >   FN:The Doe family
 * >   MEMBER:urn:uuid:03a0e51f-d1aa-4385-8a53-e29025acd8af
 * >   MEMBER:urn:uuid:b8767877-b4a1-4c70-9acc-505d3819e519
 * >   END:VCARD
 * >   BEGIN:VCARD
 * >   VERSION:4.0
 * >   FN:John Doe
 * >   UID:urn:uuid:03a0e51f-d1aa-4385-8a53-e29025acd8af
 * >   END:VCARD
 * >   BEGIN:VCARD
 * >   VERSION:4.0
 * >   FN:Jane Doe
 * >   UID:urn:uuid:b8767877-b4a1-4c70-9acc-505d3819e519
 * >   END:VCARD
 * >
 * >   BEGIN:VCARD
 * >   VERSION:4.0
 * >   KIND:group
 * >   FN:Funky distribution list
 * >   MEMBER:mailto:subscriber1@example.com
 * >   MEMBER:xmpp:subscriber2@example.com
 * >   MEMBER:sip:subscriber3@example.com
 * >   MEMBER:tel:+1-418-555-5555
 * >   END:VCARD
 *
 * @see {@link https://datatracker.ietf.org/doc/html/rfc6350#section-6.6.5 RFC 6350 - vCard Format Specification § MEMBER}
 */
export default class MemberProperty extends Property {
    static readonly CARDINALITY: Cardinality = '*'; // One or more instances per vCard MAY be present.

    static readonly DEFAULT_VALUE_TYPE: Value = 'uri';

    group: Group;

    parameters: MemberParameters = {};

    [VALUE]: string;

    constructor(value: string, parameters: MemberParameters = {}, { group = '' }: Options = {}) {
        super();

        if (!isString(value))
            throw new TypeError(`The value "${value}" is not a string type`);

        if (!isValidGroup(group))
            throw new TypeError(`The group "${group}" is not a string or integer`);

        MemberProperty.validateParameters(parameters);

        this.group = group;
        this.parameters = parameters;
        this[VALUE] = value;
    }

    valueOf(): string {
        return this[VALUE];
    }

    static from(value: MemberConfig): MemberProperty {
        if (value instanceof MemberProperty) return value;

        if (Array.isArray(value)) return new MemberProperty(...value);

        if (isString(value)) return new MemberProperty(value);

        throw new TypeError(`The value "${value}" is not a MemberConfig type`);
    }

    static validateParameters({ pid, pref, propId }: MemberParameters): void {
        if (pid !== undefined && !isValidPidParameter(pid)) {
            throw new TypeError(getInvalidPidParameterMessage({ pid }));
        }

        if (pref !== undefined && !isValidPrefParameter(pref)) {
            throw new TypeError(getInvalidPrefParameterMessage({ pref }));
        }

        if (propId !== undefined && !isValidPropIdParameter(propId)) {
            throw new TypeError(getInvalidPropIdParameterMessage({ propId }));
        }
    }
}
